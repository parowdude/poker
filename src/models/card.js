class Card
{
    constructor(rank, suit)
    {
        this.rank = rank;
        this.suit = suit;
    }
    toString()
    {
        return `${this.rank}${this.suit}`;
    }
    toJSON()
    {
        return { rank: this.rank, suit: this.suit };
    }
}
module.exports = Card;
