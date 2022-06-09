jQuery(function () {
	//foundation	 
    	jQuery(document).foundation();	
	//foundation	 
	
    
    
    
    
    
        
    jQuery( ".subnav-trigger " ).click(function(e) {
        e.preventDefault();
        jQuery( ".subnav-outer" ).slideToggle();
        jQuery(this).toggleClass("acive-switch");
    }); 
     
    
    
	
	//image
	if (jQuery.fn.imgLiquid) {
	    jQuery(".property-image, .pict-outer, .slider-image").imgLiquid({fill:true});
	    jQuery(window).bind("debouncedresize", function() {
	         jQuery(".property-image, .pict-outer").imgLiquid({fill:true});
	    });
	}
    
	if (jQuery.fn.tabpager) {
		jQuery("#tab").tabpager({
			//  maximum visible items
			items: 8,
			// CSS class for tabbed content
			contents: 'tab-contents',
			// transition speed
			time: 300,
			// text for previous button
			previous: '<i class="fa fa-caret-left" aria-hidden="true"></i>PREVIOUS DIVISON',
			// text for next button
			next: 'VIEW DIVISION II RESULTS<i class="fa fa-caret-right" aria-hidden="true"></i>',
			// initial tab
			start: 1,
			// top or bottom
			position: 'bottom',
			// scrollable
			scroll: true
		});
	}
	
}); 
 