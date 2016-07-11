$(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    var item_name = $('#item_name').val(),
        item_quantity = +$('#item_quantity').val() || 1,
        $li = $("<li>").text(item_quantity + " " + item_name);

    $('ul').append($li);
  });
});