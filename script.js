/*
var n = document.getElementsByClassName("block-quote");
var n2 = document.getElementsByClassName("block-author");
var arrQ = [];	
var arrA = [];	
for(var i = 0; i < n.length; i++) {
	arrQ[i] = n.item([i]).innerText;
	arrA[i] = n2.item([i]).lastElementChild.textContent;
};	
arrQ;
arrA;
*/

// https://www.brainyquote.com/top_100_quotes

//( function(){

	// Создаем переменные для хранения информации о здоровье и счете
	var health = document.getElementById('health'),
		score = document.getElementById('score'),
		healthCount,
		scoreCount;

	// Массивы с вопросами и ответами. Основной контент игры. 
	var arrA = ["John Keats", "Ernest Hemingway", "Franklin D. Roosevelt", "Heraclitus", "Indira Gandhi", "A. P. J. Abdul Kalam", "Amelia Earhart", "Henry James", "Leonardo da Vinci", "Jane Austen", "Edgar Allan Poe", "Francis of Assisi", "Napoleon Hill", "Thomas Carlyle", "Susan B. Anthony", "Sun Tzu", "Walt Whitman", "George Orwell", "John Galsworthy", "Albert Einstein", "Aldous Huxley", "Thomas Jefferson", "Lao Tzu", "Anne Frank", "Thomas A. Edison", "Benjamin Franklin", "Thomas Aquinas", "John C. Maxwell", "Marcus Aurelius", "Milton Berle", "Mark Twain", "Marcel Proust", "Margaret Mead", "Plato", "Thomas Paine", "Leo Buscaglia", "Swami Vivekananda", "Euripides", "Desmond Tutu", "Soren Kierkegaard", "Dr. Seuss", "Nelson Mandela", "Norman Vincent Peale", "Robert Frost", "Loretta Young", "Albert Camus", "Og Mandino", "Winston Churchill", "Ralph Waldo Emerson", "Aristotle", "Mahatma Gandhi"];
	var arrQ =  ["I love you the more in that I believe you had liked me for my own sake and for nothing else.", "But man is not made for defeat. A man can be destroyed but not defeated.", "When you reach the end of your rope, tie a knot in it and hang on.", "There is nothing permanent except change.", "You cannot shake hands with a clenched fist.", "Let us sacrifice our today so that our children can have a better tomorrow.", "The most difficult thing is the decision to act, t…and the procedure, the process is its own reward.", "Do not mind anything that anyone tells you about a…else. Judge everyone and everything for yourself.", "Learning never exhausts the mind.", "There is no charm equal to tenderness of heart.", "All that we see or seem is but a dream within a dream.", "Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.", "If you cannot do great things, do small things in a great way.", "Permanence, perseverance and persistence in spite …ings distinguishes the strong soul from the weak.", "Independence is happiness.", "The supreme art of war is to subdue the enemy without fighting.", "Keep your face always toward the sunshine - and shadows will fall behind you.", "Happiness can exist only in acceptance.", "Love has no age, no limit; and no death.", "You can't blame gravity for falling in love.", "There is only one corner of the universe you can be certain of improving, and that's your own self.", "Honesty is the first chapter in the book of wisdom.", "The journey of a thousand miles begins with one step.", "Whoever is happy will make others happy too.", "I have not failed. I've just found 10,000 ways that won't work.", "Tell me and I forget. Teach me and I remember. Involve me and I learn.", "There is nothing on this earth more to be prized than true friendship.", "A leader is one who knows the way, goes the way, and shows the way.", "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", "If opportunity doesn't knock, build a door.", "The secret of getting ahead is getting started.", "Let us be grateful to people who make us happy, th…he charming gardeners who make our souls blossom.", "Always remember that you are absolutely unique. Just like everyone else.", "Wise men speak because they have something to say; Fools because they have to say something.", "The World is my country, all mankind are my brethren, and to do good is my religion.", "A single rose can be my garden... a single friend, my world.", "Take up one idea. Make that one idea your life - t…ery other idea alone. This is the way to success.", "Friends show their love in times of trouble, not in happiness.", "You don't choose your family. They are God's gift to you, as you are to them.", "Life is not a problem to be solved, but a reality to be experienced.", "Today you are you! That is truer than true! There is no one alive who is you-er than you!", "Education is the most powerful weapon which you can use to change the world.", "Change your thoughts and you change your world.", "In three words I can sum up everything I've learned about life: it goes on.", "Love isn't something you find. Love is something that finds you.", "Blessed are the hearts that can bend; they shall never be broken.", "Do all things with love.", "Success is not final, failure is not fatal: it is the courage to continue that counts.", "Do not go where the path may lead, go instead where there is no path and leave a trail.", "Love is composed of a single soul inhabiting two bodies.", "Where there is love there is life."];

	// Создаем массив, в котором хранятся все сконструированные пары вопрос - ответ.	
	var questions = [];	

	// Конструктор для построения связки вопрос - ответ и добавления рандомных ответов в оставшиеся два поля. 
	function Question(sentence, correctA) {
		this.sentence = sentence;
		this.correctA = correctA;
	};

	// Отображаем вопрос 
	var mainText = document.getElementsByTagName("h1");
	// Опрееляем рандомную позицию и добавляем верный ответ в этот рандомный бокс (random p.answers)
	var randomThree = Math.floor(Math.random() * 3);
	// Создаем переменную со всеми элементами типа p.answers
	var answers = document.getElementsByClassName("answers");


	// Добаляем в прототип конструктора функционал отображения вопроса и ответов (в том числе и неверных) на экране. Вызываем функцию проверки. 
	Question.prototype.askQuestion = function(random) {
		// Отображаем вопрос 
		mainText.item(0).innerText = this.sentence; 

		// Опрееляем рандомную позицию и добавляем верный ответ в этот рандомный бокс (random p.answers)
		document.getElementsByClassName("answers").item(randomThree).innerText = this.correctA;
		// Add 'correctA' class 
		document.getElementsByClassName("answers").item(randomThree).classList.add('correctA');

		// Создаем переменную со всеми элементами типа p.answers
		console.log(answers);

		// Создаем цикл в котором добавляем всем боксам p.answer не имеющим текстового контента рандомные ответы из массива arrA
		for(var i = 0; i < answers.length; i++) {
			if (answers.item([i]).textContent === "") {
				var randomA = Math.floor(Math.random() * random);
				answers.item([i]).textContent = arrA[randomA];
			} else {}
		};

		// Создаем переменную, храняющюю инйформацию о том, какой ответ верный
		var correctABox = this.correctA;
		console.log(this.correctA + " " + correctABox);

		this.checkAnswer(answers, correctABox, mainText);
	};

	// Добаляем в прототип конструктора функционал проверки верного ответа
	Question.prototype.checkAnswer = function(answers, correctABox, mainText) {
		function eventLoop(event) {
			for(var i = 0; i < answers.length; i++) {
				// answers.item([i]) + "." + event + ('click', checkEvent);
				answers[i].onclick = event;
				console.log(answers[i].onclick);
			};		
		};

		eventLoop(checkEvent);

		function emptyText() {
			for(var i = 0; i < answers.length; i++) {
				answers.item([i]).textContent = "";
			};
			console.log(correctABox);
			correctABox = "";
			document.querySelector('.correctA').classList.remove('correctA');
		};	

		function checkEvent() {
			
			// Если ответ правильный добавить очко и высветить на несколько секунд надпись 'YEP'
			// Если ответ не правильный удалить жизнь и высветить на несколько секунд надпись 'NOPE'
			if (this.textContent === correctABox) {
				// console.log("yep");

				scoreCount += 1;
				displayStatus();

				mainText.item(0).innerText = "Yep"; 
				
				emptyText();

				// timer + Next Question 
				setTimeout(newQuestion, 3000);

				// Some usability 
				document.body.style.background = "lightgreen";

				console.log(this);

				checkEvent = null;
			} else {
				console.log("bad");
				// life -1, display lose title 
				
				healthCount -= 1;
				displayStatus();
				
				mainText.item(0).innerText = "Nope";

				emptyText();

				// timer + Next Question 
				setTimeout(newQuestion, 3000);

				// console.log("hey, Ilia");
				document.body.style.background = "grey";

				checkEvent = null;
			};
		};
	};

	//  Используя Коструктор Questions создаем добавляем в массив questions все пары вопрос - ответ.
	for(var i = 0; i < arrA.length; i++) {
		questions[i] = new Question(arrQ[i], arrA[i]);
	};	

	// Добавляем функцию выбирающую рандомный конструктор (до тех пор пока они не закончатся) из созданных и вызывающую у него метод отображения вопроса и ответов на него <3
	function newQuestion() {
		if (questions.length != 0) {
			document.body.style.background = "white";
			var random = Math.floor(Math.random() * questions.length);
			// console.log(random);
			// console.log(questions[random]);
			questions[random].askQuestion(random);

			// Удалить вопрос после верного ответа из массива или иной способ
			questions.splice(questions[random], 1);
		} else {
			// Вопросы кончились
		}
	};

	// Функция для отображения здоровья и очков 
	function displayStatus() {
		health.textContent = "Lifes: " + healthCount;
		score.textContent = scoreCount + "/50";
	};

	// Game init function 	
	function initGame() {
		healthCount = 3;
		scoreCount = 0;
		displayStatus();
	};

	// Вызываем Гейм Инит, обнуляем все поля и запускаем первый вопрос 
	initGame();
	newQuestion();


// )();










