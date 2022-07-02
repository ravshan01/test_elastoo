<!-- TODO:
  ElSelect не поддерживает required от форм,
  поэтому можно поставить скрытый инпут под ними, либо вручную обработать
-->

<template lang="pug">
el-dialog(
  class="create-or-edit-graphic-modal"
  width="30%"
  :title="isEdit ? 'Edit graphic' : 'Create graphic'"
  :modelValue="modelValue"
  @update:modelValue="$emit('update:modelValue', $event)"
)
  form(
    id="graphic-form"
    class="create-or-edit-graphic-modal-form"
    @submit.prevent="submitHandler"
  )
    el-input(placeholder="name" v-model="graphic.name")
    el-select(v-model="graphic.type")
      el-option(v-for="type in graphicTypes" :key="type" :label="type" :value="type")

  template(#footer)
    el-button(
      type="primary"
      :loading="loading"
      nativeType="submit"
      form="graphic-form"
    ) Create
</template>
<style lang="sass" src="./index.sass"></style>

<script>
import Graphic from '@/models/Graphic.model'

export default {
  name: 'CreateOrEditGraphicModal',
  props: {
    modelValue: Boolean,
    item: Object,
  },
  data() {
    return {
      loading: false,
      graphic: null,
    }
  },
  computed: {
    isEdit() {
      return this.item
    },

    graphicTypes() {
      return Graphic.types
    },
  },

  watch: {
    item: {
      handler() {
        this.graphic = this.item ? { ...this.item } : new Graphic()
      },
      immediate: true,
    },
    'graphic.type': {
      handler() {
        this.graphic.url = Graphic.urlsByType[this.graphic.type]
      },
      immediate: true,
    },
  },

  methods: {
    async submitHandler() {
      if (this.loading) return
      this.loading = true

      try {
        this.isEdit ? await this.editGraphic() : await this.createGraphic()
        this.$emit('update:modelValue', false)
        // send notification
      } catch (err) {
        console.log(err)
        // send notification
      }

      this.loading = false
    },

    async createGraphic() {
      return this.$store.dispatch('graphics/createItem', this.graphic)
    },
    async editGraphic() {
      return this.$store.dispatch('graphics/editItem', this.graphic)
    },
  },
}
</script>
