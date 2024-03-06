import * as React from "react";
import { styled, Box } from "@mui/system";
import { Slider as BaseSlider, sliderClasses } from "@mui/base/Slider";

import "./CustomSlider.scss";

export default function CustomSlider() {
  const [value, setValue] = React.useState([0, 15000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: 550,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <label>Ціна:</label>
      <Slider
        value={value}
        onChange={handleChange}
        getAriaLabel={() => "Price range"}
        min={0}
        max={15000}
      />
      {/* <div className="input-blok"> */}
        <input
          className="input-field"
          type="text"
          value={value[0]}
          onChange={(e) =>
            handleChange(e, [parseInt(e.target.value), value[1]])
          }
        />
        <hr className="input-line"></hr>
        <input
          className="input-field"
          type="text"
          value={value[1]}
          onChange={(e) =>
            handleChange(e, [value[0], parseInt(e.target.value)])
          }
        />
      {/* </div> */}
    </Box>
  );
}

const Slider = styled(BaseSlider)(
  () => `
  color: #000000;
  height: 2px;
  width: 100%;
  max-width: 175px;
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  & .${sliderClasses.rail} {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 6px;
    background-color: #DFDFDF;
  }

  & .${sliderClasses.track} {
    display: block;
    position: absolute;
    height: 2px;
    border-radius: 6px;
    background-color: currentColor;
  }

  & .${sliderClasses.thumb} {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-left: -6px;
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    transition-property: box-shadow, transform;
    transition-timing-function: ease;
    transition-duration: 120ms;
    transform-origin: center;
    background-color: #ffffff;
    box-shadow: 0 0 0 2px #000000; 
  }
`
);