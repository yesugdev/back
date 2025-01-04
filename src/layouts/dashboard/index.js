import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import AppointmentList from "layouts/dashboard/data/AppointmentList";
import DepartmentStatus from "layouts/dashboard/data/DepartmentStatus";

function Dashboard() {
  const patientChartData = {
    labels: ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"],
    datasets: {
      label: "Өвчтөний тоо",
      data: [30, 45, 37, 52, 48, 25, 20],
    },
  };

  const treatmentChartData = {
    labels: ["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар"],
    datasets: [
      {
        label: "Амбулатори",
        data: [50, 40, 60, 45, 55, 48],
      },
      {
        label: "Хэвтэн",
        data: [30, 35, 25, 40, 30, 35],
      },
    ],
  };

  const appointments = [
    {
      time: '09:00',
      patient: 'Б.Болд',
      type: 'Үзлэг',
      status: 'Хүлээгдэж буй',
    },
    {
      time: '10:30',
      patient: 'Д.Сүхбат',
      type: 'Дахин үзлэг',
      status: 'Батлагдсан',
    },
  ];

  const departmentStats = {
    'Нийт өвчтөн': 32,
    'Хүлээгдэж буй': 5,
    'Яаралтай үзлэг': 2,
    'Идэвхтэй эмч': 8,
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Нийт өвчтөн" }}
                count="1,205"
                percentage={{ color: "success", text: "+12%" }}
                icon={{ color: "info", component: "group" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Өнөөдрийн үзлэг" }}
                count="42"
                percentage={{ color: "success", text: "+5%" }}
                icon={{ color: "info", component: "assignment" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Хэвтэн эмчлүүлэгч" }}
                count="28"
                percentage={{ color: "warning", text: "-2%" }}
                icon={{ color: "info", component: "local_hospital" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Яаралтай үзлэг" }}
                count="6"
                percentage={{ color: "error", text: "+12%" }}
                icon={{ color: "info", component: "emergency" }}
              />
            </Grid>
          </Grid>
        </SoftBox>

        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <ReportsBarChart
                title="7 хоногийн өвчтөний тоо"
                description="Өвчтөний ирцийн статистик"
                chart={patientChartData}
              />
            </Grid>
            <Grid item xs={12} lg={5}>
              <GradientLineChart
                title="Эмчилгээний төрөл"
                description="Амбулатори болон хэвтэн эмчлүүлэгчдийн харьцаа"
                height="20.25rem"
                chart={treatmentChartData}
              />
            </Grid>
          </Grid>
        </SoftBox>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Card>
              <SoftBox p={2}>
                <SoftTypography variant="h6">Өнөөдрийн цаг</SoftTypography>
                <SoftBox mt={2}>
                  <AppointmentList appointments={appointments} />
                </SoftBox>
              </SoftBox>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <SoftBox p={2}>
                <SoftTypography variant="h6">Тасгийн мэдээлэл</SoftTypography>
                <SoftBox mt={2}>
                  <DepartmentStatus stats={departmentStats} />
                </SoftBox>
              </SoftBox>
            </Card>
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
