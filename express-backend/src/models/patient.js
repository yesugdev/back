const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  registerNumber: {
    type: String,
    required: [true, 'Регистрийн дугаар оруулна уу'],
    unique: true,
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Овог оруулна уу'],
    trim: true
  },
  firstName: {
    type: String, 
    required: [true, 'Нэр оруулна уу'],
    trim: true
  },
  age: {
    type: Number,
    required: [true, 'Нас оруулна уу'],
    min: 0,
    max: 120
  },
  gender: {
    type: String,
    required: [true, 'Хүйс сонгоно уу'],
    enum: ['эр', 'эм']
  },
  status: {
    type: String,
    required: [true, 'Үзлэгийн төрөл сонгоно уу'],
    enum: ['Анхан үзлэг', 'Давтан үзлэг', 'Хяналтын үзлэг']
  },
  appointmentTime: {
    type: String,
    required: [true, 'Цаг оруулна уу'],
    match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Зөв цаг оруулна уу (HH:MM)']
  },
  phone: {
    type: String,
    required: [true, 'Утасны дугаар оруулна уу'],
    match: [/^\d{8}$/, 'Зөв утасны дугаар оруулна уу']
  },
  address: {
    type: String,
    required: [true, 'Хаяг оруулна уу'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'И-мэйл хаяг оруулна уу'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Зөв и-мэйл хаяг оруулна уу']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Patient', patientSchema);