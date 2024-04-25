import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from 'axios';

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

export default function CustomizedSlider({ onValuesChange, maxPrice }) {

	const [values, setValues] = useState([0, maxPrice !== undefined ? maxPrice : 100]);
	
	const handleChange = (event, newValue) => {
	  setValues(newValue);
	  if (typeof onValuesChange === 'function') {
		onValuesChange(newValue);
	  }
	};
	
	useEffect(() => {
	  const applyFilters = async () => {
		try {
		  const response = await axios.get('/api/catalog-filter', {
			params: {
			  price: {
				min: values[0],
				max: values[1],
			  },
			},
		  });
	
		  if (response.data.length > 0) {
			let maxPrice = response.data[0].price;
			response.data.forEach(product => {
			  if (product.price > maxPrice) {
				maxPrice = product.price;
			  }
			});
			console.log('Максимальна ціна:', maxPrice);
		  } else {
			console.log('No products found');
		  }
	
		} catch (error) {
		  console.error('Error fetching filtered catalog:', error);
		}
	  };
	
	  applyFilters();
	}, [values]);
	
	return (
	  <Box sx={{ display: "flex", alignItems: "center", gap: 3, maxWidth: 550 }}>
		<label>Ціна:</label>
		<AirbnbSlider
		  slots={{ thumb: AirbnbThumbComponent }}
		  value={values}
		  onChange={handleChange}
		/>
	
		<Box sx={{ display: "flex", justifyContent: "space-between" }}>
		  <TextField
			label=""
			value={values[0]}
			inputProps={{ min: values[0], max: values[1] }}
			onChange={(e) => setValues([e.target.valueAsNumber, values[1]])}
		  />
		  <TextField
			label=""
			value={values[1]}
			inputProps={{ min: values[0], max: values[1] }}
			onChange={(e) => setValues([values[0], e.target.valueAsNumber])}
		  />
		</Box>
	  </Box>
	);
  }
  
  


