var chai = require('chai');

var isEven = require('../js/isEven.js');

var salutation = require('../js/salutation.js');
var secu = require('../js/secu.js');
var rib = require('../js/rib.js');

var assert = chai.assert;
var expect = chai.expect;


describe('pair',function(){
	it('input positive even',function(){
		expect(isEven(4)).to.be.true
	})
	it('input positive odd',function(){
		expect(isEven(5)).to.be.false
	})
	it('input negative odd',function(){
		expect(isEven(-5)).to.be.false
	})
	it('input negative even',function(){
		expect(isEven(-4)).to.be.true
	})
	it('input positive float',function(){
		assert.throws(function(){isEven(5.6)},Error,"invalid input, not a integer")
	})
	it('input negative float',function(){
		assert.throws(function(){isEven(-5.5)},Error,"invalid input, not a integer")
	})
})

describe('salut',function(){
	it('input "bernard"',function(){
		expect(salutation("Bernard")).to.equal('bonjour, Bernard');
	})
	it('input a number',function(){
		assert.throws(function(){salutation(5.5)},Error,"invalid input, not a string")
	})
	it('input void',function(){
		assert.throws(function(){salutation("")},Error,"invalid input, not a string")
	})
})

describe('secu',function(){
	it('input valid', function(){
		expect(secu('196034900743123')).to.be.true;
	})

	it('input too short', function(){
		expect(secu('45484')).to.be.false;
	})
	it('input false', function(){
		expect(secu('196035900743123')).to.be.false;
	})
})

describe('rib',function(){
	it('valid simple',function(){
		expect(rib("11111","22222","ABCD3333EFG","42")).to.be.true;
	})
	it('valid complex',function(){
		expect(rib("30002","00550","0000157845Z","02")).to.be.true;
	})
	it('wrong key',function(){
		expect(rib("30002","00110","0000153845Z","02")).to.be.false;
	})
})