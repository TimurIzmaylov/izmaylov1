document.getElementById('variableTypeCheck').addEventListener('click', function() {
    let variable = 5;
    document.getElementById('variableTypeResult').textContent = typeof variable === 'number' ? 'Число' : 'Не число';
});

document.getElementById('zodiacSign').addEventListener('click', function() {
    let sign = prompt("Введите ваш знак зодиака:");
    switch (sign.toLowerCase()) {
        case 'овен':
            alert("Приветствие Овену!");
            break;
        case 'телец':
            alert("Приветствие Тельцу!");
            break;
        case 'близнецы':
            alert("Приветствие Близнецам!");
            break;
        case 'рак':
            alert("Приветствие Раку!");
            break;
        case 'лев':
            alert("Приветствие Льву!");
            break;
        case 'дева':
            alert("Приветствие Деве!");
            break;
        case 'весы':
            alert("Приветствие Весам!");
            break;
        case 'скорпион':
            alert("Приветствие Скорпиону!");
            break;
        case 'стрелец':
            alert("Приветствие Стрельцу!");
            break;
        case 'козерог':
            alert("Приветствие Козерогу!");
            break;
        case 'водолей':
            alert("Приветствие Водолею!");
            break;
        case 'рыбы':
            alert("Приветствие Рыбам!");
            break;
        default:
            alert("Неизвестный знак зодиака");
    }
});

document.getElementById('loopDisplay').addEventListener('click', function() {
    let forLoopResult = '';
    for (let i = 1; i <= 40; i++) {
        forLoopResult += i + ' ';
    }
    document.getElementById('forLoopResult').textContent = forLoopResult;

    let whileLoopResult = '';
    let j = 1;
    while (j <= 40) {
        whileLoopResult += j + ' ';
        j++;
    }
    document.getElementById('whileLoopResult').textContent = whileLoopResult;

    let doWhileLoopResult = '';
    let k = 1;
    do {
        doWhileLoopResult += k + ' ';
        k++;
    } while (k <= 40);
    document.getElementById('doWhileLoopResult').textContent = doWhileLoopResult;
});

document.getElementById('viralPage').addEventListener('click', function() {
    while (true) {
        alert("Вирусное сообщение!");
    }
});

document.getElementById('numberCheck').addEventListener('click', function() {
    let number;
    do {
        number = prompt("Введите число больше 5:");
        if (number === null || number.trim() === '') break;
    } while (isNaN(number) || number <= 5); 
    if (number > 5) {
        alert("Поздравляем! Вы ввели число " + number);
    }
});

document.getElementById('evenNumbers').addEventListener('click', function() {
    let result = '';
    for (let i = 8; i <= 20; i += 2) {
        result += i + ' ';
    }
    document.getElementById('evenNumbersResult').textContent = result;
});

document.getElementById('oddNumbers').addEventListener('click', function() {
    let result = '';
    for (let i = 1; i <= 7; i += 2) {
        if (i === 5) continue;
        result += i + ' ';
    }
    document.getElementById('oddNumbersResult').textContent = result;
});
