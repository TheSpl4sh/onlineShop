import * as React from "react";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "#3a8589",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 3,
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 3,
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

export default function CustomizedSlider() {
  const [values, setValues] = React.useState([0, 15000]);
   /*const MIN= 0;*/
  // const MIN= 0;
  // const MAX= 15000;
  

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
      {/* <AirbnbSlider
        slots={{ thumb: AirbnbThumbComponent }}
        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
        value={values}
        onChange={handleChange}
      /> */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <TextField
          // label="Minimum price"
          label=""
          value={values[0]}
          // InputProps={{ inputProps: { min: 0, max: 15000 } }}
          inputProps={{ min: 0, max: 15000 }}
          onChange={(e) =>
            handleChange(null, [e.target.valueAsNumber, values[1]])
          }
        />
        <TextField
          // label="Maximum price"
          label=""
          value={values[1]}
          // InputProps={{ inputProps: { min: 0, max: 15000 } }}
          inputProps={{ min: 0, max: 15000 }}
          onChange={(e) =>
            handleChange(null, [values[0], e.target.valueAsNumber])
          }
        />
      </Box>
    </Box>
  );
}

// ====================
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Slider, { SliderThumb } from '@mui/material/Slider';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';

// const AirbnbSlider = styled(Slider)(({ theme }) => ({
//   color: '#3a8589',
//   height: 3,
//   padding: '13px 0',
//   '& .MuiSlider-thumb': {
//     height: 27,
//     width: 27,
//     backgroundColor: '#fff',
//     border: '1px solid currentColor',
//     '&:hover': {
//       boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
//     },
//     '& .airbnb-bar': {
//       height: 9,
//       width: 1,
//       backgroundColor: 'currentColor',
//       marginLeft: 1,
//       marginRight: 1,
//     },
//   },
//   '& .MuiSlider-track': {
//     height: 3,
//   },
//   '& .MuiSlider-rail': {
//     color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
//     opacity: theme.palette.mode === 'dark' ? undefined : 1,
//     height: 3,
//   },
// }));

// function AirbnbThumbComponent(props) {
//   const { children, ...other } = props;
//   return (
//     <SliderThumb {...other}>
//       {children}
//       <span className="airbnb-bar" />
//       <span className="airbnb-bar" />
//       <span className="airbnb-bar" />
//     </SliderThumb>
//   );
// }

// AirbnbThumbComponent.propTypes = {
//   children: PropTypes.node,
// };

// export default function CustomizedSlider() {
//   return (
//     <Box sx={{ width: 220 }}>

//       <AirbnbSlider
//         slots={{ thumb: AirbnbThumbComponent }}
//         getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
//         defaultValue={[0, 15000]}
//       />
//     </Box>
//   );
// }
