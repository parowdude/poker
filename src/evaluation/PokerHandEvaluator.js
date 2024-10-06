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
        // A hand is a Straight Flush if it is both a Flush and a Straight
        return this.isFlush(suits) && this.isStraight(ranks);
    }
    // (all cards have the same suit)
    static isFlush(suits)
    {
        // Create a Set of unique suits; if there's only one unique suit, it's a Flush
        return new Set(suits).size === 1;
    }
    // (sequential rank values)
    static isStraight(ranks)
    {
        // Sort ranks in ascending order
        const values = ranks.map(rank => '23456789TJQKA'.indexOf(rank)).sort((a, b) => a - b);
        // Check if each card is exactly one rank higher than the previous card
        return values.every((v, i, arr) => i === 0 || v === arr[i - 1] + 1);
    }
    // (four cards of the same rank)
    static isFourOfAKind(ranks)
    {
        return this.getCardCount(ranks).includes(4);
    }
    // (three cards of one rank and two cards of another)
    static isFullHouse(ranks)
    {
        const counts = this.getCardCount(ranks);
        return counts.includes(3) && counts.includes(2);
    }
    // (three cards of the same rank)
    static isThreeOfAKind(ranks)
    {
        return this.getCardCount(ranks).includes(3);
    }
    //(two different pairs of ranks)
    static isTwoPair(ranks)
    {
        return this.getCardCount(ranks).filter(count => count === 2).length === 2;
    }
    // (two cards of the same rank)
    static isOnePair(ranks)
    {
        return this.getCardCount(ranks).includes(2);
    }
     // Helper method to get the count of each card rank in the hand
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
