#pragma strict
//Player Script

//Private Variables

//Inspector Variables
var tagNm 				:String ;                 // tagname
var rayDist 			:float 		= 	  10;         // ray distance
var score 				:int 		=	   0;         //game score
var gameTime			:float		=	20.0;     	  //game time.
var loadTime			:float   	=    3.0;
var numberOfPointsToWin :int		= 	  10;
function Start () {
InvokeRepeating("CountDown" , 1.0 , 1.0); // Count down mechanic that call the function ever second

}

function Update () 
{/// Use mouse button to selecton game objects on the scene.
 if (Input.GetMouseButtonDown(0))
 {
 print("left click was clicked");
  var hit : RaycastHit;
  var ray :Ray =  Camera.main.ScreenPointToRay(Input.mousePosition);
   if (Physics.Raycast( ray,hit,rayDist))      // ray casting if statement
    {
     if(hit.transform.tag == tagNm)
     { 
       var enemyScript = hit.transform.GetComponent(S_ActorEnemy); 
       enemyScript.numberOfClicks -=1 ;
       if (enemyScript.numberOfClicks == 0) // score counter
       {
       score += enemyScript.enemyPoint;    //click checker
       
       } 
     }
    else 
    {
     print("this is not an enemy");
    }
    
   }
  
  }
  
}

function CountDown ()     // Count down function.
{
 gameTime--;
 if (gameTime == 0)
 {
  CancelInvoke("CountDown");
  	if( score >= numberOfPointsToWin )
   	 {
       Application.LoadLevel("SceneWin");
   	 }
  	else
   	 {
       Application.LoadLevel("SceneLose");
   	 }
  }
}

 function OnGUI()
 {
  GUI.Box(Rect(10,10,100,20)," Score "+ score);
  GUI.Box(Rect(10,35,100,20)," Time "+ gameTime); 
 }
  

