$(document).on('ready', function() {
    $('#submit').on('click', function() {
      var task = $('#input').val();
      // Check if input is empty     
      if(task.length === 0) {
        // If input is empty, display a warning at the top of the page
        // which then fades away after 3 seconds      
        $('body').append('<p class="alert">You can\'t leave a task empty!</p>');
        $('.alert').fadeOut(3000);
      }else{
        $('#todos').append('<li>' + task + '</li>');
      }
      // Clear input after task is inserted     
      task = $('#input').val('');
    });
    
    // Users can add a task when the Enter key is pressed  
    $(document).on('keyup', 'input', function(e) {
      if(e.keyCode == 13) {
       $('#submit').click();
      }
    });
    
    // When a user double-clicks on a task, its disappears   
    $(document).on('dblclick', 'li', function() {
      $(this).toggleClass('done').fadeOut('slow');
    });
  });
  
  
  
  