<template lang="pug">
.page.main
  graphics-list(:graphics="graphics" :loading="loading")
</template>
<style lang="sass" src="./index.sass"></style>

<script>
import { mapState } from 'vuex'
import GraphicsList from '@/components/GraphicsList'

export default {
  name: 'V_Main',
  components: { GraphicsList },
  computed: {
    ...mapState({
      loading: state => state.graphics.loading,
      graphics: state => state.graphics.data,
    }),
  },
}
</script>
