/* export function pingPong(goal) {
	var output = [];
	for (var i = 1; i <= goal; i++) {
		if (i % 15 === 0) {
			output.push("ping-pong");
		} else if (i % 3 === 0) {
			output.push("ping");
		} else if (i % 5 === 0) {
			output.push("pong");
		} else  {
			output.push(i);
		}
	}
	return output;
} */
import $ from 'jquery';

export function Entry(head, body) {
	this.head = head; // STRING
	this.body = body; // STRING
}

Entry.prototype.findNumWords = function() {
	return "Words";
};

Entry.prototype.findNumCons = function() {
	return "Consanants";
};

Entry.prototype.findNumVowel = function() {
	return "Vowels";
};

export function refresh(db) {
	$("#entryList").empty();
	for (var i = 0; i < db.length; i++) {
		var newBlock = $("#template").clone();
		newBlock.attr("id","entry" + i);
		newBlock.find(".panel-heading").text(db[i].head);
		newBlock.find(".panel-body").text(db[i].head);
		$("#entryList").append(newBlock);
	}
};