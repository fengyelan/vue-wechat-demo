const actions = {
	setPageName({commit}){
		commit('Set_Page_Name')
	},

	toggleHeaderStatus({commit}){
		commit('Toggle_Header_Status')
	},

	toggleTipsStatus({commit}){
		commit('Toggle_Tips_Status')
	},

	addNewMsg({commit}){
		commit('Add_New_Msg')
	},

	minusNewMsg({commit}){
		commit('Minus_New_Msg')
	}

}

export default actions