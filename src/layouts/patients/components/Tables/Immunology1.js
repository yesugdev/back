import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import PropTypes from 'prop-types';
import Table from 'examples/Tables/Table';
import { makeStyles } from '@mui/styles';

// TabPanel component
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// Define columns for each table
const columns1 = [
  { name: 'date', align: 'left', width: '5%' },
  { name: 'CK-MB (mass)', align: 'left', width: '5%' },
  { name: 'CK-MB (mass) STAT', align: 'left', width: '5%' },
  { name: 'Digoxin', align: 'left', width: '5%' },
  { name: 'Digitoxin', align: 'left', width: '5%' },
  { name: 'Myoglobin', align: 'left', width: '5%' },
  { name: 'Myoglobin STAT', align: 'left', width: '5%' },
  { name: 'NT-pro BNP', align: 'left', width: '5%' },
  { name: 'TNT-I', align: 'left', width: '5%' },
  { name: 'Troponin T', align: 'left', width: '5%' },
  { name: 'Troponin T hs', align: 'left', width: '5%' },
  { name: 'Troponin T hs STAT', align: 'left', width: '5%' },
  { name: 'Troponin T STAT', align: 'left', width: '5%' },
  { name: 'IMA', align: 'left', width: '5%' },
  { name: 'notes', align: 'left', width: '5%' },
  { name: 'hospital', align: 'left', width: '5%' },
];

const columns2 = [
  { name: 'date', align: 'left', width: '5%' },
  { name: 'HCG in urine', align: 'left', width: '5%' },
  { name: 'HCG in blood (0 - 4) mIU/ml', align: 'left', width: '5%' },
  { name: 'Free beta HCG', align: 'left', width: '5%' },
  { name: 'PAPP-A', align: 'left', width: '5%' },
  { name: 'PIGF', align: 'left', width: '5%' },
  { name: 'sFLT-1', align: 'left', width: '5%' },
  { name: 'notes', align: 'left', width: '5%' },
  { name: 'hospital', align: 'left', width: '5%' },
];

const columns3 = [
  { name: 'date', align: 'left', width: '5%' },
  { name: 'IgE (0 - 150) KIU/L', align: 'left', width: '5%' },
  { name: 'notes', align: 'left', width: '5%' },
  { name: 'hospital', align: 'left', width: '5%' },
];

// Define sample rows for each table
const rows1 = [
  {
    date: '2024-03-20',
    'CK-MB (mass)': '5',
    'CK-MB (mass) STAT': '5',
    'Digoxin': 'Normal',
    'Digitoxin': 'Normal',
    'Myoglobin': 'Normal',
    'Myoglobin STAT': 'Normal',
    'NT-pro BNP': 'Normal',
    'TNT-I': 'Normal',
    'Troponin T': 'Normal',
    'Troponin T hs': 'Normal',
    'Troponin T hs STAT': 'Normal',
    'Troponin T STAT': 'Normal',
    'IMA': 'Normal',
    notes: 'No comments',
    hospital: 'Hospital A',
    hasBorder: true,
  },
];

const rows2 = [
  {
    date: '2024-03-20',
    'HCG in urine': 'Positive',
    'HCG in blood (0 - 4) mIU/ml': '2',
    'Free beta HCG': 'Normal',
    'PAPP-A': 'Normal',
    'PIGF': 'Normal',
    'sFLT-1': 'Normal',
    notes: 'No comments',
    hospital: 'Hospital A',
    hasBorder: true,
  },
];

const rows3 = [
  {
    date: '2024-03-20',
    'IgE (0 - 150) KIU/L': '100',
    notes: 'No comments',
    hospital: 'Hospital A',
    hasBorder: true,
  },
];

// Define custom styles
const useStyles = makeStyles({
  tabs: {
    fontFamily: 'Arial, sans-serif', // Change this to your desired font
    fontSize: '12px', // Change this to your desired font size
  },
  tab: {
    fontFamily: 'Arial, sans-serif', // Change this to your desired font
    fontSize: '12px', // Change this to your desired font size
  },
});

function Immunology1Table() {
  const [tabValue, setTabValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Tabs value={tabValue} onChange={handleChange} className={classes.tabs}>
        <Tab label="Cardiac Function" className={classes.tab} />
        <Tab label="First Trimester Screening" className={classes.tab} />
        <Tab label="Allergen" className={classes.tab} />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <Table columns={columns1} rows={rows1} />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Table columns={columns2} rows={rows2} />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <Table columns={columns3} rows={rows3} />
      </TabPanel>
    </div>
  );
}

export default Immunology1Table;