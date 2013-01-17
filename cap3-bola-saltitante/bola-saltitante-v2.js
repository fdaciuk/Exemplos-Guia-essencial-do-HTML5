var boxx = 20,
	boxy = 30,
	boxwidth = 350,
	boxheight = 250,
	ballrad = 10,
	boxboundx = boxwidth + boxx - ballrad,
	boxboundy = boxheight + boxy - ballrad,
	inboxboundx = boxx + ballrad,
	inboxboundy = boxy + ballrad,
	ballx = 50,
	bally = 60,
	ctx,
	ballvx = 4,
	ballvy = 8;

function init() {
	ctx = document.getElementById( 'canvas' ).getContext( '2d' );
	ctx.lineWidth = ballrad;
	ctx.fillStyle = "rgb( 200, 0, 50 )";
	moveball();

	setInterval( moveball, 10 );
}





function moveball() {
	ctx.clearRect( boxx, boxy, boxwidth, boxheight );
	moveandcheck();

	ctx.beginPath();
	ctx.arc( ballx, bally, ballrad, 0, Math.PI * 2, true );
	ctx.fill();

	ctx.strokeRect( boxx, boxy, boxwidth, boxheight );
}





function moveandcheck() {
	var nballx = ballx + ballvx,
		nbally = bally + ballvy;

	if( nballx > boxboundx ) {
		ballvx = -ballvx;
		nballx = boxboundx;
	}

	if( nballx < inboxboundx ) {
		nballx = inboxboundx;
		ballvx = -ballvx;
	}

	if( nbally > boxboundy ) {
		nbally = boxboundy;
		ballvy = -ballvy;
	}

	if( nbally < inboxboundy ) {
		nbally = inboxboundy;
		ballvy = -ballvy;
	}

	ballx = nballx;
	bally = nbally;
}





function change() {
	ballvx = Number( f.hv.value );
	ballvy = Number( f.vv.value );
	return false;
}