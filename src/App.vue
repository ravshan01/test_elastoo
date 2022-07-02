<template lang="pug">
el-container.app
  el-header.app-header
    .app-header__actions
      el-button(type="primary" @click="createGraphic") Create Graphic

  el-main
    router-view
</template>

<style lang="sass" src="./App.sass"></style>

<script>
export default {
  name: 'App',
  methods: {
    createGraphic() {},
  },
}
</script>
