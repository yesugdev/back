// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Header from "layouts/patients/components/Header";
function Patients() {

  return (
    <DashboardLayout>
        <Header />
      
      <Footer />
    </DashboardLayout>
  );
}

export default Patients;
