// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$('input[type="submit"]').on('click', function(e) {

    // Prevent the form to be reloaded when the submit button is clicked
    e.preventDefault();

    // Select color input
    const color = $('#colorPicker').val();

    // Select size input
    const width = $('#inputWeight').val();
    const height = $('#inputHeight').val();

    // Empty the pixelcanvas everytime the submit button is clicked
    $("#pixelCanvas").empty();

    // When size is submitted by the user, call makeGrid()
    makeGrid(width, height);

});

function makeGrid(width, height) {

    for (let x=0; x<height; x++) {

        $('#pixelCanvas').append('<tr></tr>');

        for (let y=0; y<width; y++) {

            $('tr').last().append('<td></td>');

        }
    }

    $("#pixelCanvas").on('click', 'td', function() {
        // change the color of the td
        $(this).css('background-color', $('#colorPicker').val());
    });

}