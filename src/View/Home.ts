class Home{
	constructor(){

	}
	body(props?:any){
		var ul:any
		var  data:string = "";
		if(props){

				for(var list in props){
					if(typeof props[list] !="undefined"){
						data  +="<li class='list-group-item'>"+props[list]+" <span class='badge'>"+list+"</span> </li>"
					}
				}

			 ul  ="<ul class='list-group'>" +data+ "</ul>"
		}

		return ul;
	}
}
export default Home