


var context;
var sum=0;
var GameState=0;
var returnQizi_x;
var returnQizi_y;
var Qizitext='黑棋';
var color='black';
var z=0;
var t;
var myMap=[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
		[0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
		[0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
		[0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
		];
					
		
		
window.onload=function(){
	var myAudio=document.getElementById('myAudio');
	var canvas= document.getElementById("Canvas");
    context=canvas.getContext("2d");	
	setInterval(gameFun,1000/10);
	myAudio.volume=0.5;
}


//音乐控制


var a=1;
function myMusic(){	
	if(a==1){
		myAudio.style.display='none';
		a=0;
	}else if(a==0){
		myAudio.style.display='block';
		a=1;
	}	
}
function over(){
	myButton.style.background='darkgray';	
}
function out(){
	myButton.style.background='lightgray';	
	
}


//游戏菜单
function GameMenuPaint(){
	blank();
	emptyYinying();
	context.beginPath();
	
	context.fillStyle='burlywood';
	context.fillRect(150,100,500,500);
	
	
	context.font='20px 宋体';
	context.fillStyle = 'yellow';
	context.fillRect(350,200,100,30);		
	context.fillStyle = "black";
	context.fillText('开始游戏',360,220,100);	
	
	context.fillStyle = 'cyan';
	context.fillRect(350,230,100,30);
	context.fillStyle = "black";
	context.fillText('音效设置',360,250,100);
	
	context.fillStyle = 'greenyellow';
	context.fillRect(350,260,100,30);
	context.fillStyle = "black";
	context.fillText('游戏关于',360,280,100);
	
	context.fillStyle = 'lightgoldenrodyellow';
	context.fillRect(350,290,100,30);
	context.fillStyle = "black";
	context.fillText('退出游戏',360,310,100);	
		
	context.stroke();
}


//游戏开始
function GameRunPaint(){	
	blank();//空白
	QiPan();	
	QiZi();
	IsWin();		
}



//game
function gameFun(){
	switch(GameState){
		case 0:  //游戏 状态     0 菜单 
			InitQiPan();		//初始化棋盘
			GameMenuPaint();	//游戏菜单
			break;
			
		case 1:  //游戏 状态         1  开始游戏   
			yinying();			//阴影效果
			GameRunPaint();		//游戏运行
			returnDown();		//返回键			
			gameDspText(color);			//游戏描述文字
			timerText();			
			break;
			
		case 2:   //   2 音效 设置  
			SetUp();
			
			break;
			
		case 3:    //   3 游戏 关于  
			GameAbout();
			break;
			
		case 4:   //     4  退出游戏 
			break;
			
		case 5:    //    5 结束游戏
			
			break;
		case 6:    //    6 暂停游戏
			gameStop();
			break;			
		
	}
	
}




//计时器

function timerText(){
	
	z=z+(1/10);
	t=parseInt(z);
	context.fillStyle='dimgrey';
	context.fillText('游戏时间：',350,20);	
	context.fillStyle='red';
	context.fillText(t,440,20);
	
	context.fillStyle='dimgrey';
	context.fillText('s',460,20)
	
}

//白板
function blank(){
	context.fillStyle='#f0fcf8';
	context.fillRect(0,0,800,800,);
	context.globalAlpha=1;
	context.fill();
}

//初始化函数
function InitQiPan(){
	
	for(var i=1;i<16;i++){
		for(var j=1;j<16;j++){
			myMap[i][j]=0;
			myMap[4][4]=2;
			myMap[4][12]=2;
			myMap[12][4]=2;
			myMap[12][12]=2;
			myMap[8][8]=2;			
		}
	}
	sum=0;
	z=0;

	blank();
}



//音量设置
function SetUp(){
				context.beginPath();
				context.fillStyle='aqua';
				context.fillRect(275,175,250,250,);
				context.fillStyle='white';
				context.font='20px 宋体';
				context.fillText('音量设置',350,250,);				
				context.fillText('画质设置',350,280,);				
				context.fillText('操作设置',350,310,);
				context.stroke();
								
			}


//音量
var Volume=0.5;
function setHalfVolume()
{ 
	Volume+=0.1;
 	myAudio.volume=Volume;	
} 
function setFullVolume()
{ 
  	Volume-=0.1;
 	myAudio.volume=Volume;	
} 

//游戏关于
function GameAbout(){
	
	context.beginPath();
	context.fillStyle='greenyellow';
	context.fillRect(0,150,800,250,);
	context.font=' 12px 宋体';
	context.fillStyle='black';
	context.fillText('五子棋玩法简介：',60,190,);
	context.fillText('五子棋是一种两人对弈的纯策略型棋类游戏,棋具与围棋通用,是起源于中国古代的传统黑白棋种之一。发展于日本,流行于欧美。',80,220,);
	context.fillText('容易上手,老少皆宜,而且趣味横生,引人入胜;不仅能增强思维能力,提高智力,而且富含哲理,有助于修身养性，已在各个游戏',60,250,);
	context.fillText('平台有应用。',60,280,);
	context.fillText('五子棋专用棋盘为 15×15,盘面有纵横各十五条等距离垂直交叉的平行线构成,共225个交叉点。盘面正中一点为"天元"。 ',80,310,);
	context.fillText('行棋顺序为黑先(Start)、白后开始相互顺序落子。判断胜负为最先在棋盘横向、竖向、斜向形成连续的相同色五个棋子的一方为胜。',60,340,);
	context.stroke();	
}

//结束游戏
function GameOver(Win){
	
	InitQiPan();
	emptyYinying();
	context.font='20px 宋体';
	context.fillStyle='white';
	context.fillRect(250,200,300,100);
	context.fillStyle = "black";
	context.fillText('Game Over!'+ Win,280,230);	
	
	context.fillStyle='deepskyblue';
	context.fillRect(250,250,150,50);
	context.fillStyle = "black";
	context.fillText('重新开始',280,280,100,);	
	
	context.fillStyle='red';
	context.fillRect(400,250,150,50);	
	context.fillStyle = "black";
	context.fillText('回到菜单',440,280,100);		
}


//棋盘
function QiPan(){
	for(var i=50;i<750;i+=50){
		
		for(var j=50;j<750;j+=50){
			
			context.beginPath();
				
			context.strokeRect(i,j,50,50);	
			context.stroke();
		}					
	}	
}


//棋子
function QiZi(){
	for(var i=1;i<16;i++){
		
		for(var j=1;j<16;j++){
			
			switch(myMap[i][j]){
				
				case 0:
					break;
					
				case 1:			//黑棋				
					context.fillStyle='black';
					context.beginPath();
					context.arc(50*j,50*i,24,0,2*Math.PI);
					context.closePath();
					context.stroke();					
					context.fill();
					break;
									
				case -1:		//白棋
					context.fillStyle='white';
					context.beginPath();
					context.arc(50*j,50*i,24,0,2*Math.PI);
					context.closePath();
					context.stroke();					
					context.fill();
					break;
				case 2:			
					context.fillStyle='black';
					context.beginPath();
					context.arc(50*j,50*i,7,0,2*Math.PI);
					context.closePath();
					context.stroke();					
					context.fill();
					break;
			}
		}
	}
}

//阴影设置
function yinying(){	
	context.shadowBlur=3.5;
	context.shadowColor='dimgray';
	context.shadowOffsetX=10;
	context.shadowOffsetY=10;
}

//取消阴影
function emptyYinying(){
	context.shadowBlur=0;
	context.shadowColor='dimgray';
	context.shadowOffsetX=0;
	context.shadowOffsetY=0;
}

//返回菜单
function returnDown(){
	context.font='14px';
	context.beginPath();
	context.fillStyle='lawngreen';
	context.fillRect(750,0,50,30);
	context.font='12px 宋体';
	context.fillStyle='black';
	context.fillText('返回(ESC)',750,20);	
}

//暂停游戏
function gameStop(){	
	emptyYinying();
	context.font='20px 宋体';
	context.fillStyle='black';
	context.fillRect(250,200,300,100);
	context.fillStyle = "white";
	context.fillText('游戏暂停!',350,230);	
	
	context.fillStyle='deepskyblue';
	context.fillRect(250,250,150,50);
	context.fillStyle = "black";
	context.fillText('继续游戏',280,280,100,);	
	
	context.fillStyle='red';
	context.fillRect(400,250,150,50);	
	context.fillStyle = "black";
	context.fillText('重新开始',440,280,100);	
	
}

//游戏描述文本
function gameDspText(color){

	context.beginPath();	
	context.font='16px 宋体';	
	context.fillStyle='dimgrey';
	context.fillText("总棋子：",10,20);
	context.fillStyle='black';
	context.fillText(sum,85,20);
	context.fillStyle='dimgrey';
	context.fillText('个',105,20);	
	
	context.fillText("下一步：",140,20);
	context.fillStyle=color;	
	context.fillText(Qizitext,220,20);
	context.fillStyle='dimgrey';	
	context.fillText('走',270,20);
		
	
	context.fillStyle='dimgrey';
	context.fillText('悔棋（p键）',650,20);
	
	context.fillStyle='dimgrey';
	context.fillText('暂停游戏（空格键）',500,20);	
}


//落子  鼠标点击函数
function Lazi(event){
	
	var leftOffset=(window.innerWidth-800)/2;//画布离左边宽度=(窗口宽度-800)/2
	if(leftOffset<0){						//如果为负  则等于0
		leftOffset=0;
	}
    var x0=event.x-leftOffset;				//    
    var y0=event.y+document.body.scrollTop; //body.scrollTop :页面滚动高度   
    
  	var x=(parseInt((y0+25)/50));			//对应数组的x轴
	var y=(parseInt((x0+25)/50)); 			//对应数组的y轴
	
    console.log(x0+'/'+y0);
    console.log(x+'/'+y);
    
    //游戏设置-游戏关于
    if(GameState==0){
		if(x0>350 && x0<450 && y0>230 && y0<260){
  			GameState = 2;  				
  		}else if(x0>350 && x0<450 && y0>260 && y0<290){
  			GameState=3;
  		}
	}    
    
	switch(GameState){
  		case 0:								//游戏状态  0菜单
  			if(x0>350 && x0<450 && y0>200 && y0<230){
  				GameState = 1;
  			}
    		break;
    	case 1:								//游戏状态  1开始游戏
	    	if(x>0&&y>0){ 
	    		if(sum%2==0){				//偶数时为黑棋
			      if(myMap[x][y]==0||myMap[x][y]==2)	
			        {	
			        	color='aqua';
			        	Qizitext='白棋';
			           myMap[x][y]=1;
			           sum++;				//棋子个数
			           returnQizi_x=x;
			           returnQizi_y=y;
			         }
			    }else{						//白棋
			      if(myMap[x][y]==0||myMap[x][y]==2)
			        {
			        	color='black';
			        	Qizitext='黑棋';
			           myMap[x][y]=-1;
			           sum++;				//棋子个数
			           returnQizi_x=x;
			           returnQizi_y=y;
			        }
			    } 
			}    
		    if(x0>750 && x0<800 && y0>0 && y0<30){		//返回菜单键
		    	GameState=0;		    	
		    }
		    
    		break;
    		
    	case 2:   //游戏 状态     2 游戏 设置  			
			break;
			
		case 3:    //游戏 状态   3 游戏 关于  			
			break;
			
		case 4:   //游戏 状态       4  退出游戏 
			break;	
			
		case 5:    //游戏 状态   5 结束游戏  
		
			if(x0>250 && x0<400 && y0>250 && y0<300){    						
    			GameState = 1;   //重新开始   				
	  		}else if(x0>400 && x0<550 && y0>250 && y0<300){	  			
	  			GameState = 0;	//返回菜单
	  		}
	  		
			break;	
			
		case 6:    //游戏 状态   6 暂停游戏  
		
			if(x0>250 && x0<400 && y0>250 && y0<300){
				GameState=1;		//继续游戏
			}else if(x0>400 && x0<550 && y0>250 && y0<300){
				GameState=1;		//重新开始
				InitQiPan();		//棋盘初始化
			}
			
			break;	
    }
         
}


//悔棋
function huiqi(){
	myMap[returnQizi_x][returnQizi_y]=0;	
	sum--;	
}
   

//最终判断
function BorW_iswin(i,j){	
	if(myMap[i][j]==1){
		setTimeout(function(){		 		//0.5秒后运行函数
		 	GameOver( " 黑棋胜利！！！！");
		 	GameState = 5;		 	
		},500); 
	}else{
		 setTimeout(function(){		 	
			 GameOver( " 白棋胜利！！！！");
			 GameState = 5;
		 },500);
	}		
}

//判断函数
function IsWin(){
	
	//判断横向   
   for(var i=0;i<16;i++)
	{
		for(var j=0;j<16-4;j++)
		{
			 if(myMap[i][j]!=0 && myMap[i][j]==myMap[i][j+1]&& myMap[i][j]==myMap[i][j+2]&& myMap[i][j]==myMap[i][j+3]&& myMap[i][j]==myMap[i][j+4])
			 {
				 BorW_iswin(i,j);
			 }
		}
	}
   
   //判断纵向
   for(var i=0; i<16-4;i++)
	{
		for(var j=0;j<16;j++)
		{
			if(myMap[i][j]!=0 && myMap[i][j]==myMap[i+1][j]&& myMap[i][j]==myMap[i+2][j]&& myMap[i][j]==myMap[i+3][j]&& myMap[i][j]==myMap[i+4][j])
			 {
				  BorW_iswin(i,j);
			 }
		}
	}  
      
   //判断反斜向\
   for(var i=0; i<=11; i++)
	{
	     for(var j=0;j<=11; j++)
		 {
			 if(myMap[i][j]!=0 && myMap[i][j]==myMap[i+1][j+1]&& myMap[i][j]==myMap[i+2][j+2]&& myMap[i][j]==myMap[i+3][j+3]&& myMap[i][j]==myMap[i+4][j+4])
			 {
				  BorW_iswin(i,j);					  
			 }
		  }
	}
	
	//判断斜向 /
	
	for(var i=15;i>4; i--)
	{
	   for(var j=0; j<12; j++)
	   {
		    if(myMap[i][j]!=0 && myMap[i][j]==myMap[i-1][j+1]&& myMap[i][j]==myMap[i-2][j+2]&& myMap[i][j]==myMap[i-3][j+3]&& myMap[i][j]==myMap[i-4][j+4])
			 {
				  BorW_iswin(i,j);	
				  console.log(111);
			 }
		}
	}
}

//键盘事件
function KeyDown(event){
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(e && e.keyCode==27){ // 按 Esc 
		if(GameState == 1||GameState == 2||GameState == 3)
		{
			InitQiPan();
			GameState = 0;			
			blank();
		}
	}else if(e && e.keyCode==80){	//按下p键
		if(GameState==1){
			huiqi();			//悔棋
		}
		
	}else if(e && e.keyCode==32){	//按下空格键
		if(GameState==1){
			GameState=6;			//暂停游戏
		}		
	}
}




























