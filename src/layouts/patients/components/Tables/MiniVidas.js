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
  { name: 'CA 125 II (0 - 35) U/mL', align: 'left', width: '20%' },
  { name: 'CA 19-9 (0 - 37) U/mL', align: 'left', width: '20%' },
  { name: 'CEA () ng/mL', align: 'left', width: '20%' },
  { name: 'notes', align: 'left', width: '20%' },
  { name: 'hospital', align: 'left', width: '20%' },
];

const columns2 = [
  { name: 'date', align: 'left', width: '25%' },
  { name: 'HIV combi', align: 'left', width: '25%' },
  { name: 'H.pylori IgG () C.O.I', align: 'left', width: '25%' },
  { name: 'Sars-Cov 2-IgG ()', align: 'left', width: '25%' },
  { name: 'notes', align: 'left', width: '25%' },
  { name: 'hospital', align: 'left', width: '25%' },
];

const columns3 = [
  { name: 'date', align: 'left', width: '25%' },
  { name: 'T3 (0.92 - 2.33) nmol/L', align: 'left', width: '25%' },
  { name: 'T4 (60 - 120) nmol/L', align: 'left', width: '25%' },
  { name: 'TSH (0.25 - 5) mIU/ml', align: 'left', width: '25%' },
  { name: 'notes', align: 'left', width: '25%' },
  { name: 'hospital', align: 'left', width: '25%' },
];

// Define sample rows for each table
const rows1 = [
  {
    date: '2024-03-20',
    'CA 125 II (0 - 35) U/mL': '20',
    'CA 19-9 (0 - 37) U/mL': '15',
    'CEA () ng/mL': '5',
    notes: 'No comments',
    hospital: 'Hospital A',
    hasBorder: true,
  },
];

const rows2 = [
  {
    date: '2024-03-20',
    'HIV combi': 'Negative',
    'H.pylori IgG () C.O.I': '0.5',
    'Sars-Cov 2-IgG ()': 'Negative',
    notes: 'No comments',
    hospital: 'Hospital A',
    hasBorder: true,
  },
];

const rows3 = [
  {
    date: '2024-03-20',
    'T3 (0.92 - 2.33) nmol/L': '1.5',
    'T4 (60 - 120) nmol/L': '80',
    'TSH (0.25 - 5) mIU/ml': '2.0',
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

function MiniVidasTable() {
  const [tabValue, setTabValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Tabs value={tabValue} onChange={handleChange} className={classes.tabs}>
        <Tab label="Tumor Markers" className={classes.tab} />
        <Tab label="Infectious Diseases" className={classes.tab} />
        <Tab label="Thyroid Function" className={classes.tab} />
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

export default MiniVidasTable;