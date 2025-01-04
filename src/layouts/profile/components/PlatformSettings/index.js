import { useMemo } from "react";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import BubbleChart from "examples/Charts/BubbleChart";
import colors from "assets/theme/base/colors";

function DoctorPatientBubbleChart() {
  const chartData = {
    labels: ["Насанд хүрэгчид", "Хүүхэд", "Өндөр настан"],
    datasets: [
      {
        label: "Зүрх судасны өвчин",
        data: [
          { x: 1, y: 65, r: 20 }, // x: age group, y: visit frequency, r: patient count
          { x: 0, y: 10, r: 10 },
          { x: 2, y: 80, r: 25 },
        ],
        color: "info",
      },
      {
        label: "Даралт ихсэлт",
        data: [
          { x: 1, y: 55, r: 15 },
          { x: 0, y: 5, r: 5 },
          { x: 2, y: 70, r: 30 },
        ],
        color: "primary",
      },
      {
        label: "Чихрийн шижин",
        data: [
          { x: 1, y: 45, r: 18 },
          { x: 0, y: 8, r: 8 },
          { x: 2, y: 60, r: 22 },
        ],
        color: "warning",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || "";
            const count = context.raw.r;
            const frequency = context.raw.y;
            return `${label}: ${count} өвчтөн, ${frequency}% давтамжтай`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Насны ангилал",
        },
        ticks: {
          callback: (value) => chartData.labels[value],
        },
      },
      y: {
        title: {
          display: true,
          text: "Үзлэгийн давтамж (%)",
        },
      },
    },
  };

  const renderChart = (
    <SoftBox p={2}>
      <SoftBox mb={1}>
        <SoftTypography variant="h6">Өвчтөний тархалт</SoftTypography>
      </SoftBox>
      <SoftBox mb={2}>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          Насны бүлэг, өвчний төрөл, үзлэгийн давтамжаар
        </SoftTypography>
      </SoftBox>
      {useMemo(
        () => (
          <SoftBox height="400px">
            <BubbleChart
              title="Өвчтөний тархалт"
              description="Насны бүлэг, өвчний төрөл, үзлэгийн давтамжаар"
              chart={chartData}
              height="400px"
            />
          </SoftBox>
        ),
        []
      )}
    </SoftBox>
  );

  return <Card>{renderChart}</Card>;
}

export default DoctorPatientBubbleChart;