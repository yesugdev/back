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
  { name: 'UIBC', align: 'left', width: '20%' },
  { name: 'TIBC', align: 'left', width: '20%' },
  { name: 'Ferritin (12 - 1200) ng/ml', align: 'left', width: '20%' },
  { name: 'notes', align: 'left', width: '20%' },
  { name: 'hospital', align: 'left', width: '20%' },
];

const columns2 = [
  { name: 'date', align: 'left', width: '33.3%' },
  { name: 'Vitamin D () ng/ml', align: 'left', width: '33.3%' },
  { name: 'Intact PTH', align: 'left', width: '33.3%' },
  { name: 'notes', align: 'left', width: '33.3%' },
  { name: 'hospital', align: 'left', width: '33.3%' },
];

const columns3 = [
  { name: 'date', align: 'left', width: '50%' },
  { name: 'Anti-CCP', align: 'left', width: '50%' },
  { name: 'notes', align: 'left', width: '50%' },
  { name: 'hospital', align: 'left', width: '50%' },
];

// Define sample rows for each table
const rows1 = [
  {
    date: '2024-03-20',
    UIBC: 'Normal',
    TIBC: 'Normal',
    'Ferritin (12 - 1200) ng/ml': '300',
    notes: 'No comments',
    hospital: 'Hospital A',
    hasBorder: true,
  },
];

const rows2 = [
  {
    date: '2024-03-20',
    'Vitamin D () ng/ml': '50',
    'Intact PTH': 'Normal',
    notes: 'No comments',
    hospital: 'Hospital A',
    hasBorder: true,
  },
];

const rows3 = [
  {
    date: '2024-03-20',
    'Anti-CCP': 'Negative',
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

function MiniVidas2Table() {
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

export default MiniVidas2Table;