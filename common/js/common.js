/*
* 该文件存放全局的公用方法的工具类，对jquery的扩展等。
 */

/*
* 定义命名空间的函数
* @example $.ns("c360.ui.menu");
 */
/**************************************************************************/
/*                                                                        */
/* Copyright (c)2010-2012  Pinguo Company             　　　　　　　      */
/*                 品果科技                            版权所有 2010-2012 */
/*                                                                        */
/* PROPRIETARY RIGHTS of Pinguo Company are involved in the  　　　　　　 */
/* subject matter of this material.  All manufacturing, reproduction, use,*/
/* and sales rights pertaining to this subject matter are governed by the */
/* license agreement.  The recipient of this software implicitly accepts  */
/* the terms of the license.                                              */
/* 本软件文档资料是品果公司的资产,任何人士阅读和使用本资料必须获得        */
/* 相应的书面授权,承担保密责任和接受相应的法律约束.                       */
/*                                                                        */
/**************************************************************************/

(function($,window){

    $.ns = function(){
        var j = i = 0,
            argLen = arguments.length,
            nameLen = nameArr = nameStr = global = null;
        for(; j < argLen ; j++){
            nameStr = arguments[j];
            nameArr = nameStr.split('.');
            global = window;
            for(i = 0,nameLen = nameArr.length; i < nameLen; i++){
                if(i == nameLen - 1 && nameArr[i] in global) throw new Error('variable name '+nameArr[i]);
                global = global[nameArr[i]] = global[nameArr[i]] || {};
            }
        }
    };

    var _setTimeout = setTimeout;
    this.setTimeout = function(callback,time) {
        var param = Array.prototype.slice.call(arguments,2),
            _callback = function() {
                callback.apply(null,param);
            };
        return _setTimeout(_callback,time);
    }

    /*
    * 注册全局事件监听中心,所有事件派发都从这里触发(包括View之间通信)
     */
    $.ns("fht.events");
    _.extend(fht.events,Backbone.Events);

})($,window)