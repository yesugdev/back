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
  { name: 'date', align: 'left', width: '10%' },
  { name: 'Folate', align: 'left', width: '10%' },
  { name: 'RBC Folate', align: 'left', width: '10%' },
  { name: 'Vitamin B12', align: 'left', width: '10%' },
  { name: 'UIBC', align: 'left', width: '10%' },
  { name: 'TIBC', align: 'left', width: '10%' },
  { name: 'Transferrin', align: 'left', width: '10%' },
  { name: 'notes', align: 'left', width: '10%' },
  { name: 'hospital', align: 'left', width: '10%' },
];

const columns2 = [
  { name: 'date', align: 'left', width: '14.3%' },
  { name: 'Intact PTH', align: 'left', width: '14.3%' },
  { name: 'N-MID Osteocalcin', align: 'left', width: '14.3%' },
  { name: 'P1NP', align: 'left', width: '14.3%' },
  { name: 'PTH-STAT', align: 'left', width: '14.3%' },
  { name: 'Beta-CrossLaps', align: 'left', width: '14.3%' },
  { name: 'notes', align: 'left', width: '14.3%' },
  { name: 'hospital', align: 'left', width: '14.3%' },
];

const columns3 = [
  { name: 'date', align: 'left', width: '33.3%' },
  { name: 'Anti-CCP', align: 'left', width: '33.3%' },
  { name: 'notes', align: 'left', width: '33.3%' },
  { name: 'hospital', align: 'left', width: '33.3%' },
];

// Define sample rows for each table
const rows1 = [
  {
    date: '2024-03-20',
    Folate: 'Normal',
    'RBC Folate': 'Normal',
    'Vitamin B12': 'Normal',
    UIBC: 'Normal',
    TIBC: 'Normal',
    Transferrin: 'Normal',
    notes: 'No comments',
    hospital: 'Hospital A',
    hasBorder: true,
  },
];

const rows2 = [
  {
    date: '2024-03-20',
    'Intact PTH': 'Normal',
    'N-MID Osteocalcin': 'Normal',
    P1NP: 'Normal',
    'PTH-STAT': 'Normal',
    'Beta-CrossLaps': 'Normal',
    notes: 'No comments',
    hospital: 'Hospital A',
    hasBorder: true,
  },
];

const rows3 = [
  {
    date: '2024-03-20',
    'Anti-CCP': 'Normal',
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

function Immunology2Table() {
  const [tabValue, setTabValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Tabs value={tabValue} onChange={handleChange} className={classes.tabs}>
        <Tab label="Anemia" className={classes.tab} />
        <Tab label="Bone Markers" className={classes.tab} />
        <Tab label="Rheumatoid Arthritis" className={classes.tab} />
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

export default Immunology2Table;