import { Box, LinearProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import { CoinInfoById, HystoryEndPoint } from "../../services/APIservices";
import axios from "axios";
import { useEffect, useState } from "react";
import CoinChart from "./CoinChart";
import CoinGenInfo from "./CoinGenInfo";

const CoinInfo = () => {
  const prop = useLocation();

  const [coinInfoGenerated, setCoinInfoGenerated] = useState();

  const [historyData, setHistoryData] = useState();

  const [historyOfDays, setHistoryOfData] = useState<number>(30);

  const [loadingPageData, setLoadingPageData] = useState(true);

  const [loadingChartData, setLoadingChartData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const infoURL = CoinInfoById(prop.state.key.id);
        const response = await axios.get(infoURL);

        setCoinInfoGenerated(response.data);
        setLoadingPageData(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [prop]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const infoURL = HystoryEndPoint(prop.state.key.id, historyOfDays);
        const response = await axios.get(infoURL);

        setHistoryData(response.data);
        setLoadingChartData(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [historyOfDays, prop]);

  const handleClick = (item: { value: number }) => {
    setHistoryOfData(item.value);
  };

  return (
    <Box
      width={"100%"}
      height={"auto"}
      flexDirection={"row"}
      sx={{
        display: { md: "flex" },
      }}>
      {loadingPageData ? (
        <LinearProgress color="secondary" sx={{ mt: "50px" }} />
      ) : (
        <>
          <CoinGenInfo genData={coinInfoGenerated} propData={prop} />
          <CoinChart
            historyData={historyData}
            buttonClicked={handleClick}
            currentDisplayDays={historyOfDays}
            loadingChartData={loadingChartData}
          />
        </>
      )}
    </Box>
  );
};

export default CoinInfo;
