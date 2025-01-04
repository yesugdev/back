
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples

import PageLayout from "examples/LayoutContainers/PageLayout";


function CoverLayout({ color, header, title, description, image, top, children }) {
  return (
    <PageLayout sx={{ backgroundColor: "#D5ECEA" }}>

      <Grid
        container
        justifyContent="center"
        sx={{
          minHeight: "75vh",
          margin: 0,
        }}
      >
        <Grid item xs={11} sm={8} md={5} xl={3}>
          <SoftBox mt={top}>
            <SoftBox pt={3} px={3}>
              {!header ? (
                <>
                  <SoftBox mb={1}>
                    <SoftTypography variant="h3" fontWeight="bold" color={color} textGradient>
                      {title}
                    </SoftTypography>
                  </SoftBox>
                  <SoftTypography variant="body2" fontWeight="regular" color="text">
                    {description}
                  </SoftTypography>
                </>
              ) : (
                header
              )}
            </SoftBox>
            <SoftBox p={3}>{children}</SoftBox>
          </SoftBox>
        </Grid>
        <Grid item xs={15} md={5}>
  <SoftBox
    height="900px"
    display={{ xs: "none", md: "block" }}
    position="relative"
    right={{ md: "-12rem", xl: "-16rem" }}
    mr={-16}
    sx={{
      overflow: "hidden",
      borderBottomLeftRadius: ({ borders: { borderRadius } }) => borderRadius.lg,
    }}
  >
    <SoftBox
      ml={-8}
      height="100%"
      width="100%"
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",  // Adjust image position here
        filter: "blur(0px)",
      }}
    />
     <SoftBox
      ml={-8}
      height="100%"
      width="100%"
      position="absolute"
      top={0}
      left={0}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.6)",  // White color with opacity
        backdropFilter: "blur(1px)",  // Additional blur effect
      }}
    />
     <img
       src={require("assets/images/curved-images/download.png")}
      alt="Download"
      style={{
        position: "absolute",
        top: "50%", 
        left: "50%",
        transform: "translate(-50%, -50%)", // Center the image
        zIndex: 2, // Ensures the image is above other layers
        width: "auto", // Set width or adjust as needed
        height: "200px", // Adjust the height as needed
      }}
    />

  </SoftBox>
</Grid>

      </Grid>
    
    </PageLayout>
  );
}

// Setting default values for the props of CoverLayout
CoverLayout.defaultProps = {
  header: "",
  title: "",
  description: "",
  color: "info",
  top: 20,
};

// Typechecking props for the CoverLayout
CoverLayout.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  top: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default CoverLayout;
