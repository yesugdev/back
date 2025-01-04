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
  { name: 'date', align: 'left', width: '20%' },
  { name: 'ANAs', align: 'left', width: '20%' },
  { name: 'AMAs', align: 'left', width: '20%' },
  { name: 'LKM-1', align: 'left', width: '20%' },
  { name: 'LC-1', align: 'left', width: '20%' },
  { name: 'notes', align: 'left', width: '20%' },
  { name: 'hospital', align: 'left', width: '20%' },
];

const columns2 = [
  { name: 'date', align: 'left', width: '7.7%' },
  { name: 'Inhibin B', align: 'left', width: '7.7%' },
  { name: 'ACTH', align: 'left', width: '7.7%' },
  { name: 'C-Peptide', align: 'left', width: '7.7%' },
  { name: 'Cortisol', align: 'left', width: '7.7%' },
  { name: 'DHEA-s', align: 'left', width: '7.7%' },
  { name: 'Estradiol', align: 'left', width: '7.7%' },
  { name: 'HCG+Beta II', align: 'left', width: '7.7%' },
  { name: 'HCG STAT', align: 'left', width: '7.7%' },
  { name: 'Insulin', align: 'left', width: '7.7%' },
  { name: 'Progesterone', align: 'left', width: '7.7%' },
  { name: 'Prolactin', align: 'left', width: '7.7%' },
  { name: 'SHBG', align: 'left', width: '7.7%' },
  { name: 'notes', align: 'left', width: '7.7%' },
  { name: 'hospital', align: 'left', width: '7.7%' },
];

const columns3 = [
  { name: 'date', align: 'left', width: '25%' },
  { name: 'IL-6', align: 'left', width: '25%' },
  { name: 'S100', align: 'left', width: '25%' },
  { name: 'notes', align: 'left', width: '25%' },
  { name: 'hospital', align: 'left', width: '25%' },
];

// Define sample rows for each table
const rows1 = [
  {
    date: '2024-03-20',
    ANAs: 'Positive',
    AMAs: 'Negative',
    'LKM-1': 'Negative',
    'LC-1': 'Negative',
    notes: 'No comments',
    hospital: 'Hospital A',
    hasBorder: true,
  },
];

const rows2 = [
  {
    date: '2024-03-20',
    'Inhibin B': 'Normal',
    ACTH: 'Normal',
    'C-Peptide': 'Normal',
    Cortisol: 'Normal',
    'DHEA-s': 'Normal',
    Estradiol: 'Normal',
    'HCG+Beta II': 'Normal',
    'HCG STAT': 'Normal',
    Insulin: 'Normal',
    Progesterone: 'Normal',
    Prolactin: 'Normal',
    SHBG: 'Normal',
    notes: 'No comments',
    hospital: 'Hospital A',
    hasBorder: true,
  },
];

const rows3 = [
  {
    date: '2024-03-20',
    'IL-6': 'Normal',
    S100: 'Normal',
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

function Immunology3Table() {
  const [tabValue, setTabValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Tabs value={tabValue} onChange={handleChange} className={classes.tabs}>
        <Tab label="Auto-immune Markers" className={classes.tab} />
        <Tab label="Fertility/Hormones" className={classes.tab} />
        <Tab label="Critical Care" className={classes.tab} />
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

export default Immunology3Table;