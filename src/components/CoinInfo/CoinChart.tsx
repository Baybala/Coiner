import {
  Box,
  Button,
  CircularProgress,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

interface HistoryData {
  prices: [number, number][];
}

interface CoinChartProps {
  historyData?: HistoryData;
  buttonClicked: (item: { value: number }) => void; //(item: {}) => void;
  currentDisplayDays: number;
  loadingChartData: boolean;
}

const theme = createTheme({
  palette: {
    success: {
      main: "rgb(19, 18, 18)",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
  },
});

const CoinChart: React.FC<CoinChartProps> = ({
  historyData,
  buttonClicked,
  currentDisplayDays,
  loadingChartData,
}) => {
  const dates = historyData?.prices.map(([timestamp]) => {
    const d = new Date(timestamp);
    return currentDisplayDays > 1
      ? `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
      : `${d.getHours()}:${d.getMinutes()}`;
  });

  const datas = historyData?.prices.map(([, price]) => price);
  const buttonData = [
    { name: "24 Hour", value: 1, isActive: currentDisplayDays === 1 },
    { name: "30 Days", value: 30, isActive: currentDisplayDays === 30 },
    { name: "3 Months", value: 90, isActive: currentDisplayDays === 90 },
    { name: "1 Year", value: 360, isActive: currentDisplayDays === 360 },
  ];

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Lable",
        data: datas,
        borderWidth: 1,
        borderColor: "yellow",
      },
    ],
  };

  const options = {
    elements: {
      point: {
        radius: 1,
      },
    },
  };

  return (
    <Box
      height={"100%"}
      mt={15}
      p={5}
      sx={{
        borderLeft: "1px solid gray",
        width: { xs: "100%", md: "70%" },
      }}>
      {loadingChartData ? (
        <CircularProgress />
      ) : (
        <ThemeProvider theme={theme}>
          <Line data={data} options={options} />
          <Box>
            {buttonData.map((item) => (
              <Button
                variant="contained"
                color="success"
                onClick={() => buttonClicked(item)}
                sx={{
                  width: "20%",
                  margin: "2%",
                  border: "1px solid yellow",
                  bgcolor: item.isActive ? "#E3D026" : "black",
                  color: "white",
                }}
                key={item.value}>
                {item.name}
              </Button>
            ))}
          </Box>
        </ThemeProvider>
      )}
    </Box>
  );
};

export default CoinChart;
