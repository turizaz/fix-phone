var decompose = require('../').decompose;
var should = require('should');
var _ = require('lodash');

describe('fix-phone', function () {
	describe('decompose', function () {
		it('should decompose ua phones', function () {
			decompose('ua', '+380507776655').should.eql({
				country: '+380',
				local: '050',
				phone: '7776655'
			});
		});
		it('should decompose ru phones', function () {
			decompose('ru', '+77219998877').should.eql({
				country: '+7',
				local: '721',
				phone: '9998877'
			});
		});
		it('should decompose kz phones', function () {
			decompose('kz', '+77779998877').should.eql({
				country: '+7',
				local: '777',
				phone: '9998877'
			});
		});
		it('should decompose ro phones', function () {
			decompose('ro', '+40734556677').should.eql({
				country: '+40',
				local: '734',
				phone: '556677'
			});
		});
	});
});