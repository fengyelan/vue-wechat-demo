/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-01-06 13:54:10
 * @version $Id$
 */

const mutations = {
	//设置当前页的名字
	Set_Page_Name:(state,name)=>{
		state.currentPageName = name;
	},

	//当 search 组件全屏/非全屏时 切换公共头部状态
	Toggle_Header_Status:(state,status)=>{
		state.headerStatus = status;
	},

	//切换“微信”页中右上角菜单
	Toggle_Tips_Status:(state,status)=>{
		if(status==1){
			state.tipStattus=false;
		}else{	
			state.tipStattus=!state.tipStattus;
		}
	},

	//增加未读消息数
	Add_New_Msg:(state)=>{
		state.newMsgCount = state.newMsgCount>99 ? '99+' : state.newMsgCount++
	},

	//减少未读消息数
	Minus_New_Msg:(state)=>{
		state.newMsgCount = state.newMsgCount<1 ? 0 : state.newMsgCount--
	}
}

export default mutations