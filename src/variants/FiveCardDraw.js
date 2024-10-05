const Deck = require('../models/deck');
const Hand = require('../models/hand');
const PokerHandEvaluator = require('../evaluation/PokerHandEvaluator');

class FiveCardDraw
{
    constructor()
    {
        this.deck = new Deck();
    }

    startGame()
    {
        this.deck.shuffle();
        const playerHand = new Hand(this.deck.dealHand());
        console.log('Your hand:', playerHand.toString());
        const handType = PokerHandEvaluator.evaluateHand(playerHand);
        console.log('Hand evaluation:', handType);
        return {hand:playerHand,type:handType}
    }

    getHandType(playerHand)
    {
        return PokerHandEvaluator.evaluateHand(playerHand);
    }
}

module.exports = FiveCardDraw;
