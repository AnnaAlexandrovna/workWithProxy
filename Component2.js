class Component2 extends Basement{
	init(){
		this.stat.color = "white";
	}

	events(){
		this.mainBasement.onclick = (event) =>{
			if (this.stat.color == "white") {
				this.stat.color = "red";
			} else if(this.stat.color == "red"){
				this.stat.color = "white";
			}
		}
	}

	render(){
		if(this.stat.color == "white"){
			return "Нажми на меня, чтобы покрасить в красный";
		} else if (this.stat.color == "red"){
			return "<div style='background:rgb(255,0,0);'>Нажми на меня, чтобы вернуть белый<br/></div>"
		} 
	}
}