class Computer extends Player {

    constructor(){
        super();
        this.state = true;
    }

    make_decision(){
        if(this.round_score < 17){
            return true;
        } else{
            return false;
        }
    }

    set_state(bool){
        this.state = bool;
    }

    get_state(){
        return this.state;
    }
}