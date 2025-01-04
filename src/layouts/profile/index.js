import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "layouts/profile/components/ProfileInfoCard";
import ProfilesList from "layouts/profile/components/ProfilesList";
import DefaultProjectCard from "layouts/profile/components/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import DoctorPatientBubbleChart from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <DoctorPatientBubbleChart />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <ProfileInfoCard
              title="Эмчийн мэдээлэл"
              description="Мэргэжил: Дотрын эмч. Туршлага: 10 жил. Мэргэшсэн чиглэл: Зүрх судасны өвчин"
              info={{
                fullName: "Б.Болд",
                mobile: "99887766",
                email: "bold@hospital.mn",
                department: "Дотрын тасаг",
                workingHours: "Даваа-Баасан 09:00-18:00",
                specialization: "Дотрын эмч",
              }}
              social={[
                {
                  link: "https://www.facebook.com/doctor",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
              ]}
              action={{ route: "", tooltip: "Мэдээлэл засах" }}
            />
          </Grid>
          <Grid item xs={12} xl={4}>
            <ProfilesList title="Харьяалагдах өвчтөнүүд" profiles={profilesListData} />
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox mb={3}>
        <Card>
          <SoftBox pt={2} px={2}>
            <SoftBox mb={0.5}>
              <SoftTypography variant="h6" fontWeight="medium">
                Өвчтөн үзэх цаг
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={1}>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                Өнөөдрийн цагийн хуваарь
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  label="09:00-10:00"
                  title="Д.Сүхбат"
                  description="Зүрхний хэм алдагдал, цусны даралт ихсэх"
                  action={{
                    type: "internal",
                    route: "/patient/details",
                    color: "info",
                    label: "Дэлгэрэнгүй",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  label="10:00-11:00"
                  title="Б.Оюунаа"
                  description="Ходоодны өвчин, хоолны дуршил буурах"
                  action={{
                    type: "internal",
                    route: "/patient/details",
                    color: "info",
                    label: "Дэлгэрэнгүй",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  label="11:00-12:00"
                  title="Г.Батаа"
                  description="Элэгний үзлэг"
                  action={{
                    type: "internal",
                    route: "/patient/details",
                    color: "info",
                    label: "Дэлгэрэнгүй",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <PlaceholderCard title={{ variant: "h5", text: "Шинэ цаг нэмэх" }} outlined />
              </Grid>
            </Grid>
          </SoftBox>
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
