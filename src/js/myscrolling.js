var popularCarousel;    
 var topRatedCarousel;   
 var ActionGenreCarousel;
 
 $(document).ready(function () {
    popularCarousel = $("#popular-scroll"); 
    topRatedCarousel = $("#toprated-scroll"); 
    ActionGenreCarousel = $("#genre_actions-scroll")

       //item slide    +    var $wrap = $frame.parent();
        //popularCarousel.itemslide();     
    //    topRatedCarousel.itemslide();   
    //    ActionGenreCarousel.itemslide();    
          
        //reload to match resize items   
       popularCarousel.reload();   
     //  topRatedCarousel.reload();    
        //ActionGenreCarousel.reload();   
})