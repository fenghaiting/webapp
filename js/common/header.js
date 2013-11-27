define(function(require,exports,module){

	require('../../css/common/header.css');

	var headerView = Backbone.View.extend({
		el:document.getElementById("pageHeader"),

		template : _.template('<div class="wrap">\
					<ul>\
						<li class="about left">關於興望</li>\
						<li class="lawyer left">事業律師</li>\
						<li class="housework left">家事法事</li>\
						<li class="project right first">服務項目</li>\
						<li class="consult right">免費法律諮詢</li>\
					</ul>\
				</div>'),

		events:{
			"click .about":"toAbout",
			"click .lawyer":"toLawyer"
		},

		initialize:function(){
			this.render();
			this.initDom();
		},

		initDom:function(){
			this.$aboutDom = this.$('.about');
			this.$lawyerDom = this.$('.lawyer');
			this.$houseworkDom = this.$('.housework');
			this.$projectDom = this.$('.project');
			this.$consultDom = this.$('.consult');
		},

		toAbout:function(){
			window.location = './about.html';
		},

		toLawyer:function(){
			window.location = './lawyer.html';
		},

		initPage:function(code){
			var $element = null;
			switch(code){
				case 'about':
					$element = this.$aboutDom;
					break;
				case 'lawyer':
					$element = this.$lawyerDom;
					break;
				case 'housework':
					$element = this.$houseworkDom;
					break;
				case 'project':
					$element = this.$projectDom;
					break;
				case 'consult':
					$element = this.$consultDom;
					break;
				default:
					break;
			}

			$element && $element.addClass('active');
		},

		render:function(){
			this.$el.html(this.template()).addClass('page-header');
		}

	})

	return headerView;
})