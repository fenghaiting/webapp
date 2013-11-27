define(function(require,exports,module){

	require('../../css/common/footer.css');

	var footerView = Backbone.View.extend({

		el:document.getElementById("pageFooter"),

		template : _.template('<div class="wrap">\
				<p>\
					<span class="company first">Copyright@2013興望(Bring Hope)法律事務所著作權所有.Design By藍汛科技</span>\
					<span class="location"></span>\
					<span class="address"><a>公司位置</a></span>\
					<span class="facebook icon"></span>\
					<span class="google icon"></span>\
					<span class="ping icon"></span>\
				</p>\
				<p class="panel">\
					<a target="_blank" rel="nofollow" href="#">公司地址/壹北市中正品中山北路一段2號6樓之3</a>\
					&nbsp;|&nbsp;\
					<a target="_blank" rel="nofollow" href="#">TEL/02-23899003</a>\
					&nbsp;|&nbsp;\
					<a target="_blank" rel="nofollow" href="#">FAX/02-23899103</a>\
					&nbsp;|&nbsp;\
					<a target="_blank" rel="nofollow" href="#">E-MAIL/bringinghopelaw@gmail.com</a>\
				</p>\
			</div>'),

		events:{

		},

		initialize:function(){
			this.render();
			this.initDom();
		},

		initDom:function(){

		},

		render:function(){
			this.$el.html(this.template()).addClass('page-footer');
		}

	})

	return footerView;
})