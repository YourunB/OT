const question = document.getElementById('question');
const answer = 	document.getElementById('answer');
const clear = 	document.getElementById('clear');

const data = [
	{ question: "Противошоковый набор включает следующие лекарственные препараты:", answer: "Эпинефрин" },
	{ question: "Препаратом выбора для оказания первой медицинской помощи при анафилаксии следует считать:", answer: "Эпинефрин" },
	{ question: "Эпинефрин при оказании первой помощи при анафилаксии следует вводить:", answer: "Внутримышечно" },
];

const getAnswer = () => {
	const chars = question.value.toLowerCase();
	let result = "";
	
	for (let i = 0; i < data.length; i += 1) {
		if (data[i].question.toLowerCase().indexOf(chars) !== -1) {
			result += `\nВопрос: ${data[i].question}\nОтвет: ${data[i].answer}\n`;
		}
	}

	if (chars.length > 0) answer.innerText = result;
	else answer.innerText = '';
}

const clearInput = () => {
	question.value = '';
	answer.innerText = '';
}

question.addEventListener('input', getAnswer);
clear.addEventListener('click', clearInput);