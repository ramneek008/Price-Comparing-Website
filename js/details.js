var a,d=0;



var p = window.location.hash.substring(1)

a=p-(44*32)



if(a>=9 && a<=16){d=1; a=a-8;}
if(a>=17 && a<=24){d=2; a=a-16;}
if(a>=25 && a<=32){d=3; a=a-24;}

document.getElementById("details").innerHTML=''

+'<h1 class="h1" style="font-size:30px;font-family:Varela Round;color:#330000">'+brand44[d]+'</h1>'
+'<h2 class="h2" >'
+'</h2>'
+'<p id="p2" style="font-size:20px;margin-top:-5px;font-family:Laila">'+p1[p-1]+'</p>'
+'<p class="p1" id="book"><a href="#para"><button type="button" class="buttl" style="font-size:15px;padding-top:10px;">Compare Rates</button></a></p>'


+'<button type="button" class="buttonsu" style="font-size:15px;padding-top:10px;">Add To Wishlist</button>'


+'<ul class="list" style="font-size:15px;margin-top:50px">'




+'<li>Tax: Applicable tax on the basis of exact location & discount will be charged at the time of checkout</li>'
+'<li>Free worldwide shipping</li>'
+'<li>Free replenishment service</li>'


+'</ul>'

