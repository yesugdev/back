import React from 'react';
import Table from 'examples/Tables/Table';
import { Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Define custom styles
const useStyles = makeStyles({
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  },
});

const columns = [
  { name: 'drugName', align: 'left', width: '5%' },
  { name: 'form', align: 'left', width: '5%' },
  { name: 'dose', align: 'left', width: '5%' },
  { name: 'totalQuantity', align: 'left', width: '5%' },
  { name: 'usageMethod', align: 'left', width: '5%' },
  { name: 'frequency', align: 'left', width: '5%' },
  { name: 'singleDose', align: 'left', width: '5%' },
  { name: 'usageDuration', align: 'left', width: '5%' },
  { name: 'notes', align: 'left', width: '5%' },
];

const rows = [
  {
    drugName: 'Drug A',
    form: 'Tablet',
    dose: '500mg',
    totalQuantity: '30',
    usageMethod: 'Oral',
    frequency: 'Twice a day',
    singleDose: '1 tablet',
    usageDuration: '15 days',
    notes: 'Take after meals',
  },
];

function TreatmentInformation() {
  const classes = useStyles();
  const componentRef = React.useRef();

  const handlePrint = () => {
    const printContent = componentRef.current.innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload(); 
  };

  return (
    <Box p={3}>
      <div ref={componentRef}>
        <Table columns={columns} rows={rows} />
      </div>
      <Box mt={3}>
        <Button variant="contained" className={classes.button} onClick={handlePrint}>
          Хэвлэх
        </Button>
      </Box>
    </Box>
  );
}

export default TreatmentInformation;