const secondsElement = document.querySelector('#seconds');
const minutesElement = document.querySelector('#minutes');
const hoursElement = document.querySelector('#hours');
const daysElement = document.querySelector('#days');
const nextYearElement = document.querySelector('#year');
const loadingElement = document.querySelector('#loading');
const countdownElement = document.querySelector('#countdown');

const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

nextYearElement.textContent = nextYear;

const getTimeUnit = unit => (unit < 10 ? `0${unit}` : unit);
const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
	secondsElement.textContent = getTimeUnit(seconds);
	minutesElement.textContent = getTimeUnit(minutes);
	hoursElement.textContent = getTimeUnit(hours);
	daysElement.textContent = getTimeUnit(days);
};

const updateCountDown = () => {
	const currentDate = new Date();
	const difference = newYearTime - currentDate;
	const days = Math.floor(difference / 1000 / 60 / 60 / 24);
	const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(difference / 1000 / 60) % 60;
	const seconds = Math.floor(difference / 1000) % 60;

	insertCountdownValues({ days, hours, minutes, seconds });
};

const handleCountDownDisplay = () => {
	loadingElement.remove();
	countdownElement.style.display = 'flex';
};

setTimeout(handleCountDownDisplay, 1000);

setInterval(updateCountDown, 1000);
