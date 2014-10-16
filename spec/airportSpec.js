describe('The airport', function(){

	beforeEach(function(){
		airport = new Airport;
	});

	describe('interacts with airplane', function(){
		
		beforeEach(function(){
			plane = new Plane;
		});

		it('should have a planes array', function(){
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

	describe('interacts with passenger', function(){

		it('should have a passengers array', function(){
			expect(airport.passengers instanceof Array).toBe(true)
		});

	});
});