class Computer extends Player {

    constructor(){
        super();
    }

    make_decision(){
        if(this.round_score < 17){
            return true;
        } else{
            return false;
        }
    }

}