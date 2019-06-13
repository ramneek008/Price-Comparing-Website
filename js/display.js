  var varclass,listtt=0,pclassnumb;
var a=1,b=[],i,d=0,e,k,want,p,aid=1;


	function myfunction(want){
		

	
	window.location.href = 'product.html' + '#' + want;
	}

	   var classnumb = location.search.split('varclass1=')[1] ;

	
	
	
	
for(a=1;a<=32;a++){
	
	 aid=(classnumb*32) + a;
	
	e=a;

if(a>=9 && a<=16){d=1; e=e-8;}
if(a>=17 && a<=24){d=2; e=e-16;}
if(a>=25 && a<=32){d=3; e=e-24;}


if(classnumb >= 0 && classnumb<=9){pclassnumb=0;section=0;}
if(classnumb >= 10 && classnumb<=18){pclassnumb=1;section=0;}
if(classnumb >= 19 && classnumb<=24){pclassnumb=2;section=0;}
if(classnumb >= 25 && classnumb<=28){pclassnumb=3;section=0;}
if(classnumb >= 29 && classnumb<=32){pclassnumb=4;section=0;}
if(classnumb >= 33 && classnumb<=35){pclassnumb=5;section=0;}
if(classnumb >= 36 && classnumb<=43){pclassnumb=6;section=1;}
if(classnumb >= 44 && classnumb<=48){pclassnumb=7;section=1;}
if(classnumb >= 49 && classnumb<=56){pclassnumb=8;section=1;}
if(classnumb >= 57 && classnumb<=62){pclassnumb=9;section=1;}
if(classnumb >= 63 && classnumb<=67){pclassnumb=10;section1;}
if(classnumb >= 68 && classnumb<=70){pclassnumb=11;section1;}
		
document.getElementById('x1').innerHTML=type[section];
document.getElementById('x2').innerHTML=primaryclass[pclassnumb];
document.getElementById('x3').innerHTML=secondaryclass[classnumb];
b[a]=
 '<img class="s1" class='+secondaryclass[classnumb]+' src="../res/images/'+type[section]+'/'+primaryclass[pclassnumb]+'/'+secondaryclass[classnumb]+'/'+brand44[d]+'/'+e+'.'+4+'.jpg" onclick="myfunction('+aid+'); ">'
		                 +'<img src="../res/images/'+type[section]+'/'+primaryclass[pclassnumb]+'/'+secondaryclass[classnumb]+'/'+brand44[d]+'/'+e+'.'+1+'.jpg"class="i1">'
						+' <div class="specify">'
						     +'<p style="font-size:20px;padding-top:8px;margin-bottom:-1px;color:brown;">'+brand44[d]+'</p>'
						      +'<button onclick="myfunction('+aid+'); " style="margin-left:0px;margin-top:20px;height:30px;width:150px;background-color:#ffbf80;border:1px solid #802b00">See This</button>'
							+'<button id="butt3" style="margin-left:10px;margin-top:20px;background-color:white;height:30px;width:150px;border:1px solid #802b00">Add To Wishlist</button>'
							  +' </div><br />'
						
document.getElementById('p' + a).innerHTML=b[a];





}function filter(){			
var check=[];
	var j=0,i=0;	
for(i=1;i<=10;i++){	
check[j]=document.getElementById("x"+i).checked;
j++;		

	

	for(k=1408;k<=1417;k++){
		var a=k-1407;
		if(color[k]==check[j]){
		document.getElementById('p' + a).style.display="none";	
		}}
	}
}



		
