import $ from 'jquery';
import { Entry , refresh } from './entries';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

var allEntries = [];

$(document).ready(function() {
	/*$('#ping-pong-form').submit(function(event) {
		event.preventDefault();
		var goal = $('#goal').val();
		var output = pingPong(goal);
		output.forEach(function(element) {
			$('#solution').append("<li>" + element + "</li>");
		});
	});*/
	
	$("#entryList").hide();
	$("#journalForm").submit(function(event) {
		event.preventDefault();
		allEntries.push(new Entry($("#head").val(),$("#body").val()));
		refresh(allEntries);
		console.log(allEntries);
	});
});