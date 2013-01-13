var cwidth     = 400,
	cheight    = 300,
	dicex      = 50,
	dicey      = 50,
	dicewidth  = 100,
	diceheight = 100,
	dotrad     = 6,
	ctx;

function init() {

	var ch = 1 + Math.floor( Math.random() * 6 );
	drawface( ch );

} // init()





function drawface(n) {

	ctx = document.getElementById( 'canvas' ).getContext( '2d' );
	ctx.lineWidth = 5;
	ctx.clearRect( dicex, dicey, dicewidth, diceheight );
	ctx.strokeRect( dicex, dicey, dicewidth, diceheight );
	ctx.fillStyle = '#009966';

	switch( n ) {
		case 1 : draw1(); break;
		case 2 : draw2(); break;
		case 3 : draw1(); draw2(); break;
		case 4 : draw4(); break;
		case 5 : draw1(); draw4(); break;
		case 6 : draw4(); draw2mid(); break;
	}

} // drawface()





function draw1() {

	var dotx,
		doty;

	ctx.beginPath();
	dotx = dicex + .5 * dicewidth;
	doty = dicey + .5 * diceheight;
	ctx.arc( dotx, doty, dotrad, 0, Math.PI * 2, true );

	ctx.closePath();
	ctx.fill();

} // draw1()





function draw2() {

	var dotx,
		doty;

	ctx.beginPath();
	dotx = dicex + 3 * dotrad;
	doty = dicey + 3 * dotrad;
	ctx.arc( dotx, doty, dotrad, 0, Math.PI * 2, true );

	dotx = dicex + dicewidth - 3 * dotrad;
	doty = dicey + diceheight - 3 * dotrad;
	ctx.arc( dotx, doty, dotrad, 0, Math.PI * 2, true );

	ctx.closePath();
	ctx.fill();

} // draw2()





function draw4() {

	var dotx,
		doty;

	draw2();

	ctx.beginPath();
	dotx = dicex + 3 * dotrad;
	doty = dicey + diceheight - 3 * dotrad;
	ctx.arc( dotx, doty, dotrad, 0, Math.PI * 2, true );

	dotx = dicex + dicewidth - 3 * dotrad;
	doty = dicey + 3 * dotrad;
	ctx.arc( dotx, doty, dotrad, 0, Math.PI * 2, true );

	ctx.closePath();
	ctx.fill();

} // draw4()





function draw2mid() {

	var dotx,
		doty;

	ctx.beginPath();
	dotx = dicex + 3 * dotrad;
	doty = dicey + .5 * diceheight;
	ctx.arc( dotx, doty, dotrad, 0, Math.PI * 2, true );

	dotx = dicex + dicewidth - 3 * dotrad;
	doty = dicey + diceheight - .5 * diceheight;
	ctx.arc( dotx, doty, dotrad, 0, Math.PI * 2, true );

	ctx.closePath();
	ctx.fill();

} // draw2mid()





document.addEventListener( 'DOMContentLoaded', init );