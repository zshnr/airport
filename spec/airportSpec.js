describe('The airport', function(){

	describe('interacts with airplane', function(){
		
		beforeEach(function(){
			airport = new Airport;
			plane = new Plane;
		});

		it('it should have a planes array',function(){
			airport = new Airport;
			expect(airport.planes instanceof Array).toBe(true)
		});

		it('should accept a plane', function(){
			airport.land(plane);
			expect(airport.planes.length).toEqual(1)
		});

		it('should let the plane take off', function(){
			airport.land(plane);
			airport.takeoff(plane);
			expect(airport.planes.length).toEqual(0)
		});
	});
});