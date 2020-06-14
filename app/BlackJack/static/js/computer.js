class Computer extends Player {

    constructor(){
        super();
    }

    make_decision(player_two){
        if(this.get_round_score() < 17 || this.get_round_score() <= player_two.get_round_score()){
            return true;
        } else{
            return false;
        }
    }

    get_first_card(){
        return this.hand[0];
    }

}