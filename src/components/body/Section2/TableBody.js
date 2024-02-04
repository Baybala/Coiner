import { TableBody, TableCell, TableRow } from "@mui/material";
import { addCommasToNumber } from "../../Tools/CommaSeperation";
import { addPlusAndColor } from "../../Tools/AddPlusAndColor";
import { useNavigate } from "react-router-dom";

const TableBod = ({ marketCoins }) => {
  const nav = useNavigate();

  const navigate = (data) => {
    nav(`/coin/${data.name}`, { state: { key: data } });
  };

  return (
    <TableBody>
      {marketCoins.map((marketData) => (
        <TableRow
          onClick={() => navigate(marketData)}
          hover
          sx={{ backgroundColor: "#0d0c0f", cursor: "pointer" }}
          key={marketData.id}>
          <TableCell>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}>
              <img
                style={{ width: "60px" }}
                src={marketData.image}
                alt={marketData.name}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "left",
                  marginLeft: "15px",
                  color: "white",
                }}>
                <span style={{ fontSize: "20px" }}>
                  {`${marketData.symbol}`.toUpperCase()}
                </span>
                <span style={{ color: "yellow", fontWeight: "bolder" }}>
                  {marketData.name}
                </span>
              </div>
            </div>
          </TableCell>
          <TableCell sx={{ textAlign: "right", color: "white" }}>
            {`$ ${marketData.current_price}`}
          </TableCell>
          <TableCell
            sx={{
              textAlign: "right",
              color: addPlusAndColor(marketData.price_change_24h).color,
            }}>
            {`${
              addPlusAndColor(marketData.price_change_24h).sign
            } ${marketData.price_change_24h.toFixed(2)}`}
          </TableCell>
          <TableCell sx={{ color: "white", textAlign: "right" }}>
            {addCommasToNumber(marketData.market_cap)}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableBod;

// {tableData.map((item, index) => {
//                       return (
//                         <TableCell sx={{ color: "white" }} >
//                           {item.cell(marketData).map((i) => {
//                             return index === 0 ? (
//                               <div
//                                 style={{
//                                   display: "flex",
//                                   flexDirection: "row",
//                                 }}>
//                                 <img
//                                   style={{ width: "60px" }}
//                                   src={i[0].toString()}
//                                   alt={"d"}
//                                 />
//                                 <div
//                                   style={{
//                                     display: "flex",
//                                     flexDirection: "column",
//                                     justifyContent: "center",
//                                     marginLeft: "15px",
//                                   }}>
//                                   <span>{i[1]}</span>
//                                   <span>{i[2]}</span>
//                                 </div>
//                               </div>
//                             ) : (
//                               <div
//                                 style={{
//                                   textAlign: "right",
//                                 }}>
//                                 {addCommasToNumber(i)}
//                               </div>
//                             );
//                           })}
//                         </TableCell>
//                       );
//                     })}
