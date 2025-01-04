import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import TreatmentTable from '../Tables/Treatment_table';
import TreatmentInformation from '../Tables/Treatment_information';
// Define custom styles
const useStyles = makeStyles({
  tabs: {
    fontFamily: 'Arial, sans-serif', // Change this to your desired font
    fontSize: '16px', // Change this to your desired font size
  },
  tab: {
    fontFamily: 'Arial, sans-serif', // Change this to your desired font
    fontSize: '16px', // Change this to your desired font size
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
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

function TreatmentForm() {
  const [tabValue, setTabValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Tabs value={tabValue} onChange={handleChange} className={classes.tabs}>
        <Tab label="Эмчилгээ" className={classes.tab} />
        <Tab label="Эмчилгээ нэмэх" className={classes.tab} />
        <Tab label="Цахим жор" className={classes.tab} />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
      <TreatmentInformation/>
        
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
      <TreatmentTable/>
        
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
      
        {/* Content for Цахим жор */}
        {/* Add more form fields */}
      </TabPanel>
    </div>
  );
}

export default TreatmentForm;