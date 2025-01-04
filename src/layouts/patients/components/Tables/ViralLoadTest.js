import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import PropTypes from 'prop-types';
import Table from 'examples/Tables/Table';
import { makeStyles } from '@mui/styles';

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

// Define columns for each table
const columns1 = [
  { name: 'date', align: 'left', width: '25%' },
  { name: 'HCV-RNA', align: 'left', width: '25%' },
  { name: 'notes1', align: 'left', width: '25%' },
  { name: 'notes2', align: 'left', width: '25%' },
];

const columns2 = [
  { name: 'date', align: 'left', width: '25%' },
  { name: 'HBV-DNA', align: 'left', width: '25%' },
  { name: 'notes1', align: 'left', width: '25%' },
  { name: 'notes2', align: 'left', width: '25%' },
];

const columns3 = [
  { name: 'date', align: 'left', width: '25%' },
  { name: 'HDV-RNA', align: 'left', width: '25%' },
  { name: 'notes1', align: 'left', width: '25%' },
  { name: 'notes2', align: 'left', width: '25%' },
];

const columns4 = [
  { name: 'date', align: 'left', width: '25%' },
  { name: 'HIV-RNA', align: 'left', width: '25%' },
  { name: 'notes1', align: 'left', width: '25%' },
  { name: 'notes2', align: 'left', width: '25%' },
];

const columns5 = [
  { name: 'date', align: 'left', width: '25%' },
  { name: 'HPV', align: 'left', width: '25%' },
  { name: 'notes1', align: 'left', width: '25%' },
  { name: 'notes2', align: 'left', width: '25%' },
];

// Define rows for each table
const rows1 = [
  { date: '2024-03-20', 'HCV-RNA': 'Positive', notes1: 'Note 1', notes2: 'Note 2', hasBorder: true },
  { date: '2024-03-21', 'HCV-RNA': 'Negative', notes1: 'Note 3', notes2: 'Note 4', hasBorder: true },
];

const rows2 = [
  { date: '2024-03-20', 'HBV-DNA': 'Positive', notes1: 'Note 1', notes2: 'Note 2', hasBorder: true },
  { date: '2024-03-21', 'HBV-DNA': 'Negative', notes1: 'Note 3', notes2: 'Note 4', hasBorder: true },
];

const rows3 = [
  { date: '2024-03-20', 'HDV-RNA': 'Positive', notes1: 'Note 1', notes2: 'Note 2', hasBorder: true },
  { date: '2024-03-21', 'HDV-RNA': 'Negative', notes1: 'Note 3', notes2: 'Note 4', hasBorder: true },
];

const rows4 = [
  { date: '2024-03-20', 'HIV-RNA': 'Positive', notes1: 'Note 1', notes2: 'Note 2', hasBorder: true },
  { date: '2024-03-21', 'HIV-RNA': 'Negative', notes1: 'Note 3', notes2: 'Note 4', hasBorder: true },
];

const rows5 = [
  { date: '2024-03-20', 'HPV': 'Positive', notes1: 'Note 1', notes2: 'Note 2', hasBorder: true },
  { date: '2024-03-21', 'HPV': 'Negative', notes1: 'Note 3', notes2: 'Note 4', hasBorder: true },
];

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
  value: PropTypes.any.isRequired,
  index: PropTypes.any.isRequired,
};

function ViralLoadTest() {
  const [tabValue, setTabValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Tabs value={tabValue} onChange={handleChange} aria-label="viral load test tabs" className={classes.tabs}>
        <Tab label="HCV-RNA" className={classes.tab} />
        <Tab label="HBV-DNA" className={classes.tab} />
        <Tab label="HDV-RNA" className={classes.tab} />
        <Tab label="HIV-RNA" className={classes.tab} />
        <Tab label="HPV" className={classes.tab} />
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
      <TabPanel value={tabValue} index={3}>
        <Table columns={columns4} rows={rows4} />
      </TabPanel>
      <TabPanel value={tabValue} index={4}>
        <Table columns={columns5} rows={rows5} />
      </TabPanel>
    </div>
  );
}

export default ViralLoadTest;