// src/components/AppointmentList/index.jsx
import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  Chip
} from '@mui/material';
import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'батлагдсан':
      return 'success';
    case 'хүлээгдэж буй':
      return 'warning';
    case 'цуцлагдсан':
      return 'error';
    default:
      return 'info';
  }
};

const AppointmentList = ({ appointments }) => (
  <Card>
    <SoftBox p={2}>
      <SoftTypography variant="h6" fontWeight="medium">
        Өнөөдрийн цаг
      </SoftTypography>
      <SoftBox mt={2}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'medium', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                  Цаг
                </TableCell>
                <TableCell sx={{ fontWeight: 'medium', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                  Өвчтөн
                </TableCell>
                <TableCell sx={{ fontWeight: 'medium', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                  Төрөл
                </TableCell>
                <TableCell sx={{ fontWeight: 'medium', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                  Статус
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={`${appointment.time}-${appointment.patient}`}>
                  <TableCell sx={{ py: 1.5, px: 2, borderBottom: 'none' }}>
                    {appointment.time}
                  </TableCell>
                  <TableCell sx={{ py: 1.5, px: 2, borderBottom: 'none' }}>
                    {appointment.patient}
                  </TableCell>
                  <TableCell sx={{ py: 1.5, px: 2, borderBottom: 'none' }}>
                    {appointment.type}
                  </TableCell>
                  <TableCell sx={{ py: 1.5, px: 2, borderBottom: 'none' }}>
                    <Chip 
                      label={appointment.status}
                      color={getStatusColor(appointment.status)}
                      size="small"
                      sx={{ 
                        fontWeight: 'medium',
                        fontSize: '0.75rem'
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </SoftBox>
    </SoftBox>
  </Card>
);

AppointmentList.propTypes = {
  appointments: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      patient: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['Батлагдсан', 'Хүлээгдэж буй', 'Цуцлагдсан']).isRequired,
    })
  ).isRequired,
};

export default AppointmentList;