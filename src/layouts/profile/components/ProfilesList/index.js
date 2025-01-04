// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function ProfilesList({ title, profiles }) {
  const renderProfiles = profiles.map(({ icon, name, description, action }) => (
    <SoftBox key={name} component="li" display="flex" alignItems="center" py={1} mb={1}>
      <SoftBox mr={2}>
        <Icon>{icon}</Icon>
      </SoftBox>
      <SoftBox
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="text">
          {description}
        </SoftTypography>
      </SoftBox>
      <SoftBox ml="auto">
        {action.type === "internal" ? (
          <SoftButton component={Link} to={action.route} variant="text" color="info">
            {action.label}
          </SoftButton>
        ) : (
          <SoftButton
            component="a"
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="text"
            color={action.color}
          >
            {action.label}
          </SoftButton>
        )}
      </SoftBox>
    </SoftBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SoftTypography>
      </SoftBox>
      <SoftBox p={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      action: PropTypes.shape({
        type: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        color: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
};

export default ProfilesList;




//Hereglee usage ingej hereglene
// const profilesListData = [
//   {
//     icon: "person",
//     name: "Д.Сүхбат",
//     description: "Зүрхний хэм алдагдал, цусны даралт ихсэх",
//     action: {
//       type: "internal",
//       route: "/patient/details",
//       label: "Дэлгэрэнгүй",
//       color: "info",
//     },
//   },
//   {
//     icon: "person",
//     name: "Б.Оюунаа",
//     description: "Ходоодны өвчин, хоолны дуршил буурах",
//     action: {
//       type: "internal",
//       route: "/patient/details",
//       label: "Дэлгэрэнгүй",
//       color: "info",
//     },
//   },
//   {
//     icon: "person",
//     name: "Г.Батаа",
//     description: "Элэгний үзлэг",
//     action: {
//       type: "internal",
//       route: "/patient/details",
//       label: "Дэлгэрэнгүй",
//       color: "info",
//     },
//   },
// ];

// export default profilesListData;