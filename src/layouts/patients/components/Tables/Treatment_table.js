import React, { useState } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Define custom styles
const useStyles = makeStyles({
  formContainer: {
    padding: '24px', // Manually define the padding
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  textField: {
    '& .MuiInputBase-root': {
      fontFamily: 'Arial, sans-serif', // Change this to your desired font
      fontSize: '16px', // Change this to your desired font size
      color: '#344767', // Change this to your desired text color
    },
    '& .MuiInputLabel-root': {
      fontFamily: 'Arial, sans-serif', // Change this to your desired font
      fontSize: '16px', // Change this to your desired font size
      color: '#344767', // Change this to your desired label color
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#007bff', // Change this to your desired border color
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0056b3', // Change this to your desired hover border color
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0056b3', // Change this to your desired focused border color
    },
  },
  button: {
    // fontFamily: 'Arial, sans-serif', // Change this to your desired font
    // fontSize: '12px', // Change this to your desired font size
    backgroundColor: '#007bff',
    color: '#fff',
    // '&:hover': {
    //   backgroundColor: '#0056b3',
    // },
  },
});

function TreatmentTable() {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    drugName: '',
    form: '',
    dose: '',
    totalQuantity: '',
    usageMethod: '',
    frequency: '',
    singleDose: '',
    usageDuration: '',
    notes: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formValues);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className={classes.formContainer}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Эмийн нэр"
            name="drugName"
            value={formValues.drugName}
            onChange={handleChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Хэлбэр"
            name="form"
            value={formValues.form}
            onChange={handleChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Тун"
            name="dose"
            value={formValues.dose}
            onChange={handleChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Нийт тоо хэмжээ"
            name="totalQuantity"
            value={formValues.totalQuantity}
            onChange={handleChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Эмийг хэрэглэх арга"
            name="usageMethod"
            value={formValues.usageMethod}
            onChange={handleChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Давтамж"
            name="frequency"
            value={formValues.frequency}
            onChange={handleChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="1 удаа"
            name="singleDose"
            value={formValues.singleDose}
            onChange={handleChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Эмийг хэрэглэх хугацаа"
            name="usageDuration"
            value={formValues.usageDuration}
            onChange={handleChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Тэмдэглэл"
            name="notes"
            value={formValues.notes}
            onChange={handleChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" className={classes.button}>
            Илгээх
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TreatmentTable;