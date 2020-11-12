$(function() {
	$("#toDo__add").click(()=> {
		const inputValue = $("#toDo__input").val();

		if(inputValue) {
			const newItem = $("<div class='toDo__task'></div>").text(inputValue);
			newItem.append("<button class='toDo__remove'>Remove</button>");

			$("#toDo__tasks").append(newItem);

			$("#toDo__input").val("");

			$(".toDo__remove").click(function () {
				$(this).parent().remove()
			});
		}
	});
});