import React, { useState } from 'react';
import { Card, Grid, Tabs, Tab, Box, TextField} from '@mui/material';
import PropTypes from 'prop-types';
import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';
import { makeStyles } from '@mui/styles';

import Rapid_test from '../Tables/Rapid_test';
import ViralLoadTest from '../Tables/ViralLoadTest';
import BiochemistryTable from '../Tables/Biochemistry';
import HematologyTable from '../Tables/Hematology';
import CoagulogramTable from '../Tables/Coagulogram';
import ImmunologyTable from '../Tables/Immunology';
import Immunology1Table from '../Tables/Immunology1';
import Immunology2Table from '../Tables/Immunology2';
import Immunology3Table from '../Tables/Immunology3';
import AntiHDVTable from '../Tables/AntiHDV';
import IronTable from '../Tables/Iron';
import VitaminD3Table from '../Tables/VitaminD3';
import COVID19_PCRTable from '../Tables/COVID19_PCR';
import UrinalysisTable from '../Tables/Urinalysis';
import MiniVidasTable from '../Tables/MiniVidas';
import MiniVidasTable1 from '../Tables/MiniVidas1';
import MiniVidasTable2 from '../Tables/MiniVidas2';
import MiniVidasTable3 from '../Tables/MiniVidas3';

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
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function TestResultsForm() {
  const [tabValue, setTabValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Card>
      <SoftBox p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SoftTypography variant="h6" fontWeight="medium">
              Шинжилгээ
            </SoftTypography>
          </Grid>
          <Grid item xs={12}>
            <Tabs value={tabValue} onChange={handleChange} aria-label="test result tabs" className={classes.tabs}>
              <Tab label="Rapid Tests" className={classes.tab} />
              <Tab label="Viral Load Tests" className={classes.tab} />
              <Tab label="Biochemistry" className={classes.tab} />
              <Tab label="Hematology" className={classes.tab} />
              <Tab label="Coagulogram" className={classes.tab} />
              <Tab label="Immunology" className={classes.tab} />
              <Tab label="Anti-HDV" className={classes.tab} />
              <Tab label="Iron Exchange" className={classes.tab} />
              <Tab label="Vitamin D3" className={classes.tab} />
              <Tab label="COVID-19 PCR" className={classes.tab} />
              <Tab label="Urinalysis" className={classes.tab} />
              <Tab label="MiniVidas" className={classes.tab} />
            </Tabs>
          </Grid>
          <Grid item xs={12}>
            <TabPanel value={tabValue} index={0} >
              <Rapid_test />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
            <ViralLoadTest/>
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
            <BiochemistryTable/>
            </TabPanel>
            <TabPanel value={tabValue} index={3}>
            <HematologyTable/>
            </TabPanel>
            <TabPanel value={tabValue} index={4}>
            <CoagulogramTable/>
            </TabPanel>
            <TabPanel value={tabValue} index={5}>
             <ImmunologyTable/>
             <Immunology1Table/>
             <Immunology2Table/>
             <Immunology3Table/>
            </TabPanel>
            <TabPanel value={tabValue} index={6}>
            <AntiHDVTable/>
            </TabPanel>
            <TabPanel value={tabValue} index={7}>
             <IronTable/>
            </TabPanel>
            <TabPanel value={tabValue} index={8}>
              <VitaminD3Table/>
            </TabPanel>
            <TabPanel value={tabValue} index={9}>
              <COVID19_PCRTable/>
            </TabPanel>
            <TabPanel value={tabValue} index={10}>
              <UrinalysisTable/>
            </TabPanel>
            <TabPanel value={tabValue} index={11}>
            <MiniVidasTable/>
            <MiniVidasTable1/>
            <MiniVidasTable2/>
            <MiniVidasTable3/>
            </TabPanel>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default TestResultsForm;