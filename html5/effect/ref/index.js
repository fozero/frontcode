jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, i, n, o) {
        return jQuery.easing[jQuery.easing.def](e, t, i, n, o)
    },
    easeInQuad: function (e, t, i, n, o) {
        return n * (t /= o) * t + i
    },
    easeOutQuad: function (e, t, i, n, o) {
        return -n * (t /= o) * (t - 2) + i
    },
    easeInOutQuad: function (e, t, i, n, o) {
        return (t /= o / 2) < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
    },
    easeInCubic: function (e, t, i, n, o) {
        return n * (t /= o) * t * t + i
    },
    easeOutCubic: function (e, t, i, n, o) {
        return n * ((t = t / o - 1) * t * t + 1) + i
    },
    easeInOutCubic: function (e, t, i, n, o) {
        return (t /= o / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
    },
    easeInQuart: function (e, t, i, n, o) {
        return n * (t /= o) * t * t * t + i
    },
    easeOutQuart: function (e, t, i, n, o) {
        return -n * ((t = t / o - 1) * t * t * t - 1) + i
    },
    easeInOutQuart: function (e, t, i, n, o) {
        return (t /= o / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i
    },
    easeInQuint: function (e, t, i, n, o) {
        return n * (t /= o) * t * t * t * t + i
    },
    easeOutQuint: function (e, t, i, n, o) {
        return n * ((t = t / o - 1) * t * t * t * t + 1) + i
    },
    easeInOutQuint: function (e, t, i, n, o) {
        return (t /= o / 2) < 1 ? n / 2 * t * t * t * t * t + i : n / 2 * ((t -= 2) * t * t * t * t + 2) + i
    },
    easeInSine: function (e, t, i, n, o) {
        return -n * Math.cos(t / o * (Math.PI / 2)) + n + i
    },
    easeOutSine: function (e, t, i, n, o) {
        return n * Math.sin(t / o * (Math.PI / 2)) + i
    },
    easeInOutSine: function (e, t, i, n, o) {
        return -n / 2 * (Math.cos(Math.PI * t / o) - 1) + i
    },
    easeInExpo: function (e, t, i, n, o) {
        return 0 == t ? i : n * Math.pow(2, 10 * (t / o - 1)) + i
    },
    easeOutExpo: function (e, t, i, n, o) {
        return t == o ? i + n : n * (-Math.pow(2, -10 * t / o) + 1) + i
    },
    easeInOutExpo: function (e, t, i, n, o) {
        return 0 == t ? i : t == o ? i + n : (t /= o / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + i : n / 2 * (-Math.pow(2, -10 * --t) + 2) + i
    },
    easeInCirc: function (e, t, i, n, o) {
        return -n * (Math.sqrt(1 - (t /= o) * t) - 1) + i
    },
    easeOutCirc: function (e, t, i, n, o) {
        return n * Math.sqrt(1 - (t = t / o - 1) * t) + i
    },
    easeInOutCirc: function (e, t, i, n, o) {
        return (t /= o / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + i : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
    },
    easeInElastic: function (e, t, i, n, o) {
        var s = 1.70158,
            a = 0,
            r = n;
        if (0 == t) return i;
        if (1 == (t /= o)) return i + n;
        if (a || (a = .3 * o), r < Math.abs(n)) {
                r = n;
                var s = a / 4
            } else var s = a / (2 * Math.PI) * Math.asin(n / r);
        return -(r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - s) * (2 * Math.PI) / a)) + i
    },
    easeOutElastic: function (e, t, i, n, o) {
        var s = 1.70158,
            a = 0,
            r = n;
        if (0 == t) return i;
        if (1 == (t /= o)) return i + n;
        if (a || (a = .3 * o), r < Math.abs(n)) {
                r = n;
                var s = a / 4
            } else var s = a / (2 * Math.PI) * Math.asin(n / r);
        return r * Math.pow(2, -10 * t) * Math.sin((t * o - s) * (2 * Math.PI) / a) + n + i
    },
    easeInOutElastic: function (e, t, i, n, o) {
        var s = 1.70158,
            a = 0,
            r = n;
        if (0 == t) return i;
        if (2 == (t /= o / 2)) return i + n;
        if (a || (a = o * (.3 * 1.5)), r < Math.abs(n)) {
                r = n;
                var s = a / 4
            } else var s = a / (2 * Math.PI) * Math.asin(n / r);
        return t < 1 ? -.5 * (r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - s) * (2 * Math.PI) / a)) + i : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * o - s) * (2 * Math.PI) / a) * .5 + n + i
    },
    easeInBack: function (e, t, i, n, o, s) {
        return void 0 == s && (s = 1.70158),
        n * (t /= o) * t * ((s + 1) * t - s) + i
    },
    easeOutBack: function (e, t, i, n, o, s) {
        return void 0 == s && (s = 1.70158),
        n * ((t = t / o - 1) * t * ((s + 1) * t + s) + 1) + i
    },
    easeInOutBack: function (e, t, i, n, o, s) {
        return void 0 == s && (s = 1.70158),
        (t /= o / 2) < 1 ? n / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + i : n / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + i
    },
    easeInBounce: function (e, t, i, n, o) {
        return n - jQuery.easing.easeOutBounce(e, o - t, 0, n, o) + i
    },
    easeOutBounce: function (e, t, i, n, o) {
        return (t /= o) < 1 / 2.75 ? n * (7.5625 * t * t) + i : t < 2 / 2.75 ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
    },
    easeInOutBounce: function (e, t, i, n, o) {
        return t < o / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, n, o) + i : .5 * jQuery.easing.easeOutBounce(e, 2 * t - o, 0, n, o) + .5 * n + i
    }
}),
$(function () {
    function e(e) {
        $window = $(window);
        var t = $window.height(),
            i = $window.scrollTop(),
            n = i + t,
            o = e.offset().top + e.height() / 2;
        return offsetBottom = e.offset().top + e.height(),
        offsetBottom > i && o < n
    }
    function t(e) {
        $window = $(window);
        var t = $window.scrollTop(),
            i = e.offset().top;
        return i <= t
    }
    function i(e) {
        $window = $(window);
        var t = $window.scrollTop(),
            i = e.offset().top,
            n = i + e.height() - $window.height();
        return n <= t
    }
    function n(e) {
        this.options = e,
        this.elem = $(e.el),
        this.offsetY = e.offsetY,
        this.offsetX = e.offsetX,
        this.indicatorPosition = 0,
        this.lerp()
    }
    function o() {
        var e = this.options;
        scrollOffset = $(window).scrollTop();
        var t = "";
        if (scrollOffset >= e.start && scrollOffset <= e.end) {
            this.scrollPercent = (scrollOffset - e.start) / (e.end - e.start),
            this.indicatorPosition += (this.scrollPercent - this.indicatorPosition) * e.factor;
            var i = 0,
                n = 0,
                s = 1;
            e.opacity && (s = e.direction < 0 ? 1 - this.indicatorPosition : this.indicatorPosition),
            e.offsetX && (i = this.indicatorPosition * e.offsetX),
            e.offsetY && (n = e.direction * this.indicatorPosition * e.offsetY),
            e.offsetX && e.offsetY && (t = "translate3d(" + i + "px, " + n + "px, 0)"),
            e.offsetX && !e.offsetY && (t = "translate3d(" + i + "px, 0, 0)"),
            !e.offsetX && e.offsetY && (t = "translate3d(0, " + n + "px, 0)"),
            this.elem.css({
                    opacity: s,
                    transform: t
                })
        } else scrollOffset < e.start ? this.elem.css({
            opacity: "",
            transform: ""
        }) : scrollOffset > e.end && (e.offsetX && e.offsetY && (t = "translate3d(" + e.offsetX + "px, " + e.direction * e.offsetY + "px, 0)"), e.offsetX && !e.offsetY && (t = "translate3d(" + e.offsetX + "px, 0, 0)"), !e.offsetX && e.offsetY && (t = "translate3d(0, " + e.direction * e.offsetY + "px, 0)"), this.elem.css({
            opacity: e.direction < 0 ? 0 : 1,
            transform: t
        }));
        requestAnimationFrame(o.bind(this))
    }
    function s(e, t) {
        function i() {
            var a = $(window).scrollTop(),
                r = e.offset().top;
            if (a >= r - o && a <= r + s) {
                    var c = (r - o - a) / (o + s);
                    n += (c - n) * t.factor;
                    var d = n * t.offset;
                    e.css("background-position-y", d + "px")
                }
            requestAnimationFrame(i)
        }
        var n = 0,
            o = $(window).height(),
            s = e.height();
        i()
    }
    function a(e) {
        this.options = e,
        this.elem = $(e.el),
        this.scrollContainer = this.elem.find(".section-half-scroll"),
        this.detailContainer = this.elem.find(".section-half-detail"),
        this.fixedPart = this.elem.find(".fixed-section"),
        this.sample = this.elem.find(".section-sample"),
        this.pagination = this.elem.find(".detail-part-pagination"),
        this.bindAnimate(),
        this.scroll()
    }
    var r = !! window.ActiveXObject || "ActiveXObject" in window || navigator.userAgent.indexOf("Edge") > -1,
        c = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        d = function (e, t) {
            var i = void 0;
            return function () {
                var n = arguments,
                    o = this;
                if (!i) return e.apply(o, n),
                i = !0,
                setTimeout(function () {
                        return i = !1
                    }, t)
            }
        };
    n.prototype.lerp = o,
    a.prototype.bindAnimate = function () {
            var e = this.options,
                t = $(window).height(),
                i = this.elem.offset().top,
                o = i,
                s = o + t / 2,
                a = o + t,
                r = 1;
            new n({
                    el: e.el + " .fixed-section .text-box",
                    direction: 1,
                    start: o,
                    end: a,
                    factor: r,
                    offsetY: 40,
                    opacity: !1
                }),
            $(e.el + " .fixed-section .move-left").length > 0 ? new n({
                    el: e.el + " .fixed-section .product-image",
                    direction: 1,
                    start: o,
                    end: a,
                    factor: r,
                    offsetX: -170,
                    offsetY: 40,
                    opacity: !1
                }) : $(e.el + " .fixed-section .move-right").length > 0 && new n({
                    el: e.el + " .fixed-section .product-image",
                    direction: 1,
                    start: o,
                    end: a,
                    factor: r,
                    offsetX: 170,
                    offsetY: 40,
                    opacity: !1
                }),
            new n({
                    el: e.el + " .fixed-section .text-box .specs",
                    direction: -1,
                    start: o,
                    end: s,
                    factor: r,
                    opacity: !0
                }),
            new n({
                    el: e.el + " .scroll-section .text-box, " + e.el + " .scroll-section .product-image",
                    direction: -1,
                    start: o,
                    end: s,
                    factor: r,
                    opacity: !0
                })
        },
    a.prototype.scroll = function () {
            function n() {
                a = $(window).height(),
                s.scrollContainer.height(a),
                s.pagination.hasClass("fixed") || s.pagination.css("top", a / 2 - 39),
                o()
            }
            function o() {
                t(s.scrollContainer) && !t(s.sample) ? s.fixedPart.addClass("fixed") : t(s.scrollContainer) && t(s.sample) ? s.fixedPart.removeClass("fixed") : s.fixedPart.removeClass("fixed"),
                t(s.detailContainer) && !i(s.detailContainer) ? (s.pagination.addClass("fixed"), s.pagination.css("top", "")) : (s.pagination.removeClass("fixed"), s.pagination.css("top", a / 2 - 39)),
                r.each(function (t) {
                    e($(this)) && c.removeClass("active").eq(t).addClass("active")
                })
            }
            $(window).on("resize", n),
            $(window).on("scroll", o);
            var s = this,
                a = $(window).height(),
                r = s.detailContainer.find(".detail-part"),
                c = s.pagination.find(".bullet");
            n(),
            o()
        };
    var l = {
            init: function () {
                this.initAnimateScroll(),
                this.s1Scroll(),
                this.s4Scroll(),
                this.s4Sample(),
                this.s6Swiper(),
                this.s6HDR(),
                this.S7Swiper(),
                this.s8Swiper(),
                this.s8VideoPlay(),
                this.initVideoPlay(),
                this.initReplayVideo(),
                this.videoPlayControl()
            },
            initAnimateScroll: function () {
                function t() {
                    i.each(function () {
                        var t = this,
                            o = $(this);
                        e(o) && (o.hasClass(n) || (o.addClass("animate-active"), o.removeClass("animate-section"), i = i.filter(function (e, i) {
                                return !(i === t)
                            })))
                    }),
                    0 === i.length && ($(window).off("scroll", o), $(window).off("resize", o))
                }
                var i = $(".animate-section"),
                    n = "animate-active";
                if (0 !== i.length) {
                        var o = d(t, 50);
                        $(window).on("scroll", o),
                        $(window).on("resize", o),
                        t()
                    }
            },
            s1Scroll: function () {
                function t() {
                    var e = {
                        el: $(".supernova-section-s1"),
                        start: 128,
                        end: 1080,
                        factor: .5,
                        zoomScale: 5,
                        opacity: !0
                    },
                        t = $(window).scrollTop();
                    if (t >= e.start && t <= e.end) {
                            var i = (t - e.start) / (e.end - e.start);
                            n += (i - n) * e.factor,
                            o = 1 - n,
                            calcZoomScale = 100 + n * e.zoomScale,
                            e.el.css({
                                opacity: o
                            }),
                            e.el.find(".section-bg").css({
                                backgroundSize: "auto " + calcZoomScale + "%"
                            })
                        } else t < e.start ? e.el.css({
                            opacity: 1
                        }) : e.el.css({
                            opacity: 0
                        })
                }
                function i() {
                    e(c) ? !isNaN(f.duration) && f.paused && f.play() : f.pause();
                    var t = $(window).scrollTop();
                    t > 1560 ? l.hide() : l.show()
                }
                $(window).on("resize", t),
                $(window).on("scroll", t);
                var n = 0,
                    o = 1,
                    a = .1;
                s($(".supernova-section-s6 .section-abstract .section-bg"), {
                        factor: a,
                        offset: 200
                    }),
                s($(".supernova-section-s7 .section-abstract .section-bg"), {
                        factor: a,
                        offset: 200
                    }),
                s($(".supernova-section-s8 .section-abstract .section-bg"), {
                        factor: a,
                        offset: 200
                    }),
                s($(".supernova-section-s9 .section-abstract .section-bg"), {
                        factor: a,
                        offset: 200
                    }),
                s($(".supernova-section-s10 .section-abstract .section-bg"), {
                        factor: a,
                        offset: 200
                    }),
                s($(".supernova-section-s8 .panoview .section-bg"), {
                        factor: a,
                        offset: 200
                    });
                var r = d(i, 50);
                $(window).on("resize", r),
                $(window).on("scroll", r);
                var c = $(".supernova-section-s2"),
                    l = $(".supernova-section-s1"),
                    f = $(".supernova-section-s2 video")[0]
            },
            s4Scroll: function () {
                new a({
                    el: ".supernova-section-s4"
                }),
                new a({
                    el: ".supernova-section-s4-reverse"
                });
                var e = $(".supernova-section-s4 .section-sample"),
                    t = $(window).height(),
                    i = e.position().top - t,
                    o = i + e.height() + t;
                new n({
                        el: ".supernova-section-s4 .sample-list.top",
                        start: i,
                        end: o,
                        factor: .1,
                        offsetX: -500,
                        opacity: !1
                    }),
                new n({
                        el: ".supernova-section-s4 .sample-list.bottom",
                        start: i,
                        end: o,
                        factor: .1,
                        offsetX: 500,
                        opacity: !1
                    })
            },
            s4Sample: function () {
                var e = new Swiper("#s1-modal-swiper-container", {
                    loop: !0,
                    centeredSlides: !0,
                    observer: !0,
                    observeParents: !0,
                    keyboardControl: !0,
                    pagination: "#s1-modal-swiper-container .swiper-pagination",
                    paginationClickable: !0,
                    prevButton: "#s1-modal-swiper-container .swiper-btn-prev",
                    nextButton: "#s1-modal-swiper-container .swiper-btn-next",
                    speed: 500,
                    lazyLoading: !0
                }),
                    t = $("#modal-swiper-container"),
                    i = $(".supernova-section-s4 .gallery .sample");
                i.click(function () {
                        e.slideTo($(this).data("target"), 0),
                        r ? t.show() : t.fadeIn()
                    }),
                t.find(".modal-mask").click(function (e) {
                        var i = e.target.className;
                        i && "swiper-btn-prev" !== i && "swiper-btn-next" !== i && (r ? t.hide() : t.fadeOut())
                    })
            },
            s6Swiper: function () {
                function t() {
                    if (!u && (e($(".supernova-section-s6 .section-abstract")) || e($(".supernova-section-s6 .detail-part-2")))) {
                        var t = $(".s6-swiper .swiper-container video");
                        t.each(function () {
                            var e = $(this).find("source"),
                                t = e.data("lazyer-src");
                            e.attr("src", t),
                            $(this)[0].load()
                        }),
                        u = !0
                    }
                    var i = a.slides.eq(a.activeIndex).find("video")[0];
                    e(s) ? !isNaN(i.duration) && i.paused && i.play() : i.pause()
                }
                var i = !0,
                    n = 4,
                    o = 0;
                    (r || c) && (i = !1, n = 0, o = 1);
                var s = ($(".supernova-section-s6"), $(".s6-swiper")),
                    a = new Swiper(".s6-swiper .swiper-container", {
                        initialSlide: o,
                        effect: "coverflow",
                        coverflow: {
                            rotate: 0,
                            stretch: 0,
                            depth: 160,
                            modifier: 2,
                            slideShadows: !1
                        },
                        slidesPerView: "auto",
                        centeredSlides: !0,
                        loop: i,
                        speed: 500,
                        loopedSlides: n,
                        loopAdditionalSlides: 0,
                        autoplay: !1,
                        prevButton: ".s6-swiper .swiper-button-prev",
                        nextButton: ".s6-swiper .swiper-button-next",
                        onSlideNextStart: function (e) {
                            var t = s.find(".swiper-pagination-item"),
                                i = e.activeIndex - n;
                            i === t.length && (i = 0),
                            t.removeClass("active").eq(i).addClass("active")
                        },
                        onSlidePrevStart: function (e) {
                            var t = s.find(".swiper-pagination-item"),
                                i = e.activeIndex - n;
                            i === -1 && (i = t.length - 1),
                            t.removeClass("active").eq(i).addClass("active")
                        },
                        onSlideChangeStart: function (e) {
                            var t = $(".s6-swiper .swiper-container video"),
                                i = t.eq(e.activeIndex),
                                n = t.eq(e.previousIndex);
                            isNaN(n[0].duration) ? n.load() : (n.trigger("pause"), n[0].currentTime = 0),
                            isNaN(i[0].duration) ? i[0].load() : (i[0].currentTime = 0, i.trigger("play"))
                        }
                    }),
                    l = $(".s6-swiper .swiper-pagination-item");
                l.on("click", function () {
                        var e = $(this).index() + n;
                        a.slideTo(e)
                    });
                var f = d(t, 50);
                $(window).on("scroll", f),
                $(window).on("resize", f);
                var u = !1
            },
            s6HDR: function () {
                function t(t) {
                    e(s) && !r && setTimeout(function () {
                        o.addClass("show-hdr"),
                        n.text(n.data("on")),
                        i.attr("checked", !0),
                        r = !0
                    }, 1e3)
                }
                var i = $("#hdr-toggle-btn"),
                    n = $(".toggle-text"),
                    o = $(".hdr-animate"),
                    s = $(".supernova-section-s6 .detail-part-2"),
                    a = d(t, 50);
                $(window).on("scroll", a),
                $(window).on("resize", a);
                var r = !1;
                i.change(function () {
                        i.is(":checked") ? (o.addClass("show-hdr"), n.text(n.data("on"))) : (o.removeClass("show-hdr"), n.text(n.data("off")))
                    })
            },
            S7Swiper: function () {
                var e = new Swiper("#s7-swiper-container", {
                    loop: !0,
                    effect: "fade",
                    initialSlide: 0,
                    prevButton: "#s7-swiper-container .swiper-button-prev",
                    nextButton: "#s7-swiper-container .swiper-button-next",
                    pagination: "#s7-swiper-container .swiper-pagination",
                    onSlideNextStart: function (e) {
                        var t = $("#s7-swiper-control-list .control-item"),
                            i = e.activeIndex - 1;
                        i === t.length && (i = 0),
                        t.removeClass("active").eq(i).addClass("active")
                    },
                    onSlidePrevStart: function (e) {
                        var t = $("#s7-swiper-control-list .control-item"),
                            i = e.activeIndex - 1;
                        t.removeClass("active").eq(i).addClass("active")
                    }
                });
                $("#s7-swiper-control-list .control-item").hover(function () {
                    $("#s7-swiper-control-list .control-item").removeClass("active"),
                    $(this).addClass("active");
                    var t = $(this).index() + 1;
                    e.slideTo(t)
                })
            },
            s8Swiper: function () {
                function t() {
                    if (!p && (e($(".supernova-section-s10 .section-abstract")) || e($(".panoview")))) {
                        var t = $(".s8-swiper .swiper-container video");
                        t.each(function () {
                            var e = $(this).find("source"),
                                t = e.data("lazyer-src");
                            e.attr("src", t),
                            $(this)[0].load()
                        }),
                        p = !0
                    }
                    var i = l.slides.eq(l.activeIndex).find("video")[0];
                    e(s) ? !isNaN(i.duration) && i.paused && i.play() : i.pause()
                }
                var i = !0,
                    n = 5,
                    o = 2;
                    (r || c) && (i = !1, n = 0, o = 2);
                var s = ($(".supernova-section-s8"), $(".s8-swiper")),
                    a = $(".supernova-section-s8 .detail-part-3 .swiper-content"),
                    l = new Swiper(".s8-swiper .swiper-container", {
                        initialSlide: o,
                        effect: "coverflow",
                        coverflow: {
                            rotate: 0,
                            stretch: 0,
                            depth: 160,
                            modifier: 2,
                            slideShadows: !1
                        },
                        slidesPerView: "auto",
                        centeredSlides: !0,
                        loop: i,
                        speed: 500,
                        loopedSlides: n,
                        loopAdditionalSlides: 0,
                        autoplay: !1,
                        prevButton: ".s8-swiper .swiper-button-prev",
                        nextButton: ".s8-swiper .swiper-button-next",
                        onSlideNextStart: function (e) {
                            var t = s.find(".swiper-pagination-item"),
                                i = e.activeIndex - n;
                            i === t.length && (i = 0),
                            a.removeClass("active").eq(i).addClass("active"),
                            t.removeClass("active").eq(i).addClass("active")
                        },
                        onSlidePrevStart: function (e) {
                            var t = s.find(".swiper-pagination-item"),
                                i = e.activeIndex - n;
                            i === -1 && (i = t.length - 1),
                            t.removeClass("active").eq(i).addClass("active"),
                            a.removeClass("active").eq(i).addClass("active")
                        },
                        onSlideChangeStart: function (e) {
                            var t = $(".s8-swiper .swiper-container video"),
                                i = t.eq(e.activeIndex),
                                n = t.eq(e.previousIndex);
                            isNaN(n[0].duration) ? n[0].load() : (n.trigger("pause"), n[0].currentTime = 0),
                            isNaN(i[0].duration) ? i[0].load() : (i[0].currentTime = 0, i.trigger("play"))
                        }
                    }),
                    f = $(".s8-swiper .swiper-pagination-item");
                f.on("click", function () {
                        var e = $(this).index() + n;
                        l.slideTo(e)
                    });
                var u = d(t, 50);
                $(window).on("scroll", u),
                $(window).on("resize", u);
                var p = !1
            },
            animationDone: !0,
            animationQueue: [!0, !0, !0, !0],
            s8VideoPlay: function () {
                function t() {
                    if (!r && e($(".stretch-videos-box"))) {
                        var t = s.find("video");
                        t.each(function () {
                            var e = $(this).data("lazyer-src");
                            $(this).attr("src", e),
                            $(this)[0].load()
                        }),
                        r = !0
                    }
                }
                var i = this,
                    n = $(".mask-item"),
                    o = $(".video-cover-item"),
                    s = $(".video-item"),
                    a = d(t, 50);
                $(window).on("scroll", a),
                $(window).on("resize", a);
                var r = !1;
                n.bind("mouseenter", function () {
                        if (r) {
                            $(this).addClass("active");
                            var e = $(this).data("target"),
                                t = s.eq(e),
                                n = 500;
                            if (i.isVideoPlaying ? n = 0 : 0 !== e && 3 !== e || (n = 600), i.animationDone = i.animationQueue[0] && i.animationQueue[1] && i.animationQueue[2] && i.animationQueue[3], i.animationDone) {
                                    i.animationDone = !1;
                                    for (var a = o.length - 1; a >= 0; a--) i.animationQueue[a] = !1;
                                    o.each(function (t) {
                                        t === e ? ($(this).find(".section-bg").css("transition", "opacity .2s ease-in-out"), $(this).find(".section-bg").css("opacity", "0"), $(this).animate({
                                            width: "100%",
                                            opacity: 0
                                        }, n, "easeInOutQuad", function () {
                                            $(this).find(".section-bg").css("transition", ""),
                                            $(this).css("opacity", "0"),
                                            i.animationQueue[t] = !0
                                        })) : $(this).animate({
                                            width: "0%",
                                            opacity: 0
                                        }, n, "easeInOutQuad", function () {
                                            $(this).css("opacity", "0"),
                                            i.animationQueue[t] = !0
                                        })
                                    })
                                }
                            t.animate({
                                    opacity: 1
                                }, 500),
                            t.css("z-index", 4);
                            var c = t.find(".video-bg").find("video"),
                                d = c.get(0).currentTime > 0 && !c.get(0).paused && !c.get(0).ended && c.get(0).readyState > 2;
                            d || c.trigger("play"),
                            i.isVideoPlaying = !0
                        }
                    }),
                n.bind("mouseleave", function () {
                        if (r) {
                            var e = $(this).data("target");
                            $(this).removeClass("active");
                            var t = s.eq(e),
                                i = t.find(".video-bg").find("video");
                            i.trigger("pause"),
                            isNaN(i[0].duration) || (i[0].currentTime = 0),
                            t.css("z-index", ""),
                            t.animate({
                                    opacity: 0
                                }, 0)
                        }
                    }),
                $(".mask-list").bind("mouseleave", function () {
                        if (r) var e = setInterval(function () {
                            i.animationDone = i.animationQueue[0] && i.animationQueue[1] && i.animationQueue[2] && i.animationQueue[3],
                            i.animationDone && (o.each(function () {
                                $(this).css("width", "25%"),
                                $(this).css("opacity", "1"),
                                $(this).find(".section-bg").css("opacity", "1")
                            }), i.isVideoPlaying = !1, clearInterval(e))
                        }, 100)
                    }),
                n.bind("touchstart", function (e) {
                        if (r) {
                            e.preventDefault(),
                            n.removeClass("active"),
                            $(this).addClass("active"),
                            n.css("border-right", "1px solid rgba(112, 116, 115, 0.7)"),
                            n.find(".mask").css("background", "rgba(0,0,0,0.4)"),
                            n.find(".text").css("opacity", "0"),
                            n.find(".top-text").css("opacity", "0.5"),
                            $(this).find(".top-text").css("opacity", "0"),
                            o.hide();
                            var t = $(this).data("target");
                            s.each(function (e) {
                                e === t ? ($(this).css("z-index", "4"), $(this).css("opacity", "1"), $(this).find(".video-bg").find("video")[0].currentTime = 0, $(this).find(".video-bg").find("video").trigger("play")) : ($(this).css("z-index", ""), $(this).css("opacity", ""))
                            })
                        }
                    }),
                $(window).bind("touchmove", function () {
                        e($(".supernova-section-s8 .stretch-videos-box")) && (n.removeClass("active"), n.css("border-right", ""), n.find(".mask").css("background", ""), n.find(".top-text").css("opacity", ""), n.find(".text").css("opacity", ""), s.find(".video-bg video").trigger("pause"), s.css("z-index", ""), s.css("opacity", ""), o.show())
                    })
            },
            initVideoPlay: function () {
                function t() {
                    i.each(function () {
                        var t = this,
                            n = $(this);
                        if (e(n)) {
                                var o = n.find("source"),
                                    s = o.data("lazyer-src");
                                o.attr("src", s),
                                n[0].load(),
                                setTimeout(function () {
                                        isNaN(n[0].duration) || (n[0].currentTime = 0, n.trigger("play"))
                                    }, 500),
                                i = i.filter(function (e, i) {
                                        return !(i === t)
                                    })
                            }
                    }),
                    0 === i.length && ($(window).off("scroll", n), $(window).off("resize", n))
                }
                var i = $(".replay-video video");
                if (0 !== i.length) {
                    var n = d(t, 50);
                    $(window).on("scroll", n),
                    $(window).on("resize", n)
                }
            },
            initReplayVideo: function () {
                $(".replay-video .btn-replay").on("click", function () {
                    var e = $(this).prev("video");
                    isNaN(e[0].duration) || (e[0].currentTime = 0, e.trigger("play"))
                })
            },
            videoPlayControl: function () {
                function t() {
                    if (!c && e(n)) {
                        var t = s.data("lazyer-src");
                        s.attr("src", t),
                        s[0].load(),
                        s.on("loadedmetadata", function () {
                            c = !0
                        })
                    }
                }
                function i() {
                    return l.find(".pagination-bullet").removeClass("pagination-bullet-acitve").eq(v).addClass("pagination-bullet-acitve"),
                    r ? f.hide().eq(v).show() : f.hide().eq(v).fadeIn(1e3),
                    0 === v ? void(u.currentTime = .1) : void(isNaN(u.duration) || (u.currentTime = p[v], u.play(), s.bind("timeupdate", function () {
                        var e = u.currentTime,
                            t = e.toFixed(1);
                        t >= p[v + 1] - .1 && t <= p[v + 1] + .1 && u.pause(),
                        6 == t && u.pause()
                    })))
                }
                var n = $(".supernova-section-s9 .detail-part-2"),
                    o = ($("html"), $(window)),
                    s = $(".supernova-section-s9 .vertical-swiper video"),
                    a = d(t, 50);
                o.on("resize", a),
                o.on("scroll", a);
                var c = !1,
                    l = n.find(".vertical-swiper-pagination"),
                    f = $(".fragment"),
                    u = s[0],
                    p = [0, 0, 1, 2, 3, 4, 5],
                    v = -1;
                l.find(".pagination-bullet").on("click", function () {
                        v = $(this).index(),
                        i()
                    })
            },
            s10Parallel: function () {
                var e = $(".supernova-section-s10"),
                    t = $(window).height(),
                    i = e.position().top,
                    o = i + e.height() + t;
                new n({
                        el: ".supernova-section-s10 .detail-part-2 .img-box",
                        direction: -1,
                        start: i + 400,
                        end: o - 400,
                        factor: .05,
                        offsetY: 150,
                        opacity: !1
                    }),
                new n({
                        el: ".supernova-section-s10 .detail-part-3 .img-box",
                        direction: -1,
                        start: i + 800,
                        end: o,
                        factor: .1,
                        offsetY: 100,
                        opacity: !1
                    })
            }
        };
    l.init(),
    DUI.Layzr()
});