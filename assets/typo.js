(function($) {

  
	jQuery( ".header-links .icons" ).append( '<i class="fa fa-user"></i>' );

  
	jQuery('#search-top .icon-search').click(function(){
      jQuery('#search-top .search-form').fadeIn('300');
      jQuery('#search-top .search-form .inputbox').focus().css("color","#000");
    });
    jQuery('#search-top .search-close').click(function(){
      jQuery('#search-top .search-form').fadeOut('300');
    });
  
    jQuery(".header-links .cusstom-link").hide();
  jQuery('.header-links').hover(
      function () {
        jQuery(this).addClass('active').find('.cusstom-link').stop().delay(200).slideDown();
      },
      function () {
        jQuery(this).removeClass('active').find('.cusstom-link').stop().delay(200).slideUp();
      }
    );
  
  jQuery('#currencies-top .dropdown-currency').hide();
  jQuery('#currencies-top').hover(
      function () {
        jQuery(this).addClass('active').find('.dropdown-currency').stop().delay(200).slideDown();
      },
      function () {
        jQuery(this).removeClass('active').find('.dropdown-currency').stop().delay(200).slideUp();
      }
    );
  
  
    
    jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > 200) {
        jQuery("#back-top").fadeIn()
      } else {
        jQuery("#back-top").fadeOut()
      }
    });
    jQuery( ".footer-top h3.module-title" ).append( '<i class="arrow_carrot-down"></i>' );
    jQuery(".footer-top .content").hide();
    jQuery(".footer-top h3.module-title i").addClass("accordion-show");
    jQuery(".footer-top h3.module-title i").click(function(){
      if(jQuery(this).parent().next().is(":visible")){
        jQuery(this).addClass("accordion-show");
      }else{
        jQuery(this).removeClass("accordion-show");
      }
      jQuery(this).parent().next().toggle(400);
    });
 $(document).ready(function(){
  $(window).load(function() {
      $('#loading').hide();
    });
  });
})(jQuery);