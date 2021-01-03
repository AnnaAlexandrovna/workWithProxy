class Component1 extends Basement{

	init(){
		this.stat.press = 0;
	}

	events(){
		this.mainBasement.onclick = (event) =>{
			if (this.stat.press == 0) {
				this.stat.press = 1;
			} else if(this.stat.press == 2){
				this.stat.press = 0;
			}
		}

		this.mainBasement.ondblclick = (event) => {
			this.stat.press = 2;
			setTimeout( ()=>{this.stat.press=0;}, 4000);
		}
	}

	render(){
		if(this.stat.press == 0){
			return "Нажми на меня и введи текст";
		} else if (this.stat.press == 1){
			return "<input type='text' value='Привет'>"
		} else if (this.stat.press == 2){
			return "Спасибо, данные приняты!";
		}
	}

}