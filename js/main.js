$(document).ready(function(){

	$('body').addClass('load');

	//get data from json file and render the chart

	var stat;

    $.getJSON("http://weipengwu.github.io/razorfish/js/data.json", function(data) {
    	stat = data;
    	var data = [
		    {
		        value: parseFloat(stat.audio).toFixed(2),
		        color:"#4daf7b",
		        label: "audio",
		        highlight: "#67ae88"
		    },
		    {
		        value: parseFloat(stat.video).toFixed(2),
		        color: "#e35835",
		        label: "video",
		        highlight: "#e26f52"
		    },
		    {
		        value: parseFloat(stat.photo).toFixed(2),
		        color: "#ebc85e",
		        label: "photo",
		        highlight: "#ebd07d"
		    },
		    {
		        value: parseFloat(stat.all - stat.photo - stat.video - stat.audio).toFixed(2),
		        color: "#f4ede7",
		        label: "others",
		        highlight: "#f4ede7"
		    }
		];

		Chart.types.Doughnut.extend({
	        name: "DoughnutTextInside",
	        showTooltip: function() {
	            this.chart.ctx.save();
	            Chart.types.Doughnut.prototype.showTooltip.apply(this, arguments);
	            this.chart.ctx.restore();
	        },
	        draw: function() {
	            Chart.types.Doughnut.prototype.draw.apply(this, arguments);

	            var width = this.chart.width,
	                height = this.chart.height;

	            var fontSize = (height / 114).toFixed(2);
	            this.chart.ctx.font = fontSize + "em Lato";
	            this.chart.ctx.textBaseline = "middle";
	            this.chart.ctx.fillStyle='#8e8071';

	            var text = stat.all+'Gb',
	                textX = Math.round((width - this.chart.ctx.measureText(text).width) / 2),
	                textY = height / 2;

	            this.chart.ctx.fillText(text, textX, textY);
	        }
	    });

	    var DoughnutTextInsideChart = new Chart($('#dataChart')[0].getContext('2d')).DoughnutTextInside(data, {
	        responsive: true
	    });

	    for(var i in stat){
	    	if(i == 'all')
	    		break;
	    	$('.datatype .' + i + ' .percentage').html(parseInt(stat[i]/stat.all*100)+'%');
	    }
		
	})


})