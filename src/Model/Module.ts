class Module{
	constructor(props:any){

	}

	connect(data:any){
		var obj = {}
		obj = {mydata:data}
		return obj
	}  
	list(){
		var list_ = {
			0:'TypeScript',
			1:'Gulp',
			2:'Browserfy',
			3:'UngliFy'
		}
		return list_;
	}
}

export default Module 