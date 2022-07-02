<template lang="pug">
.graphics
  graphic(v-for="graphic in graphics" :key="graphic.id" :graphic="graphic")
  .graphics__empty(v-show="!hasGraphics") Empty
</template>
<style lang="sass" src="./index.sass"></style>

<script>
import Graphic from '@/components/Graphic'

export default {
  name: 'GraphicsList',
  components: { Graphic },
  props: {
    graphics: Array,
    loading: Boolean,
  },

  computed: {
    hasGraphics() {
      return this.graphics.length
    },
  },
}
</script>
