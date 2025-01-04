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
  { name: 'Total Bilirubin (1.7 - 21) μmol/L', align: 'left', width: '5%' },
  { name: 'Direct Bilirubin (0 - 5) μmol/L', align: 'left', width: '5%' },
  { name: 'AST (0 - 31) U/L', align: 'left', width: '5%' },
  { name: 'ALT (0 - 31) U/L', align: 'left', width: '5%' },
  { name: 'Albumin (35 - 52) g/L', align: 'left', width: '5%' },
  { name: 'Total Protein (66 - 88) g/L', align: 'left', width: '5%' },
  { name: 'Globulin (23 - 35) g/L', align: 'left', width: '5%' },
  { name: 'Alkaline phosphatase (35 - 104) U/L', align: 'left', width: '5%' },
  { name: 'GGT (0 - 38) U/L', align: 'left', width: '5%' },
  { name: 'LDH (0 - 247) U/L', align: 'left', width: '5%' },
  { name: 'Glucose (3.9 - 6.4) mmol/L', align: 'left', width: '5%' },
  { name: 'CRYO', align: 'left', width: '5%' },
  { name: 'Haptoglobin', align: 'left', width: '5%' },
  { name: 'notes', align: 'left', width: '5%' },
  { name: 'hospital', align: 'left', width: '5%' },
];

const columns2 = [
  { name: 'date', align: 'left', width: '10%' },
  { name: 'Cyst C', align: 'left', width: '10%' },
  { name: 'CREA-P (45 - 84) μmol/L', align: 'left', width: '10%' },
  { name: 'Urea (2.6 - 6.7) mmol/L', align: 'left', width: '10%' },
  { name: 'Uric acid (155 - 357) μmol/L', align: 'left', width: '10%' },
  { name: 'PreALb', align: 'left', width: '10%' },
  { name: 'notes', align: 'left', width: '10%' },
  { name: 'hospital', align: 'left', width: '10%' },
];

const columns3 = [
  { name: 'date', align: 'left', width: '10%' },
  { name: 'Total Cholesterol (0 - 5) mmol/L', align: 'left', width: '10%' },
  { name: 'HDL (1.55 - 5) mmol/L', align: 'left', width: '10%' },
  { name: 'LDL (0 - 3.4) mmol/L', align: 'left', width: '10%' },
  { name: 'LPA', align: 'left', width: '10%' },
  { name: 'Triglycerides (0 - 2.3) mmol/L', align: 'left', width: '10%' },
  { name: 'Kappa Light Chains', align: 'left', width: '10%' },
  { name: 'Lambda Light Chains', align: 'left', width: '10%' },
  { name: 'Lipoprotein', align: 'left', width: '10%' },
  { name: 'notes', align: 'left', width: '10%' },
  { name: 'hospital', align: 'left', width: '10%' },
];

const columns4 = [
  { name: 'date', align: 'left', width: '20%' },
  { name: 'α-Amylase (0 - 100) U/L', align: 'left', width: '20%' },
  { name: 'Amylase-Pancr U/L', align: 'left', width: '20%' },
  { name: 'Lipase (0 - 60) U/L', align: 'left', width: '20%' },
  { name: 'notes', align: 'left', width: '20%' },
  { name: 'hospital', align: 'left', width: '20%' },
];

const columns5 = [
  { name: 'date', align: 'left', width: '10%' },
  { name: 'Calcium(Total) (2.15 - 2.57) mmol/L', align: 'left', width: '10%' },
  { name: 'Magnesium (0.77 - 1.03) mmol/L', align: 'left', width: '10%' },
  { name: 'Iron (7 - 26.7) μmol/L', align: 'left', width: '10%' },
  { name: 'Рhosphorus (0.84 - 1.46) mmol/L', align: 'left', width: '10%' },
  { name: 'Na mmol/l', align: 'left', width: '10%' },
  { name: 'K mmol/l', align: 'left', width: '10%' },
  { name: 'Cl (98 - 107) mmol/l', align: 'left', width: '10%' },
  { name: 'Cu', align: 'left', width: '10%' },
  { name: 'Ammonia', align: 'left', width: '10%' },
  { name: 'Bicarbonate', align: 'left', width: '10%' },
  { name: 'Fructosamine', align: 'left', width: '10%' },
  { name: 'notes', align: 'left', width: '10%' },
  { name: 'hospital', align: 'left', width: '10%' },
];

