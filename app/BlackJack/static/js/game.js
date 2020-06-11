class App{

	constructor(){
		this.deck = new Deck();
		this.player = new Player();
		this.deck.shuffle();

		for (var i = 0; i < 2; i++){
		    this.add_user_hand();
		    this.add_computer_hand();
		}
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

	on_user_hit(){
		this.add_user_hand();
	}

	game_loop(){
	    while(this.player.check_bust() == false){
	        prompt("press hit button")
	    }
	}

}


window.addEventListener("load", () => {
	app = new App();
	app.game_loop();
});

document.getElementById("hit_btn").addEventListener("click", function(){
  app.on_user_hit();
});