// テスト対象のメソッド。
var fizzbuzz = function(n) {
	if(n % 15 == 0){
		return "FizzBizz";
	}else if(n % 3 == 0){
		return "Fizz";
	}else if(n % 5 == 0){
		return "Bizz";
	}else{
		return n;
	}
}

// 他のファイルから読み込むため、moduleとして登録
//module.exports.fizzbuzz = fizzbuzz;