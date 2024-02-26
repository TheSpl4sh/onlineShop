export function Size() {
	return (
	  <label>
		Розмір:
		<select name="Size">
		  <option value="40">40(eu)</option>
		  <option value="41">41(eu)</option>
		  <option value="42">42(eu)</option>
		</select>
	  </label>
	);
  }

  export function Color() {
	return (
	  <label>
		Колір:
		<select name="Color">
		  <option value="white">білий</option>
		  <option value="black">чорний</option>
		  <option value="red">червоний</option>
		</select>
	  </label>
	);
  }

  export function Material() {
	return (
	  <label>
		Матеріал:
		<select name="Material">
		  <option value="leather">Шкіряні</option>
		  <option value="dermantine">Дерматинові</option>
		  <option value="velor">Велюрові</option>
		</select>
	  </label>
	);
  }