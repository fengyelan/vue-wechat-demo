const actions = {
	setPageName({commit},name){
		commit('Set_Page_Name',name)
	},

	toggleHeaderStatus({commit},status){
		commit('Toggle_Header_Status',status)
	},

	toggleTipsStatus({commit},status){
		commit('Toggle_Tips_Status',status)
	},

	addNewMsg({commit}){
		commit('Add_New_Msg')
	},

	minusNewMsg({commit}){
		commit('Minus_New_Msg')
	}

}

export default actions