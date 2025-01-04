import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import PaymentList from "layouts/billing/components/PaymentList";
import PaymentStatus from "layouts/billing/components/PaymentStatus";
import BillingInformation from "./components/BillingInformation";
import Transactions from "./components/Transactions";
function PaymentDashboard() {
  const payments = [
    {
      time: '09:00',
      patient: 'Б.Болд',
      service: 'Үзлэг',
      amount: '45,000₮',
      status: 'Төлбөр хүлээгдэж буй',
    },
    {
      time: '10:30',
      patient: 'Д.Сүхбат',
      service: 'Шинжилгээ',
      amount: '120,000₮', 
      status: 'Төлөгдсөн',
    },
  ];

  const paymentStats = {
    'Нийт орлого': '4,500,000₮',
    'Өнөөдрийн орлого': '650,000₮',
    'Төлөгдөөгүй': '180,000₮',
    'Буцаалт': '25,000₮',
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Нийт орлого" }}
                count="4.5M₮"
                percentage={{ color: "success", text: "+12%" }}
                icon={{ color: "info", component: "payments" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Өнөөдрийн орлого" }}
                count="650K₮"
                percentage={{ color: "success", text: "+5%" }}
                icon={{ color: "info", component: "today" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Төлөгдөөгүй" }}
                count="180K₮"
                percentage={{ color: "warning", text: "-2%" }}
                icon={{ color: "info", component: "pending" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Буцаалт" }}
                count="25K₮"
                percentage={{ color: "error", text: "+12%" }}
                icon={{ color: "info", component: "replay" }}
              />
            </Grid>
          </Grid>
        </SoftBox>

        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <PaymentList payments={payments} />
            </Grid>
            <Grid item xs={12} lg={4}>
              <PaymentStatus stats={paymentStats} />
            </Grid>
          </Grid>
        </SoftBox>

        <SoftBox my={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Card>
                <SoftBox p={2}>
                  <SoftTypography variant="h6" fontWeight="medium">
                    Төлбөрийн мэдээлэл
                  </SoftTypography>
                  <SoftBox mt={2}>
                  <BillingInformation/>
                  </SoftBox>
                </SoftBox>
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card>
                <SoftBox p={2}>
                  <SoftTypography variant="h6" fontWeight="medium">
                    Гүйлгээний мэдээлэл
                  </SoftTypography>
                  <SoftBox mt={2}>
                  <Transactions/>
                  </SoftBox>
                </SoftBox>
              </Card>
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default PaymentDashboard;
