(() => {
	// เรื่มเขียน Code
	function setup() {
		const canvas = document.getElementById(`falling-snow-canvas`); // const: ดึงค่า Element Canvas ออกมาโดยใช้ document.getElementById
		canvas.width = window.innerWidth;
		canvas.height =  window.innerHeight;

		return {	// Return Object เพื่่อนำใช้ใน function
			canvas,	// เป็น Object ที่ Set ค่าว่า ความกว้าง, ความสูง ของเรามีค่าเท่าไหร่
			canvasContext: canvas.getContext(`2d`),	// ความจริงแล้วเวลาเราวาดรูปอะไรก็แล้วแต่ เราจะใช้ค่า Object canvasContext, ถ้าทำ Game or Graphic อาจเป็น 3d
			numberOfSnowBalls: 250
		};
	}
	function createSnowBalls(canvas, numberOfSnowBalls) {
		const x = [...Array(numberOfSnowBalls)].map(() => {
			
		})
		console.log(x);
	}
	function run() {
		const { canvas, canvasContext, numberOfSnowBalls} = setup();
		createSnowBalls(canvas, numberOfSnowBalls);
	}
	run();
})