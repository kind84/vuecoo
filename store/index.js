export const state = () => ({
  folder: null,
  diagram: null
})

export const mutations = {
  setFolder (state, folder) {
    state.folder = folder
  },
  setDiagram (state, diagram) {
    state.diagram = diagram
  }
}

export const actions = {
  setFolder ({commit}, folder) {
    commit('setFolder', folder)
  },
  setDiagram ({commit}, diagram) {
    commit('setDiagram', diagram)
  }
}
