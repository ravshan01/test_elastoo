<template lang="pug">
el-container.app
  el-header.app-header
    .app-header__actions
      el-button(type="primary" @click="createGraphic") Create Graphic
  el-main
    router-view

  create-or-edit-graphic-modal(v-model="createModalIsOpen")
</template>
<style lang="sass" src="./App.sass"></style>

<script>
import CreateOrEditGraphicModal from '@/components/CreateOrEditGraphicModal'

export default {
  name: 'App',
  components: {
    CreateOrEditGraphicModal,
  },
  data() {
    return {
      createModalIsOpen: false,
    }
  },

  methods: {
    createGraphic() {
      this.createModalIsOpen = true
    },
  },
}
</script>
