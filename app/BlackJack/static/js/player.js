class Player{

    constructor(){
        this.round_score = 0;
        this.total_score = 0;
        this.hand = [];
        this.jackpot = false;
        this.is_turn = true;
    }

    set_hand(card){
        this.hand.push(card);
    }

    reset_hand(){
        this.hand.length = 0;
    }

    get_hand_length(){
        return this.hand.length;
    }

    remove_card(){
        this.hand.pop()
    }

    check_bust(){
        for (var i = 0; i < this.hand.length; i++){
            if (this.hand[i].get_val() == 11 && this.round_score > 21){
                this.hand[i].ace_to_one();
                this.round_score -= 10;
            }
        }

        document.getElementById("user_round_score").innerHTML = "Your score is currently: " + this.round_score;

        return this.round_score > 21;
    }

    get_round_score(){
        return this.round_score;
    }

    reset_round_score(){
        this.round_score = 0;
    }

    get_total_score(){
        return this.total_score;
    }

    set_round_score(card){
        this.round_score += card.get_val();
    }

    set_total_score(){
        this.total_score += 1;
    }

    get_is_turn(){
        return this.is_turn;
    }

    set_is_turn(bool){
        this.is_turn = bool;
    }
}