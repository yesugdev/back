import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="billing-information">
      <SoftBox pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium">
          Төлбөрийн мэдээлэл
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={1} pb={2} px={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="Б.Болд"
            company="MedLiver Hospital"
            email="bold@medliver.mn"
            vat="MLH123456"
          />
          <Bill
            name="Д.Сүхбат"
            company="MedLiver Hospital"
            email="sukhbat@medliver.mn"
            vat="MLH123457"
          />
          <Bill
            name="Г.Оюун"
            company="MedLiver Hospital"
            email="oyun@medliver.mn"
            vat="MLH123458"
            noGutter
          />
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default BillingInformation;
