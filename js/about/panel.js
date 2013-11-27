define(function(require,exports,module){

	require('../../css/about/panel.css');

	var panelView = Backbone.View.extend({
		
		el : document.getElementById("pagePanel"),

		template : _.template('as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as打掃打掃打掃打掃的as'),

		initialize:function(){
			this.render();
		},

		render:function(){
			this.$el.html(this.template()).addClass('page-panel');
		}

	})

	return panelView;
})