import React, { memo, useState, useEffect } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import SoftTypography from "components/SoftTypography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

import examTableData from "layouts/tables/data/authorsTableData";
import AddPatientData from "layouts/tables/data/addPatientData"; // Adjust the import path as needed

const Tables = memo(() => {
  const { columns = [] } = examTableData || {};
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [tableRows, setTableRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRows = async () => {
      try {
        const data = await examTableData.getRows();
        const formattedData = data
        
        .map(patient => ({
          id: patient._id,
          name: patient.name, // Plain text instead of Link component
          age: patient.age,
          phone: patient.phone,
          email: patient.email,
          diagnosis: patient.diagnosis,
          registeredDate: patient.registeredDate
        }));
        setTableRows(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRows();
  }, []);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async (newPatient) => {
    try {
      setTableRows(prev => [...prev, newPatient]);
      handleClose();
    } catch (error) {
      console.error('Error saving patient:', error);
    }
  };

  const handleRowClick = (patientId) => {
    if (!patientId) {
      console.error('No patient ID provided');
      return;
    }
    console.log('Navigating to patient:', patientId); // Debug log
    navigate(`/patients/${patientId}`);
  };

  // Calculate pagination
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedRows = tableRows.slice(startIndex, endIndex);
  const totalPages = Math.ceil(tableRows.length / rowsPerPage);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box p={1}>

        <Box p = {1} m = {2}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
        Шинэ өвчтөн нэмэх
        </Button>
        </Box>
        <Card>
          <Box p={2} m  = {2}>
            <TableContainer>
              <Table>
                
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell key={column.name} align={column.align}>
                        <SoftTypography variant="caption" fontWeight="bold">
                          {column.label}
                        </SoftTypography>
                      </TableCell>
                    ))}
                  </TableRow>
                    
                    
                <TableBody>
                  {paginatedRows.map((row) => (
                    <TableRow 
                      key={row.id}
                      onClick={() => handleRowClick(row.id)}
                      sx={{
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.04)',
                        },
                      }}
                    >
                      {columns.map((column) => (
                        <TableCell 
                          key={column.name} 
                          align={column.align}
                        >
                          {row[column.name]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            
            {/* Pagination Controls */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={3}>
              <SoftTypography variant="caption">
                Showing {startIndex + 1}-{Math.min(endIndex, tableRows.length)} of {tableRows.length} entries
              </SoftTypography>
              
              <Stack spacing={2}>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                  size="small"
                  showFirstButton
                  showLastButton
                />
              </Stack>
            </Box>
          </Box>
        </Card>
      </Box>
      <Footer />
      <AddPatientData open={open} onClose={handleClose} onSave={handleSave} />
    </DashboardLayout>
  );
});

export default Tables;