const columns6 = [
  { name: 'date', align: 'left', width: '20%' },
  { name: 'PCT', align: 'left', width: '20%' },
  { name: 'IL6', align: 'left', width: '20%' },
  { name: 'RF (0 - 15) IU/mL', align: 'left', width: '20%' },
  { name: 'CRP (0 - 1) mg/dL', align: 'left', width: '20%' },
  { name: 'ASO (0 - 200) IU/mL', align: 'left', width: '20%' },
  { name: 'notes', align: 'left', width: '20%' },
  { name: 'hospital', align: 'left', width: '20%' },
];

const columns7 = [
  { name: 'date', align: 'left', width: '5%' },
  { name: 'Amphetamines', align: 'left', width: '5%' },
  { name: 'Barbiturates', align: 'left', width: '5%' },
  { name: 'Benzodiazepines', align: 'left', width: '5%' },
  { name: 'Cannabinoids', align: 'left', width: '5%' },
  { name: 'Cocain Metabolite', align: 'left', width: '5%' },
  { name: 'Ethanol', align: 'left', width: '5%' },
  { name: 'Methadone', align: 'left', width: '5%' },
  { name: 'EDDP', align: 'left', width: '5%' },
  { name: 'Opiates', align: 'left', width: '5%' },
  { name: 'Oxycodone', align: 'left', width: '5%' },
  { name: 'Phencyclidine', align: 'left', width: '5%' },
  { name: 'Propoxyphene', align: 'left', width: '5%' },
  { name: 'LSD', align: 'left', width: '5%' },
  { name: 'notes', align: 'left', width: '5%' },
  { name: 'hospital', align: 'left', width: '5%' },
];

const columns8 = [
  { name: 'date', align: 'left', width: '5%' },
  { name: 'Amphetamines', align: 'left', width: '5%' },
  { name: 'Barbiturates', align: 'left', width: '5%' },
  { name: 'Benzodiazepines', align: 'left', width: '5%' },
  { name: 'Cannabinoids', align: 'left', width: '5%' },
  { name: 'Cocain Metabolite', align: 'left', width: '5%' },
  { name: 'Ethanol', align: 'left', width: '5%' },
  { name: 'Methadone', align: 'left', width: '5%' },
  { name: 'EDDP', align: 'left', width: '5%' },
  { name: 'Opiates', align: 'left', width: '5%' },
  { name: 'Oxycodone', align: 'left', width: '5%' },
  { name: 'Phencyclidine', align: 'left', width: '5%' },
  { name: 'Propoxyphene', align: 'left', width: '5%' },
  { name: 'LSD', align: 'left', width: '5%' },
  { name: 'notes', align: 'left', width: '5%' },
  { name: 'hospital', align: 'left', width: '5%' },
];

const columns9 = [
  { name: 'date', align: 'left', width: '5%' },
  { name: 'Acetaminophen', align: 'left', width: '5%' },
  { name: 'Amikacin', align: 'left', width: '5%' },
  { name: 'Carbamazepine', align: 'left', width: '5%' },
  { name: 'Cyclosporine', align: 'left', width: '5%' },
  { name: 'C3', align: 'left', width: '5%' },
  { name: 'C4', align: 'left', width: '5%' },
  { name: 'IgA', align: 'left', width: '5%' },
  { name: 'IgE', align: 'left', width: '5%' },
  { name: 'IgG', align: 'left', width: '5%' },
  { name: 'IgM', align: 'left', width: '5%' },
  { name: 'Digitoxin', align: 'left', width: '5%' },
  { name: 'Digoxin', align: 'left', width: '5%' },
  { name: 'Gentamicin', align: 'left', width: '5%' },
  { name: 'Lithium', align: 'left', width: '5%' },
  { name: 'Lidocaine', align: 'left', width: '5%' },
  { name: 'MPA', align: 'left', width: '5%' },
  { name: 'free MPA', align: 'left', width: '5%' },
  { name: 'NAPA', align: 'left', width: '5%' },
  { name: 'Phenobarb', align: 'left', width: '5%' },
  { name: 'Phenytoin', align: 'left', width: '5%' },
  { name: 'Procainamide', align: 'left', width: '5%' },
  { name: 'Quinidine', align: 'left', width: '5%' },
  { name: 'Salicylate', align: 'left', width: '5%' },
  { name: 'Theophylline', align: 'left', width: '5%' },
  { name: 'Tobramycin', align: 'left', width: '5%' },
  { name: 'Valproic', align: 'left', width: '5%' },
  { name: 'Vancomycin', align: 'left', width: '5%' },
  { name: 'Ethanol Gen.2', align: 'left', width: '5%' },
  { name: 'PCP', align: 'left', width: '5%' },
  { name: 'THC', align: 'left', width: '5%' },
  { name: 'CHE', align: 'left', width: '5%' },
  { name: 'notes', align: 'left', width: '5%' },
  { name: 'hospital', align: 'left', width: '5%' },
];

