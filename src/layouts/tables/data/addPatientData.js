import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import {
  Modal,
  Box,
  Stack,
  TextField,
  Button,
  Select,
  MenuItem,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  InputLabel,
  Typography,
  CircularProgress
} from "@mui/material";
import SoftTypography from "components/SoftTypography";
import { ExamStatus } from "layouts/tables/data/authorsTableData";

const STATUS_OPTIONS = [
  { value: "Анхан үзлэг", label: "Анхан үзлэг" },
  { value: "Давтан үзлэг", label: "Давтан үзлэг" },
  { value: "Хяналтын үзлэг", label: "Хяналтын үзлэг" }
];

const INITIAL_STATE = {
  registerNumber: "",
  lastName: "",
  firstName: "",
  age: "",
  gender: "эр",
  status: "Анхан үзлэг",
  appointmentTime: "",
  phone: "",
  address: "",
  email: ""  // Add email field
};

const validateField = (name, value) => {
  switch (name) {
    case 'firstName':
    case 'lastName':
      return value.trim() ? '' : 'Энэ талбар заавал бөглөнө үү';
    case 'age':
      return /^\d+$/.test(value) ? '' : 'Зөвхөн тоо оруулна уу';
    case 'phone':
      return /^\d{8}$/.test(value) ? '' : 'Зөв утасны дугаар оруулна уу';
    case 'time':
      return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value) ? '' : 'Зөв цаг оруулна уу (HH:MM)';
    default:
      return '';
  }
};

// Color scheme constants
const COLORS = {
  primary: '#2196f3', // Blue
  secondary: '#ff4081', // Pink
  text: {
    primary: '#1a237e', // Dark blue
    secondary: '#424242', // Dark grey
  },
  status: {
    new: '#4caf50', // Green
    repeat: '#ff9800', // Orange
    control: '#9c27b0' // Purple
  }
};

// Add these font size const ants
const FONT_SIZES = {
  xxsmall: '0.625rem',  // 10px
  xsmall: '0.75rem',    // 12px
  small: '0.875rem',    // 14px
  medium: '1rem',       // 16px
  large: '1.25rem',     // 20px
  xlarge: '1.5rem',     // 24px
};

