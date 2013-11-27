define(function(require,exports,module){

	$.ns('fht.musicView');

	require('../../css/common/tip.css');

	var musicView = require('./music'),

		tipView = Backbone.View.extend({
		
			el : document.getElementById("pageTip"),

			template : _.template('<span class="music-about"></span>\
						<span class="music-off"></span>'),

			events:{
				'click .music-about':'openMusicAbout'
			},

			openMusicAbout:function(){
				if(fht.musicView instanceof musicView){
					fht.musicView.showMusic();
				}else{
					fht.musicView = new musicView();
				}
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

		});

	return tipView;
})