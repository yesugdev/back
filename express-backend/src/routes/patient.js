const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');

// Validation middleware
const validatePatient = (req, res, next) => {
  const { registerNumber, lastName, firstName, age, gender, status, appointmentTime, phone, address, email } = req.body;
  
  if (!registerNumber || !lastName || !firstName || !age || !gender || !status || !appointmentTime || !phone || !address || !email) {
    return res.status(400).json({ message: 'Бүх талбарыг бөглөнө үү' });
  }
  next();
};

// GET all patients with pagination and search
router.get('/patients', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const search = req.query.search;

    let query = {};
    if (search) {
      query = {
        $or: [
          { registerNumber: { $regex: search, $options: 'i' } },
          { lastName: { $regex: search, $options: 'i' } },
          { firstName: { $regex: search, $options: 'i' } },
          { phone: { $regex: search, $options: 'i' } }
        ]
      };
    }

    const patients = await Patient.find(query)
      .sort({ appointmentTime: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Patient.countDocuments(query);

    res.json({
      success: true,
      data: patients,
      page,
      totalPages: Math.ceil(total / limit),
      total
    });
  } catch (err) {
    res.status(500).json({ 
      success: false,
      message: 'Серверийн алдаа гарлаа'
    });
  }
});

// GET a patient by ID
router.get('/patients/:id', async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: 'Өвчтөн олдсонгүй' });
    }
    res.json(patient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new patient with validation
router.post('/patients', validatePatient, async (req, res) => {
  try {
    const patient = new Patient({
      registerNumber: req.body.registerNumber,
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      age: req.body.age,
      gender: req.body.gender,
      status: req.body.status,
      appointmentTime: req.body.appointmentTime,
      phone: req.body.phone,
      address: req.body.address,
      email: req.body.email
    });

    const newPatient = await patient.save();
    res.status(201).json({
      success: true,
      data: newPatient
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Бүртгэлтэй өвчтөн байна'
      });
    }
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
});

// PATCH update patient
router.patch('/patients/:id', async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: 'Өвчтөн олдсонгүй' });
    }

    const updates = [
      'registerNumber', 'lastName', 'firstName', 'age',
      'gender', 'status', 'appointmentTime', 'phone', 'address'
    ];
    
    updates.forEach(update => {
      if (req.body[update] != null) {
        patient[update] = req.body[update];
      }
    });

    const updatedPatient = await patient.save();
    res.json(updatedPatient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE patient
router.delete('/patients/:id', async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: 'Өвчтөн олдсонгүй' });
    }

    await patient.deleteOne();
    res.json({ message: 'Өвчтөн устгагдлаа' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;