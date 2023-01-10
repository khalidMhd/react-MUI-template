import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function AutoCompleteMultiSelect(props) {
  return (
    <Autocomplete
      multiple
      id="tags-outlined"
      filterSelectedOptions
      size="small"
      {...props}
    />
  );
}

// use

// const [data, setData] = React.useState([]);
//   const handleChange = async (event, values) => {
//     const isSelected = data.some(
//       (el) => el.title === values[values.length - 1].title
//     );
//     if (!isSelected) {
//       setData((oldArray) => [...oldArray, values[values.length - 1]]);
//       return true;
//     }
//     return false;
//   };

{
  /* <AutoCompleteMultiSelect
        options={top100Films.filter(
          (item1) => !data.some((item2) => item2.title === item1.title)
        )}
        getOptionLabel={(option) => option.title}
        defaultValue={data}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="filterSelectedOptions"
            placeholder="Favorites"
            focused
          />
        )}
      /> */
}
