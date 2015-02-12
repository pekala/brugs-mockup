(function() {
    $('.announcements--item').click(function() {
        var edit = $('.announcements--item__edit').clone();
        $(this).velocity('transition.flipYOut', {
            complete: function() {
                $(this).addClass('announcements--item__edit').html(edit.html());
            }.bind(this)
        }).velocity('transition.flipYIn');
    });
})();