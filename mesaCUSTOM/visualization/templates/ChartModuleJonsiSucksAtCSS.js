var ChartModule = function(series, canvas_width, canvas_height, chart_title) {
	// Create the elements
	
	// Create the tag:
	var canvas_tag = "<canvas width='" + canvas_width + "' height='" + canvas_height + "' ";
	canvas_tag += "style='border:1px dotted'></canvas>";
	var canvas = $(canvas_tag)[0];

	var random_id = Math.floor(Math.random() * (9999999 - 100 + 1)) + 100;
	$("body").append("<span><div></div></span>")

	// Append the canvas and the chart title the span container:
	$("#"+ random_id).append(canvas)
	$("#"+ random_id).append("<span>Nice við Sophie</span>");
	
	// Create the context and the drawing controller:
	var context = canvas.getContext("2d");

	// Prep the chart properties and series:
	var datasets = []
	for (var i in series) {
		var s = series[i];
		var new_series = {label: s.Label, strokeColor: s.Color, data: []};
		datasets.push(new_series);
	}

	var data = {
		labels: [],
		datasets: datasets
	};

	var options = {
		animation: false,
		datasetFill: false,
		pointDot: false,
		bezierCurve : false
	};

	var chart = new Chart(context).Line(data, options);

	this.render = function(data) {
		chart.addData(data, control.tick);
	};

	this.reset = function() {
		chart.destroy();
		data.labels = [];
		chart = new Chart(context).Line(data, options);
	};
};