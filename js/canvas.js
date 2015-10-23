(function(){
	function drawCanvas(){
		var canvas = document.getElementById("canvas");
		var context = canvas.getContext('2d');

		context.save();
		context.translate(70,180);

		context.beginPath();
		context.moveTo(0,0);
		context.lineTo(70,-70);
		context.stroke();

		context.restore();
	}

	window.addEventListener('load',drawCanvas,true);
}())