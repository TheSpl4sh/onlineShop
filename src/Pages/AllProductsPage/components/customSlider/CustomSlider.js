import * as React from "react";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const AirbnbSlider = styled(Slider)(({ theme }) => ({
		maxWidth: 175,
  color: "#000000",
  height: 2,

  "& .MuiSlider-thumb": {
    height: 10,
    width: 10,
    backgroundColor: "#DFDFDF",
    border: "2px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
  },
  "& .input": {
    backgroundColor: "#d500000",
    color: "#d500000",
    marginTop: 0,
  },
  "& .MuiSlider-track": {
    height: 2,
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 2,
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

export default function CustomizedSlider() {
  const [values, setValues] = React.useState([0, 15000]);
  
  const handleChange = (event, newValue) => {
    setValues(newValue);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 3, maxWidth: 550 }}>
      <label>Ціна:</label>
      <AirbnbSlider
        slots={{ thumb: AirbnbThumbComponent }}
        value={values}
        onChange={handleChange}
      >
        <span id="minimum-price">Minimum price</span>
        <span id="maximum-price">Maximum price</span>
      </AirbnbSlider>
      
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <TextField
          label=""
          value={values[0]}
          inputProps={{ min: 0, max: 15000 }}
          onChange={(e) =>
            handleChange(null, [e.target.valueAsNumber, values[1]])
          }
        />
        <TextField
          label=""
          value={values[1]}
          inputProps={{ min: 0, max: 15000 }}
          onChange={(e) =>
            handleChange(null, [values[0], e.target.valueAsNumber])
          }
        />
      </Box>
    </Box>
  );
}
