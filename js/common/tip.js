define(function(require,exports,module){

	require('../../css/common/tip.css');

	var tipView = Backbone.View.extend({
		
		el : document.getElementById("pageTip"),

		template : _.template('<span class="music-about"></span>\
					<span class="music-off"></span>'),

		events:{

		},

		initialize:function(){
			this.render();
			this.initDom();
		},

		initDom:function(){

		},

		render:function(){
			this.$el.html(this.template()).addClass('page-tip');
		}

	})

	return tipView;
})