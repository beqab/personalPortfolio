	var supports3DTransforms =  document.body.style['webkitPerspective'] !== undefined || 
                            document.body.style['MozPerspective'] !== undefined;

function linkify( selector ) {
    if( supports3DTransforms ) {
        
        var nodes = document.querySelectorAll( selector );

        for( var i = 0, len = nodes.length; i < len; i++ ) {
            var node = nodes[i];

            if( !node.className || !node.className.match( /roll/g ) ) {
                node.className += ' roll';
                node.innerHTML = '<span data-title="'+ node.text +'">' + node.innerHTML + '</span>';
            }
        };
    }
}

linkify( '.nav_a' );
// ==============
              


  var testb3=true
     $(document).ready(function(){
     $(window).scroll(function() { 
       if($(document).scrollTop()>10){
        $ ('header').addClass('header_hide');
           if (!testb3) {
               console.log(1+1);
               testb3=false
                $(".navbar_togle > i:last-child").css('display', 'none');
                console.log(testb3);
           }
           else{
                $(".navbar_togle > i:last-child").css('display', 'block');
             console.log(testb3);
                //$(".navbar_togle > i:first-child").css('zIndex', '100');
           }
         
         

       }
         else{
          $('header').removeClass('header_hide');

          
         };
     });

      $(window).scroll(function() {    
       if($(document).scrollTop()<10){
        $ ('.navbar_togle').removeClass('hide_button');
       }
       else{
          $('.navbar_togle').addClass('hide_button');
         };
        
     });



      //loading percentages:
 function testing(){
$('.progress-bar-percent[data-percentage]').each(function () {

        var progress = $(this);
        var percentage = Math.ceil($(this).attr('data-percentage'));

            $({countNum: 0}).animate({countNum: percentage}, {
                duration: 3000,
                easing:'linear',
                step: function() {
                // What todo on every count
                    var pct = '';
                    if(percentage == 0){
                        pct = Math.floor(this.countNum) + '%';
                    }else{
                        pct = Math.floor(this.countNum+1) + '%';
                    }
                    progress.text(pct);
                }
            });
    });

}



      // ======== progrs function============
   var testb=true 
   var testb2=true 
      $(window).scroll(function() { 
     
       if($(window).scrollTop()>200){
      
      
          $('div.window_scrole').addClass('progres');
          $('div.window_scrole.test').addClass('jqueryjs');
          $('div.window_scrole.ps').addClass('psjs');
          $('div.window_scrole.ill').addClass('illjs');
          $('div.cssjs').addClass('css');
          $('div.phpjs').addClass('php');
          if (testb) {
            testing()
           testb=false
          $('.Progressing, #about .about').css('display','block')
         
            }

        };
              
     });

      $(window).scroll(function() { 
     
       if($(this).scrollTop()>$('#works').offset().top-($(window).height()/1.5)){
           $('#da-thumbs li').each(function(i){
                setTimeout(function(){
                    $('#da-thumbs li').eq(i).addClass('is_showing')

                }, 250*(i+1));



          //  test2=false
          // $('.works').css('animationName','works')
         
          
           })
         }

        });
              
    




      // =======and progres function=========


      $(".navbar_togle").click(function(){
        $("header").toggleClass("header_hide");
      
    });


       $(".navbar_togle").click(function(){
        $(".navbar_togle>i").toggleClass("index");
          testb3=true;
    });



     });
  

// =========rogres bar js

// function move() {
//   var elem = document.getElementById("myBar");   
//   var width = 10;
//   var id = setInterval(frame, 10);
//   function frame() {
//     if (width >= 90) {
//       clearInterval(id);
//     } else {
//       width++; 
//       elem.style.width = width + '%'; 
//       elem.innerHTML = width * 1  + '%';
//     }
//   }
// }













// this.$el.on( 'mouseenter.hoverdir, mouseleave.hoverdir', function( event ) {
  
//   var $el = $( this ),
//     $hoverElem = $el.find( 'div' ),
//     direction = self._getDir( $el, { x : event.pageX, y : event.pageY } ),
//     styleCSS = self._getStyle( direction );
  
//   if( event.type === 'mouseenter' ) {
    
//     $hoverElem.hide().css( styleCSS.from );
//     clearTimeout( self.tmhover );

//     self.tmhover = setTimeout( function() {
      
//       $hoverElem.show( 0, function() {
        
//         var $el = $( this );
//         if( self.support ) {
//           $el.css( 'transition', self.transitionProp );
//         }
//         self._applyAnimation( $el, styleCSS.to, self.options.speed );

//       } );
      
    
//     }, self.options.hoverDelay );
    
//   }
//   else {
  
//     if( self.support ) {
//       $hoverElem.css( 'transition', self.transitionProp );
//     }
//     clearTimeout( self.tmhover );
//     self._applyAnimation( $hoverElem, styleCSS.from, self.options.speed );
    
//   }
    
// } );


// nw progres

$('.progres_bar_animate > div').each(function(){

   

})
