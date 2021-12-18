<template>
  <v-row justify="center" align="center" v-if="blockchain.length">
    <v-col cols="12" sm="8" md="6">
      <v-card elevation="4" tile shaped>
        <v-card-title>Blockchain Data</v-card-title>
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
                        v-for="item in blockchain"
                        :key="item._id"
                        >
                        <td>{{ item.from }}</td>
                        <td>{{ item.to }}</td>
                        <td>{{ item.value }}</td>
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
    blockchain () {
      return this.$store.state.blockchain.blockchain
    }
  }
}
</script>