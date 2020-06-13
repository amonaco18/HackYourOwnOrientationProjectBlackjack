class App{

	constructor(){
		this.deck = new Deck();
		this.player = new Player();
		this.computer = new Computer();
		this.deck.shuffle();
		this.winner = "None"
		this.score_message = "Player: " + this.player.get_total_score().toString() + " Computer: " + this.computer.get_total_score().toString();

		for (var i = 0; i < 2; i++){
		    this.add_user_hand();
		    this.add_computer_hand();
		}

        this.update_message(this.score_message);

        if(this.player.get_round_score == 21){
            this.end_round(1);
        }

        if(this.computer.get_round_score == 21){
            this.end_round(3);
        }
	}

	update_message(mes){
	    this.message = document.getElementById("messages").innerHTML = mes;
	    }

	add_user_hand(){
		var user_card = this.deck.remove_card();

		//add card to user hand and update user round score
		this.player.set_hand(user_card);
		this.player.set_round_score(user_card);

		var user_hand = document.getElementById("user_cards");

		var new_img = document.createElement("IMG");
		new_img.setAttribute("src", user_card.get_img());

		//render card to screen
		user_hand.appendChild(new_img);
	}

	add_computer_hand(){
		var computer_card = this.deck.remove_card();

		this.computer.set_hand(computer_card);
		this.computer.set_round_score(computer_card);

    	var computer_hand = document.getElementById("cpu_cards");

    	var new_img = document.createElement("IMG");
    	new_img.setAttribute("src", computer_card.get_img());

    	computer_hand.appendChild(new_img);
    	console.log(this.computer.hand);
    	console.log(this.computer.get_round_score());
	}

	reset_hands(){
	    this.player.reset_hand();
	    this.computer.reset_hand();

	    //clear images
	    var user_hand = document.getElementById("user_cards");
        while (user_hand.firstChild) {
            user_hand.removeChild(user_hand.lastChild);
         }

         var computer_hand = document.getElementById("cpu_cards");
         while (computer_hand.firstChild) {
            computer_hand.removeChild(computer_hand.lastChild);
         }

         //re-init hands
         for (var i = 0; i < 2; i++){
		    this.add_user_hand();
		    this.add_computer_hand();
		}

	}

	on_hit(){
        this.add_user_hand();
	}

	on_stand(){
	    var comp_decision = this.computer.make_decision();
	    while(comp_decision == true){
	        alert("Computer is making a decision.")
	        this.add_computer_hand();
            comp_decision = this.computer.make_decision();
	    }
	}

	check_round_end(){
	    if (this.player.get_is_turn() == true){
	        var player_bust = this.player.check_bust();
	        var player_jackpot = false;
	        if(this.player.get_round_score() == 21){
	            player_jackpot = true;
	        }
	        if(player_bust == true){
	            this.end_round(0);
	        } else if(player_jackpot == true){
	            this.end_round(1);
	        } else{
	            alert("You hit, choose to hit again or stand.");
	        }
	    } else {
	         if (this.computer.check_bust() == true){
	            this.end_round(2);
	        } else if (this.computer.get_round_score() == 21){
	            this.end_round(3);
	        } else{
	            this.end_round(4);;
	        }
	    }
	}

	end_round(game_code){
	    switch(game_code) {
            case 0:
                alert("Player busted at " + this.player.get_round_score());
                this.computer.set_total_score();
                this.player.reset_round_score();
                this.computer.reset_round_score();
                this.player.set_is_turn(true);
                this.reset_hands();
                this.update_message("Player: " + this.player.get_total_score().toString() + " Computer: " + this.computer.get_total_score().toString());
            break;

            case 1:
                alert("Player jackpot!");
                this.player.set_total_score();
                this.player.reset_round_score();
                this.computer.reset_round_score();
                this.player.set_is_turn(true);
                this.reset_hands();
                this.update_message("Player: " + this.player.get_total_score().toString() + " Computer: " + this.computer.get_total_score().toString());
            break;

            case 2:
                alert("Computer busted at " + this.computer.get_round_score());
                this.player.set_total_score();
                this.computer.reset_round_score();
                this.player.reset_round_score();
                this.player.set_is_turn(true);
                this.reset_hands();
                this.update_message("Player: " + this.player.get_total_score().toString() + " Computer: " + this.computer.get_total_score().toString());
            break;

            case 3:
                alert("Computer jackpot!");
                this.computer.set_total_score();
                this.player.reset_round_score();
                this.computer.reset_round_score();
                this.player.set_is_turn(true);
                this.reset_hands();
                this.update_message("Player: " + this.player.get_total_score().toString() + " Computer: " + this.computer.get_total_score().toString());
            break;

            case 4:
                alert("Both players stand... calculating winner");
                if(this.player.get_round_score() > this.computer.get_round_score()){
                    alert("Player wins round! Player: " + this.player.get_round_score() + " Computer: " + this.computer.get_round_score());
                    this.player.set_total_score();
                    this.player.reset_round_score();
                    this.computer.reset_round_score();
                    this.player.set_is_turn(true);
                    this.reset_hands();
                    this.update_message("Player: " + this.player.get_total_score().toString() + " Computer: " + this.computer.get_total_score().toString());
                } else if (this.player.get_round_score() < this.computer.get_round_score()){
                    alert("Computer wins round! Player: " + this.player.get_round_score() + " Computer: " + this.computer.get_round_score());
                    this.computer.set_total_score();
                    this.player.reset_round_score();
                    this.computer.reset_round_score();
                    this.player.set_is_turn(true);
                    this.reset_hands();
                    this.update_message("Player: " + this.player.get_total_score().toString() + " Computer: " + this.computer.get_total_score().toString());
                } else {
                    alert("Draw! Player: " + this.player.get_round_score() + " Computer: " + this.computer.get_round_score());
                    this.player.reset_round_score();
                    this.computer.reset_round_score();
                    this.player.set_is_turn(true);
                    this.reset_hands();
                    this.update_message("Player: " + this.player.get_total_score().toString() + " Computer: " + this.computer.get_total_score().toString());
                }
            break;
         }
	}

//end class
}

window.addEventListener("load", () => {
	app = new App();
});

document.getElementById("stand_btn").addEventListener("click", function(){
    if(app.player.get_is_turn() == true){
        app.player.set_is_turn(false);
        app.on_stand();
        app.check_round_end();
    } else {
        alert("Hey.. not your turn.");
    }
});

document.getElementById("hit_btn").addEventListener("click", function(){
    if(app.player.get_is_turn() == true) {
        app.on_hit();
        app.check_round_end();

    } else {
        alert("Hey.. not your turn.");
    }
});


