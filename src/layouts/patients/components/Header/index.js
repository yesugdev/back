import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import ContactMailIcon from '@mui/icons-material/ContactMail';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import breakpoints from "assets/theme/base/breakpoints";

// Images
import zurag from "assets/images/patient.png";
import curved0 from "assets/images/curved-images/curved0.jpg";

// Import your form components
import PatientInfoForm, { getPatientInfo } from "../Forms/PatientInfoForm";
import VitalSignsForm from "../Forms/VitalSignsForm";
import TestResultsForm from "../Forms/TestResultsForm"; 
import TreatmentForm from "../Forms/TreatmentForm";

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index} style={{ marginTop: "20px" }}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

// Add PropTypes validation
TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

function Header() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    window.addEventListener("resize", handleTabsOrientation);

    handleTabsOrientation();

    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  const patientProps = {
    id: 'P001',
    firstName: 'Yesug',
    lastName: 'Bekhbold',
    age: 21,
    gender: 'Male',
    height: '5.8',
    weight: '70',
    lastService: '2024-11-12',
    supervisingDoctor: 'Dr. Bekhbold',
    status: 'Өвчтөн',
  };

  const patientInfo = getPatientInfo(patientProps);

  return (
    <SoftBox position="relative">
      <DashboardNavbar absolute light />
      <SoftBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.6),
              rgba(gradients.info.state, 0.6)
            )}, url(${curved0})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Card
        sx={{
          backdropFilter: `saturate(200%) blur(30px)`,
          backgroundColor: ({ functions: { rgba }, palette: { white } }) => rgba(white.main, 0.8),
          boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
          position: "relative",
          mt: -8,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <SoftAvatar
              src={zurag}
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid item>
            <SoftBox height="100%" mt={0.5} lineHeight={1}>
              <SoftTypography variant="h5" fontWeight="medium">
                {patientInfo.firstName} {patientInfo.lastName}
              </SoftTypography>
              <SoftTypography variant="button" color="text" fontWeight="medium">
                {patientInfo.status}
                <br />
                Сүүлийн үйлчилгээ : {patientInfo.lastService}
              </SoftTypography>

              
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={6} lg={7} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs
                orientation={tabsOrientation}
                value={tabValue}
                onChange={handleSetTabValue}
                sx={{ background: "transparent" }}
              >
                <Tab label="Өвчтөний мэдээлэл" icon={<ContactMailIcon />} />
                <Tab label="Амин үзүүлэлт" icon={<MonitorHeartIcon />} />
                <Tab label="Шинжилгээ" icon={<LocalHospitalIcon />} />
                <Tab label="Эмчилгээ" icon={<VaccinesIcon />} />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </Card>
      {/* Add TabPanels */}
      <TabPanel value={tabValue} index={0}>
        <PatientInfoForm 
          id={patientInfo.id}
          firstName={patientInfo.firstName}
          lastName={patientInfo.lastName}
          age={patientInfo.age}
          gender={patientInfo.gender}
          height={patientInfo.height}
          weight={patientInfo.weight}
          supervisingDoctor={patientInfo.supervisingDoctor}
          status={patientInfo.status}
        />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <VitalSignsForm />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <TestResultsForm />
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        <TreatmentForm />
      </TabPanel>
    </SoftBox>
  );
}

export default Header;