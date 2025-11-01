let buttons = document.querySelectorAll(".button");
let resetButton = document.querySelector(".reset");

let turnX = true;
let gameOver = false;

const win = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		if (gameOver) return;
		if (!turnX) {
			button.innerText = "O";
			turnX = true;
		} else {
			button.innerText = "X";
			turnX = false;
		}
		button.disabled = true;
		winCheck();
		if (!gameOver) drawCheck();
	});
});

const winCheck = () => {
	for (let pattern of win) {
		let val1 = buttons[pattern[0]].innerText;
		let val2 = buttons[pattern[1]].innerText;
		let val3 = buttons[pattern[2]].innerText;

		if (val1 != "" && val2 != "" && val3 != "") {
			if (val1 === val2 && val2 === val3) {
				alert(val1 + " wins!");
				gameOver = true;
				buttons.forEach((button) => (button.disabled = true));
			}
		}
	}
};
const resetGame = () => {
	buttons.forEach((button) => {
		button.innerText = "";
		button.disabled = false;
		turnX = true;
		gameOver = false;
	});
};

resetButton.addEventListener("click", resetGame);

const drawCheck = () => {
	let count = 0;
	buttons.forEach((button) => {
		if (button.innerText != "") {
			count++;
		}
	});

	if (count === 9 && !gameOver) {
		alert("It's a draw!");
		gameOver = true;
	}
};
