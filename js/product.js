var d=0;

var p = window.location.hash.substring(1);

p=p-(44*32);
a=p;

if(a>=9 && a<=16){d=1; a=a-8;}
if(a>=17 && a<=24){d=2; a=a-16;}
if(a>=25 && a<=32){d=3; a=a-24;}


if(classnumb >= 0 && classnumb<=9){pclassnumb=0;}
if(classnumb >= 10 && classnumb<=18){pclassnumb=1;}
if(classnumb >= 19 && classnumb<=24){pclassnumb=2;}
if(classnumb >= 25 && classnumb<=28){pclassnumb=3;}
if(classnumb >= 29 && classnumb<=32){pclassnumb=4;}
if(classnumb >= 33 && classnumb<=35){pclassnumb=5;}
if(classnumb >= 36 && classnumb<=43){pclassnumb=6;}
if(classnumb >= 44 && classnumb<=48){pclassnumb=7;}
if(classnumb >= 49 && classnumb<=56){pclassnumb=8;}
if(classnumb >= 57 && classnumb<=62){pclassnumb=9;}
if(classnumb >= 63 && classnumb<=67){pclassnumb=10;}
if(classnumb >= 68 && classnumb<=70){pclassnumb=11;}
	
	
for(i=1;i<=4;i++){

document.getElementById("i"+ i).innerHTML='<img src="../res/images/Men/Bottomwear/'+secondaryclass[44]+'/'+brand44[d]+'/'+a+'.'+i+'.jpg" onclick="zoom('+i+')">'

			 
			 }
			document.getElementById('i5').style="height:100%;width:450px;background:url('../res/images/Men/Bottomwear/"+secondaryclass[44]+""+
			"/"+brand44[d]+"/"+a+".5.jpg')"+
			" no-repeat fixed; height:100%;width:440px;"+
            "border:2px solid white;";
function closeit(){
	
	document.getElementById('zooming').style.display="none";
}

function zoom(zooma){
	
	
	document.getElementById('zooming').style.display="block";
	document.getElementById('zooming').innerHTML='<img src="../../Men/Bottomwear/'+secondaryclass[44]+'/'+brand44[d]+'/'+a+'.'+zooma+'.jpg" style="width:70%; height:auto; margin-left:15%;"></img><button type="button" onclick="closeit()" style="color:white; position:absloute; margin-top:50px;">Close</button>'
    document.getElementById('dropdown').style.display="none";}


document.getElementById("rate1").innerHTML=myntra[1409];
document.getElementById("rate2").innerHTML=flipkart[1409];
document.getElementById("rate3").innerHTML=amazon[1409];
