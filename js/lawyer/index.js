define(function(require, exports, module) {

	$.ns("fht.lawyerView","fht.lawyerHeaderView","fht.lawyerFooterView","fht.lawyerContainerView");

	require('../../css/common/page.css');

	var pageHeaderView = require('js/common/header'),

		pageContainerView = require('js/lawyer/container'),

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
				fht.lawyerHeaderView = new pageHeaderView();
				fht.lawyerHeaderView.initPage('lawyer');
			},

			initContainer:function(){
				fht.lawyerContainerView = new pageContainerView();
			},

			initFooter:function(){
				fht.lawyerFooterView = new pageFooterView();
			}
		});

	return PageAboutView;
});