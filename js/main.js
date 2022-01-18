$(function(){
    $("#container").twentytwenty();
});

$(function(){
    $(".twentytwenty-container").twentytwenty({
      default_offset_pct: .5, // How much of the before image is visible when the page loads
      orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
      before_label: 'December 2021', // Set a custom before label
      after_label: 'January 2022', // Set a custom after label
      no_overlay: false, //Do not show the overlay with before and after
      move_slider_on_hover: false, // Move slider on mouse hover?
      move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement. 
      click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
    });
});

$(function(){
  $('.twentytwenty-handle').click(function(){
    let leftPos = $('.twentytwenty-handle')[0].offsetLeft + $('.twentytwenty-handle')[0].offsetWidth/2;
    console.log(leftPos)
  })
})