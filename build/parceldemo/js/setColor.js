//setColor.js

function setColor(tip) {
	let color;
	switch (tip) {
		case '原谅的颜色':
			color = '#00db00'
			break;
		case '寂寞的颜色':
			color = '#ffff37'
			break;
		case '花儿的颜色':
			color = '#f75000'
			break;
		default:
			color = '#000'
			break;
	}
	return color;
}

module.exports = {
	setColor: setColor
}