const columns10 = [
  { name: 'date', align: 'left', width: '5%' },
  { name: 'Ammonia measurement', align: 'left', width: '5%' },
  { name: 'Apolipoprotein B (substance)', align: 'left', width: '5%' },
  { name: 'AT III- Coagulogram', align: 'left', width: '5%' },
  { name: 'D-Dimer Coagulogramm', align: 'left', width: '5%' },
  { name: 'α1-Acid Glycoprotein', align: 'left', width: '5%' },
  { name: 'α1-Antitrypsin', align: 'left', width: '5%' },
  { name: 'α1-Microglobulin', align: 'left', width: '5%' },
  { name: 'β1-Microglobuline', align: 'left', width: '5%' },
  { name: 'APO A1 Lipid', align: 'left', width: '5%' },
  { name: 'APO B Lipids', align: 'left', width: '5%' },
  { name: 'Ceruloplasmin', align: 'left', width: '5%' },
  { name: 'Cholinesterase', align: 'left', width: '5%' },
  { name: 'HBDH', align: 'left', width: '5%' },
  { name: 'UIBC (21 - 84) μmol/L', align: 'left', width: '5%' },
  { name: 'Transferrin saturation (15 - 50) %', align: 'left', width: '5%' },
  { name: 'notes', align: 'left', width: '5%' },
  { name: 'hospital', align: 'left', width: '5%' },
];

// Define rows for each table
const rows1 = [
  { date: '2024-03-20', 'Total Bilirubin (1.7 - 21) μmol/L': '10', 'Direct Bilirubin (0 - 5) μmol/L': '2', 'AST (0 - 31) U/L': '20', 'ALT (0 - 31) U/L': '25', 'Albumin (35 - 52) g/L': '40', 'Total Protein (66 - 88) g/L': '70', 'Globulin (23 - 35) g/L': '30', 'Alkaline phosphatase (35 - 104) U/L': '50', 'GGT (0 - 38) U/L': '20', 'LDH (0 - 247) U/L': '200', 'Glucose (3.9 - 6.4) mmol/L': '5', 'CRYO': 'Normal', 'Haptoglobin': 'Normal', notes: 'No comments', hospital: 'Hospital A', hasBorder: true },
  { date: '2024-03-21', 'Total Bilirubin (1.7 - 21) μmol/L': '15', 'Direct Bilirubin (0 - 5) μmol/L': '3', 'AST (0 - 31) U/L': '22', 'ALT (0 - 31) U/L': '28', 'Albumin (35 - 52) g/L': '42', 'Total Protein (66 - 88) g/L': '75', 'Globulin (23 - 35) g/L': '32', 'Alkaline phosphatase (35 - 104) U/L': '55', 'GGT (0 - 38) U/L': '25', 'LDH (0 - 247) U/L': '210', 'Glucose (3.9 - 6.4) mmol/L': '6', 'CRYO': 'Normal', 'Haptoglobin': 'Normal', notes: 'Follow up required', hospital: 'Hospital B', hasBorder: true },
];

const rows2 = [
  { date: '2024-03-20', 'Cyst C': 'Normal', 'CREA-P (45 - 84) μmol/L': '60', 'Urea (2.6 - 6.7) mmol/L': '5', 'Uric acid (155 - 357) μmol/L': '200', 'PreALb': 'Normal', notes: 'No comments', hospital: 'Hospital A', hasBorder: true },
  { date: '2024-03-21', 'Cyst C': 'Normal', 'CREA-P (45 - 84) μmol/L': '65', 'Urea (2.6 - 6.7) mmol/L': '6', 'Uric acid (155 - 357) μmol/L': '210', 'PreALb': 'Normal', notes: 'Follow up required', hospital: 'Hospital B', hasBorder: true },
];

