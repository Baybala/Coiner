import {
  Box,
  Container,
  LinearProgress,
  Pagination,
  Paper,
  Table,
  TableContainer,
  Typography,
} from "@mui/material";
import { useBodyContext } from "../BodyContext";
import TableHeader from "./TableHead";
import TableBod from "./TableBody";
import { ChangeEvent, useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

const Section2 = () => {
  const marketCoins = useBodyContext()[0];
  const loading = useBodyContext()[1];
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = marketCoins.length / 10;

  const [currentPageData, setCurrentPageData] = useState("");

  useEffect(() => {
    if (currentPage === 1) return setCurrentPageData(marketCoins.slice(0, 10));
    return setCurrentPageData(
      marketCoins.slice(currentPage * 10 - 10, currentPage * 10)
    );
  }, [currentPage, marketCoins]);

  interface TableData {
    id: String;
    image: String;
    symbol: String;
    name: String;
    current_price: Number;
    price_change_percentage_24h: Number;
    market_cap: Number;
  }

  const tableData = [
    {
      id: "Co01",
      head: "Coin",
      cell: (item: TableData) => [[item.image, item.symbol, item.name]],
    },
    {
      id: "Co02",
      head: "Price",
      cell: (item: TableData) => [item.current_price.toString()],
    },
    {
      id: "Co03",
      head: "24h Chamge",
      cell: (item: TableData) => [item.price_change_percentage_24h.toString()],
    },
    {
      id: "Co04",
      head: "Market Cap",
      cell: (item: TableData) => [item.market_cap.toString()],
    },
  ];

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <Box textAlign={"center"} id="Market">
      <Container>
        <Typography pt={5} color={"white"} fontSize={"40px"} id="scrolling">
          Market Review
        </Typography>
        {loading ? (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        ) : (
          <Paper elevation={24} sx={{ bgcolor: "inherit" }}>
            <TableContainer sx={{ mt: 6, borderRadius: "10px" }}>
              <Table>
                <TableHeader tableData={tableData} />
                <TableBod marketCoins={currentPageData} />
              </Table>
              <Box
                justifyContent="center"
                alignItems="center"
                display={"flex"}
                mt={3}
                mb={3}>
                <HashLink to="./#scrolling">
                  <Pagination
                    sx={{
                      "& .MuiPaginationItem-root": {
                        color: "white",
                      },
                    }}
                    count={pageCount}
                    color="primary"
                    onChange={handlePageChange}
                  />
                </HashLink>
              </Box>
            </TableContainer>
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default Section2;
