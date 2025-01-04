// src/components/PaymentList/index.js
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
  switch (status) {
    case 'Төлөгдсөн':
      return 'success';
    case 'Төлбөр хүлээгдэж буй':
      return 'warning';
    case 'Цуцлагдсан':
      return 'error';
    default:
      return 'info';
  }
};

const PaymentList = ({ payments = [] }) => (
  <Card>
    <SoftBox p={2}>
      <SoftTypography variant="h6" fontWeight="medium">
        Төлбөрийн жагсаалт
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
                  Үйлчилгээ
                </TableCell>
                <TableCell sx={{ fontWeight: 'medium', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                  Дүн
                </TableCell>
                <TableCell sx={{ fontWeight: 'medium', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                  Төлөв
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payments.length > 0 ? (
                payments.map((payment) => (
                  <TableRow key={`${payment.time}-${payment.patient}`}>
                    <TableCell sx={{ py: 1.5, px: 2, borderBottom: 'none' }}>
                      {payment.time}
                    </TableCell>
                    <TableCell sx={{ py: 1.5, px: 2, borderBottom: 'none' }}>
                      {payment.patient}
                    </TableCell>
                    <TableCell sx={{ py: 1.5, px: 2, borderBottom: 'none' }}>
                      {payment.service}
                    </TableCell>
                    <TableCell sx={{ py: 1.5, px: 2, borderBottom: 'none' }}>
                      {payment.amount}
                    </TableCell>
                    <TableCell sx={{ py: 1.5, px: 2, borderBottom: 'none' }}>
                      <Chip 
                        label={payment.status}
                        color={getStatusColor(payment.status)}
                        size="small"
                        sx={{ 
                          fontWeight: 'medium',
                          fontSize: '0.75rem'
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    Төлбөрийн мэдээлэл байхгүй байна
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </SoftBox>
    </SoftBox>
  </Card>
);

PaymentList.propTypes = {
  payments: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      patient: PropTypes.string.isRequired,
      service: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['Төлөгдсөн', 'Төлбөр хүлээгдэж буй', 'Цуцлагдсан']).isRequired,
    })
  ),
};

PaymentList.defaultProps = {
  payments: [],
};

export default PaymentList;