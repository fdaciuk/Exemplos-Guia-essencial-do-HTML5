var boxx = 20,
	boxy = 30,
	boxwidth = 350,
	boxheight = 250,
	ballrad = 20,
	boxboundx = boxwidth + boxx - ballrad,
	boxboundy = boxheight + boxy - ballrad,
	inboxboundx = boxx + ballrad,
	inboxboundy = boxy + ballrad,
	ballx = 50,
	bally = 60,
	ctx,
	grad,
	color,
	hue = [],
	ballvx = 4,
	ballvy = 8,

	img = new Image();

img.src = "frogface.gif";

hue = [
	[ 255,   0,   0 ],
	[ 255, 255,   0 ],
	[   0, 255,   0 ],
	[   0, 255, 255 ],
	[   0,   0, 255 ],
	[ 255,   0, 255 ]
];

function init() {
	var h;
	ctx = document.getElementById( 'canvas' ).getContext( '2d' );

	grad = ctx.createLinearGradient( boxx, boxy, boxx + boxwidth, boxy + boxheight );

	for( h = 0; h < hue.length; h++ ) {
		color = 'rgb( ' + hue[h][0] + ', ' + hue[h][1] + ', ' + hue[h][2] + ' )';
		grad.addColorStop( h * 1/6, color );
	}

	ctx.fillStyle = grad;
	ctx.lineWidth = ballrad;
	moveball();

	setInterval( moveball, 10 );
}





function moveball() {
	ctx.clearRect( boxx, boxy, boxwidth, boxheight );
	moveandcheck();

	ctx.drawImage( img, ballx - ballrad, bally - ballrad, 2 * ballrad, 2 * ballrad );
	ctx.fillRect( boxx, boxy, ballrad, boxheight );
	ctx.fillRect( boxx + boxwidth - ballrad, boxy, ballrad, boxheight );
	ctx.fillRect( boxx, boxy, boxwidth, ballrad );
	ctx.fillRect( boxx, boxy + boxheight - ballrad, boxwidth, ballrad );

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