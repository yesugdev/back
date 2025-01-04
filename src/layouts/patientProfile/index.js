import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Card from "@mui/material/Card";

function PatientProfile() {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/patients/${id}`);
        const data = await response.json();
        setPatient(data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchPatient();
  }, [id]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <Card>
          <SoftBox p={3}>
            {loading ? (
              <SoftTypography>Loading...</SoftTypography>
            ) : patient ? (
              <>
                <SoftTypography variant="h4" gutterBottom>
                  {patient.name}
                </SoftTypography>
                <SoftBox mt={2}>
                  <SoftTypography>Нас: {patient.age}</SoftTypography>
                  <SoftTypography>Утас: {patient.phone}</SoftTypography>
                  <SoftTypography>И-мэйл: {patient.email}</SoftTypography>
                  <SoftTypography>Онош: {patient.diagnosis}</SoftTypography>
                  <SoftTypography>
                    Бүртгэгдсэн: {new Date(patient.registeredDate).toLocaleDateString()}
                  </SoftTypography>
                </SoftBox>
              </>
            ) : (
              <SoftTypography>Patient not found</SoftTypography>
            )}
          </SoftBox>
        </Card>
      </SoftBox>
    </DashboardLayout>
  );
}

export default PatientProfile;