function level() {
	this.current = 0;
	this.levels = [
		[
			[100, 200, 50, 50],
			[200, 500, 50, 50],
			[380, 300, 50, 50],
			[300, 430, 50, 50]
		],
		[
			[200, 500, 50, 50],
			[400, 500, 50, 50]
		],
		[
			[200, 500, 50, 50],
			[400, 500, 50, 50]
		]
	];

	this.next = function() {
		if(this.current >= this.levels.length) this.current = 0;
			var level = this.levels[this.current];
			this.current++;
			return level;
	};
}