//image paths
const TWO_CLUBS = "static/imgs/SVG-cards-1.3/2_of_clubs.svg"
const TWO_DIAMONDS = "static/imgs/SVG-cards-1.3/2_of_diamonds.svg"
const TWO_HEARTS = "static/imgs/SVG-cards-1.3/2_of_hearts.svg"
const TWO_SPADES = "static/imgs/SVG-cards-1.3/2_of_spades.svg"

const THREE_CLUBS = "static/imgs/SVG-cards-1.3/3_of_clubs.svg"
const THREE_DIAMONDS = "static/imgs/SVG-cards-1.3/3_of_diamonds.svg"
const THREE_HEARTS = "static/imgs/SVG-cards-1.3/3_of_hearts.svg"
const THREE_SPADES = "static/imgs/SVG-cards-1.3/3_of_spades.svg"

const FOUR_CLUBS = "static/imgs/SVG-cards-1.3/4_of_clubs.svg"
const FOUR_DIAMONDS = "static/imgs/SVG-cards-1.3/4_of_diamonds.svg"
const FOUR_HEARTS = "static/imgs/SVG-cards-1.3/4_of_hearts.svg"
const FOUR_SPADES = "static/imgs/SVG-cards-1.3/4_of_spades.svg"

const FIVE_CLUBS = "static/imgs/SVG-cards-1.3/5_of_clubs.svg"
const FIVE_DIAMONDS = "static/imgs/SVG-cards-1.3/5_of_diamonds.svg"
const FIVE_HEARTS = "static/imgs/SVG-cards-1.3/5_of_hearts.svg"
const FIVE_SPADES = "static/imgs/SVG-cards-1.3/5_of_spades.svg"

const SIX_CLUBS = "static/imgs/SVG-cards-1.3/6_of_clubs.svg"
const SIX_DIAMONDS = "static/imgs/SVG-cards-1.3/6_of_diamonds.svg"
const SIX_HEARTS = "static/imgs/SVG-cards-1.3/6_of_hearts.svg"
const SIX_SPADES = "static/imgs/SVG-cards-1.3/6_of_spades.svg"

const SEVEN_CLUBS = "static/imgs/SVG-cards-1.3/7_of_clubs.svg"
const SEVEN_DIAMONDS = "static/imgs/SVG-cards-1.3/7_of_diamonds.svg"
const SEVEN_HEARTS = "static/imgs/SVG-cards-1.3/7_of_hearts.svg"
const SEVEN_SPADES = "static/imgs/SVG-cards-1.3/7_of_spades.svg"

const EIGHT_CLUBS = "static/imgs/SVG-cards-1.3/8_of_clubs.svg"
const EIGHT_DIAMONDS = "static/imgs/SVG-cards-1.3/8_of_diamonds.svg"
const EIGHT_HEARTS = "static/imgs/SVG-cards-1.3/8_of_hearts.svg"
const EIGHT_SPADES = "static/imgs/SVG-cards-1.3/8_of_spades.svg"

const NINE_CLUBS = "static/imgs/SVG-cards-1.3/9_of_clubs.svg"
const NINE_DIAMONDS = "static/imgs/SVG-cards-1.3/9_of_diamonds.svg"
const NINE_HEARTS = "static/imgs/SVG-cards-1.3/9_of_hearts.svg"
const NINE_SPADES = "static/imgs/SVG-cards-1.3/9_of_spades.svg"

const TEN_CLUBS = "static/imgs/SVG-cards-1.3/10_of_clubs.svg"
const TEN_DIAMONDS = "static/imgs/SVG-cards-1.3/10_of_diamonds.svg"
const TEN_HEARTS = "static/imgs/SVG-cards-1.3/10_of_hearts.svg"
const TEN_SPADES = "static/imgs/SVG-cards-1.3/10_of_spades.svg"

const ACE_CLUBS = "static/imgs/SVG-cards-1.3/ace_of_clubs.svg"
const ACE_DIAMONDS = "static/imgs/SVG-cards-1.3/ace_of_diamonds.svg"
const ACE_HEARTS = "static/imgs/SVG-cards-1.3/ace_of_hearts.svg"
const ACE_SPADES = "static/imgs/SVG-cards-1.3/ace_of_spades.svg"

