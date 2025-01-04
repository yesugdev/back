import React, { useState } from 'react';
import { Card, Grid, Button } from '@mui/material';
import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';
import SoftInput from 'components/SoftInput';
import DefaultLineChart from 'examples/Charts/LineCharts/DefaultLineChart';

// Sample chart data
const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Зүрхний цохилт',
      data: [65, 59, 80, 81, 56, 55, 40],
      color: 'info',
    },
    {
      label: 'Цусны даралт',
      data: [28, 48, 40, 19, 86, 27, 90],
      color: 'primary',
    },
  ],
};

function VitalSignsForm() {
  const [vitalSigns, setVitalSigns] = useState({
    heartRate: '',
    bloodPressure: '',
    temperature: '',
    respiratoryRate: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setVitalSigns({
      ...vitalSigns,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(vitalSigns);
  };

  return (
    <Card>
      <SoftBox p={3}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <SoftTypography variant="h6" fontWeight="medium">
                Амин үзүүлэлт
              </SoftTypography>
              <SoftBox mt={2}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <SoftInput
                      label="Зүрхний цохилт"
                      placeholder="Зүрхний цохилтыг оруулна уу"
                      name="heartRate"
                      value={vitalSigns.heartRate}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SoftInput
                      label="Цусны даралт"
                      placeholder="Цусны даралтыг оруулна уу"
                      name="bloodPressure"
                      value={vitalSigns.bloodPressure}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SoftInput
                      label="Температур"
                      placeholder="Температурыг оруулна уу"
                      name="temperature"
                      value={vitalSigns.temperature}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SoftInput
                      label="Амьсгалын хурд"
                      placeholder="Амьсгалын хурдыг оруулна уу"
                      name="respiratoryRate"
                      value={vitalSigns.respiratoryRate}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Илгээх
                    </Button>
                  </Grid>
                </Grid>
              </SoftBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultLineChart
                title="Амин үзүүлэлт хугацаагаар"
                description="Зүрхний цохилт ба цусны даралт"
                chart={chartData}
              />
            </Grid>
          </Grid>
        </form>
      </SoftBox>
    </Card>
  );
}

export default VitalSignsForm;