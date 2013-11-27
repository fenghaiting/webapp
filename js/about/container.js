define(function(require, exports, module) {

	$.ns("fht.aboutNavView","fht.aboutPanelView","fht.aboutTipView");

	var pagePanelView = require('js/about/panel'),

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
				fht.aboutTipView = new pageTipView();
			},

			initPanel:function(){
				fht.aboutPanelView = new pagePanelView();
			},

			initNav:function(){
				fht.aboutNavView = new pageNavView({
					title:'關於興望',
					label:'關於興望'
				});
			}
		});

	return PageContainerView;
});