$(document).ready(function() {
    $('.imagenes').click(function(e){
        e.preventDefault();
        $('#big-image-modal div.spinicon').show();
        $('#big-image-modal .big-image-div').empty();
        $('#big-image-modal div.big-image-div').hide();
        var title = $(this).attr("title");
        $('#big-image-modal .modal-title').html(title);

        var imgSrc = $(this).attr("href");
        var img = $('<img />', { 
            src: imgSrc,
            class: 'img-responsive',
            onload: 'loadedBigImg()'
        });
        img.appendTo($('#big-image-modal .big-image-div'));
        $('#big-image-modal').modal({show:true});
    });
});

function loadedBigImg() {
  $('#big-image-modal div.spinicon').hide();
  $('#big-image-modal div.big-image-div').fadeIn("slow");
}