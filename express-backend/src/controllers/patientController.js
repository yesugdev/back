const Patient = require('../models/patient');

// Get all patients with pagination and filters
exports.getPatients = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Add search/filter functionality
    const filter = {};
    if (req.query.search) {
      filter.$or = [
        { firstName: { $regex: req.query.search, $options: 'i' } },
        { lastName: { $regex: req.query.search, $options: 'i' } },
        { registerNumber: { $regex: req.query.search, $options: 'i' } }
      ];
    }

    const patients = await Patient.find(filter)
      .sort({ appointmentTime: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Patient.countDocuments(filter);

    res.status(200).json({
      success: true,
      count: patients.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      data: patients
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Серверийн алдаа гарлаа'
    });
  }
};

// Get single patient
exports.getPatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({
        success: false,
        error: 'Өвчтөн олдсонгүй'
      });
    }
    res.status(200).json({
      success: true,
      data: patient
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Серверийн алдаа гарлаа'
    });
  }
};

// Add patient
exports.addPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json({
      success: true,
      data: patient
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      res.status(400).json({
        success: false,
        error: messages
      });
    } else if (error.code === 11000) {
      res.status(400).json({
        success: false,
        error: 'Бүртгэлтэй өвчтөн байна'
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Серверийн алдаа гарлаа'
      });
    }
  }
};

// Update patient
exports.updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    if (!patient) {
      return res.status(404).json({
        success: false,
        error: 'Өвчтөн олдсонгүй'
      });
    }
    res.status(200).json({
      success: true,
      data: patient
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Серверийн алдаа гарлаа'
      });
    }
  }
};

// Delete patient
exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({
        success: false,
        error: 'Өвчтөн олдсонгүй'
      });
    }
    await patient.deleteOne();
    res.status(200).json({
      success: true,
      message: 'Өвчтөн амжилттай устгагдлаа'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Серверийн алдаа гарлаа'
    });
  }
};