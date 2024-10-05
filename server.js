const express = require('express');
const cors = require('cors');
const FiveCardDraw = require('./src/variants/FiveCardDraw');

const app = express();
app.use(cors());
const port = 3000;

app.get('/deal', function(req, res)
{
    const game = new FiveCardDraw();
    var result = game.startGame();
    res.json({
        hand: result.hand,
        evaluation: result.type
    });
});

app.listen(port, () => {
    console.log(`Poker game API running at http://localhost:${port}`);
});
