$(document).ready(function(){
	 		//initial variables
	 		
	 	var targetNumber;
             var counter = 0;
             // var numberOptions = [3, 5, 7, 10]
             var win = 0;
             var lose = 0;
             var increment = 0;
             var images = ["assets/images/crystal  1.png", "assets/images/crystal 2.png", "assets/images/crystal 3.png", "assets/images/crystal 4.png"];
             var startGame = function() {
             	$("#buttons").empty();
                 targetNumber = Math.floor(Math.random() * 69)+30;
                 $("#random-number").text(targetNumber);
                 counter = 0;
                $("#your-score").text(counter);

		         
		         for (var i=0; i<4; i++) {
		             var imageCrystal = $("<img>");
		             imageCrystal.addClass("crystal");
		            imageCrystal.attr("src" , images[i]);
		             imageCrystal.attr("data-crystalvalue" , Math.floor(Math.random() * 12)+1);

		         // var increment = numberOptions[Math.floor(Math.random()*numberOptions.length)];
		         $("#buttons").append(imageCrystal);
             }
        }
        startGame();
             $(document).on("click" ,".crystal", function() {
                 var crystalValue = ($(this).attr("data-crystalvalue"));
                 crystalValue=parseInt(crystalValue);
                 counter += crystalValue;

                 console.log(crystalValue);

                 $("#your-score").text(counter);




                     if (counter === targetNumber) {
                         alert("Great! you got that right.");
                         startGame();
                         win++;
                         $("#win-counter").text(win);


                     } else if( counter >= targetNumber) {
                         alert("You lost this one!");
                         startGame();
                         lose++;
                         $("#loss-counter").text(lose);


                 }
             })

         


     });