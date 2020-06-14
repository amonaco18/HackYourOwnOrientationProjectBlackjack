class App{

	constructor(){
		this.deck = new Deck();
		this.player = new Player();
		this.computer = new Computer();
		this.deck.shuffle();
		this.score_message = "Player: " + this.player.get_total_score().toString() + " Computer: " + this.computer.get_total_score().toString();

		for (var i = 0; i < 2; i++){
		    this.add_user_hand();
		    if(i==0){
		        var flip = true;
		    } else{
		        var flip = false;
		    }
		    this.add_computer_hand(flip);
		}

        this.update_message(this.score_message);

        document.getElementById("user_round_score").innerHTML = this.player.round_score;
        document.getElementById("cpu_round_score").innerHTML = this.computer.round_score;

        if(this.player.get_round_score() == 21){
            this.end_round(1);
        }

        if(this.computer.get_round_score() == 21){
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
        
        document.getElementById("user_round_score").innerHTML = this.player.round_score;
	}

	add_computer_hand(flip){
		var computer_card = this.deck.remove_card();

		this.computer.set_hand(computer_card);
		this.computer.set_round_score(computer_card);

    	var computer_hand = document.getElementById("cpu_cards");

    	var new_img = document.createElement("IMG");

    	if(flip == true){
    	    computer_card.flip_card_img_back();
    	    new_img.setAttribute("id", "flipped_card")
    	}
    	new_img.setAttribute("src", computer_card.get_img());

        computer_hand.appendChild(new_img);
        
        document.getElementById("cpu_round_score").innerHTML = this.computer.round_score;
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
        try{
            for (var i = 0; i < 2; i++){
		        this.add_user_hand();
		        if(i==0){
		            var flip = true;
		        } else{
		            var flip = false;
		        }
		        this.add_computer_hand(flip);
		        }
		}catch(error){
		     console.log("Reshuffling Deck..");
		     this.player.reset_hand();
	         this.computer.reset_hand();
		     this.deck = new Deck();
		     this.deck.face_cards();
		     this.deck.shuffle();

		     var user_hand = document.getElementById("user_cards");
             while (user_hand.firstChild) {
                 user_hand.removeChild(user_hand.lastChild);
             }

             var computer_hand = document.getElementById("cpu_cards");
             while (computer_hand.firstChild) {
                computer_hand.removeChild(computer_hand.lastChild);
             }

		     for (var i = 0; i < 2; i++){
		        this.add_user_hand();
		        if(i==0){
		            var flip = true;
		        } else{
		            var flip = false;
		        }
		        this.add_computer_hand(flip);
		        }
		    }
	}

	async on_stand(){
	    var img = document.getElementById("flipped_card");
	    this.computer.get_first_card().flip_card_img_front();
	    img.setAttribute("src", this.computer.get_first_card().get_img());

        await sleep(200);

	    var comp_decision = this.computer.make_decision(this.player);
	    while(comp_decision == true){
	        await sleep(500);
	        this.add_computer_hand(false);
            comp_decision = this.computer.make_decision(this.player);
	    }
	}

	check_round_end(){
	    if (this.player.get_is_turn() == true){
	        if(this.player.check_bust() == true){
	            return 0;
	        } else if(this.player.get_round_score() == 21){
	            return 1;
	        } else{
	            //pass
	        }
	    } else {
	         if (this.computer.check_bust() == true){
	            return 2;
	        } else if (this.computer.get_round_score() == 21){
	            return 3;
	        } else{
	            return 4;
	        }
	    }
	}

	end_round(game_code){
	    switch(game_code) {
            case 0:
                console.log("Player busted at " + this.player.get_round_score());
                this.computer.set_total_score();
                this.player.reset_round_score();
                this.computer.reset_round_score();
                this.player.set_is_turn(true);
                this.reset_hands();
                this.update_message("Player: " + this.player.get_total_score().toString() + " Computer: " + this.computer.get_total_score().toString());
            break;

            case 1:
                console.log("Player jackpot!");
                this.player.set_total_score();
                this.player.reset_round_score();
                this.computer.reset_round_score();
                this.player.set_is_turn(true);
                this.reset_hands();
                this.update_message("Player: " + this.player.get_total_score().toString() + " Computer: " + this.computer.get_total_score().toString());
            break;

            case 2:
                console.log("Computer busted at " + this.computer.get_round_score());
                this.player.set_total_score();
                this.computer.reset_round_score();
                this.player.reset_round_score();
                this.player.set_is_turn(true);
                this.reset_hands();
                this.update_message("Player: " + this.player.get_total_score().toString() + " Computer: " + this.computer.get_total_score().toString());
            break;

            case 3:
                console.log("Computer jackpot!");
                this.computer.set_total_score();
                this.player.reset_round_score();
                this.computer.reset_round_score();
                this.player.set_is_turn(true);
                this.reset_hands();
                this.update_message("Player: " + this.player.get_total_score().toString() + " Computer: " + this.computer.get_total_score().toString());
            break;

            case 4:
                console.log("Both players stand... calculating winner");
                if(this.player.get_round_score() > this.computer.get_round_score()){
                    console.log("Player wins round! Player: " + this.player.get_round_score() + " Computer: " + this.computer.get_round_score());
                    this.player.set_total_score();
                    this.player.reset_round_score();
                    this.computer.reset_round_score();
                    this.player.set_is_turn(true);
                    this.reset_hands();
                    this.update_message("Player: " + this.player.get_total_score().toString() + " Computer: " + this.computer.get_total_score().toString());
                } else if (this.player.get_round_score() < this.computer.get_round_score()){
                    console.log("Computer wins round! Player: " + this.player.get_round_score() + " Computer: " + this.computer.get_round_score());
                    this.computer.set_total_score();
                    this.player.reset_round_score();
                    this.computer.reset_round_score();
                    this.player.set_is_turn(true);
                    this.reset_hands();
                    this.update_message("Player: " + this.player.get_total_score().toString() + " Computer: " + this.computer.get_total_score().toString());
                } else {
                    console.log("Draw! Player: " + this.player.get_round_score() + " Computer: " + this.computer.get_round_score());
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

const sleep = ms => new Promise(res => setTimeout(res, ms));


document.getElementById("stand_btn").addEventListener("click", async function(){
    if(app.player.get_is_turn() == true){
        app.player.set_is_turn(false);
        app.on_stand();
        await sleep(3000);
        flag = app.check_round_end();
        app.end_round(flag);

             if (app.computer.get_hand_length() > 2){
                           var computer_hand = document.getElementById("cpu_cards");
                            while (app.computer.get_hand_length() > 2) {
                                app.computer.remove_card();
                                computer_hand.removeChild(computer_hand.lastChild);
                            }
                    }
        await sleep(500);
        if(app.player.get_round_score() == 21){
            app.end_round(1);
        }

        if(app.computer.get_round_score() == 21){
            app.end_round(3);
        }


    } else {
        alert("Hey.. not your turn.");
    }
});

document.getElementById("hit_btn").addEventListener("click", async function(){
    if(app.player.get_is_turn() == true) {
        try{
            app.add_user_hand();
        } catch(error){
            alert("Out of cards. Reshuffling..")
            app.reset_hands();
        }
        await sleep(1000);
        flag = app.check_round_end();
        app.end_round(flag);
    } else {
        alert("Hey.. not your turn.");
    }
});

