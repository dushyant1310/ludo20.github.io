var roll= document.getElementById("roll");
var outcome=document.getElementById("outcome");
var showturn=document.getElementById("turn");
var term=document.getElementById("term");
var a1=document.getElementById("a1");
var a2=document.getElementById("a2");
var b1=document.getElementById("b1");
var b2=document.getElementById("b2");

var turn=0;

var flaga1=0;
var flaga2=0;
var flagb1=0;
var flagb2=0;

var preva1=-1;
var preva2=-1;
var prevb1=13;
var prevb2=13;

var pivot;
var dice=0;
var prevdice=0;


roll.onclick=function(){
	prevdice=dice;
	if(prevdice==6 && dice!=6)
	{
		turn++;
			console.log(turn);
	}

	//dice=6;
	dice=(Math.floor(Math.random() * 20)%6)+1;
	outcome.innerHTML =dice;
	pivot=0;

	/*if(dice==6 && turn==0)
	{
		turn++;
	}*/
	console.log("turn "+turn);

	if(turn%2==1)
	{
		console.log("turn "+turn);
		a1.onclick=function(){
		console.log(pivot);
		console.log(turn);

		if((turn)%2==1 && pivot==0)
		{
		console.log(turn);
			if(flaga1==0)
			{
				if(dice==6)
				{
					document.getElementById("x0").appendChild(document.getElementById("a1"));
					flaga1=1;
					pivot=1;
					preva1=0;
				}
			}
			else if(flaga1==1)
			{
				if((dice+preva1)<28)
				{
					document.getElementById("x"+(dice+preva1)).appendChild(document.getElementById("a1"));
					preva1+=dice;
					pivot=1;
				}
				if(preva1==27)
				{
					flaga1=2;
					document.getElementById("winner-a").appendChild(document.getElementById("a1"));
				}
			}
		}
	}
	
	a2.onclick=function(){
		if((turn)%2==1 && pivot==0)
		{
			if(flaga2==0)
			{
				if(dice==6)
				{
					document.getElementById("x0").appendChild(document.getElementById("a2"));
					flaga2=1;
					pivot=1;
					preva2=0;
				}
			}
			else if(flaga2==1)
			{
				if((dice+preva2)<28)
				{
					document.getElementById("x"+(dice+preva2)).appendChild(document.getElementById("a2"));
					preva2+=dice;
					pivot=1;
				}
				if(preva2==27)
				{
					flaga2=2;
					document.getElementById("winner-a").appendChild(document.getElementById("a2"));
				}
			}
		}

	}	
	}
	else
	{
		b1.onclick=function(){
		console.log(pivot);

		if((turn)%2==0 && pivot==0)
		{
		console.log(turn);
			if(flagb1==0)
			{
				if(dice==6)
				{
					document.getElementById("x14").appendChild(document.getElementById("b1"));
					flagb1=1;
					pivot=1;
					prevb1=14;
				}
			}
			else if(flagb1==1)
			{
				if((dice+prevb1)<42)
				{
					document.getElementById("x"+((dice+prevb1)%28)).appendChild(document.getElementById("b1"));
					prevb1+=dice;
					pivot=1;
				}
				if(prevb1==41)
				{
					flagb1=2;
					document.getElementById("winner-b").appendChild(document.getElementById("b1"));
				}
			}
		}

	}
	b2.onclick=function(){
		if((turn)%2==0 && pivot==0)
		{
			if(flagb2==0)
			{
				if(dice==6)
				{
					document.getElementById("x14").appendChild(document.getElementById("b2"));
					flagb2=1;
					pivot=1;
					prevb2=14;
				}
			}
			else if(flagb2==1)
			{
				if((dice+prevb2)<42)
				{
					document.getElementById("x"+((dice+prevb2)%28)).appendChild(document.getElementById("b2"));
					prevb2+=dice;
					pivot=1;
				}
				if(prevb2==41)
				{
					flagb2=2;
					document.getElementById("winner-b").appendChild(document.getElementById("b2"));
				}
			}
		}

	}
	}
	
	
	if(((prevb1%28)==preva1 && flaga1==1 && flagb1==1) || ((prevb2%28)==preva1 && flagb2==1 && flaga1==1))// kill a1 by b
	{
		if(flaga1!=2)
		{
			if((turn)%2==0)//turn B
			{
				flaga1=0;
				preva1=-1;
				document.getElementById("locker-a").appendChild(document.getElementById("a1"));
			}
		}
		
	}

	if(((prevb1%28)==preva2 && flaga2==1 && flagb1==1) || ((prevb2%28)==preva2 && flaga2==1 && flagb2==1))// kill a2 by b
	{
		if(flaga2!=2)
		{
			if((turn)%2==0)//turn B
			{
				flaga2=0;
				preva2=-1;
				document.getElementById("locker-a").appendChild(document.getElementById("a2"));
			}
		}
	}	
	if((preva1==(prevb1%28) && flaga1==1 && flagb1==1) || (preva2==(prevb1%28) && flagb1==1 && flaga2==1))//kill b1
	{
		if(flagb1!=2)
		{
			if((turn)%2==1)//turn A
			{
				flagb1=0;
				prevb1=13;
				document.getElementById("locker-b").appendChild(document.getElementById("b1"));
			}
		}
	}	
	if((preva1==(prevb2%28) && flaga1==1 && flagb2==1) || (preva2==(prevb2%28) && flaga2==1 && flagb2==1))//kill b2
	{
		if(flagb2!=2)
		{
			if((turn)%2==1)//turn A
			{
				flagb2=0;
				prevb2=13;
				document.getElementById("locker-b").appendChild(document.getElementById("b2"));
			}
		}
	}
	console.log(turn);	

	console.log("prevdice "+prevdice);
	console.log("dice "+dice);
	/*if(prevdice!=6 && prevdice>=1)
	{
		(turn)++;
	}
	else if(prevdice==0 && dice==6)
	{
		turn+=2;
	}*/
	if(prevdice!=6)
	{
		turn++;
	}

console.log(turn);	
	if(turn%2==1)
		showturn.innerHTML="TURN:Player A";
	else
		showturn.innerHTML="TURN:Player B";
	
	
	
	if(flaga1==2 && flaga2==2)
	{
		alert("Winner  Player A !!!!");
	}

	if(flagb1==2 && flagb2==2)
	{
		alert("Winner  Player B !!!!");
	}
}