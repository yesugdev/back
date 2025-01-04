import { Card, Grid, MenuItem, TextField } from "@mui/material";
import PropTypes from "prop-types";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function PatientInfoForm({ id, firstName, lastName, age, gender, height, weight, lastService, supervisingDoctor, status }) {
  return (
    <Card>
      <SoftBox p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SoftTypography variant="h6" fontWeight="medium">
              Өвчтөний мэдээлэл
            </SoftTypography>
          </Grid>

          {/* Personal Information */}
          <Grid item xs={12} md={4}>
            <SoftBox mt={2}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                   color="secondary"
                    label="Регистрийн дугаар"
                    placeholder="Регистрийн дугаараа оруул"
                    value={id}
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                   color="secondary"
                    label="Нэр"
                    placeholder="Нэрээ оруул"
                    value={firstName}
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                   color="secondary"
                    label="Овог"
                    placeholder="Овгийг оруул"
                    value={lastName}
                    fullWidth
                    variant="standard"
                  />
                </Grid>
              </Grid>
            </SoftBox>
          </Grid>

          <Grid item xs={12} md={4}>
            <SoftBox mt={2}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                   color="secondary"
                    label="Нас"
                    placeholder="Насаа оруул"
                    value={age}
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                   color="secondary"
                    select
                    label="Хүйс"
                    value={gender}
                    fullWidth
                    variant="standard"
                  >
                    <MenuItem value="male">Эр</MenuItem>
                    <MenuItem value="female">Эм</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                   color="secondary"
                    label="Өндөр"
                    placeholder="Өндрийг оруул"
                    value={height}
                    fullWidth
                    variant="standard"
                  />
                </Grid>
              </Grid>
            </SoftBox>
          </Grid>

          <Grid item xs={12} md={4}>
            <SoftBox mt={2}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                   color="secondary"
                    label="Жин"
                    placeholder="Жинг оруул"
                    value={weight}
                    fullWidth
                    variant="standard"
                  />
                </Grid>
          
                <Grid item xs={12}>
                  <TextField
                   color="secondary"
                    label="Хяналтын эмч"
                    placeholder="Enter supervising doctor"
                    value={supervisingDoctor}
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                <TextField
                   color="secondary"
                    select
                    label="Төрөл"
                    value={gender}
                    fullWidth
                    variant="standard"
                  >
                    <MenuItem value="doctor">Эмч</MenuItem>
                    <MenuItem value="patient">Өвчтөн</MenuItem>
                  </TextField>
                </Grid>
              </Grid>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

PatientInfoForm.propTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  gender: PropTypes.oneOf(['male', 'female', 'other']),
  height: PropTypes.string,
  weight: PropTypes.string,
  lastService: PropTypes.string,
  supervisingDoctor: PropTypes.string,
  status: PropTypes.oneOf(['patient', 'doctor', 'nurse']),
};

PatientInfoForm.defaultProps = {
  id: '',
  firstName: '',
  lastName: '',
  age: 0,
  gender: 'male',
  height: '',
  weight: '',
  lastService: '',
  supervisingDoctor: '',
  status: 'patient',
};
export function getPatientInfo({ id, firstName, lastName, age, gender, height, weight, lastService, supervisingDoctor, status }) {
  return { id, firstName, lastName, age, gender, height, weight, lastService, supervisingDoctor, status };
}
export default PatientInfoForm;