var allCats = $.get('https://ga-cat-rescue.herokuapp.com/api/cats/')
	.done(function(data){
		var parsedCats = JSON.parse(data);
		for (var i = 0; i <parsedCats.length; i++) {
		$('#cats').append('<li>' + parsedCats[i].name + "-" + parsedCats[i].note + '</li>');
	}

	$("#new-cat").on('submit', function(event){
		console.log('hello');
		event.preventDefault();

		var catName = $('#cat-name').val();
		console.log(catName);
		var catNote = $('#cat-note').val();
		console.log(catNote);
		
		let newCat = {
			name: catName,
			note: catNote
		};

		let newCatString = JSON.stringify(newCat);

		$.ajax({
			url: 'https://ga-cat-rescue.herokuapp.com/api/cats/',
			type: "POST",
			data: newCatString
		});
	$.get('https://ga-cat-rescue.herokuapp.com/api/cats/')
		.done(function(data){
			var newParseCat = JSON.parse(data);
			var addCat = newParseCat.pop();
			console.log(addCat);
			$('#cats').append('<li>' + addCat.name + "-" + addCat.note + "</li>");
		});
	});
});

//make form work
//append text area to the ul on submit

// $("#new-cat").submit(function(event){
// 	console.log('hello');
// 	event.preventDefault();
// 	if(($('#cat-name').val() === true) && ($('#cat-note').val() === true)){
// 		$('#cats').append('<li>' + )
// 	}
// });
