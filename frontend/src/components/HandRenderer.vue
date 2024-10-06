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
    playerHand:{required:true,type:Array,default:function(){return []}}
  }
  ,methods: {
    getCardSvgUrl(card)
    {
      var rankLookup =
      {
        "Q":"queen"
        ,"K":"king"
        ,"J":"jack"
        ,"A":"ace"
      }
      var suitLookup=
      {
        "♦":"diamonds"
        ,"♣":"clubs"
        ,"♠":"spades"
        ,"♥":"hearts"
      }
      // return `/assets/cards/${rankLookup[card.rank] || card.rank}_${suitLookup[card.suit]}.svg`;
      return require(`@/assets/cards/${suitLookup[card.suit]}_${rankLookup[card.rank] || card.rank}.svg`);
    }
  }
};
</script>

<style scoped>
.hand
{
  display: flex;
  justify-content: center;
}
.card
{
  margin:10px
}
</style>