var lightModel = (function(){
	
	var props = {};
	var funcs = {};
	
	var set = function(obj){

		if(typeof obj=="object")
		$.extend(props,obj);

	};

	var get = function(str){

		if(typeof str=='string')
		return props[str];

	};

	var trigger = function(func){

		if(typeof funcs[func] == 'function')
		funcs[func].call(this);

	};

	var on = function(event, func){

		$.extend(funcs,event);
		funcs[event] = func;

	};
	
	return {'set':set,'get':get,'trigger':trigger,'on':on}

}());