$(document).ready(function() {


// 1) As a user, I should be able to create new tasks by entering a 
	// 	task description and clicking a "Create" button
	// if the user does not enter data nothing will be created. 
// 2) As a user, I should be able to set the importance of the task 
// 	// 	(low, normal, high) via a dropdown when creating a new task
// 3) As a user, I expect the default importance level to be "normal"
// 4) As a user, I should be able to checkmark individual tasks to indicate the task was completed
// 5) As a user, I should be able to uncheck individual tasks to undo the completed state

	var newTask;

// create div.task , create an input checkbox,
// create a label with for that points to checkbox
//the input checkbox id. 

	var taskNumber = 3;
		taskNumber++; 						// increment task number by 1
	var taskIncre = 'task-' + taskNumber; 



	// var labelGen= function() {
	// 	if (taskNumber >= 3) {
	// 		$('')
	// 	}
	// }
	



	$('#create-btn').on('click',function() { // click on create button
		var userText = $('#create-text').val(); // grab text from input field
			
			$('#tasks').append('<div>') // create a div in the tasks section
			$('#tasks div:last-child').attr('class', 'task'); // add class to that div
			$('#tasks div:last-child').html('<input>') //create input checkbox
			$('#tasks div input:last-child').attr('id', taskIncre).attr('type', 'checkbox');	
			$('#tasks div input:last-child').html('<label>')
			$('#tasks div label:last-child').addClass('text')
			$('#tasks div label:last-child').addClass('text')
			//$('#tasks div label:last-child').text('userText')

	})	





}); // document Ready closing tag