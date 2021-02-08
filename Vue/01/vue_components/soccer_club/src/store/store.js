import Vue from 'vue'
import Vuex from 'vuex'

import championshipModule from './modules/championshipModule'
import clubNameModule from './modules/clubNameModule'
import newsModule from './modules/newsModules'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        championshipModule,
        clubNameModule,
        newsModule
    }
})