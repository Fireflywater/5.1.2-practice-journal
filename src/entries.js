import $ from 'jquery';

export function Entry(head, body) {
	this.head = head; // STRING
	this.body = body; // STRING
}

Entry.prototype.findNum = function(type) {
	var vowels = ["a","e","i","o","u"];
	var temp = this.body.replace(/[^\w\s]/gi,"");
	var numCounted = 0; // "V"
	if (type === "C") {
		numCounted = temp.length;
	} else if (type === "W") {
		numCounted = 1;
	}
	
	for (var i = 0; i < temp.length; i++) {
		if ((temp.charAt(i) === " ") && (type === "W")) {
			numCounted++;
		}
		for (var j = 0; j < vowels.length; j++) {
			if (temp.charAt(i) === vowels[j]) {
				if (type === "C") {
					numCounted--;
				} else if (type === "V") {
					numCounted++;
				}
			}
		}
	}
	
	console.log(numCounted);
	return numCounted;
}

Entry.prototype.getTeaser = function() {
	var temp = this.body.split(" ");
	if (temp.length > 7) {
		temp.splice(8);
		console.log(temp.length + " spliced!");
		temp.push("... ...");
		return temp.join(" ");
	}
	return this.body;
}

export function refresh(db) {
	$("#entryList").empty();
	for (var i = 0; i < db.length; i++) {
		var newBlock = $("#template").clone();
		var current = db[i];
		newBlock.attr("id","entry" + i);
		newBlock.find(".card-title").text(current.head);
		newBlock.find(".card-text").text(current.getTeaser());
		newBlock.show();
		$("#entryList").append(newBlock);
		newBlock.find(".btn").on("click", function() {
			current.findNum(this.value);
			$(this).text(this.value + " found: " + current.findNum(this.value))
		});
		/*newBlock.find(".findVowel").on("click", function() {
			current.findNum("V");
		});*/
	}
}