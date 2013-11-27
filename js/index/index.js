define(function(require, exports, module) {

	$.ns("fht.indexView","fht.indexFooterView");

	require('../../css/index/index.css');

	var pageFooterView = require('js/index/footer'),

		PageIndexView = Backbone.View.extend({

			el:document.getElementById("pageIndex"),

			events:{
				'click .enter':'enter'
			},

			initialize:function(){
				this.initFooter();
				this.$el.addClass('page-index');
			},

			initFooter:function(){
				fht.indexFooterView = new pageFooterView();
			},

			enter:function(){
				window.location = './about.html';
			}
		});

	return PageIndexView;
});