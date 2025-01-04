const request = require('supertest');
const express = require('express');
const router = require('./patient');
const Patient = require('../models/patient');

// express-backend/src/routes/patient.test.js

const app = express();
app.use(express.json());
app.use('/api', router);

jest.mock('../models/patient');

describe('Patient API', () => {
  let mockPatient;

  beforeEach(() => {
    mockPatient = {
      _id: '507f191e810c19729de860ea',
      name: 'John Doe',
      age: 30,
      phone: '1234567890',
      email: 'john.doe@example.com',
      diagnosis: 'Flu',
      registeredDate: new Date()
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('GET /api/patients should return all patients', async () => {
    Patient.find.mockResolvedValue([mockPatient]);
    const response = await request(app).get('/api/patients');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([mockPatient]);
  });

  test('GET /api/patients/:id should return a patient by ID', async () => {
    Patient.findById.mockResolvedValue(mockPatient);
    const response = await request(app).get(`/api/patients/${mockPatient._id}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockPatient);
  });

  test('POST /api/patients should create a new patient', async () => {
    Patient.prototype.save.mockResolvedValue(mockPatient);
    const response = await request(app)
      .post('/api/patients')
      .send(mockPatient);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(mockPatient);
  });

  test('PATCH /api/patients/:id should update a patient by ID', async () => {
    const updatedPatient = { ...mockPatient, name: 'Jane Doe' };
    Patient.findById.mockResolvedValue(mockPatient);
    Patient.prototype.save.mockResolvedValue(updatedPatient);
    const response = await request(app)
      .patch(`/api/patients/${mockPatient._id}`)
      .send({ name: 'Jane Doe' });
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Jane Doe');
  });

  test('DELETE /api/patients/:id should delete a patient by ID', async () => {
    Patient.findById.mockResolvedValue(mockPatient);
    Patient.prototype.remove.mockResolvedValue();
    const response = await request(app).delete(`/api/patients/${mockPatient._id}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Deleted patient');
  });
});