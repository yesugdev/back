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

const DepartmentStatus = ({ stats }) => {
  const getStatusColor = (label, value) => {
    if (label === 'Яаралтай үзлэг' && value > 0) return 'error.main';
    if (label === 'Хүлээгдэж буй' && value > 3) return 'warning.main';
    return 'text.main';
  };

  return (
    <Card>
      <SoftBox p={2}>
        <SoftTypography variant="h6" fontWeight="medium">
          Тасгийн мэдээлэл
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
                      color: (theme) => getStatusColor(label, value)
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
};

DepartmentStatus.propTypes = {
  stats: PropTypes.shape({
    'Нийт өвчтөн': PropTypes.number.isRequired,
    'Хүлээгдэж буй': PropTypes.number.isRequired,
    'Яаралтай үзлэг': PropTypes.number.isRequired,
    'Идэвхтэй эмч': PropTypes.number.isRequired,
  }).isRequired,
};

export default DepartmentStatus;