function DropTarget(element) {	element.dropTarget = this		this.canAccept = function(dragObject) {		return true	}		this.accept = function(dragObject) {		this.onLeave()				dragObject.hide()				alert("Акцептор '"+this+"': принял объект '"+dragObject.toString()+"'")		console.log(dragObject.toString());	}		this.onLeave = function() {		element.className =  ''	}		this.onEnter = function() {		element.className = 'uponMe'	}		this.toString = function() {		return element.id	}}