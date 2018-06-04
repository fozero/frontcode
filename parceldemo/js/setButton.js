// setButton.js

function setButton(arr) {
	let btnHtml = '';
	for(let i of arr) {
		btnHtml += `
			<button class="btn" type="button">${i}</button>
		`
	}
	return btnHtml;
}

module.exports = {
	setButton: setButton
}