describe('The airport', function(){

	describe('interacts with airplane', function(){

		it('it should have a planes array',function(){
			expect(airport.planes.isArray).toBe(true)
		});
	});
});