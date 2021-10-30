const state = () => ({
  articleCollect: {},
  menus: [],
  configs: []
})

const mutations = {
  setArticleCollect (state, data) {
    state.articleCollect = data
  },
  setMenus (state, data) {
    state.menus = data
  },
  setConfigs (state, data) {
    state.configs = data
  }
}

const actions = {
  async getCollect ({ commit }) {
    const { data } = await this.$axios.get('site/info')
    commit('setArticleCollect', data.result)
  },
  async getMenus ({ commit }) {
    const { data } = await this.$axios.get('menu')
    commit('setMenus', data.result)
  },
  async getConfigs ({ commit }) {
    const keys = ['site']
    const { data } = await this.$axios.get('site/configs?keys=' + keys)
    // console.log(data.result, 'data.configs')
    commit('setConfigs', data.result)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
