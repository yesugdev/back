import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Billing page components
import Transaction from "layouts/billing/components/Transaction";

function Transactions() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Таны гүйлгээ
        </SoftTypography>
        <SoftBox display="flex" alignItems="flex-start">
          <SoftBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </SoftBox>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            3-р сарын 23 - 30, 2020
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox pt={3} pb={2} px={2}>
        <SoftBox mb={2}>
          <SoftTypography
            variant="caption"
            color="text"
            fontWeight="bold"
            textTransform="uppercase"
          >
            хамгийн сүүлд
          </SoftTypography>
        </SoftBox>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="error"
            icon="arrow_downward"
            name="Үзлэгийн төлбөр"
            description="2020 оны 3-р сарын 27, 12:30 PM"
            value="- 45,000���"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Шинжилгээний төлбөр"
            description="2020 оны 3-р сарын 27, 04:30 AM"
            value="+ 120,000₮"
          />
        </SoftBox>
        <SoftBox mt={1} mb={2}>
          <SoftTypography
            variant="caption"
            color="text"
            fontWeight="bold"
            textTransform="uppercase"
          >
            өчигдөр
          </SoftTypography>
        </SoftBox>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Эмийн төлбөр"
            description="2020 оны 3-р сарын 26, 13:45 PM"
            value="+ 75,000₮"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Эмчилгээний төлбөр"
            description="2020 оны 3-р сарын 26, 12:30 PM"
            value="+ 100,000₮"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Мэс заслын төлбөр"
            description="2020 оны 3-р сарын 26, 08:30 AM"
            value="+ 250,000₮"
          />
          <Transaction
            color="dark"
            icon="priority_high"
            name="Төлбөр хүлээгдэж буй"
            description="2020 оны 3-р сарын 26, 05:00 AM"
            value="Хүлээгдэж буй"
          />
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Transactions;