const rows3 = [
  { date: '2024-03-20', 'Total Cholesterol (0 - 5) mmol/L': '4', 'HDL (1.55 - 5) mmol/L': '2', 'LDL (0 - 3.4) mmol/L': '3', 'LPA': 'Normal', 'Triglycerides (0 - 2.3) mmol/L': '1', 'Kappa Light Chains': 'Normal', 'Lambda Light Chains': 'Normal', 'Lipoprotein': 'Normal', notes: 'No comments', hospital: 'Hospital A', hasBorder: true },
  { date: '2024-03-21', 'Total Cholesterol (0 - 5) mmol/L': '4.5', 'HDL (1.55 - 5) mmol/L': '2.5', 'LDL (0 - 3.4) mmol/L': '3.2', 'LPA': 'Normal', 'Triglycerides (0 - 2.3) mmol/L': '1.5', 'Kappa Light Chains': 'Normal', 'Lambda Light Chains': 'Normal', 'Lipoprotein': 'Normal', notes: 'Follow up required', hospital: 'Hospital B', hasBorder: true },
];

const rows4 = [
  { date: '2024-03-20', 'α-Amylase (0 - 100) U/L': '50', 'Amylase-Pancr U/L': '30', 'Lipase (0 - 60) U/L': '40', notes: 'No comments', hospital: 'Hospital A', hasBorder: true },
  { date: '2024-03-21', 'α-Amylase (0 - 100) U/L': '55', 'Amylase-Pancr U/L': '35', 'Lipase (0 - 60) U/L': '45', notes: 'Follow up required', hospital: 'Hospital B', hasBorder: true },
];

const rows5 = [
  { date: '2024-03-20', 'Calcium(Total) (2.15 - 2.57) mmol/L': '2.3', 'Magnesium (0.77 - 1.03) mmol/L': '0.9', 'Iron (7 - 26.7) μmol/L': '15', 'Рhosphorus (0.84 - 1.46) mmol/L': '1.0', 'Na mmol/l': '140', 'K mmol/l': '4.0', 'Cl (98 - 107) mmol/l': '100', 'Cu': 'Normal', 'Ammonia': 'Normal', 'Bicarbonate': 'Normal', 'Fructosamine': 'Normal', notes: 'No comments', hospital: 'Hospital A', hasBorder: true },
  { date: '2024-03-21', 'Calcium(Total) (2.15 - 2.57) mmol/L': '2.4', 'Magnesium (0.77 - 1.03) mmol/L': '0.95', 'Iron (7 - 26.7) μmol/L': '16', 'Рhosphorus (0.84 - 1.46) mmol/L': '1.1', 'Na mmol/l': '142', 'K mmol/l': '4.2', 'Cl (98 - 107) mmol/l': '102', 'Cu': 'Normal', 'Ammonia': 'Normal', 'Bicarbonate': 'Normal', 'Fructosamine': 'Normal', notes: 'Follow up required', hospital: 'Hospital B', hasBorder: true },
];

const rows6 = [
  { date: '2024-03-20', 'PCT': 'Normal', 'IL6': 'Normal', 'RF (0 - 15) IU/mL': '10', 'CRP (0 - 1) mg/dL': '0.5', 'ASO (0 - 200) IU/mL': '150', notes: 'No comments', hospital: 'Hospital A', hasBorder: true },
  { date: '2024-03-21', 'PCT': 'Normal', 'IL6': 'Normal', 'RF (0 - 15) IU/mL': '12', 'CRP (0 - 1) mg/dL': '0.6', 'ASO (0 - 200) IU/mL': '160', notes: 'Follow up required', hospital: 'Hospital B', hasBorder: true },
];

const rows7 = [
  { date: '2024-03-20', 'Amphetamines': 'Negative', 'Barbiturates': 'Negative', 'Benzodiazepines': 'Negative', 'Cannabinoids': 'Negative', 'Cocain Metabolite': 'Negative', 'Ethanol': 'Negative', 'Methadone': 'Negative', 'EDDP': 'Negative', 'Opiates': 'Negative', 'Oxycodone': 'Negative', 'Phencyclidine': 'Negative', 'Propoxyphene': 'Negative', 'LSD': 'Negative', notes: 'No comments', hospital: 'Hospital A', hasBorder: true },
];

