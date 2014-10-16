describe('The airport', function(){

	describe('interacts with airplane', function(){

		it('it should have a planes array',function(){
			airport = new Airport;
			expect(airport.planes instanceof Array).toBe(true)
		});

		it('should accept a plane', function(){
			airport = new Airport;
			airport.land(plane);
			expect(airport.planes.length).toEqual(1)
		});
	});
});