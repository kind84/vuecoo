<template>
  <div class="user-container">
    <h1 class="user-title">User Details:</h1>
    <p><strong>ID:</strong> {{ user.name }}</p>
    <p><strong>Full Name:</strong> {{ user.nickname }}</p>
    <p><strong>Type:</strong> {{ user.type }}</p>
    <p><strong>ImageURL:</strong> {{ user.imageUrl }}</p>
    <button style="{ background-color: transparent }" class="back-button button--grey" @click="$router.go(-1)">Back</button>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, route }) {
    const data = await $axios.$get(`user`)
    return {
      user: data
    }
  }
}
</script>

<style scoped>
.user-title {
  margin: 2rem 0;
}

.back-button {
  margin-top: 2rem;
}

.back-button:hover,
.back-button:active {
  cursor: pointer;
}
</style>
