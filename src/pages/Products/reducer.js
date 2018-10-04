// import beerapi from '@/api/beers'
import beerapi from '../../api/beers'

// initial state
const state = {
  fetching: false,
  error: false,
  beers: [],
}

// getters
const getters = {}

// Empty as helper
const stripEmpty = obj => Object
  .entries(obj)
  .reduce((stripped, [key, value]) => {
    if (!!value) {
      stripped[key] = value
    }
    return stripped
  }, {})

// actions
const actions = {
  fetchBeers ({ commit, state }, params = {}) {
    commit('FETCH_BEERS_PENDING')
    beerapi.beers(stripEmpty(params)).then(beers => {
      commit('FETCH_BEERS_SUCCESS', beers.body)
    }).catch(() => {
      commit('FETCH_BEERS_FAIL')
    })
  },
}

// mutations (middleware)
const mutations = {
  FETCH_BEERS_SUCCESS (state, beers) {
    state.fetching = false
    state.beers = beers
  },

  FETCH_BEERS_PENDING (state) {
    state.error = false
    state.fetching = true
  },

  FETCH_BEERS_FAIL (state) {
    state.error = true
    state.fetching = false
  },
}

export default {
  state,
  actions,
  mutations
}
