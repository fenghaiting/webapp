define(function(require, exports, module) {

	$.ns("fht.aboutView","fht.aboutHeaderView","fht.aboutFooterView","fht.aboutContainerView");

	require('../../css/common/page.css');

	var pageHeaderView = require('js/common/header'),

		pageContainerView = require('js/about/container'),

		pageFooterView = require('js/common/footer'),

		PageAboutView = Backbone.View.extend({

			el:document.getElementById("pageIndex"),

			initialize:function(){
				this.initHeader();
				this.initContainer();
				this.initFooter();
				this.$el.addClass('page-index');
			},

			initHeader:function(){
				fht.aboutHeaderView = new pageHeaderView();
				fht.aboutHeaderView.initPage('about');
			},

			initContainer:function(){
				fht.aboutContainerView = new pageContainerView();
			},

			initFooter:function(){
				fht.aboutFooterView = new pageFooterView();
			}
		});

	return PageAboutView;
});