define(function(require,exports,module){

	require('../../css/index/footer.css');

	var footerView = Backbone.View.extend({

		el:document.getElementById("pageFooter"),

		template : _.template('<span class="icon"></span>\
			<span class="tip">最新消息:</span>\
			<span class="message">免費法律諮詢-本所每月二、四、五周周一上午9時到12時.免費法律諮詢.每位諮詢時間原則上以30分鐘為</span>'),

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