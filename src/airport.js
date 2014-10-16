function Airport(){
	this.planes = [];
};

function Plane(){};

Airport.prototype.land = function(plane) {
	this.planes.push(plane);
};

Airport.prototype.takeoff = function(plane) {
	return this.planes.splice(plane);
};