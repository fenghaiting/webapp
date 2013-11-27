define(function(require,exports,module){

	require('../../css/common/nav.css');

	var navView = Backbone.View.extend({
		
		el : document.getElementById("pageNav"),

		template : _.template('<span class="title"><%= title %></span>\
					<span class="label">Home><%= label %></span>'),

		events:{

		},

		initialize:function(json){
			this.model = new Backbone.Model(json);
			this.render();
			this.initDom();
		},

		initDom:function(){
			this.$titleDom = this.$('.title');
			this.$labelDom = this.$('.label');
		},

		render:function(){
			this.$el.html(this.template(this.model.toJSON())).addClass('page-nav');
		}

	})

	return navView;
})