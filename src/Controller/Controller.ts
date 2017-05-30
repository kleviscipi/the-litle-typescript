import Module from './../Model/Module'
import Home from './../View/Home'

class Controller extends Module {
	
	module:any;

	constructor(props?:any){
		super(props)

	}

	init(){
		return this.connect("klevis")
	}
	home(){
		var InitHome = new Home()

		return InitHome.body(this.list());
	}

}

export default  Controller