const Deck = require('../models/deck');
const Card = require('../models/card');

describe('Deck', () => {
    describe('createDeck', () => {
        it('should create a deck with 52 cards', () => {
            const deck = new Deck();
            const createdDeck = deck.createDeck();
            expect(createdDeck.length).toBe(52);
        });

        it('should create a deck with unique cards', () => {
            const deck = new Deck();
            const createdDeck = deck.createDeck();
            const cardSet = new Set(createdDeck.map(card => `${card.rank}${card.suit}`));
            expect(cardSet.size).toBe(52);
        });

        it('should create a deck with correct suits and ranks', () => {
            const deck = new Deck();
            const createdDeck = deck.createDeck();
            const suits = ['♥', '♦', '♣', '♠'];
            const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

            createdDeck.forEach(card => {
                expect(suits).toContain(card.suit);
                expect(ranks).toContain(card.rank);
            });
        });
    });
});