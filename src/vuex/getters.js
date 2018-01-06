/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-01-06 13:54:41
 * @version $Id$
 */

const getters = {
	//从联系人中提取首字母,将首字母变为大写字母，将所有的首字母进行排序
	contactsInitialList:state=>{
		let initialList = [],
			allContacts = state.allContacts;

		let s = new Set();// Set 结构不会添加重复的值
		allContacts.forEach(function(item){
			s.add(item.initial.toUpperCase());
		})

		initialList = Array.from(s); //Array.from方法可以将 Set 结构转为数组。
		return initialList.sort();
	}

	//将联系人按照首字母进行分类
	contactsList:(state,getters)=>{
		let list = {},
			allContacts = state.allContacts;

		getters.contactsInitialList.forEach(function(item){
			list[item] = [];
			allContacts.forEach(function(itemContact,itemContactIndex){
				if(itemContact.initial.toUpperCase()===item){
					list[item].push(itemContact);
					allContacts.splice(itemContactIndex,1);
				}
			})
		});

		return list;

	}
}

export default getters;