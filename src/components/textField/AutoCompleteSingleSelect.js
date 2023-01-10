import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";

export default function AutoCompleteSingleSelect(props) {
  const [title, setTitle] = React.useState();
  console.log(title);
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      sx={{ width: 300 }}
      {...props}
    />
  );
}

// use

{
  /* <AutoCompleteSingleSelect
options={"pass array of object"}
onChange={(event, values) => console.log(values)}
renderInput={(params) => (
  <TextField
    {...params}
    label="Movie"
    focused
    placeholder="Select"
    onChange={(e) => console.log(e.target.value)}
    onKeyDownCapture={(e) => OnKeyCapture(e)}
  />
)}
/> */
}
