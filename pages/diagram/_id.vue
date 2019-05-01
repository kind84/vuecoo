<template>
  <div class="diagram-container">
    <h1 class="diagram-title">Diagram {{ dGram.title }}</h1>
    <p><strong>Title: </strong>{{dGram.title}}</p>
    <p><strong>Description: </strong>{{dGram.description}}</p>
    <p><strong>Type: </strong>{{dGram.type}}</p>
    <p><strong>Owner: </strong>{{dGram.ownerNickname}}</p>
    <p><strong>Project: </strong>{{dGram.projectName}}</p>
    <p><strong>Organization: </strong>{{dGram.organizationName}}</p>
    <p><strong>Created: </strong>{{dGram.created}}</p>
    <p><strong>Updated: </strong>{{dGram.updated}}</p>
    <div class="details" v-if="showDetails">
      <p><strong>Sheets: </strong></p>
      <ul v-for="(sheet, index) in details.sheets" :key="sheet.uid">
        <p class="sheet-item"><strong>Sheet {{ index + 1 }}</strong></p>
        <li><strong>Name: </strong>{{ sheet.name }}</li>
        <li><strong>Width: </strong>{{ sheet.width }}</li>
        <li><strong>Height: </strong>{{ sheet.height }}</li>
        <li><strong>URL: </strong>{{ sheet.url }}</li>
      </ul>
      <p v-if="details.comments && details.comments.length > 0"><strong>Comments: </strong></p>
      <ul v-for="(comments, index) in details.comments" :key="index">
        <p class="comment-item"><strong>Comment {{ index + 1 }}</strong></p>
        <li><strong>Author: </strong>{{ comment.user }}</li>
        <li><strong>Content: </strong>{{ comment.content }}</li>
        <li><strong>Created: </strong>{{ comment.created }}</li>
        <li><strong>Updated: </strong>{{ comment.updated }}</li>
      </ul>
    </div>
    <button class="back-button button--grey" @click="showDetails = !showDetails">{{ detailsBtnTag }}</button>
    <button class="back-button button--grey" @click="$router.go(-1)">Back</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDetails: false
    }
  },
  async asyncData({ $axios, route, store }) {
    const data = await $axios.$get(`diagram/${route.params.id}`)
    if (!store.state.diagram) {
      store.dispatch('setDiagram', data)
    }
    return { details: data}
  },
  computed: {
    dGram() {
      return this.$store.state.diagram
    },
    detailsBtnTag() {
      return this.showDetails ? "Hide Details" : "ShowDetails"
    }
  }
}
</script>


<style scoped>
.diagram-title {
  margin: 2rem 0;
}

ul {
  padding: 0 1rem;
}

li {
  padding: 0 2rem;
  list-style: none;
}

.back-button {
  margin-top: 2rem;
}

.back-button:hover,
.back-button:active {
  cursor: pointer;
}
</style>
