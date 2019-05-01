<template>
  <div class="folders-container">
    <nuxt-link
      v-for="folder in folders"
      :key="folder.id"
      :to="`folder/${folder.id}`"
      @click.native="setFolder(folder.name)"
      class="folder-button button--grey" >{{ folder.name }}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['folders'],
  methods: {
    setFolder(folderName) {
      this.$store.dispatch('setFolder', folderName)
    }
  }
}
</script>

<style scoped>
.folders-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
}

.folder-button {
  font-size: 0.8rem;
}

.folder-button:hover,
.folder-button:active {
  cursor: pointer;
}
</style>
