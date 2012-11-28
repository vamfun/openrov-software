function Logger(enabled) {
	this.enabled = enabled == true || enabled == undefined;
	this.log = function(arguments) {
		if (enabled) {
			console.log(arguments);
		}		
	}
};

Logger.create = function(enabled) {
		return new Logger(enabled);
	};

module.exports = Logger;
