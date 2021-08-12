
function tripleSlider() {
    issetElement(".triple-slider") && $(".triple-slider").each(function (e) {
        var t = $(this),
            i = t.find(".triple-slider__image-slider"),
            o = t.find(".triple-slider__text-slider"),
            r = t.find(".triple-slider__thumb-slider"),
            n = "js-triple-slider__image-slider-" + e,
            l = "js-triple-slider__text-sliderr-" + e,
            s = "js-triple-slider__thumb-slider-" + e;
        i.attr("id", n), o.attr("id", l), r.attr("id", s), o.owlCarousel({
            items: 1,
            loop: !0,
            center: !0,
            linked: "#" + n + ", #" + s,
            nav: !0,
            navText: ['<svg class="svgSymb svgSymb-sprite_arrow-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sprite_arrow-left"></use></svg> previous', 'next <svg class="svgSymb svgSymb-sprite_arrow-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sprite_arrow-right"></use></svg>']
        }), i.owlCarousel({
            items: 1,
            loop: !0,
            center: !0,
            linked: "#" + s + ", #" + l
        }), r.owlCarousel({
            items: 4,
            loop: !0,
            center: !0,
            margin: 30,
            linked: "#" + l + ", #" + n,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        })
    })
}

function MobileMenu() {
    var e = $(".mobile-menu"),
        t = $(".js-mobile-menu-toggle");
    this.open = function () {
        t.addClass("open"), e.addClass("open"), _html.addClass("overflow-hidden"), _header.addClass("header--dark")
    }, this.close = function () {
        t.removeClass("open"), e.removeClass("open"), _html.removeClass("overflow-hidden"), _header.removeClass("header--dark")
    }, this.init = function () {
        t.on(_touchTap, function (i) {
            return i.preventDefault(), t.toggleClass("open"), e.toggleClass("open"), _html.toggleClass("overflow-hidden"), _header.toggleClass("header--dark"), !1
        })
    }
}

function journeyGridModal() {
    var e = this,
        t = $(".journey__overlay"),
        i = $(".journey-modal__img"),
        o = $(".journey-modal__content"),
        r = $(".journey-modal-wrapper"),
        n = {
            height: 0,
            width: 0,
            leftOffset: 0,
            topOffset: 0
        };
    this.close = function () {
        _html.removeClass("overflow-hidden"), t.removeClass("journey__overlay--full"), r.removeClass("show"), setTimeout(function () {
            t.removeAttr("style"), i.html(""), o.html("")
        }, 800)
    }, this.open = function (e) {
        var l = $(e),
            s = l.attr("href"),
            d = l.closest(".journey__item").find(".journey__item-full-desc").html(),
            a = l.offset();
        n.height = l.outerHeight(), n.width = l.outerWidth(), n.leftOffset = a.left, n.topOffset = a.top - _window.scrollTop(), t.css({
            height: n.height + "px",
            width: n.width + "px",
            left: n.leftOffset + "px",
            top: n.topOffset + "px"
        }), setTimeout(function () {
            t.addClass("journey__overlay--full")
        }, 100), setTimeout(function () {
            _html.addClass("overflow-hidden")
        }, 800), i.append('<img src="' + s + '" alt="" />'), o.append(d), r.addClass("show")
    }, this.init = function () {
        issetElement(".journey__grid") && (_document.on("click", ".journey__item-link", function (t) {
            return t.preventDefault(), e.open(this), !1
        }), _document.on("click", ".journey-modal__close", function (t) {
            return t.preventDefault(), e.close(), !1
        }))
    }
}

function invertibleHeader() {
    _header.toggleClass("header--sticky", _window.scrollTop() > 100), _window.on("scroll", function () {
        _header.toggleClass("header--sticky", _window.scrollTop() > 100)
    })
}

function App() {
    return {
        mobileMenu: new MobileMenu,
        journeyGridModal: new journeyGridModal,
        init: function () {
            invertibleHeader(), tripleSlider(), this.mobileMenu.init(), this.journeyGridModal.init()
        }
    }
}
_document.ready(function () {
    app = new App, app.init();
    var e = $(".journey__grid").masonry({
        itemSelector: ".journey__item",
        columnWidth: 255,
        gutter: 30,
        fitWidth: !0
    });
    e.imagesLoaded().progress(function () {
        e.masonry("layout")
    }), _document.on("click", ".scroll-to", function (e) {
        var t = $(".header-stickyHeight").outerHeight(),
            i = $(this).attr("href"),
            o = i.substr(i.indexOf("#")),
            r = $(o);
        if (r.length > 0) return e.preventDefault(), $("html, body").animate({
            scrollTop: r.offset().top - t
        }, 500), !1
    }), $(".popup-video").magnificPopup({
        type: "iframe",
        fixedContentPos: !1
    })
});


