/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-01-06 13:54:54
 * @version $Id$
 */
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
