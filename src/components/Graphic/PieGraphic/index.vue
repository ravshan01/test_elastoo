<template lang="html">
  <DxPieChart
    id="pie"
    class="pie-graphic"
    :title="graphic.name"
    :data-source="graphic.data"
    palette="Bright"
    @point-click="pointClickHandler($event)"
    @legend-click="legendClickHandler($event)"
  >
    <DxSeries :argument-field="fields.argument" :value-field="fields.value">
      <DxLabel :visible="true">
        <DxConnector :visible="true" :width="1" />
      </DxLabel>
    </DxSeries>
    <DxSize :width="500" />
    <DxExport :enabled="true" />
  </DxPieChart>
</template>
<style lang="sass" src="./index.sass"></style>

<script>
import DxPieChart, {
  DxSize,
  DxSeries,
  DxLabel,
  DxConnector,
  DxExport,
} from 'devextreme-vue/pie-chart'
import Graphic from '@/models/Graphic.model'

export default {
  name: 'PieGraphic',
  components: {
    DxPieChart,
    DxSize,
    DxSeries,
    DxLabel,
    DxConnector,
    DxExport,
  },
  props: {
    graphic: [Graphic, Object],
  },
  computed: {
    fields() {
      const [argument, value] = Object.keys(this.graphic.data[0])

      return {
        argument: argument,
        value: value,
      }
    },
  },

  methods: {
    pointClickHandler(e) {
      this.toggleVisibility(e.target)
    },
    legendClickHandler(e) {
      const arg = e.target
      const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0]

      this.toggleVisibility(item)
    },

    toggleVisibility(item) {
      item.isVisible() ? item.hide() : item.show()
    },
  },
}
</script>
