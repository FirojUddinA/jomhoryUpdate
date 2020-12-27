$(document).ready(() => {

    $('.button-container').on('click', function(){
        $(this).toggleClass('is-opened');
      });
  // SideNav Initialization
  $(".button-collapse").sideNav();
	new WOW().init();
    AOS.init();
    var swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        on: {
          slideChangeTransitionStart: function () {
            $('.slider-content, .slider-content .bannrer_heading ,.slider-content .bannte_text, .slider-content a').hide(0);
            $('.slider-content, .slider-content .bannrer_heading ,.slider-content .bannte_text, .slider-content a').removeClass('aos-init').removeClass('aos-animate');
          },
          slideChangeTransitionEnd: function () {
            $('.slider-content, .slider-content .bannrer_heading ,.slider-content .bannte_text, .slider-content a').show(0);
            AOS.init();
          },
        } 
      
      
      }); 
      
      AOS.init();


    $('#wave').wavify({
        height: 30,
        bones: 4,
        amplitude: 40,
        color: 'url(#linear-gradient)',
        speed: .25
    });




    function buttonUp(){
        var valux = $('.sb-search-input').val(); 
           valux = $.trim(valux).length;
           if(valux !== 0){
               $('.sb-search-submit').css('z-index','99');
           } else{
               $('.sb-search-input').val(''); 
               $('.sb-search-submit').css('z-index','-999');
           }
   }

        var submitIcon = $('.sb-icon-search');
        var submitInput = $('.sb-search-input');
        var searchBox = $('.sb-search');
        var isOpen = false;
        
        $(document).mouseup(function(){
            if(isOpen == true){
            submitInput.val('');
            $('.sb-search-submit').css('z-index','-999');
            submitIcon.click();
            }
        });
        
        submitIcon.mouseup(function(){
            return false;
        });
        
        searchBox.mouseup(function(){
            return false;
        });
                
        submitIcon.click(function(){
            if(isOpen == false){
                searchBox.addClass('sb-search-open');
                isOpen = true;
            } else {
                searchBox.removeClass('sb-search-open');
                isOpen = false;
            }
    });

    $('.toggle_btn').click(function(e){
        e.preventDefault();
        $(this).parent().addClass('open');
    })

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
})
