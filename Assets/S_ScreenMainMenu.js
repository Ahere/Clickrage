#pragma strict
//MAIN MENU SCRIPT
var buttonSize: float = 200;
var buttonxStart	:float =240;
var buttonyExit		:float =200;
var buttonxExit		:float =240;
var buttonyStart	:float =150;
function Start () {

}

function Update () {

}
function OnGUI()
{
if (GUI.Button (Rect (buttonxStart, buttonyStart, buttonSize, 30), "Start Game"))
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