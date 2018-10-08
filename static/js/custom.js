
$(document).ready(function(){
    $('.expanded').hide();

    $('.table-sorted').tablesorter({
        sortList: [[1, 1]]
    });

    $('.expanded a, .collapsed a').click(function(eve){
        var $container = $(this).parents('span');
        eve.preventDefault();
        $container.children('.expanded, .collapsed').toggle();
    });
});

$(window).on('load', function(){
    //adjust first two sections on homepage to be half screen height
    //only if their inherited height is smaller.
    function adjust_size(){
        //Set back to inherit first or this will overflow on mobile
        $('.half-screen-height').height('inherit')
        let hsh_height = $('.half-screen-height').height();
        let fbg_height = $('.frontbg.half-screen-height').height();

        //Give a decent buffer px so resizing does not look janky when
        //switching between half-height and inherited-height
        let buffer = 100

        if(hsh_height + fbg_height + buffer < $(window).height()){
            let new_height = $(window).height() / 2
            $('.half-screen-height').height(new_height + "px");
            $('.frontbg.half-screen-height').height(new_height - 60 + "px");
        }
    }

    adjust_size()

    $(window).on('resize', adjust_size);
});
