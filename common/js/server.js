(function(window){
	$.ns("c360.server");
	/*
	* url:发送请求地址。
	* serverData:待发送 Key/value 参数。
	* callback:载入成功时回调函数。
	* 使用方法：
	* getJSON(url,[serverData],callback);
	*/
	var getJSON = function(){
		var method = null;
		var callback = null;
		var serverData = {};
		switch(arguments.length){
			case 0:
			case 1:
				throw Error('Missing arguments');
				break;
			case 2:
				method = arguments[0];
				callback = arguments[1];
				if(! callback instanceof Function){
					throw Error('Invild Arguments');
				}
				break;
			case 3:
				method = arguments[0];
				serverData = arguments[1];
				callback = arguments[2];
				if(! callback instanceof Function){
					throw Error('Invild Arguments');
				}
				break;
		}
		return $.ajax({
			type:"post",
			url:'/ajaxData.php?method='+method,
			data:serverData,
			success:function(resp){
				var index = resp.indexOf('<!--');
				if(resp.indexOf('<!--') != -1){
					resp = $.parseJSON(resp.substring(0,index));
				}else{
					resp = $.parseJSON(resp);
				}
				if(callback)
					callback(resp);
			},
			error:function(request, textStatus, errorThrown){
				if(errorThrown == 'abort' || errorThrown == '' || errorThrown == null)return;
				callback({status:500,message:textStatus});
			},
			statusCode: {
				404: function() {
				    callback({status:404,message:'路径错误'});
				},
				500: function(){
					callback({status:500,message:'服务器异常'});
				}
			}
		});
	}
	
	var Server = function(){},

		a = Server.prototype,
	
/******************************************************
				初始化每个页面的请求对象
*******************************************************/

		indexPage = a.indexPage = {},

		aboutPage = a.aboutPage = {},

		messagePage = a.messagePage = {};
	
	/*********************
	 ****获取产品列表****
	*********************/
	indexPage.productList = function(callback){
		return getJSON('productList',function(data){
			callback(data);	
		})
	}

	aboutPage.aboutInfo = function(callback){
		return getJSON('about',function(data){
			callback(data);	
		})
	}

	messagePage.faqList = function(callback){
		return getJSON('faqList',function(data){
			callback(data);	
		})
	}

	messagePage.messageList = function(json,callback){
		return getJSON('messageList',json,function(data){
			callback(data);	
		})
	}

	messagePage.postMessage = function(json,callback){
		return getJSON('postMessage',json,function(data){
			callback(data);	
		})
	}

	c360.server = new Server();

})(window);