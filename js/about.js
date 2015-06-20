/**
 * Created by Sanam on 6/14/15.
 */

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:true,
        navigation:true,
        navigationText: [
            "<i class='fa fa-chevron-circle-left fa-3x'></i>",
            "<i class='fa fa-chevron-circle-right fa-3x'></i>"
        ],
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
});