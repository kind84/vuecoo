<template>
  <section class="container">
    <div>
      <h1 class="title">
        Hello <nuxt-link :to="`/user/${user.id}`" class="user-link">{{ user.name }}</nuxt-link>
      </h1>
      <h2 class="subtitle">
        You have {{ diagrams }} diagrams in your folders:
      </h2>
      <Folders :folders="folders" />
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Folders from '~/components/Folders.vue'

export default {
  components: {
    Logo,
    Folders
  },
  async asyncData({ $axios }) {
    const data  = await $axios.$get("info")
    return {
      user: {
        id: data.id,
        name: data.full_name
      },
      diagrams: data.total_diagrams,
      folders: data.folders
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}

.title {
  margin-top: 2rem;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 4rem;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 2rem;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 2rem;
}

.user-link {
  text-decoration: none;
  color: #3b8070;
}

.user-link:hover,
.user-link:active {
  color: #41b883;
}
</style>
