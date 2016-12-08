var eventUtil = {
	addHandler: function(ele, type, handler, useCapture) {
		if(ele.addEventListener) {
			ele.addEventListener(type, handler, useCapture || false)
		} else if(ele.attachEvent) {
			ele.attachEvent("on" + type, handler);
		} else {
			ele["on" + type] = handler;
		}
	},
	removeHandler: function(ele, type, handler, useCapture) {
		if(ele.removeEventListener) {
			ele.removeEventListener(type, handler, useCapture || false)
		} else if(ele.detachEvent) {
			ele.detachEvent("on" + type, handler);
		} else {
			//ele.onclick = function(){};
			ele["on" + type] = null;
		}
	},
	getEvent: function(event) {
		return event ? event : window.event;
	},
	getTarget: function(event) {
		return event.target || event.srcElement;
	},
	preventDefault: function(event) {
		if(event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},
	stopPropagation: function(event) {
		if(event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	},
	getRelatedTarget: function(event) {
		if(event.relatedTarget) {
			return event.relatedTarget;
		} else if(event.toElement) {
			return event.toElement;
		} else if(event.fromElement) {
			return event.fromElement;
		} else {
			return null;
		}
	},
	getButton: function(event) {
		if(document.implementation.hasFeature("MouseEvents", "2.0")) {
			return event.button;
		} else {
			switch(event.button) {
				case 0:
				case 1:
				case 3:
				case 5:
				case 7:
					return 0;
				case 4:
					return 1;
				case 2:
				case 6:
					return 2;
			}
		}
	}
}