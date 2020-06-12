class App{

	constructor(){
		this.deck = new Deck();
		this.player = new Player();
		this.deck.shuffle();
		this.winner = "None"

		for (var i = 0; i < 2; i++){
		    this.add_user_hand();
		    this.add_computer_hand();
		}

		this.message = document.getElementById("messages").innerHTML = this.player.get_total_score();
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

    	var computer_hand = document.getElementById("cpu_cards");

    	var new_img = document.createElement("IMG");
    	new_img.setAttribute("src", computer_card.get_img());

    	computer_hand.appendChild(new_img);
	}

	reset_hands(){
	    this.player.reset_hand();
	    //this.computer.reset_hand();

	    //clear images
	    var user_hand = document.getElementById("user_cards");
        while (user_hand.firstChild) {
            user_hand.removeChild(user_hand.lastChild);
         }

         var computer_hand = document.getElementById("cpu_cards");
         while (computer_hand.firstChild) {
            computer_hand.removeChild(computer_hand.lastChild);
         }

         //reinit hands
         for (var i = 0; i < 2; i++){
		    this.add_user_hand();
		    this.add_computer_hand();
		}

	}

	on_user_hit(){
		this.add_user_hand();
		this.check_round_end();
	}

	check_round_end(){
	    var player_bust = this.player.check_bust();
	    var player_jackpot = false;
	    if(this.player.get_set_round_score == 21){
	        player_jackpot = true;
	    }
	    if(player_bust == true){
	        this.end_game(0);
	    } else if(player_jackpot == true){
	        this.end_game(1)
	    } else{
	        alert("keep playing");
	    }

	}

	end_game(game_code){
	    switch(game_code) {
            case 0:
                alert("busted " + this.player.get_round_score());
                this.player.reset_round_score();
                this.reset_hands();
            break;

            case 1:
                this.player.set_total_score;
                this.player.reset_round_score();
                this.reset_hands();
            break;
            //case 3 comp bust, case 4 comp wins, case 5 both stand

            }
	}

}


window.addEventListener("load", () => {
	app = new App();
});

document.getElementById("hit_btn").addEventListener("click", function(){
  app.on_user_hit();
});