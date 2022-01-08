/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...

var sections = window.theme.sections;
var slideshowAutoExtension = {
    init: function () {
        this.on('slideshow_desktop_init_done', this._autoplaySlideshow.bind(this));
    },
    _autoplaySlideshow: setInterval(function () {
        if (this.slideIndex === undefined) {
            this.slideIndex = 1
            this.buttonClicked = false
        }
        if (this.buttonClicked) {
            return
        }
        const $slides = $('.slideshow__slide');
        let currentIndex = $slides.index($('.slideshow__slide--active'))

        if (currentIndex !== this.slideIndex - 1) { // User has clicked some other button
            this.buttonClicked = true // Stop autoplay
            return
        }
        this.slideIndex = this.slideIndex % $slides.length + 1
        $('#Slideshow-slideshow > div > div:nth-child(' + this.slideIndex + ') > button').click() // Simulate click on button

    }, 3000)

};

sections.extend('slideshow', slideshowAutoExtension);