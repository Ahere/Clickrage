#pragma strict
// WIN SCREEN.
var buttonSize		:float =200;
var buttonxStart	:float =240;
var buttonyExit		:float =200;
var buttonxExit		:float =240;
var buttonyStart	:float =150;
var labelxWin       :float =286.3;
var labelyWin     	:float =109;
function Start () 
{

}
function OnGUI()
{
GUI.Label(Rect(labelxWin ,labelyWin ,buttonSize , 100),"YOU WIN BISH");
 
if (GUI.Button (Rect (buttonxStart, buttonyStart, buttonSize, 30), "Restart Game"))
{
  //print("start Game");
  Application.LoadLevel("SceneLevel1");
}
if (GUI.Button (Rect (buttonxExit, buttonyExit, buttonSize, 30), "Exit Game"))
{
 //print("Exit Game");
 Application.Quit();
}
}