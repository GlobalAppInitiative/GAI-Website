/**
 * Created by Sanam on 6/14/15.
 */

$(document).ready(function(){
    $('.center').slick({
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});