class Player{

    constructor(){
        this.round_score = 0;
        this.total_score = 0;
        this.hand = [];
        this.bust = false;
    }

    set_hand(card){
        this.hand.push(card);
    }

    check_bust(){
        if (this.round_score > 21){
            this.bust = true;
        return this.bust;
        }
    }

    get_round_score(){
        return this.round_score;
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
}