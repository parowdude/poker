class PokerHandEvaluator
{
    static evaluateHand(hand)
    {
        console.log("Got hand",hand);

        const ranks = hand.cards.map(card => card.rank);
        const suits = hand.cards.map(card => card.suit);

        if (this.isStraightFlush(ranks, suits)) return 'Straight Flush';
        if (this.isFourOfAKind(ranks)) return 'Four of a Kind';
        if (this.isFullHouse(ranks)) return 'Full House';
        if (this.isFlush(suits)) return 'Flush';
        if (this.isStraight(ranks)) return 'Straight';
        if (this.isThreeOfAKind(ranks)) return 'Three of a Kind';
        if (this.isTwoPair(ranks)) return 'Two Pair';
        if (this.isOnePair(ranks)) return 'One Pair';
        return 'High Card';
    }

    // Helper methods to evaluate each type of hand
    static isStraightFlush(ranks, suits)
    {
        return this.isFlush(suits) && this.isStraight(ranks);
    }

    static isFlush(suits)
    {
        return new Set(suits).size === 1;
    }

    static isStraight(ranks)
    {
        const values = ranks.map(rank => '23456789TJQKA'.indexOf(rank)).sort((a, b) => a - b);
        return values.every((v, i, arr) => i === 0 || v === arr[i - 1] + 1);
    }

    static isFourOfAKind(ranks)
    {
        return this.getCardCount(ranks).includes(4);
    }

    static isFullHouse(ranks)
    {
        const counts = this.getCardCount(ranks);
        return counts.includes(3) && counts.includes(2);
    }

    static isThreeOfAKind(ranks)
    {
        return this.getCardCount(ranks).includes(3);
    }

    static isTwoPair(ranks)
    {
        return this.getCardCount(ranks).filter(count => count === 2).length === 2;
    }

    static isOnePair(ranks)
    {
        return this.getCardCount(ranks).includes(2);
    }

    static getCardCount(ranks)
    {
        return Object.values(ranks.reduce(function(acc, rank)
        {
            acc[rank] = (acc[rank] || 0) + 1;
            return acc;
        },{}));
    }
}

module.exports = PokerHandEvaluator;
