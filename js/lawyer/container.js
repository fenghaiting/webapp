define(function(require, exports, module) {

	$.ns("fht.lawyerNavView","fht.lawyerPanelView","fht.lawyerTipView");

	var pagePanelView = require('js/lawyer/panel'),

		pageTipView = require('js/common/tip'),

		pageNavView = require('js/common/nav'),

		PageContainerView = Backbone.View.extend({

			el:document.getElementById("pageContainer"),

			initialize:function(){
				this.initTip();
				this.initPanel();
				this.initNav();
				this.$el.addClass('page-container');
			},

			initTip:function(){
				fht.lawyerTipView = new pageTipView();
			},

			initPanel:function(){
				fht.lawyerPanelView = new pagePanelView();
			},

			initNav:function(){
				fht.lawyerNavView = new pageNavView({
					title:'事業律師',
					label:'事業律師'
				});
			}
		});

	return PageContainerView;
});