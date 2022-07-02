<template lang="pug">
.graphic
  line-graphic(v-if="graphic.type === $options.enum.graphicTypes.line" :graphic="graphic")
  pie-graphic(v-if="graphic.type === $options.enum.graphicTypes.pie" :graphic="graphic")
</template>
<style lang="sass" src="./index.sass"></style>

<script>
import Graphic from '@/models/Graphic.model'
import LineGraphic from '@/components/Graphic/LineGraphic'
import PieGraphic from '@/components/Graphic/PieGraphic'

export default {
  name: 'Graphic',
  components: { LineGraphic, PieGraphic },
  enum: {
    graphicTypes: {
      line: Graphic.enum.types.line,
      pie: Graphic.enum.types.pie,
    },
  },
  props: {
    graphic: [Graphic, Object],
  },
}
</script>
