import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        clubName: 'Palmeiras',
        championship: 'Brazilian championship'
    },
    getters: {
        getChampionship(state){
            return state.championship
        },
        getClubName(state){
            return state.clubName
        }
    }
})