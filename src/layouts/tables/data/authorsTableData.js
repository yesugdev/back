import React, { memo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import SoftTypography from "components/SoftTypography";
import SoftBox from "components/SoftBox";
import SoftBadge from "components/SoftBadge";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

// Constants
const STATUS_COLORS = {
  "Элэгний үрэвсэл": "primary",
  "Ходоодны үрэвсэл": "secondary"
};

const COLUMNS = [
  { name: "name", align: "left", label: "Нэр" },
  { name: "age", align: "center", label: "Нас" },
  { name: "phone", align: "center", label: "Утас" },
  { name: "email", align: "center", label: "И-мэйл" },
  { name: "diagnosis", align: "center", label: "Онош" },
  { name: "registeredDate", align: "right", label: "Бүртгэгдсэн огноо" }
];

// Memoized Components
const ExamStatus = memo(({ status }) => (
  <SoftBadge
    variant="gradient"
    badgeContent={status}
    color={STATUS_COLORS[status] || "default"}
    size="xs"
    container
  />
));

ExamStatus.displayName = 'ExamStatus';
ExamStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

// Normalized data structure
const createTableRow = (patient) => ({
  id: patient._id, // Add this line to store ID
  name: (
    <Link to={`/patients/${patient._id}`}>
      <SoftTypography variant="button">
        {patient.name}
      </SoftTypography>
    </Link>
  ),
  age: <SoftTypography variant="caption">{patient.age}</SoftTypography>,
  phone: <SoftTypography variant="caption">{patient.phone}</SoftTypography>,
  email: <SoftTypography variant="caption">{patient.email}</SoftTypography>,
  diagnosis: <ExamStatus status={patient.diagnosis} />,
  registeredDate: (
    <SoftTypography variant="caption" color="secondary">
      {new Date(patient.registeredDate).toLocaleDateString()}
    </SoftTypography>
  ),
});

const ExamTable = memo(() => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/patients');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setPatients(data.map(createTableRow));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const handleRowClick = (event, patientId) => {
    event.preventDefault();
    navigate(`/patients/${patientId}`);
  };

  if (loading) return (
    <SoftBox display="flex" justifyContent="center" p={2}>
      <CircularProgress />
    </SoftBox>
  );

  if (error) return (
    <Alert severity="error">
      Error loading patients: {error}
    </Alert>
  );

  return (
    <SoftBox>
      <SoftBox>
        {patients.map((row, index) => (
          <SoftBox 
            key={row.id || index}
            display="flex" 
            justifyContent="space-between" 
            mb={1}
            onClick={(e) => handleRowClick(e, row.id)}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              padding: '12px',
              borderRadius: '8px',
            }}
          >
            <SoftBox flex={1}>{row.name}</SoftBox>
            <SoftBox flex={1} textAlign="center">{row.age}</SoftBox>
            <SoftBox flex={1} textAlign="center">{row.phone}</SoftBox>
            <SoftBox flex={1} textAlign="center">{row.email}</SoftBox>
            <SoftBox flex={1} textAlign="center">{row.diagnosis}</SoftBox>
            <SoftBox flex={1} textAlign="right">{row.registeredDate}</SoftBox>
          </SoftBox>
        ))}
      </SoftBox>
    </SoftBox>
  );
});

ExamTable.displayName = 'ExamTable';

const examTableData = {
  columns: COLUMNS,
  async getRows() {
    try {
      const response = await fetch('http://localhost:5000/api/patients');
      if (!response.ok) throw new Error('Failed to fetch patients');
      
      const patients = await response.json();
      return patients.map(patient => ({
        name: (
          <SoftTypography variant="button" component={Link} to={`/patients/${patient._id}`}>
            {patient.name}
          </SoftTypography>
        ),
        age: <SoftTypography variant="caption">{patient.age}</SoftTypography>,
        phone: <SoftTypography variant="caption">{patient.phone}</SoftTypography>,
        email: <SoftTypography variant="caption">{patient.email}</SoftTypography>,
        diagnosis: <ExamStatus status={patient.diagnosis} />,
        registeredDate: (
          <SoftTypography variant="caption" color="secondary">
            {new Date(patient.registeredDate).toLocaleDateString()}
          </SoftTypography>
        )
      }));
    } catch (error) {
      console.error('Error fetching patients:', error);
      return [];
    }
  }
};

export { COLUMNS, ExamStatus };
export default examTableData;