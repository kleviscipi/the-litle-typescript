import  Controller   from './Controller/Controller'

class Main extends Controller{

	controller:any;

	constructor(props?:any){
		super()
	}
	app(param?:string){
		var app = document.getElementById("app")
		var container 	= "<div class='container'>"
						  +		"<div class='row'>  <div class='col-md-12'> "+  this.home() +" </div>  </div>"
						  +	"</div>";
		app.innerHTML ="<p style='margin:auto 0px;width:100%'>Loading...</p>"
		
		setTimeout(function(){
				app.innerHTML = container
		},5000)
	}

}

var Api = new Main();

Api.app('home');


