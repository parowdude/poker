<template>
  <div class="hand">
    <div class="card" v-for="(card, index) in playerHand" :key="index">
      <img :src="getCardSvgUrl(card)" :alt="`${card.rank} of ${card.suit}`" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:
  {
    playerHand:{required:true,type:Array}
  }
  ,methods: {
    getCardSvgUrl(card) {
      return `/assets/cards/${card.rank}_of_${card.suit}.svg`;
    }
  }
};
</script>