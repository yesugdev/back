// src/components/PaymentStatus/index.js
import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Card
} from '@mui/material';
import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';

const getValueColor = (label, value) => {
  if (label === 'Төлөгдөөгүй' && parseFloat(value.replace(/[^0-9.-]+/g,"")) > 0) {
    return 'error.main';
  }
  if (label === 'Буцаалт') {
    return 'warning.main';
  }
  return 'text.main';
};

const PaymentStatus = ({ stats }) => (
  <Card>
    <SoftBox p={2}>
      <SoftTypography variant="h6" fontWeight="medium">
        Төлбөрийн тойм
      </SoftTypography>
      <SoftBox mt={2}>
        <Table>
          <TableBody>
            {Object.entries(stats).map(([label, value]) => (
              <TableRow key={label}>
                <TableCell 
                  sx={{ 
                    borderBottom: "none",
                    py: 1,
                    px: 2,
                    fontSize: "0.875rem"
                  }}
                >
                  {label}
                </TableCell>
                <TableCell 
                  align="right"
                  sx={{ 
                    borderBottom: "none",
                    py: 1,
                    px: 2,
                    fontSize: "0.875rem",
                    fontWeight: "medium",
                    color: (theme) => getValueColor(label, value)
                  }}
                >
                  {value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </SoftBox>
    </SoftBox>
  </Card>
);

PaymentStatus.propTypes = {
  stats: PropTypes.shape({
    'Нийт орлого': PropTypes.string.isRequired,
    'Өнөөдрийн орлого': PropTypes.string.isRequired,
    'Төлөгдөөгүй': PropTypes.string.isRequired,
    'Буцаалт': PropTypes.string.isRequired,
  }).isRequired,
};

export default PaymentStatus;