const titleProject = prompt("Название проекта?") || "Без названия";
const screensValue = prompt("Какие экраны нужны? (например, шаблонные, с уникальным дизайном, с анимациями)") || "Не указано";
const responsive = confirm("Нужен ли респонсивный сайт?");

const service1 = prompt("Какой сервис нужен?") || "Не указано";
const servicePrice1 = +prompt("Сколько это будет стоить?") || 0;

const service2 = prompt("Какой еще сервис нужен?") || "Не указано";
const servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?") || 0;

const screenPrice = 5000;
const fullPrice = screenPrice + servicePrice1 + servicePrice2;

const percentage = 15;
const servicePercentPrice = Math.round(fullPrice * (1 - percentage / 100));

if (fullPrice > 50000) {
    console.log("Сделаем скидку 10%");
} else if (fullPrice > 20000 && fullPrice <= 50000) {
    console.log("Сделаем скидку 5%");
} else if (fullPrice > 0 && fullPrice <= 20000) {
    console.log("Скидка не предусмотрена");
} else {
    console.log("Что-то пошло не так");
}

// Проверяем, нужен ли респонсив
const responsiveText = responsive ? "Нужен" : "Не нужен";

console.log("Название проекта:", titleProject);
console.log("Типы экранов:", screensValue);
console.log("Респонсивный сайт:", responsiveText);
console.log("Доп. сервис 1:", service1, "| Цена:", servicePrice1);
console.log("Доп. сервис 2:", service2, "| Цена:", servicePrice2);
console.log("Общая стоимость проекта:", fullPrice);
console.log("Сумма после вычета процента:", servicePercentPrice);