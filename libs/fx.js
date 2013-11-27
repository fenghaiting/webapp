(function($){
	var prefix = '', eventPrefix,
		// 创建css3数组标志
		vendors = { Webkit: 'webkit', Moz: '', O: 'o', ms: 'MS' },
		// 创建一个dom对象，为了可以获取浏览器是否支持css3属性
   		element = window.document.createElement('div');

	var // 定义将字符串全部转化为小写字母
    	_lowerCaseFun = function(str){
    		return str.toLowerCase();
    	},
    	// 得到动画事件名称转化
    	_animateEventFun = function(name){
    		return eventPrefix ? eventPrefix + name : _lowerCaseFun(name);
    	};

   // 得到当前引擎是否支持css3属性
   $.each(vendors, function(key, value){
	  	if ((key + "TransitionProperty") in element.style) {
	  		prefix = '-' + _lowerCaseFun(key) + '-';
			eventPrefix = value;
	  		return false
	  	}
	});

	// 定义动画初始值
	$.jqueryFx = {
		off             : eventPrefix === undefined,						// 是否支持css3属性标识
		speeds          : { duration : 400, fast: 200, slow: 600 },	        // 定义3种速度标识
		ease            : 'linear',										    // 默认动画类型定义
		prefix          : prefix,                                           // 定义浏览器支持css3的前缀  
        transitionEnd   : _animateEventFun('TransitionEnd'),				// 定义transition动画完成事件名称
	  	animationEnd    : _animateEventFun('AnimationEnd')					// 定义animation动画完成事件名称
	}
})(jQuery);