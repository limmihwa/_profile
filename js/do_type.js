// do type: Ver 0.2
// 2020.06.03 by csslick
// https://github.com/csslick/do_type
// https://cafe.naver.com/csslick

var do_type = {

    replay: function(_el){
      var el = document.querySelector(_el)
      setTimeout(function(){ el.innerHTML = ''; do_type.type(_el);}, 3000);
    },
  
    type: function (_el) {
      var el = document.querySelector(_el)
      try {
       var el_txt = el.getAttribute('title');
        var count = el.getAttribute('title').length;   
      } catch(err){
        console.log('no attribute')
        return;
      }
  
      el.innerText = ''
      var duration = 300;
      var text_count = 0;
      var type = setInterval(function(){
      
          if(text_count >= count - 1) { 
            clearInterval(type);
            do_type.replay(_el);
          }
          if(el_txt[text_count] == '*') {
            el.innerHTML += '<br>';
            el_txt[text_count] = '';
          } else{
            var span = document.createElement('span');
            span.innerHTML = el_txt[text_count];
            el.append(span);
            var all_span = document.querySelectorAll(_el + ' span');
            for(var i = 0; i < all_span.length; i++) {
              all_span[i].style.border = 'none';
            }
            var last_span = document.querySelector(_el + ' span:last-child');
            last_span.style.borderRight = '2px solid #333'; 
          }
            text_count++;   
        }, duration)
    }  
  }