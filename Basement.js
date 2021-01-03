class Basement{

	//объект со свойствами веб-компонента (Proxy объект)
	stat={};
	//главный элемент
	mainBasement;

	constructor(node){
		this.makeElement();
		this.init();
		this.stat = new Proxy(this.stat, {
			set: (target, prop, val) =>{ // перехватываем запись свойства
				// console.log("target:" );
				// console.log(target);
				// console.log("prop:");
				// console.log(prop);
				// console.log("val:");
				// console.log(val);
			    target[prop] = val;
			    this.put();
			    return true;
			  }
		});
		this.events();
		document.body.appendChild(this.mainBasement);
		this.put();
	}

	//метод для инициирования события веб-компонента, в том числе и для задания исходных свойств объекта stat
	init(){}

	//метод, который запускается при изменении состояния компонента (у объекта stat изменились свойства) 
	//и HTML вывод метода render() выводит на страницу
	put(){
		let el = this.render();
		if (typeof el == 'string'){
			this.mainBasement.innerHTML = el;
		} else {
			this.mainBasement.appendChild(el);
		}
	}

	//метод для задания обработчиков событий
	events(){}

	//метод, в котором заложена логика, по которой возвращается HTML вывод веб-компонента
	render(){
		return "Плашка без действий";
	}

	//метод задания свойств HTML элементу
	makeElement(){
		this.mainBasement = document.createElement("div");
	    this.mainBasement.style.left = "2%";
	    this.mainBasement.style.top = "2%";
	    this.mainBasement.style.width = "32%";
	    this.mainBasement.style.background = "#ffffff";
	    this.mainBasement.style.border = "1px solid #555555";
	    this.mainBasement.style.opacity = 0.8;
	    this.mainBasement.style.zIndex = 5000;
	    this.mainBasement.style.boxShadow = "0px 0px 10px #555555";
	    this.mainBasement.style.padding = "5px";
	}
}