const JACK_CLUBS = "static/imgs/SVG-cards-1.3/jack_of_clubs.svg"
const JACK_DIAMONDS = "static/imgs/SVG-cards-1.3/jack_of_diamonds.svg"
const JACK_HEARTS = "static/imgs/SVG-cards-1.3/jack_of_hearts.svg"
const JACK_SPADES = "static/imgs/SVG-cards-1.3/jack_of_spades.svg"

const KING_CLUBS = "static/imgs/SVG-cards-1.3/king_of_clubs.svg"
const KING_DIAMONDS = "static/imgs/SVG-cards-1.3/king_of_diamonds.svg"
const KING_HEARTS = "static/imgs/SVG-cards-1.3/king_of_hearts.svg"
const KING_SPADES = "static/imgs/SVG-cards-1.3/king_of_spades.svg"

const QUEEN_CLUBS = "static/imgs/SVG-cards-1.3/queen_of_clubs.svg"
const QUEEN_DIAMONDS = "static/imgs/SVG-cards-1.3/queen_of_diamonds.svg"
const QUEEN_HEARTS = "static/imgs/SVG-cards-1.3/queen_of_hearts.svg"
const QUEEN_SPADES = "static/imgs/SVG-cards-1.3/queen_of_spades.svg"

class Card {

    constructor(src, val, s){
        this.front_card_img = src;
        this.img_link = src;
        this.val = val;
        this.suite = s;
        this.img_side = 2;
        this.back_card_img = "static/imgs/back_of_card.svg";
    }

    ace_to_one(){
        this.val = 1;
    }

    flip_card_img_back(){
        this.img_link = this.back_card_img;
        /*if (this.img_side  % 2 == 0){
            this.img_link = "static/imgs/back_of_card.svg";
            this.img_side += 1;
        }
        else{
            this.img_link = this.old_img_link;
            this.old_img_link = this.img_link;
            this.img_side += 1;
        }*/
    }

    flip_card_img_front(){
        this.img_link = this.front_card_img;
    }

    get_img(){
        return this.img_link;
    }

    get_val(){
        return this.val
    }

}

var two_Clubs = new Card(TWO_CLUBS, 2, "Clubs");
var two_Diamonds = new Card(TWO_DIAMONDS, 2, "Diamonds");
var two_Hearts = new Card(TWO_HEARTS, 2, "Hearts");
var two_Spades = new Card(TWO_SPADES, 2, "Spades");

var three_Clubs = new Card(THREE_CLUBS, 3, "Clubs");
var three_Diamonds = new Card(THREE_DIAMONDS, 3, "Diamonds");
var three_Hearts = new Card(THREE_HEARTS, 3, "Hearts");
var three_Spades = new Card(THREE_SPADES, 3, "Spades");

var four_Clubs = new Card(FOUR_CLUBS, 4, "Clubs");
var four_Diamonds = new Card(FOUR_DIAMONDS, 4, "Diamonds");
var four_Hearts = new Card(FOUR_HEARTS, 4, "Hearts");
var four_Spades = new Card(FOUR_SPADES, 4, "Spades");

var five_Clubs = new Card(FIVE_CLUBS, 5, "Clubs");
var five_Diamonds = new Card(FIVE_DIAMONDS, 5, "Diamonds");
var five_Hearts = new Card(FIVE_HEARTS, 5, "Hearts");
var five_Spades = new Card(FIVE_SPADES, 5, "Spades");

var six_Clubs = new Card(SIX_CLUBS, 6, "Clubs");
var six_Diamonds = new Card(SIX_DIAMONDS, 6, "Diamonds");
var six_Hearts = new Card(SIX_HEARTS, 6, "Hearts");
var six_Spades = new Card(SIX_SPADES, 6, "Spades");

var seven_Clubs = new Card(SEVEN_CLUBS, 7, "Clubs");
var seven_Diamonds = new Card(SEVEN_DIAMONDS, 7, "Diamonds");
var seven_Hearts = new Card(SEVEN_HEARTS, 7, "Hearts");
var seven_Spades = new Card(SEVEN_SPADES, 7, "Spades");

