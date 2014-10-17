function Airport(){
	this.planes = [];
	this.passengers = [];
	this.capacity = 10;
};

function Plane(){};

function Passenger(){};

Airport.prototype.land = function(plane) {
	if(this.planes.indexOf(plane) === -1)
		this.planes.push(plane)
	else
		return 'Plane has already landed'
};

Airport.prototype.takeOff = function(planes) {
	if(this.planes.indexOf(plane)!== -1)
		this.planes.splice(this.planes.indexOf(plane),1)[0];
	else
		return 'Plane has already taken off'
};

Airport.prototype.checkIn = function(passenger) {
	this.passengers.push(passenger);
};

Airport.prototype.canLand = function(plane) {
	if(this.planes.length < this.capacity)
		return 'You are clear to land'
	else
		return 'Sorry, the airport is full'
};