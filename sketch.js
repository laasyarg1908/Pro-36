var database, position;
var form, player, game;


function setup()
{
	database = firebase.database();

	canvas = createCanvas(400, 400);
	

}

function draw()
{
	background("black");

	drawSprites();
}