const rows8 = [
  { date: '2024-03-20', 'Amphetamines': 'Negative', 'Barbiturates': 'Negative', 'Benzodiazepines': 'Negative', 'Cannabinoids': 'Negative', 'Cocain Metabolite': 'Negative', 'Ethanol': 'Negative', 'Methadone': 'Negative', 'EDDP': 'Negative', 'Opiates': 'Negative', 'Oxycodone': 'Negative', 'Phencyclidine': 'Negative', 'Propoxyphene': 'Negative', 'LSD': 'Negative', notes: 'No comments', hospital: 'Hospital A', hasBorder: true },
];

const rows9 = [
  { date: '2024-03-20', 'Acetaminophen': 'Normal', 'Amikacin': 'Normal', 'Carbamazepine': 'Normal', 'Cyclosporine': 'Normal', 'C3': 'Normal', 'C4': 'Normal', 'IgA': 'Normal', 'IgE': 'Normal', 'IgG': 'Normal', 'IgM': 'Normal', 'Digitoxin': 'Normal', 'Digoxin': 'Normal', 'Gentamicin': 'Normal', 'Lithium': 'Normal', 'Lidocaine': 'Normal', 'MPA': 'Normal', 'free MPA': 'Normal', 'NAPA': 'Normal', 'Phenobarb': 'Normal', 'Phenytoin': 'Normal', 'Procainamide': 'Normal', 'Quinidine': 'Normal', 'Salicylate': 'Normal', 'Theophylline': 'Normal', 'Tobramycin': 'Normal', 'Valproic': 'Normal', 'Vancomycin': 'Normal', 'Ethanol Gen.2': 'Normal', 'PCP': 'Normal', 'THC': 'Normal', 'CHE': 'Normal', notes: 'No comments', hospital: 'Hospital A', hasBorder: true },
];

const rows10 = [
  { date: '2024-03-20', 'Ammonia measurement': 'Normal', 'Apolipoprotein B (substance)': 'Normal', 'AT III- Coagulogram': 'Normal', 'D-Dimer Coagulogramm': 'Normal', 'α1-Acid Glycoprotein': 'Normal', 'α1-Antitrypsin': 'Normal', 'α1-Microglobulin': 'Normal', 'β1-Microglobuline': 'Normal', 'APO A1 Lipid': 'Normal', 'APO B Lipids': 'Normal', 'Ceruloplasmin': 'Normal', 'Cholinesterase': 'Normal', 'HBDH': 'Normal', 'UIBC (21 - 84) μmol/L': '50', 'Transferrin saturation (15 - 50) %': '30', notes: 'No comments', hospital: 'Hospital A', hasBorder: true },
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

function BiochemistryTable() {
  const [tabValue, setTabValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Tabs value={tabValue} onChange={handleChange} className={classes.tabs}>
        <Tab label="Liver Function Test" className={classes.tab} />
        <Tab label="Kidney Function Test" className={classes.tab} />
        <Tab label="Lipids" className={classes.tab} />
        <Tab label="Pancreas Function Test" className={classes.tab} />
        <Tab label="Electrolytes" className={classes.tab} />
        <Tab label="Rheumatology" className={classes.tab} />
        <Tab label="Drugs of Abuse" className={classes.tab} />
        <Tab label="Specific Proteins" className={classes.tab} />
        <Tab label="Diabetes Test" className={classes.tab} />
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
      <TabPanel value={tabValue} index={5}>
        <Table columns={columns6} rows={rows6} />
      </TabPanel>
      <TabPanel value={tabValue} index={6}>
        <Table columns={columns7} rows={rows7} />
      </TabPanel>
      <TabPanel value={tabValue} index={7}>
        <Table columns={columns8} rows={rows8} />
      </TabPanel>
      <TabPanel value={tabValue} index={8}>
        <Table columns={columns9} rows={rows9} />
      </TabPanel>
      <TabPanel value={tabValue} index={9}>
        <Table columns={columns10} rows={rows10} />
      </TabPanel>
    </div>
  );
}

BiochemistryTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      align: PropTypes.string,
      width: PropTypes.string,
    })
  ),
  rows: PropTypes.arrayOf(PropTypes.object),
};

export default BiochemistryTable;