// Создает переменную с текущей датой в формате day_month_year

const date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();

if (month.toString().length === 1) {
	month = `0${month}`;
}

if (day.toString().length === 1) {
	day = `0${day}`;
}

const currentDate = `_${day}_${month}_${date.getFullYear()}`;

export default currentDate;
