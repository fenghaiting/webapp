define(function(require,exports,module){

	require('../../css/lawyer/panel.css');

	var panelView = Backbone.View.extend({
		
		el : document.getElementById("pagePanel"),

		template : _.template('<div class="table">\
						<span class="title active">\
							<span class="point-icon"></span>\
							<span class="name">葉光洲律師</span>\
						</span>\
						<span class="title">\
							<span class="point-icon"></span>\
							<span class="name">涂予尹律師</span>\
						</span>\
						<span class="title">\
							<span class="point-icon"></span>\
							<span class="name">周安琦律師</span>\
						</span>\
						<span class="title">\
							<span class="point-icon"></span>\
							<span class="name">涂予斌律師</span>\
						</span>\
						</div>'),

		initialize:function(){
			this.render();
		},

		render:function(){
			this.$el.html(this.template()).addClass('page-panel');
		}

	})

	return panelView;
})