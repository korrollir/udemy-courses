$(document).ready(function() {
  //Check off specific Todos
  $('li').click(function() {
    $(this).toggleClass('completed');
  });

  //Click on X to delete Todo
  $('span').click(function(event) {
    //Prevent event bubbling up through the containing DOM elements
    event.stopPropagation();
    $(this).parent().fadeOut(500, function() {
      //$(this) refers to $(this).parent(), not the span
      $(this).remove();
    });
  });
});
