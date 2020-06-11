function add_user_hand(deck){
    var user_card = deck.remove_card();

    var user_hand = document.getElementById("user_cards");

    var new_img = document.createElement("IMG");
    new_img.setAttribute("src", user_card.get_img());

    user_hand.appendChild(new_img);
}

function add_computer_hand(deck){
    var computer_card = deck.remove_card();

    var computer_hand = document.getElementById("cpu_cards");

    var new_img = document.createElement("IMG");
    new_img.setAttribute("src", computer_card.get_img());

    computer_hand.appendChild(new_img);
}

function initialize(){
    var deck = new Deck();
    deck.shuffle();

    for (var i = 0; i < 2; i++){
        add_user_hand(deck);
        add_computer_hand(deck);
    }

}
