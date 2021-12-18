import axios from 'axios';

export const state = () => ({
  blockchain: [],
  traverse: []
})

export const mutations = {
  clearBlockchain (state) {
    state.blockchain = [];
  },
  create (state, blockchain) {
    state.blockchain = blockchain;
  },
  traverse (state, blockchain) {
    state.traverse = blockchain;
  },
  clearTraverse (state, blockchain) {
    state.traverse = blockchain;
  }
}

export const getters = {
  getBlockchain (state) {
    return state.blockchain || []
  },
  getTraverse (state) {
    return state.traverse || []
  }
}

export const actions = {
  async create ({commit}, blockchain) {
    const res = await axios.post('http://localhost:8081/api/blockchain',
    blockchain, { headers: {'content-type': 'application/json'} })
    commit('create', res.data);
  },
  async remove ({commit}) {
    await axios.delete(`http://localhost:8081/api/blockchain/remove`)
    commit('clearBlockchain');
  },
  async traverse ({commit}, params) {
    const res = await axios.get(`http://localhost:8081/api/blockchain/${params.origin}/${params.hops}`);
    commit('traverse', res.data);
  },

  async removeTraverse ({commit}) {
    commit('clearTraverse');
  },
  async fetchBlockchain ({commit}) {
    const res = await axios.get(`http://localhost:8081/api/blockchain`);
    commit('create', res.data);
  }
}