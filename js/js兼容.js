var eventHandler = {
					addEvent:function(element,eventType,handler){
						if(element.addEventListener){
							element.addEventListener(eventType,handler,false)
						}else if(element.attachEvent){
							element.attachEvent('on'+eventType,handler)
						}else{
							element['on'+eventType] = handler;
						}
					},
					removeEvent:function(element,eventType,handler){
						if(element.removeEventListener){
							element.removeEventListener(eventType,handler,false)
						}else if(element.detachEvent){
							element.detachEvent('on' + eventType,handler);
						}else{
							element['on' + eventType] = null;
						}
					},
					getEvent:function(e){
						return e || window.event;
//						return event ? event : window.event;

					},
					getTarget:function(event){
						return event.target || event.srcElement;
					},
					stopPro:function(event){
						if(event.stopPropagation){
							event.stopPropagation();
						}else if(event.cancelBubble){
							event.cancelBubble = true;
						}
					},
					preventDef:function(event){
						if(event.preventDefault){
							event.preventDefault();
						}else if(event.returnValue){
							event.returnValue = false;
						}
					}
				}
