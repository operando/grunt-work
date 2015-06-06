var addition = function(num1,num2){
	return num1 + num2;
}

//var fizzbuzz = require("../src/js/fizzbuzz-node").fizzbuzz;

describe("足し算の確認", function(){

	beforeEach(function(){
		 // テスト前処理
	});

	afterEach(function(){
		// テスト後処理
	});

	it("足し算が正しい",function(){
		expect(addition(1,2)).toEqual(3);
		expect(addition(1,2)).not.toEqual(4);
	});

	it("toBe",function(){
		var test1 = "aaa";
		var test2 = test1;

		expect(test1).toBe(test2);
	});

	it("正規表現",function(){
		expect("13:21").toMatch(/^[0-9][0-9]:[0-9][0-9]$/);
	});

});

describe("FizzBizzの確認", function(){

	beforeEach(function(){
		 // テスト前処理
	});

	afterEach(function(){
		// テスト後処理
	});

	it("3の倍数のときFizzを返す",function(){
		expect(fizzbuzz(3)).toEqual("Fizz");
	});

	it("5の倍数のときBizzを返す",function(){
		expect(fizzbuzz(5)).toEqual("Bizz");
	});

	it("3の倍数かつ5の倍数のときはFizzBuzzを返す",function(){
		expect(fizzbuzz(30)).toEqual("FizzBizz");
	});

	it("3と5の倍数以外はその数字を返す", function() {
		expect(fizzbuzz(2)).toEqual(2);
		expect(fizzbuzz(2)).not.toEqual("Fizz");
		expect(fizzbuzz(2)).not.toEqual("Bizz");
		expect(fizzbuzz(8)).toEqual(8);
	});
});