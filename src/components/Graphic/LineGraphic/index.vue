<template lang="html">
  <DxChart id="chart" :data-source="graphic.data" palette="Violet">
    <DxCommonSeriesSettings :type="type" :argument-field="fields.argument" />
    <DxSeries :value-field="fields.value" :name="fields.value" />
    <DxMargin :bottom="20" />
    <DxArgumentAxis
      :value-margins-enabled="false"
      discrete-axis-division-mode="crossLabels"
    >
      <DxGrid :visible="true" />
    </DxArgumentAxis>
    <DxLegend
      vertical-alignment="bottom"
      horizontal-alignment="center"
      item-text-position="bottom"
    />
    <DxExport :enabled="true" />
    <DxTitle :text="graphic.name"> </DxTitle>
    <DxTooltip :enabled="true" />
  </DxChart>
</template>
<style lang="sass" src="./index.sass" />

<script>
import {
  DxChart,
  DxSeries,
  DxArgumentAxis,
  DxCommonSeriesSettings,
  DxExport,
  DxGrid,
  DxMargin,
  DxLegend,
  DxTitle,
  DxTooltip,
} from 'devextreme-vue/chart'
import Graphic from '@/models/Graphic.model'

export default {
  name: 'LineGraphic',
  components: {
    DxChart,
    DxSeries,
    DxArgumentAxis,
    DxCommonSeriesSettings,
    DxExport,
    DxGrid,
    DxMargin,
    DxLegend,
    DxTitle,
    DxTooltip,
  },
  props: {
    graphic: [Graphic, Object],
  },
  computed: {
    fields() {
      return {
        argument: 'Дата',
        value: 'Процент',
      }
    },
  },

  data() {
    return {
      type: 'line',
      types: ['line', 'stackedline', 'fullstackedline'],
    }
  },
}
</script>
