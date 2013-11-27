define(function(require,exports,module){

	require('../../css/common/music.css');

	var musicView = Backbone.View.extend({

		el:document.body,

		template : _.template('<div class="page-music">\
					<span class="logo"></span>\
					<span class="title"></span>\
					<div class="panel">\
						<div class="left">\
							<span class="pic"></span>\
							<span class="desc">\
								<ul>\
									<li>\
										<span>專輯名稱</span>\
										<a>&nbsp;:&nbsp;有人在替你祈禱</a>\
									</li>\
									<li>\
										<span>演唱者</span>\
										<a>&nbsp;:&nbsp;史茵茵</a>\
									</li>\
									<li>\
										<span>詞曲作者</span>\
										<a>&nbsp;:&nbsp;Lanny Wolfe</a>\
									</li>\
									<li>\
										<span>史茵茵官網</span>\
										<a>&nbsp;:&nbsp;http://www.yingying.tw</a>\
									</li>\
								</ul>\
							</span>\
						</div>\
						<div class="right"></div>\
					</div>\
				</div>\
			<div class="page-mask"></div>'),

		events:{
			'click .page-mask':'hideMusic'
		},

		initialize:function(){
			this.render();
			this.initDom();
		},

		hideMusic:function(){
			this.$pageMusicDom.hide();
			this.$pageMaskDom.hide();
		},

		showMusic:function(){
			this.$pageMusicDom.show();
			this.$pageMaskDom.show();
		},

		initDom:function(){
			this.$pageMusicDom = this.$('.page-music');
			this.$pageMaskDom = this.$('.page-mask');
		},

		render:function(){
			this.$el.append(this.template());
		}

	})

	return musicView;
})