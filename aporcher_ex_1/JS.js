debugger;
		console.log('start');
		let menus = [];
		menus.push("tomates");
		menus.push("steak");
		menus.push("mayo");
		menus.push("ketchup");
		menus.push("eau");
		
		menus[2]="cassoulet";
		menus.splice(-1,0,"frites");
		console.log(menus);
