const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const priceElements = document.querySelectorAll('.price');
	let total = 0;

	priceElements.forEach(item => {
		total += parseInt(item.textContent, 10);
	});

	const table = document.querySelector('table');

	const newRow = document.createElement('tr');
	const newCell = document.createElement('td');

	newCell.textContent = total;

	newRow.appendChild(newCell);
	table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

