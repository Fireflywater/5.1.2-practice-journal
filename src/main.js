import $ from 'jquery';
import { Entry , refresh } from './entries';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

var allEntries = [];

$(document).ready(function() {
	$("#template").hide();
	$("#journalForm").submit(function(event) {
		event.preventDefault();
		allEntries.push(new Entry($("#head").val(),$("#body").val()));
		refresh(allEntries);
	});
});