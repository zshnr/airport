describe('The airport', function(){

	describe('interacts with airplane', function(){

		it('it should have a planes array',function(){
			airport = new Airport;
			expect(airport.planes).toEqual([]);
		});
	});
});