import { TableCell, TableHead, TableRow } from "@mui/material";

const TableHeader = ({ tableData }) => {
  return (
    <TableHead sx={{ bgcolor: "yellow" }}>
      <TableRow>
        {tableData.map((head, index) => (
          <TableCell key={head.id} sx={{ color: "black", fontSize: "20px" }}>
            {index === 0 ? (
              <div>{head.head}</div>
            ) : (
              <div
                style={{
                  textAlign: "right",
                }}>
                {head.head}
              </div>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
