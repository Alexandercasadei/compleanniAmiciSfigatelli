

		var countDownDate = new Date("February 2, 2025 00:00:00").getTime();


		var x = setInterval(function() {

			
			var now = new Date().getTime();


			var distance = countDownDate - now;

			
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			
			document.getElementById("countdown").innerHTML = "<span class='num'>" + days + "</span><span>giorni</span><span class='num'>" + hours + "</span><span>ore</span><span class='num'>" + minutes + "</span><span>minuti</span><span class='num'>" + seconds + "</span><span>secondi</span>";

			
			if (distance < 0) {
				clearInterval(x);
				document.getElementById("countdown").innerHTML = "Countdown finito auguri Gabriele";
				countDownDate = new Date("February 18, " + (new Date().getFullYear() + 1) + " 00:00:00").getTime(); // Set the date for next year's countdown
			}
		}, 1000);
	
