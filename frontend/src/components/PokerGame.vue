<template>
  <div class="poker-game">
    <h1>Poker Game - Five Card Draw</h1>
    <button @click="dealCards">Deal Cards</button>
    <div v-if="hand.length > 0">
      <h2>Your Hand</h2>
      <ul>
        <li v-for="(card, index) in hand" :key="index">
          {{ card.rank }} {{ card.suit }}
        </li>
      </ul>

      <h3>Hand Evaluation: {{ evaluation }}</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data()
  {
    return { hand: [], evaluation: '' };
  },
  methods:
  {
    async dealCards()
    {
      try
      {
        const response = await axios.get('http://localhost:3000/deal');
        this.hand = response.data.hand.cards;
        this.evaluation = response.data.evaluation;
      }
      catch (error)
      {
        console.error('Error dealing cards:', error);
      }
    }
  }
};
</script>

<style scoped>
.poker-game {
  text-align: center;
  margin-top: 50px;
}

ul {
  list-style-type: none;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
