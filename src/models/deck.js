const Card = require('./card');

class Deck
{
    constructor()
    {
        // 3♣ 7♦ 7♥ 7♠ K♥
        this.suits = ['♥', '♦', '♣', '♠'];
        this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        this.deck = this.createDeck();
    }

    createDeck()
    {
        let deck = [];
        for (let suit of this.suits)
        {
            for (let rank of this.ranks)
            {
                deck.push(new Card(rank, suit));
            }
        }
        return deck;
    }

    shuffle()
    {
        // Fisher–Yates shuffle
        for (let i = this.deck.length - 1; i > 0; i--)
        {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    dealHand(handSize = 5)
    {
        return this.deck.splice(0, handSize);
    }
}

module.exports = Deck;
