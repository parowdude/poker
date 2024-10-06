const FiveCardDraw = require('../variants/FiveCardDraw');
const Deck = require('../models/deck');
const Hand = require('../models/hand');
const PokerHandEvaluator = require('../evaluation/PokerHandEvaluator');

jest.mock('../models/deck');
jest.mock('../models/hand');
jest.mock('../evaluation/PokerHandEvaluator');

describe('FiveCardDraw', () => {
    let game;
    let mockDeck;
    let mockHand;
    let mockHandType;

    beforeEach(() => {
        mockDeck = {
            shuffle: jest.fn(),
            dealHand: jest.fn()
        };
        mockHand = {
            toString: jest.fn().mockReturnValue('Mock Hand')
        };
        mockHandType = 'Mock Hand Type';

        Deck.mockImplementation(() => mockDeck);
        Hand.mockImplementation(() => mockHand);
        PokerHandEvaluator.evaluateHand.mockReturnValue(mockHandType);

        game = new FiveCardDraw();
    });

    test('startGame should shuffle the deck', () => {
        game.startGame();
        expect(mockDeck.shuffle).toHaveBeenCalled();
    });

    test('startGame should deal a hand', () => {
        game.startGame();
        expect(mockDeck.dealHand).toHaveBeenCalled();
    });

    test('startGame should create a Hand instance with dealt cards', () => {
        game.startGame();
        expect(Hand).toHaveBeenCalledWith(mockDeck.dealHand());
    });

    test('startGame should evaluate the hand', () => {
        game.startGame();
        expect(PokerHandEvaluator.evaluateHand).toHaveBeenCalledWith(mockHand);
    });

    test('startGame should return the hand and its type', () => {
        const result = game.startGame();
        expect(result).toEqual({ hand: mockHand, type: mockHandType });
    });

    test('startGame should log the hand and its evaluation', () => {
        console.log = jest.fn();
        game.startGame();
        expect(console.log).toHaveBeenCalledWith('Your hand:', 'Mock Hand');
        expect(console.log).toHaveBeenCalledWith('Hand evaluation:', 'Mock Hand Type');
    });
});