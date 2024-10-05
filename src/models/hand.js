class Hand
{
    constructor(cards)
    {
        this.cards = cards;
    }

    toString()
    {
        return this.cards.map(card => card.toString()).join(', ');
    }
}

module.exports = Hand;
