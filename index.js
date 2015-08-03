var path = require('path');

//This function finds configuration up the hierarchy.
var requireConfig = function(id) {
	var nextdir = __dirname;
	var dir;
	var dirs = [];
	do {
		dir = nextdir;
		dirs.push(dir);
		nextdir = path.dirname(dir);
	} while (dir != nextdir);
	dirs.shift();
	dirs.shift();
	// console.log(dirs);
	
	dirs.reverse();//Look from high in the folder hierarchy to low.
	for (var i=0; i<dirs.length; i++)
	{	try {
			return require(dirs[i]+'/_config/'+id);
		} catch (e) {}
	}
	var err = new Error('Cannot find configuration module '+id);
	throw err;
};

module.exports = requireConfig;