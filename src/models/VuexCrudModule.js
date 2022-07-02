// TODO: есть проблема с автозаполнением и подсказками vuex модулей в ide.
//  Изначально хотел создавать класс, но незнаю как себя поведёт vuex - нужно подумать что можно сделать

/**
 * Создаёт vuex module для CRUD операций *
 * @param { Object } param
 * @param { Class } param._class ссылка на класс, реализующий методы CRUD интерфейса(если бы был подключён ts)
 * @param { Object } param.state state, перезапишет дефолтные state с одинаковыми ключами
 * @param { Object } param.getters getters, перезапишет дефолтные getters с одинаковыми ключом
 * @param { Object } param.mutations mutations, перезапишет дефолтные mutations с одинаковыми ключом
 * @param { Object } param.actions actions, перезапишет дефолтные actions с одинаковыми ключом
 * @returns
 */
export default class VuexCrudModule {
  static create({ _class, state, getters, mutations, actions }) {
    return {
      namespaced: true,
      state() {
        return {
          data: [],
          total: 0,
          loading: false, // only for getData

          ...state,
        }
      },
      getters: {
        ...getters,
      },

      mutations: {
        SET_TOTAL(state, count) {
          state.total = count
        },
        SET_DATA(state, items = []) {
          // убираем дупликаты
          state.data = items.filter(
            (item, index) => !items.slice(index + 1).find(elem => elem.id == item.id)
          )
        },
        SET_LOADING(state, value) {
          state.loading = value
        },

        ADD_ITEM(state, item) {
          state.data = [item, ...state.data]
          state.total = state.total + 1
        },
        EDIT_ITEM(state, item) {
          const index = state.data.findIndex(elem => elem.id == item.id)
          state.data = [
            ...state.data.slice(0, index),
            item,
            ...state.data.slice(index + 1),
          ]
        },
        DELETE_ITEM(state, item) {
          const index = state.data.findIndex(elem => elem.id == item.id)

          state.data = [...state.data.slice(0, index), ...state.data.slice(index + 1)]
          state.total = state.total - 1
        },

        ...mutations,
      },

      actions: {
        /**
         * @param { Object } payload
         * @param { boolean } payload.overwriteDataState
         */
        async getData({ state, commit }, payload) {
          // if (state.loading) return
          // commit('SET_LOADING', true)
          // Code
          // commit('SET_TOTAL', data.count)
          // commit('SET_LOADING', false)
          // return data
        },

        async createItem({ commit }, item) {
          const object = await _class.create(item)
          commit('ADD_ITEM', { ...object })
          return { ...object }
        },
        async editItem({ commit }, item) {
          commit('EDIT_ITEM', item)
          return
        },
        async deleteItem({ commit }, item) {
          commit('DELETE_ITEM', item)
          return
        },
        clearAllData({ commit }) {
          commit('SET_DATA', [])
          commit('SET_TOTAL', 0)
        },

        ...actions,
      },
    }
  }
}
