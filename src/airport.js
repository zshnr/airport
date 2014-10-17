function Airport(){
	this.planes = [];
	this.passengers = [];
};

function Plane(){};

function Passenger(){};

Airport.prototype.land = function(plane) {
	if(this.planes.indexOf(plane) === -1)
		this.planes.push(plane)
	else
		return 'Plane has already landed'
};

Airport.prototype.takeOff = function(plane) {
	this.planes.splice(this.planes.indexOf(plane),1)[0];
};

Airport.prototype.checkIn = function(passenger) {
	this.passengers.push(passenger);
};

// The code can allow the same plane to land multiple times.
// This needs to be fixed
// Need to understand this code :
	
		// Airport.prototype._clearToTakeOff = function(plane) {
		// return this._clearManyPlanesToTakeOff(plane, 1)[0];
// Why does, after passing two arguments do we need to give it [0]?
// is that to return? to splice?