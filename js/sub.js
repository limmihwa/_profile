var do_type={replay:function(e){var t=document.querySelector(e);setTimeout(function(){t.innerHTML="",do_type.type(e)},3e3)},type:function(e){var t=document.querySelector(e);try{var r=t.getAttribute("title"),n=t.getAttribute("title").length}catch(e){return void console.log("no attribute")}t.innerText="";var o=0,l=setInterval(function(){if(o>=n-1&&(clearInterval(l),do_type.replay(e)),"*"==r[o])t.innerHTML+="<br>",r[o]="";else{var a=document.createElement("span");a.innerHTML=r[o],t.append(a);for(var c=document.querySelectorAll(e+" span"),i=0;i<c.length;i++)c[i].style.border="none";document.querySelector(e+" span:last-child").style.borderRight="2px solid #333"}o++},150)}};