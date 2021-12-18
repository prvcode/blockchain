<template>
<div>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card elevation="4" tile shaped>

         <v-toolbar>
          <v-app-bar-nav-icon  @click="routeToHome"><v-icon>mdi-arrow-left</v-icon></v-app-bar-nav-icon>
          <v-toolbar-title>Blockchain</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-row>
              <v-col>
                <v-combobox
                    v-model="selectedOrigin"
                    :items="origins"
                    label="Origin"
                    :search-input.sync="searchOrigin"
                ></v-combobox>
              </v-col>
              <v-col>
                <v-combobox
                    v-model="selectedHop"
                    :items="hops"
                    label="Hops"
                    menu-props="auto"
                    :search-input.sync="searchHop"
                ></v-combobox>
              </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="pa-5">
          <v-btn @click="traverse">Traverse</v-btn>
        </v-card-actions>
      </v-card>
      
    </v-col>      
  </v-row>
  <view-hops></view-hops>
</div>
</template>

<script>
import ViewHops from '@/components/ViewHops.vue';

export default {
  components: { ViewHops },
  data () {
    return {
      origins: [] ,
      hops:[-4,-3,-2,-1,1,2,3,4],
      searchOrigin: null,
      searchHop:null,
      selectedOrigin: null,
      selectedHop: "1"
    }
  },
  component: {
    ViewHops
  },
  async mounted() {
    const blockchain =  this.$store.getters['blockchain/getBlockchain'];
      this.origins = []
      await blockchain.forEach(node => {
        if(!this.origins.includes(node.from)) {
          this.origins.push(node.from)
        }
        if(!this.origins.includes(node.to)) {
          this.origins.push(node.to)
        }
      });
  },
   methods: {
    routeToHome() {
      this.$router.push('/')
    },
    traverse() {
      const params = {
        origin: this.searchOrigin,
        hops: this.selectedHop
      }
      this.$store.dispatch('blockchain/traverse', params)
    }
  }
}
</script>
