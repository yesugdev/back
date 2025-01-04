import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import Patients from "layouts/patients";
import PatientProfile from "layouts/patientProfile"; // Add this
// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import PeopleIcon from '@mui/icons-material/People';
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import ContactPageIcon from '@mui/icons-material/ContactPage';

const routes = [

  // { type: "title", title: "", key: "account-pages" },
  {
    type: "collapse",
    name: "Эмч",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },

  // Add this new route
  {
    type: "collapse",
    name: "Өвчтөний мэдээлэл",
    key: "patient-profile",
    route: "/patients/:id",
    icon: <ContactPageIcon size="12px" />,
    component: <PatientProfile />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Хянах самбар",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Үйлчлүүлэгчийн дараалал",
    key: "tables",
    route: "/tables",
    icon: <PeopleIcon size="12px" />,
    component: <Tables />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "MedТөлөлт",
    key: "billing",
    route: "/billing",
    icon: <CreditCard size="12px" />,
    component: <Billing />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Үйлчлүүлэгч",
    key: "patients",
    route: "/patients",
    icon: <ContactPageIcon size="12px" />,
    component: <Patients />,
    noCollapse: true,
  },
  {
    key: "tables3",
    route: "/authentication/sign-in",
    component: <SignIn />,
    noCollapse: false,
  },
  
  

];

export default routes;
