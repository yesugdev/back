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
  { name: 'AFP (0 - 10) ng/ml', align: 'left', width: '5%' },
  { name: 'Pivka II (0 - 40) mAU/ml', align: 'left', width: '5%' },
  { name: 'AFP L3', align: 'left', width: '5%' },
  { name: 'CA 15-3', align: 'left', width: '5%' },
  { name: 'CA 72-4', align: 'left', width: '5%' },
  { name: 'CYFRA 21-1', align: 'left', width: '5%' },
  { name: 'free PSA', align: 'left', width: '5%' },
  { name: 'NSE', align: 'left', width: '5%' },
  { name: 'M2BPGi', align: 'left', width: '5%' },
  { name: 'Total PSA', align: 'left', width: '5%' },
  { name: 'ACP', align: 'left', width: '5%' },
  { name: 'GLDH', align: 'left', width: '5%' },
  { name: 'TNF', align: 'left', width: '5%' },
  { name: 'notes', align: 'left', width: '5%' },
  { name: 'hospital', align: 'left', width: '5%' },
];

const columns2 = [
  { name: 'date', align: 'left', width: '5%' },
  { name: 'HBeAg (0 - 1) C.O.I', align: 'left', width: '5%' },
  { name: 'HBsAg quantification (0 - 0.03) IU/ml', align: 'left', width: '5%' },
  { name: 'Anti-Hbs (0 - 10) mIU/ml', align: 'left', width: '5%' },
  { name: 'Anti-HCV quantification (0 - 1) C.O.I', align: 'left', width: '5%' },
  { name: 'HBsAg (0 - 0.03) IU/ml', align: 'left', width: '5%' },
  { name: 'Anti-IgE', align: 'left', width: '5%' },
  { name: 'Anti-HAV Total', align: 'left', width: '5%' },
  { name: 'Anti-HAV IgM', align: 'left', width: '5%' },
  { name: 'Anti-HBc', align: 'left', width: '5%' },
  { name: 'Anti-HBc IgM', align: 'left', width: '5%' },
  { name: 'Anti-Hbe (0 - 50) Inh%', align: 'left', width: '5%' },
  { name: 'CMV IgG', align: 'left', width: '5%' },
  { name: 'CMV IgM', align: 'left', width: '5%' },
  { name: 'CMV IgG Avidity', align: 'left', width: '5%' },
  { name: 'HSV-1 IgG', align: 'left', width: '5%' },
  { name: 'HSV-2 IgG', align: 'left', width: '5%' },
  { name: 'HIV Antigen', align: 'left', width: '5%' },
  { name: 'HIV combi Pt', align: 'left', width: '5%' },
  { name: 'Rub Ig G', align: 'left', width: '5%' },
  { name: 'Rub Ig M', align: 'left', width: '5%' },
  { name: 'Toxo Ig G', align: 'left', width: '5%' },
  { name: 'Toxo Ig M', align: 'left', width: '5%' },
  { name: 'HIV Antigen confirmatory', align: 'left', width: '5%' },
  { name: 'HIV combi', align: 'left', width: '5%' },
  { name: 'notes', align: 'left', width: '5%' },
  { name: 'hospital', align: 'left', width: '5%' },
];

const columns3 = [
  { name: 'date', align: 'left', width: '5%' },
  { name: 'Anti-TG (0 - 115) IU/ml', align: 'left', width: '5%' },
  { name: 'Anti-TPO (0 - 34) IU/ml', align: 'left', width: '5%' },
  { name: 'Anti-TSHR (0 - 1.5) U/l', align: 'left', width: '5%' },
  { name: 'Calcitonin', align: 'left', width: '5%' },
  { name: 'FT3 (3.1 - 6.8) pmol/l', align: 'left', width: '5%' },
  { name: 'FT4 (12 - 22) pmol/l', align: 'left', width: '5%' },
  { name: 'T-Uptake', align: 'left', width: '5%' },
  { name: 'Tg (1.4 - 78) ng/ml', align: 'left', width: '5%' },
  { name: 'Tg hs', align: 'left', width: '5%' },
  { name: 'notes', align: 'left', width: '5%' },
  { name: 'hospital', align: 'left', width: '5%' },
];

// Define sample rows for each table
const rows1 = [
  {
    date: '2024-03-20',
    'AFP (0 - 10) ng/ml': '5',
    'Pivka II (0 - 40) mAU/ml': '20',
    'AFP L3': 'Normal',
    'CA 15-3': 'Normal',
    'CA 72-4': 'Normal',
    'CYFRA 21-1': 'Normal',
    'free PSA': 'Normal',
    'NSE': 'Normal',
    'M2BPGi': 'Normal',
    'Total PSA': 'Normal',
    'ACP': 'Normal',
    'GLDH': 'Normal',
    'TNF': 'Normal',
    notes: 'No comments',
    hospital: 'Hospital A',
    hasBorder: true,
  },
];

const rows2 = [
  {
    date: '2024-03-20',
    'HBeAg (0 - 1) C.O.I': '0.5',
    'HBsAg quantification (0 - 0.03) IU/ml': '0.01',
    'Anti-Hbs (0 - 10) mIU/ml': '5',
    'Anti-HCV quantification (0 - 1) C.O.I': '0.5',
    'HBsAg (0 - 0.03) IU/ml': '0.01',
    'Anti-IgE': 'Normal',
    'Anti-HAV Total': 'Normal',
    'Anti-HAV IgM': 'Normal',
    'Anti-HBc': 'Normal',
    'Anti-HBc IgM': 'Normal',
    'Anti-Hbe (0 - 50) Inh%': '25',
    'CMV IgG': 'Normal',
    'CMV IgM': 'Normal',
    'CMV IgG Avidity': 'Normal',
    'HSV-1 IgG': 'Normal',
    'HSV-2 IgG': 'Normal',
    'HIV Antigen': 'Negative',
    'HIV combi Pt': 'Negative',
    'Rub Ig G': 'Normal',
    'Rub Ig M': 'Normal',
    'Toxo Ig G': 'Normal',
    'Toxo Ig M': 'Normal',
    'HIV Antigen confirmatory': 'Negative',
    'HIV combi': 'Negative',
    notes: 'No comments',
    hospital: 'Hospital A',
    hasBorder: true,
  },
];

const rows3 = [
  {
    date: '2024-03-20',
    'Anti-TG (0 - 115) IU/ml': '50',
    'Anti-TPO (0 - 34) IU/ml': '20',
    'Anti-TSHR (0 - 1.5) U/l': '0.8',
    'Calcitonin': 'Normal',
    'FT3 (3.1 - 6.8) pmol/l': '4.5',
    'FT4 (12 - 22) pmol/l': '15',
    'T-Uptake': 'Normal',
    'Tg (1.4 - 78) ng/ml': '40',
    'Tg hs': 'Normal',
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

function ImmunologyTable() {
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

export default ImmunologyTable;