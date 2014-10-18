describe('The airport', function(){

	beforeEach(function(){
		airport = new Airport;
	});

	describe('interacts with airplane:', function(){
		
		beforeEach(function(){
			plane = new Plane;
		});

		it('should have a planes array', function(){
			expect(airport.planes instanceof Array).toBe(true)
		});

		it('should let a plane land', function(){
			airport.land(plane);
			expect(airport.planes).toEqual([plane])
		});

		it('should let the plane take off', function(){
			airport.land(plane);
			airport.takeOff(plane);
			expect(airport.planes.length).toEqual(0)
		});

		it('should not let the same place land twice', function(){
			airport.land(plane)
			expect(airport.land(plane)).toEqual('Plane has already landed')
		});

		it('should not let the same place take off twice', function(){
			airport.land(plane);
			airport.takeOff(plane);
			expect(airport.takeOff(plane)).toEqual('Plane has already taken off')
		});

		it('should know how many planes it has', function(){
			airport.land(plane);
			jet = new Plane
			airport.land(jet);
			expect(airport.planes.length).toEqual(2)
		});

		it('should have a capacity of planes it can accept', function(){
			expect(airport.capacity).toEqual(10)
		});

		it('should let a plane land if its not full',function(){
			expect(airport.canLand(jet)).toEqual('You are clear to land')
		});

		it('should not let a plane land if its not full', function(){
			for(var i = 0; i < 10; i++){
				plane = new Plane;
				airport.land(plane);
			};
			jet = new Plane;
			expect(airport.canLand(jet)).toEqual('Sorry, the airport is full')
		});
	});

	describe('interacts with passenger:', function(){

		beforeEach(function(){
			passenger = new Passenger;
		});

		it('should have a passengers array', function(){
			expect(airport.passengers instanceof Array).toBe(true)
		});

		it('should allow passengers to check in', function(){
			airport.checkIn(passenger);
			expect(airport.passengers.length).toEqual(1)
		});

		// it('should allow passengers to check out', function(){
		// 	airport.checkIn(passenger)
		// 	airport.checkOut(passenger)
		// 	expect(airport.passengers.length).toEqual(0)	
		// });

	});
});