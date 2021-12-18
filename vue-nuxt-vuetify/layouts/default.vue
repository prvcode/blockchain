<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer class="justify-center">
      <label class="caption">Copyrights © 2021 | Praveen</label>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      title: 'Blockchain'
    }
  }
}
</script>
