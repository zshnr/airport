function Airport(){
	this.planes = [];
	this.passengers = [];
};

function Plane(){};

function Passenger(){};

Airport.prototype.land = function(plane) {
	this.planes.push(plane);
};

Airport.prototype.takeoff = function(plane) {
	return this.planes.splice(plane);
};

Airport.prototype.checkIn = function(passenger) {
	this.passengers.push(passenger);
};