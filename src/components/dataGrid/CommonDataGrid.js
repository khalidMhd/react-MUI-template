import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { LinearProgress } from "@mui/material";

export default function CommonDataGridPage(props) {
  const { rows, columns, loader = false } = props;

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={rows}
        loading={loader}
        components={{ Toolbar: GridToolbar, LoadingOverlay: LinearProgress }}
      />
    </div>
  );
}
