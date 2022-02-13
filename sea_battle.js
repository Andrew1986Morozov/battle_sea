var randomDigit = Math.floor(Math.random() * 5)
var location1 = randomDigit;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while(isSunk == false){
	guess = prompt("Привет! Это мини-игра Морской бой. По горизонтали есть 7 ячеек (от 0 до 6), в них находится трёхпалубный корабль. Ты готов выстрелить? (Введи цифру 0-6):"); // null
	if(guess < 0 || guess > 6){
		alert("Пожалуйста, введи цифру от 0 до 6");
	}else{
		guesses = guesses + 1;
		if(guess == location1 || guess == location2 || guess == location3){
			alert("Есть попадание!")
			hits = hits + 1;
			if(hits == 3){
				isSunk = true;
				alert("Ты потопил корабль врага!")
			}
		}else{
			alert("Мимо :)")
		}
	}
}

var status = "Всего выстрелов: " + guesses + ".  Твоя меткость = " + ((3/guesses)*100 + "%");
alert(status)