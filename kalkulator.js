var arr = ['myName', 21, 'blue'];

arr.forEach(function(item, i){
	console.log("index ke "+ i + ' = ' + item);
});

var count = {
	counter : 2,
	bil : function(numb){
		return this.counter + numb;
	},
	bil2 : function(numb){
		return this.counter * numb;
	},
	bil3 : function(numb){
		return this.counter / numb;
	},
	bil4 : function(numb){
		return this.counter - numb;
	},
	bil5 : function(numb){
		if (this.counter < numb) {
			return 'bilangan a kurang dari bilangan b';
		}else if(this.counter == numb){
			return 'bilangan a sama dengan b'
		}else{
			return 'bilangan a lebih dari bilangan b';
		}
	}
};

console.log('(+) '+count.bil(1));
console.log('(*) '+count.bil2(1));
console.log('(/) '+count.bil3(1));
console.log('(-) '+count.bil4(1));
console.log(count.bil5(1));
