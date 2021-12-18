<template>
  <v-row justify="center" align="center" v-if="traverse">
    <v-col cols="12" sm="8" md="6">
      <v-card elevation="4" tile shaped>
        <v-card-title>Hops</v-card-title>
        <v-card-text>
          <v-row>
              <v-col>
                 <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                            From
                        </th>
                        <th class="text-left">
                            To
                        </th>
                         <th class="text-left">
                            Value
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="item in traverse"
                        :key="item._id"
                        >
                        <td>{{ item.from }}</td>
                        <td>{{ item.to }}</td>
                        <td v-if="item.values">
                          <div v-for="(value, index) in item.values" :key="index">
                           <span>{{ value }} </span>
                          </div>
                        </td>
                        <td v-else>{{ item.value }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
              </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>      
  </v-row>
</template>

<script>
export default {
  computed: {
    traverse () {
      return this.$store.state.blockchain.traverse
    }
  },
   methods: {
  }
}
</script>