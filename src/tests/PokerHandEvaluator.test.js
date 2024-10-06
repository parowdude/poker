const PokerHandEvaluator = require('../evaluation/PokerHandEvaluator');

describe('PokerHandEvaluator', () => {
    test('should identify a Straight Flush', () => {
        const hand = {
            cards: [
                { rank: '9', suit: 'H' },
                { rank: 'T', suit: 'H' },
                { rank: 'J', suit: 'H' },
                { rank: 'Q', suit: 'H' },
                { rank: 'K', suit: 'H' }
            ]
        };
        expect(PokerHandEvaluator.evaluateHand(hand)).toBe('Straight Flush');
    });

    test('should identify Four of a Kind', () => {
        const hand = {
            cards: [
                { rank: '9', suit: 'H' },
                { rank: '9', suit: 'D' },
                { rank: '9', suit: 'S' },
                { rank: '9', suit: 'C' },
                { rank: 'K', suit: 'H' }
            ]
        };
        expect(PokerHandEvaluator.evaluateHand(hand)).toBe('Four of a Kind');
    });

    test('should identify a Full House', () => {
        const hand = {
            cards: [
                { rank: '9', suit: 'H' },
                { rank: '9', suit: 'D' },
                { rank: '9', suit: 'S' },
                { rank: 'K', suit: 'C' },
                { rank: 'K', suit: 'H' }
            ]
        };
        expect(PokerHandEvaluator.evaluateHand(hand)).toBe('Full House');
    });

    test('should identify a Flush', () => {
        const hand = {
            cards: [
                { rank: '2', suit: 'H' },
                { rank: '5', suit: 'H' },
                { rank: '9', suit: 'H' },
                { rank: 'J', suit: 'H' },
                { rank: 'K', suit: 'H' }
            ]
        };
        expect(PokerHandEvaluator.evaluateHand(hand)).toBe('Flush');
    });

    test('should identify a Straight', () => {
        const hand = {
            cards: [
                { rank: '9', suit: 'H' },
                { rank: 'T', suit: 'D' },
                { rank: 'J', suit: 'S' },
                { rank: 'Q', suit: 'C' },
                { rank: 'K', suit: 'H' }
            ]
        };
        expect(PokerHandEvaluator.evaluateHand(hand)).toBe('Straight');
    });

    test('should identify Three of a Kind', () => {
        const hand = {
            cards: [
                { rank: '9', suit: 'H' },
                { rank: '9', suit: 'D' },
                { rank: '9', suit: 'S' },
                { rank: 'Q', suit: 'C' },
                { rank: 'K', suit: 'H' }
            ]
        };
        expect(PokerHandEvaluator.evaluateHand(hand)).toBe('Three of a Kind');
    });

    test('should identify Two Pair', () => {
        const hand = {
            cards: [
                { rank: '9', suit: 'H' },
                { rank: '9', suit: 'D' },
                { rank: 'K', suit: 'S' },
                { rank: 'K', suit: 'C' },
                { rank: 'Q', suit: 'H' }
            ]
        };
        expect(PokerHandEvaluator.evaluateHand(hand)).toBe('Two Pair');
    });

    test('should identify One Pair', () => {
        const hand = {
            cards: [
                { rank: '9', suit: 'H' },
                { rank: '9', suit: 'D' },
                { rank: 'J', suit: 'S' },
                { rank: 'Q', suit: 'C' },
                { rank: 'K', suit: 'H' }
            ]
        };
        expect(PokerHandEvaluator.evaluateHand(hand)).toBe('One Pair');
    });

    test('should identify High Card', () => {
        const hand = {
            cards: [
                { rank: '2', suit: 'H' },
                { rank: '5', suit: 'D' },
                { rank: '9', suit: 'S' },
                { rank: 'J', suit: 'C' },
                { rank: 'K', suit: 'H' }
            ]
        };
        expect(PokerHandEvaluator.evaluateHand(hand)).toBe('High Card');
    });
});