var eight_Clubs = new Card(EIGHT_CLUBS, 8, "Clubs");
var eight_Diamonds = new Card(EIGHT_DIAMONDS, 8, "Diamonds");
var eight_Hearts = new Card(EIGHT_HEARTS, 8, "Hearts");
var eight_Spades = new Card(EIGHT_SPADES, 8, "Spades");

var nine_Clubs = new Card(NINE_CLUBS, 9, "Clubs");
var nine_Diamonds = new Card(NINE_DIAMONDS, 9, "Diamonds");
var nine_Hearts = new Card(NINE_HEARTS, 9, "Hearts");
var nine_Spades = new Card(NINE_SPADES, 9, "Spades");

var ten_Clubs = new Card(TEN_CLUBS, 10, "Clubs");
var ten_Diamonds = new Card(TEN_DIAMONDS, 10, "Diamonds");
var ten_Hearts = new Card(TEN_HEARTS, 10, "Hearts");
var ten_Spades = new Card(TEN_SPADES, 10, "Spades");

var ace_Clubs = new Card(ACE_CLUBS, 11, "Clubs");
var ace_Diamonds = new Card(ACE_DIAMONDS, 11, "Diamonds");
var ace_Hearts = new Card(ACE_HEARTS, 11, "Hearts");
var ace_Spades = new Card(ACE_SPADES, 11, "Spades");

var jack_Clubs = new Card(JACK_CLUBS, 10, "Clubs");
var jack_Diamonds = new Card(JACK_DIAMONDS, 10, "Diamonds");
var jack_Hearts = new Card(JACK_HEARTS, 10, "Hearts");
var jack_Spades = new Card(JACK_SPADES, 10, "Spades");

var king_Clubs = new Card(KING_CLUBS, 10, "Clubs");
var king_Diamonds = new Card(KING_DIAMONDS, 10, "Diamonds");
var king_Hearts = new Card(KING_HEARTS, 10, "Hearts");
var king_Spades = new Card(KING_SPADES, 10, "Spades");

var queen_Clubs = new Card(QUEEN_CLUBS, 10, "Clubs");
var queen_Diamonds = new Card(QUEEN_DIAMONDS, 10, "Diamonds");
var queen_Hearts = new Card(QUEEN_HEARTS, 10, "Hearts");
var queen_Spades = new Card(QUEEN_SPADES, 10, "Spades");

class Deck{

    constructor(){
        this.cards = [two_Clubs, two_Diamonds, two_Hearts, two_Spades, three_Clubs, three_Diamonds, three_Hearts, three_Spades, four_Clubs, four_Diamonds, four_Hearts, four_Spades, five_Clubs, five_Diamonds, five_Hearts, five_Spades, six_Clubs, six_Diamonds, six_Hearts, six_Spades, seven_Clubs, seven_Diamonds, seven_Hearts, seven_Spades, eight_Clubs, eight_Diamonds, eight_Hearts, eight_Spades, nine_Clubs, nine_Diamonds, nine_Hearts, nine_Spades, ten_Clubs, ten_Diamonds, ten_Hearts, ten_Spades, jack_Clubs, jack_Diamonds, jack_Hearts, jack_Spades, ace_Clubs, ace_Diamonds, ace_Hearts, ace_Spades, king_Clubs, king_Diamonds, king_Hearts, king_Spades, queen_Clubs, queen_Diamonds, queen_Hearts, queen_Spades];
        }

    shuffle() {
        for (var i = 0; i < 1500; i++){
            var location1 = Math.floor((Math.random() * this.cards.length));
            var location2 = Math.floor((Math.random() * this.cards.length));
            var temp = this.cards[location1];

            this.cards[location1] = this.cards[location2];
            this.cards[location2] = temp;
            }
        }

    face_cards(){
        for ( var i = 0; i < this.cards.length; i++ ){
            this.cards[i].flip_card_img_front();
        }
    }

    remove_card(){

        return this.cards.pop();

        }


    }

