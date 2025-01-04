import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import SoftBox from "components/SoftBox";
import { useSoftUIController, setLayout } from "context";

function DashboardLayout({ children }) {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav } = controller;
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "dashboard");
  }, [pathname]);

  return (
    <SoftBox
      sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        p: 3,
        position: "relative",
        paddingLeft: miniSidenav ? pxToRem(60) : pxToRem(180), // Further reduced padding
        [breakpoints.up("xl")]: {
          marginLeft: miniSidenav ? pxToRem(60) : pxToRem(180), // Further reduced left margin
          transition: transitions.create(["margin-left", "margin-right"], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
        [breakpoints.down("sm")]: {
          marginLeft: miniSidenav ? pxToRem(20) : pxToRem(100), // Even smaller for mobile devices
          paddingLeft: miniSidenav ? pxToRem(20) : pxToRem(100), // Adjust padding for mobile
        },
      })}
    >
      {children}
    </SoftBox>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
