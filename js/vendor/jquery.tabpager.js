/************************************************************************
 * @Name		:	TabPager - jQuery Plugin
 * @Version		:	2.0.0
 * @Author 		:	Tsuyoshi.
 * @AuthorURI 	:	http://webcake.no003.info/
 * @License		: 	Open Source - MIT License : http://www.opensource.org/licenses/mit-license.php
 *************************************************************************/
(function ($) 
{
    $.fn.tabpager= function (config) 
    {
		var options = 
		{
			items: 5,
			contents: 'tab-contents',
            previous: 'Previous&raquo;',
            next: '&laquo;Next',
			time: 800,
			start: 1,
			position: 'bottom',
			scroll: true
		};
		var options = $.extend(options, config);
		
		$(this).addClass('jquery-tab-pager-tabbar');
		$tab = $(this).find('li');
		
		var scrollPosTop = 0;
		
		
		init();
				
		
		$tab.click(function() 
		{
			
			var i = $tab.index(this);
			
			
			$tab.removeClass('current');
			$(this).addClass('current')

			
			$('.' + options.contents)
				.removeClass('current')
				.hide()
				.eq(i)
					.addClass('current')
					.fadeIn(options.time);
			
			
			pager(1);
		});
		
		$(document).on('click', '#jquery-tab-pager-navi li a', function() 
		{
			if($(this).hasClass('disable'))
			{
				return false;
			}
		
			
			var i = $('#jquery-tab-pager-navi li a').index(this);
			
			
			pager(i);
		
			
			return false;
		});
		
		
		$(window).on('load scroll', function() 
		{
			scrollPosTop = $(window).scrollTop();
		});
		
		
		function init()
		{	
			var start = options.start - 1;
		
			
			$tab.eq(start).addClass('current');
			
			
			$('.' + options.contents)
				.hide()
				.eq(start)
					.show()
					.addClass('current');
			
			
			pager(1);
		}
				
		
		function pager(idx) 
		{

			
			var count = $('.' + options.contents + '.current').children().length;
			
			
			var page = Math.ceil(count / options.items);
			
			
			var html =	'<ul id="jquery-tab-pager-navi" class="page-nav">' +
						'	<li><a href="#" class="previos">' + options.previous + '</a></li>';
			
			for(i = 0; i<page; i++)
			{
				html +=		'	<li class="it-val"><a href="#" class="it-val">' + (i+1) +'</a></li>';
			}
			html +=		'	<li><a href="#" class="next">' + options.next + '</a></li>' +
						'</ul>';
			
			var current = idx;
			if (idx == 0) 
			{
				current = parseInt($('#jquery-tab-pager-navi li a.current').html());
				if((current-1) != 0)
				{
					current--;
				}
			}
			else if(idx == page+1)
			{
				current = parseInt($('#jquery-tab-pager-navi li a.current').html());
				if((current+1) != page+1)
				{
					current++;
				}
			}
			
			idx = current;
			
			
			if(count == 0) html = '';
			
			
			$('#jquery-tab-pager-navi').remove();
			
			if(options.position == 'top')
			{
				$('.' + options.contents + '.current').before(html);
			}
			else
			{
				$('.' + options.contents + '.current').after(html);
			}
			
			
			$('#jquery-tab-pager-navi li a').removeClass('current');
			$('#jquery-tab-pager-navi li a').eq(idx).addClass('current');
			
			
			$('#jquery-tab-pager-navi li a').removeClass('disable');
			current = parseInt($('#jquery-tab-pager-navi li a.current').html());

			if( (current-1) == 0) 
			{
				$('#jquery-tab-pager-navi li a.previos').addClass('disable');
			}
			if(current == page) 
			{
				$('#jquery-tab-pager-navi li a.next').addClass('disable');
			}
			
			
			var start = config.items*(idx-1);
			var end = config.items*(idx);
			
			if(idx == page)
			{
				end = count;
			}
			
			
			$('.' + options.contents + '.current').children().hide();
			$('.' + options.contents + '.current').children().slice(start,end).fadeIn(config.time);
			
			
			if(options.scroll == true)
			{
				$('html,body').animate({ scrollTop: scrollPosTop }, 0);
			}
		}
    };
})(jQuery);