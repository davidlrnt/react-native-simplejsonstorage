import { AsyncStorage} from 'react-native';

export default class SimpleStorage {
  	constructor(dbName) {
    	this.name = dbName;
  	}
  	get(table){
		return new Promise((resolve, reject) => {
			AsyncStorage.getItem(`${this.name}::${table}`).then((value) => {
				resolve(JSON.parse(value))
			}).catch((er) => {
				reject(er)
			})
		});
	}
	set(table, data){
		const json = JSON.stringify(data)
		return new Promise((resolve, reject) => {
			AsyncStorage.setItem(`${this.name}::${table}`, json).then((value) => {
				resolve(value)
			}).catch((er) => {
				reject(er)
			})
		});
	}
}