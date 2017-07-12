const fizzBuzzer = require('../fizzBuzzer');
const should = require('chai').should;

describe('fizzBuzzer', ()=> {
	it('should return fizz-buzz if number is divisible by 15', ()=> {
		const div15 = [30, 15, 90, 1200];
		div15.forEach((num)=> {
			const answer = fizzBuzzer(num);
			answer.should.equal('fizz-buzz');
		});
	});

	it('should return buzz if number is divisible by 5 only', ()=> {
		const div5 = [5, 25, 155, 1880];
		div5.forEach((num)=> {
			const answer = fizzBuzzer(num);
			answer.should.equal('buzz');
		});
	});

	it('should return fizz if number is divisible by 3 only', ()=> {
		const div3 = [3, 9, 18, 189];
		div3.forEach((num)=> {
			const answer = fizzBuzzer(num);
			answer.should.equal('fizz');
		});
	});

	it('should throw error if input in not a number', ()=> {
		const badInputs = ['3', true, 'string', undefined, null];
		badInputs.forEach((num)=> {
			// const answer = fizzBuzzer(num);
			// answer.should.throw(Error);
      (function() {
        fizzBuzzer(num);
      }).should.throw(Error);
		});
	});
})