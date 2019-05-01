<template>
  <div class="folder-container">
    <h1 class="folder-title">Folder {{ folderName ? folderName : folder.name }}</h1>
    <h3 v-if="folder.diagrams && folder.diagrams.length > 0">Diagrams:</h3>
    <h3 v-else>No Diagrams</h3>
    <ul v-for="dGram in folder.diagrams" :key="dGram.diagramId" class="folders-list">
      <nuxt-link
        :to="`/diagram/${dGram.diagramId}`"
        @click.native="setDiagram(dGram)"
        class="folder-item">Title: {{ dGram.title }}</nuxt-link>
    </ul>
    <button class="back-button button--grey" @click="$router.go(-1)">Back</button>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, route }) {
    const data = await $axios.$get(`folder/${route.params.id}`)
    return { folder: data }
  },
  computed: {
    folderName() {
      return this.$store.state.folder
    }
  },
  methods: {
    setDiagram(dGram) {
      this.$store.dispatch('setDiagram', dGram)
    }
  }
}
</script>

<style scoped>
.folder-title {
  margin: 2rem 0;
}

.folders-list {
  margin-top: 1rem;
}

.folder-item {
  text-decoration: none;
  color: black;
}

.folder-item:hover,
.folder-item:active {
  color: #41b883;
}

.back-button {
  margin-top: 2rem;
}

.back-button:hover,
.back-button:active {
  cursor: pointer;
}
</style>
