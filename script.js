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


//( function(){
	var arrA = ["John Keats", "Ernest Hemingway", "Franklin D. Roosevelt", "Heraclitus", "Indira Gandhi", "A. P. J. Abdul Kalam", "Amelia Earhart", "Henry James", "Leonardo da Vinci", "Jane Austen", "Edgar Allan Poe", "Francis of Assisi", "Napoleon Hill", "Thomas Carlyle", "Susan B. Anthony", "Sun Tzu", "Walt Whitman", "George Orwell", "John Galsworthy", "Albert Einstein", "Aldous Huxley", "Thomas Jefferson", "Lao Tzu", "Anne Frank", "Thomas A. Edison", "Benjamin Franklin", "Thomas Aquinas", "John C. Maxwell", "Marcus Aurelius", "Milton Berle", "Mark Twain", "Marcel Proust", "Margaret Mead", "Plato", "Thomas Paine", "Leo Buscaglia", "Swami Vivekananda", "Euripides", "Desmond Tutu", "Soren Kierkegaard", "Dr. Seuss", "Nelson Mandela", "Norman Vincent Peale", "Robert Frost", "Loretta Young", "Albert Camus", "Og Mandino", "Winston Churchill", "Ralph Waldo Emerson", "Aristotle", "Mahatma Gandhi"];
	var arrQ =  ["I love you the more in that I believe you had liked me for my own sake and for nothing else.", "But man is not made for defeat. A man can be destroyed but not defeated.", "When you reach the end of your rope, tie a knot in it and hang on.", "There is nothing permanent except change.", "You cannot shake hands with a clenched fist.", "Let us sacrifice our today so that our children can have a better tomorrow.", "The most difficult thing is the decision to act, t…and the procedure, the process is its own reward.", "Do not mind anything that anyone tells you about a…else. Judge everyone and everything for yourself.", "Learning never exhausts the mind.", "There is no charm equal to tenderness of heart.", "All that we see or seem is but a dream within a dream.", "Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.", "If you cannot do great things, do small things in a great way.", "Permanence, perseverance and persistence in spite …ings distinguishes the strong soul from the weak.", "Independence is happiness.", "The supreme art of war is to subdue the enemy without fighting.", "Keep your face always toward the sunshine - and shadows will fall behind you.", "Happiness can exist only in acceptance.", "Love has no age, no limit; and no death.", "You can't blame gravity for falling in love.", "There is only one corner of the universe you can be certain of improving, and that's your own self.", "Honesty is the first chapter in the book of wisdom.", "The journey of a thousand miles begins with one step.", "Whoever is happy will make others happy too.", "I have not failed. I've just found 10,000 ways that won't work.", "Tell me and I forget. Teach me and I remember. Involve me and I learn.", "There is nothing on this earth more to be prized than true friendship.", "A leader is one who knows the way, goes the way, and shows the way.", "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", "If opportunity doesn't knock, build a door.", "The secret of getting ahead is getting started.", "Let us be grateful to people who make us happy, th…he charming gardeners who make our souls blossom.", "Always remember that you are absolutely unique. Just like everyone else.", "Wise men speak because they have something to say; Fools because they have to say something.", "The World is my country, all mankind are my brethren, and to do good is my religion.", "A single rose can be my garden... a single friend, my world.", "Take up one idea. Make that one idea your life - t…ery other idea alone. This is the way to success.", "Friends show their love in times of trouble, not in happiness.", "You don't choose your family. They are God's gift to you, as you are to them.", "Life is not a problem to be solved, but a reality to be experienced.", "Today you are you! That is truer than true! There is no one alive who is you-er than you!", "Education is the most powerful weapon which you can use to change the world.", "Change your thoughts and you change your world.", "In three words I can sum up everything I've learned about life: it goes on.", "Love isn't something you find. Love is something that finds you.", "Blessed are the hearts that can bend; they shall never be broken.", "Do all things with love.", "Success is not final, failure is not fatal: it is the courage to continue that counts.", "Do not go where the path may lead, go instead where there is no path and leave a trail.", "Love is composed of a single soul inhabiting two bodies.", "Where there is love there is life."];

	function Question(sentence, answers, correctAnswer) {
		this.sentence = sentence;
		this.answers = answers;
		this.correctAnswer = 0;
	};

	Question.prototype.askQuestion = function(index) {
		document.getElementsByTagName("h1").item(0).innerText = this.sentence; 

		var correctA = Math.floor(Math.random() * 3);
		document.getElementsByClassName("answers").item(correctA).innerText = "! " + this.answers; 

		var answers = document.getElementsByClassName("answers");
		console.log(answers);

		for(var i = 0; i < answers.length; i++) {
			if (answers.item([i]).textContent == "") {
				var randomA = Math.floor(Math.random() * 50);
				answers.item([i]).textContent = arrA[randomA];
			} else {}
		}

		/*for(var i = 0; i < this.answers.length; i++) {
			console.log(i + ": " + this.answers[i]);
		};*/

		this.checkAnswer(index);
	};

	Question.prototype.checkAnswer = function(index) {
		// var answer = prompt(this.sentence + " Check the console. Which answer seems to be correct for you? Just type 0, 1 or 2.");
		/*if (answer == this.correctAnswer) {
			console.log("Cool that's correct");
			score = score + 1;
			console.log("Your score is: " + score + "");

			questions.splice(index, 1);
			newQuestion();
		} else if (answer === null) {
			console.log("COWARD!");
			score = 0;
			console.log("Your score is: " + score + "");

			return null;
		} else if (answer != this.correctAnswer) {
			console.log("That's NOT correct");
			console.log("Your score still: " + score + "");

			return this.checkAnswer(index);
		};*/
	};

	/*var q1 = new Question("Would you mind if I sat here?", ["Oh, of course!", "I'm blind, isn't that great?", "*run away*"], 0);
	var q2 = new Question("Would you mind if I opened the window?", ["No, please!", "You're not my real mom!", "Ha-ha, funny!"], 0);
	var q3 = new Question("Will everything ever be OK?", ["Whould you mind if I ask you what is \'ОК\' asctually?", "Yes", "No"], 0);*/

	/*var questions = [q1, q2, q3];*/

	var questions = [];

	for(var i = 0; i < arrA.length; i++) {
		questions[i] = new Question(arrQ[i], arrA[i], 0);
	};	

	// console.log(questions);

	var score =0;

	function newQuestion() {
		if (questions.length != 0) {
			var random = Math.floor(Math.random() * questions.length);
			questions[random].askQuestion(random);
		} else {
			alert("HAVE NO QUESTIONS ANYMORE");
		}
	};

	newQuestion();

// )();