const AddPatientData = memo(({ open, onClose, onSave, isLoading = false }) => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (isLoading) return;

      // Format data to match MongoDB schema
      const patientData = {
        name: `${formData.lastName} ${formData.firstName}`, // Combine for name field
        registerNumber: formData.registerNumber,
        age: parseInt(formData.age),
        gender: formData.gender,
        diagnosis: formData.status, // Map status to diagnosis
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        appointmentTime: formData.appointmentTime
      };

      const response = await fetch('http://localhost:5000/api/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Server error:', errorData); // Debug log
        throw new Error(errorData.message || 'Failed to save patient');
      }

      const savedPatient = await response.json();
      console.log('Saved patient:', savedPatient); // Debug log
      
      await onSave(savedPatient);
      setFormData(INITIAL_STATE);
      onClose();

    } catch (error) {
      console.error('Submit error:', error); // Debug log
      setErrors(prev => ({
        ...prev,
        submit: error.message
      }));
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        width: 400,
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontSize: FONT_SIZES.large,
                color: COLORS.primary, 
                fontWeight: 600 
              }}
            >
              Шинэ үзлэг нэмэх
            </Typography>
            
            <TextField
              name="lastName"
              label="Овог"
              value={formData.lastName}
              onChange={handleChange}
              error={touched.lastName && !!errors.lastName}
              helperText={touched.lastName && errors.lastName}
              required
              sx={{
                '& label': { color: COLORS.text.secondary },
                '& label.Mui-focused': { color: COLORS.primary }
              }}
              InputProps={{
                sx: { fontSize: FONT_SIZES.medium }
              }}
              InputLabelProps={{
                sx: { fontSize: FONT_SIZES.small }
              }}
            />

            <TextField
              name="firstName"
              label="Нэр"
              value={formData.firstName}
              onChange={handleChange}
              error={touched.firstName && !!errors.firstName}
              helperText={touched.firstName && errors.firstName}
              required
              sx={{
                '& label': { color: COLORS.text.secondary },
                '& label.Mui-focused': { color: COLORS.primary }
              }}
              InputProps={{
                sx: { fontSize: FONT_SIZES.medium }
              }}
              InputLabelProps={{
                sx: { fontSize: FONT_SIZES.small }
              }}
            />

            <TextField
              name="age"
              label="Нас"
              value={formData.age}
              onChange={handleChange}
              error={touched.age && !!errors.age}
              helperText={touched.age && errors.age}
              required
              sx={{
                '& label': { color: COLORS.text.secondary },
                '& label.Mui-focused': { color: COLORS.primary }
              }}
              InputProps={{
                sx: { fontSize: FONT_SIZES.medium }
              }}
              InputLabelProps={{
                sx: { fontSize: FONT_SIZES.small }
              }}
            />

            <FormControl>
              <RadioGroup
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                row
                sx={{ color: COLORS.text.primary }}
              >
                <FormControlLabel 
                  value="эр" 
                  control={
                    <Radio sx={{
                      '&.Mui-checked': { color: COLORS.primary }
                    }}/>
                  } 
                  label="Эр" 
                />
                <FormControlLabel 
                  value="эм" 
                  control={
                    <Radio sx={{
                      '&.Mui-checked': { color: COLORS.primary }
                    }}/>
                  } 
                  label="Эм" 
                />
              </RadioGroup>
            </FormControl>

            <FormControl>
              <InputLabel>Үзлэгийн төрөл</InputLabel>
              <Select
                name="status"
                value={formData.status}
                onChange={handleChange}
                label="Үзлэгийн төрөл"
              >
                {STATUS_OPTIONS.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              name="appointmentTime"
              label="Цаг"
              value={formData.appointmentTime}
              onChange={handleChange}
              error={touched.appointmentTime && !!errors.appointmentTime}
              helperText={touched.appointmentTime && errors.appointmentTime}
              placeholder="HH:MM"
              required
              sx={{
                '& label': { color: COLORS.text.secondary },
                '& label.Mui-focused': { color: COLORS.primary }
              }}
              InputProps={{
                sx: { fontSize: FONT_SIZES.medium }
              }}
              InputLabelProps={{
                sx: { fontSize: FONT_SIZES.small }
              }}
            />

            <TextField
              name="phone"
              label="Утас"
              value={formData.phone}
              onChange={handleChange}
              error={touched.phone && !!errors.phone}
              helperText={touched.phone && errors.phone}
              required
              sx={{
                '& label': { color: COLORS.text.secondary },
                '& label.Mui-focused': { color: COLORS.primary }
              }}
              InputProps={{
                sx: { fontSize: FONT_SIZES.medium }
              }}
              InputLabelProps={{
                sx: { fontSize: FONT_SIZES.small }
              }}
            />

            <TextField
              name="address"
              label="Хаяг"
              value={formData.address}
              onChange={handleChange}
              multiline
              rows={2}
              sx={{
                '& label': { color: COLORS.text.secondary },
                '& label.Mui-focused': { color: COLORS.primary }
              }}
              InputProps={{
                sx: { fontSize: FONT_SIZES.medium }
              }}
              InputLabelProps={{
                sx: { fontSize: FONT_SIZES.small }
              }}
            />

            <TextField
              name="email"
              label="Имэйл"
              value={formData.email}
              onChange={handleChange}
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              required
              sx={{
                '& label': { color: COLORS.text.secondary },
                '& label.Mui-focused': { color: COLORS.primary }
              }}
              InputProps={{
                sx: { fontSize: FONT_SIZES.medium }
              }}
              InputLabelProps={{
                sx: { fontSize: FONT_SIZES.small }
              }}
            />

            <Button 
              type="submit" 
              variant="contained" 
              disabled={isLoading}
              sx={{
                bgcolor: COLORS.primary,
                '&:hover': {
                  bgcolor: COLORS.primary + 'dd'
                }
              }}
              startIcon={isLoading ? <CircularProgress size={20} /> : null}
            >
              {isLoading ? 'Хадгалж байна...' : 'Хадгалах'}
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
});

AddPatientData.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

AddPatientData.displayName = 'AddPatientData';

export default AddPatientData;