#pragma strict
//Enemy Script

//Private Variables
 
//Inspector Variables
var shapeColor : Color[];
var numberOfClicks : int 	= 2;     // how man clicks per object destro
var reSpawnWaitTime : float = 1.5;  // respawn time.
var explosion : Transform ;         // particle explode.
var enemyPoint : int 		= 1;    // enem points to be added to score

function Start () 
{       
var position_start = Vector3( Random.Range(-7,5),Random.Range(-4,4) , 0);  // random number generator
transform.position = position_start;
RandomColor();

}

function Update () 
{ if ( numberOfClicks <= 0)
 {
 Instantiate(explosion,transform.position, transform.rotation);   
 var position_b = Vector3( Random.Range(-7,5),Random.Range(-4,4) , 0);  // random number generator
 RespawnWaitTime();

 transform.position = position_b;
 numberOfClicks = 2 ;
 }
 }
// Used to control the respawn rate of the enemies. 
function RespawnWaitTime () 
{
 GetComponent.<Renderer>().enabled = false;  // makes it insisible 
 RandomColor();
 yield WaitForSeconds(reSpawnWaitTime);
 GetComponent.<Renderer>().enabled = true;
}

// Used the Material of game object
function RandomColor()
{
if( shapeColor.length > 0)
 {
var newColor = Random.Range(0,shapeColor.length);
GetComponent.<Renderer>().material.color = shapeColor[newColor];
 }
}