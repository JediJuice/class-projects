$(document).ready(function() {


// As a user, I should be able to create new tasks by entering a 
// 	task description and clicking a "Create" button
// As a user, I should be able to set the importance of the task 
// 	(low, normal, high) via a dropdown when creating a new task
// As a user, I expect the default importance level to be "normal"
// As a user, I should be able to checkmark individual tasks to indicate the task was completed
// As a user, I should be able to uncheck individual tasks to undo the completed state

	var taskNumber = 0; // creating a number is the global scope
	// ********************target the form for the logic********************************

		
		$('#create-btn').on('click', function() {
	// increment the number
			taskNumber++ 
			var taskIncre = 'task-' + taskNumber;

	// the dropdown box with three options, low, med, high
			var importance = $('option:selected').val();
	// grab the info from the text box
			var textGrab = $('create-text').val();

	//create DOM label with label with for = task and class of text, then add to end
			var label = $('<label>');
			label.attr('for', taskIncre);
			label.append(textGrab);
	//create a checkbox with id for the task numbers
			var checkbox = $('<input>');
			input.attr('type','checkbox');
			input.attr('id', taskIncre);
	//create a div the hold the checkbox and the label. 
			var div = $('<div>');
			div.addClass('task')
			div.append(checkbox)
			div.append(label);
			div.addClass('importance');


		// for every id that is a task add a div
		
		$('#task').append(div)




		});


}); // document Ready closing tag