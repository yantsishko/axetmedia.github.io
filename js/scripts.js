if ("undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (e) {
    "use strict";
    function t() {
        var e = document.createElement("bootstrap"), t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in t)if (void 0 !== e.style[n])return {end: t[n]};
        return !1
    }

    e.fn.emulateTransitionEnd = function (t) {
        var n = !1, r = this;
        e(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var i = function () {
            n || e(r).trigger(e.support.transition.end)
        };
        return setTimeout(i, t), this
    }, e(function () {
        e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function (t) {
                return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), +function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var n = e(this), i = n.data("bs.alert");
            i || n.data("bs.alert", i = new r(this)), "string" == typeof t && i[t].call(n)
        })
    }

    var n = '[data-dismiss="alert"]', r = function (t) {
        e(t).on("click", n, this.close)
    };
    r.VERSION = "3.2.0", r.prototype.close = function (t) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }

        var r = e(this), i = r.attr("data-target");
        i || (i = r.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, ""));
        var s = e(i);
        t && t.preventDefault(), s.length || (s = r.hasClass("alert") ? r : r.parent()), s.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n())
    };
    var i = e.fn.alert;
    e.fn.alert = t, e.fn.alert.Constructor = r, e.fn.alert.noConflict = function () {
        return e.fn.alert = i, this
    }, e(document).on("click.bs.alert.data-api", n, r.prototype.close)
}(jQuery), +function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.button"), s = "object" == typeof t && t;
            i || r.data("bs.button", i = new n(this, s)), "toggle" == t ? i.toggle() : t && i.setState(t)
        })
    }

    var n = function (t, r) {
        this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, r), this.isLoading = !1
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (t) {
        var n = "disabled", r = this.$element, i = r.is("input") ? "val" : "html", s = r.data();
        t += "Text", null == s.resetText && r.data("resetText", r[i]()), r[i](null == s[t] ? this.options[t] : s[t]), setTimeout(e.proxy(function () {
            "loadingText" == t ? (this.isLoading = !0, r.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var e = !0, t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")), e && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        e && this.$element.toggleClass("active")
    };
    var r = e.fn.button;
    e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function () {
        return e.fn.button = r, this
    }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var r = e(n.target);
        r.hasClass("btn") || (r = r.closest(".btn")), t.call(r, "toggle"), n.preventDefault()
    })
}(jQuery), +function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.carousel"),
                s = e.extend({}, n.DEFAULTS, r.data(), "object" == typeof t && t),
                o = "string" == typeof t ? t : s.slide;
            i || r.data("bs.carousel", i = new n(this, s)), "number" == typeof t ? i.to(t) : o ? i[o]() : s.interval && i.pause().cycle()
        })
    }

    var n = function (t, n) {
        this.$element = e(t).on("keydown.bs.carousel", e.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {interval: 5e3, pause: "hover", wrap: !0}, n.prototype.keydown = function (e) {
        switch (e.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        e.preventDefault()
    }, n.prototype.cycle = function (t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
    }, n.prototype.to = function (t) {
        var n = this, r = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            n.to(t)
        }) : r == t ? this.pause().cycle() : this.slide(t > r ? "next" : "prev", e(this.$items[t]))
    }, n.prototype.pause = function (t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function (t, n) {
        var r = this.$element.find(".item.active"), i = n || r[t](), s = this.interval,
            o = "next" == t ? "left" : "right", u = "next" == t ? "first" : "last", f = this;
        if (!i.length) {
            if (!this.options.wrap)return;
            i = this.$element.find(".item")[u]()
        }
        if (i.hasClass("active"))return this.sliding = !1;
        var l = i[0], c = e.Event("slide.bs.carousel", {relatedTarget: l, direction: o});
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var h = e(this.$indicators.children()[this.getItemIndex(i)]);
                h && h.addClass("active")
            }
            var p = e.Event("slid.bs.carousel", {relatedTarget: l, direction: o});
            return e.support.transition && this.$element.hasClass("slide") ? (i.addClass(t), i[0].offsetWidth, r.addClass(o), i.addClass(o), r.one("bsTransitionEnd", function () {
                i.removeClass([t, o].join(" ")).addClass("active"), r.removeClass(["active", o].join(" ")), f.sliding = !1, setTimeout(function () {
                    f.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(1e3 * r.css("transition-duration").slice(0, -1))) : (r.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
        }
    };
    var r = e.fn.carousel;
    e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function () {
        return e.fn.carousel = r, this
    }, e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (n) {
        var r, i = e(this), s = e(i.attr("data-target") || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var o = e.extend({}, s.data(), i.data()), u = i.attr("data-slide-to");
            u && (o.interval = !1), t.call(s, o), u && s.data("bs.carousel").to(u), n.preventDefault()
        }
    }), e(window).on("load", function () {
        e('[data-ride="carousel"]').each(function () {
            var n = e(this);
            t.call(n, n.data())
        })
    })
}(jQuery), +function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.collapse"),
                s = e.extend({}, n.DEFAULTS, r.data(), "object" == typeof t && t);
            !i && s.toggle && "show" == t && (t = !t), i || r.data("bs.collapse", i = new n(this, s)), "string" == typeof t && i[t]()
        })
    }

    var n = function (t, r) {
        this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, r), this.transitioning = null, this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {toggle: !0}, n.prototype.dimension = function () {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, n.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var n = e.Event("show.bs.collapse");
            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                var r = this.$parent && this.$parent.find("> .panel > .in");
                if (r && r.length) {
                    var i = r.data("bs.collapse");
                    if (i && i.transitioning)return;
                    t.call(r, "hide"), i || r.data("bs.collapse", null)
                }
                var s = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[s](0), this.transitioning = 1;
                var o = function () {
                    this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!e.support.transition)return o.call(this);
                var u = e.camelCase(["scroll", s].join("-"));
                this.$element.one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(350)[s](this.$element[0][u])
            }
        }
    }, n.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var r = function () {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(r, this)).emulateTransitionEnd(350) : r.call(this)
            }
        }
    }, n.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var r = e.fn.collapse;
    e.fn.collapse = t, e.fn.collapse.Constructor = n, e.fn.collapse.noConflict = function () {
        return e.fn.collapse = r, this
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (n) {
        var r, i = e(this),
            s = i.attr("data-target") || n.preventDefault() || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""),
            o = e(s), u = o.data("bs.collapse"), f = u ? "toggle" : i.data(), l = i.attr("data-parent"), c = l && e(l);
        u && u.transitioning || (c && c.find('[data-toggle="collapse"][data-parent="' + l + '"]').not(i).addClass("collapsed"), i[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), t.call(o, f)
    })
}(jQuery), +function (e) {
    "use strict";
    function t(t) {
        t && 3 === t.which || (e(i).remove(), e(s).each(function () {
            var r = n(e(this)), i = {relatedTarget: this};
            r.hasClass("open") && (r.trigger(t = e.Event("hide.bs.dropdown", i)), t.isDefaultPrevented() || r.removeClass("open").trigger("hidden.bs.dropdown", i))
        }))
    }

    function n(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = n && e(n);
        return r && r.length ? r : t.parent()
    }

    function r(t) {
        return this.each(function () {
            var n = e(this), r = n.data("bs.dropdown");
            r || n.data("bs.dropdown", r = new o(this)), "string" == typeof t && r[t].call(n)
        })
    }

    var i = ".dropdown-backdrop", s = '[data-toggle="dropdown"]', o = function (t) {
        e(t).on("click.bs.dropdown", this.toggle)
    };
    o.VERSION = "3.2.0", o.prototype.toggle = function (r) {
        var i = e(this);
        if (!i.is(".disabled, :disabled")) {
            var s = n(i), o = s.hasClass("open");
            if (t(), !o) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t);
                var u = {relatedTarget: this};
                if (s.trigger(r = e.Event("show.bs.dropdown", u)), r.isDefaultPrevented())return;
                i.trigger("focus"), s.toggleClass("open").trigger("shown.bs.dropdown", u)
            }
            return !1
        }
    }, o.prototype.keydown = function (t) {
        if (/(38|40|27)/.test(t.keyCode)) {
            var r = e(this);
            if (t.preventDefault(), t.stopPropagation(), !r.is(".disabled, :disabled")) {
                var i = n(r), o = i.hasClass("open");
                if (!o || o && 27 == t.keyCode)return 27 == t.which && i.find(s).trigger("focus"), r.trigger("click");
                var u = " li:not(.divider):visible a", l = i.find('[role="menu"]' + u + ', [role="listbox"]' + u);
                if (l.length) {
                    var h = l.index(l.filter(":focus"));
                    38 == t.keyCode && h > 0 && h--, 40 == t.keyCode && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var u = e.fn.dropdown;
    e.fn.dropdown = r, e.fn.dropdown.Constructor = o, e.fn.dropdown.noConflict = function () {
        return e.fn.dropdown = u, this
    }, e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s + ', [role="menu"], [role="listbox"]', o.prototype.keydown)
}(jQuery), +function (e) {
    "use strict";
    function t(t, r) {
        return this.each(function () {
            var i = e(this), s = i.data("bs.modal"), o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t);
            s || i.data("bs.modal", s = new n(this, o)), "string" == typeof t ? s[t](r) : o.show && s.show(r)
        })
    }

    var n = function (t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0}, n.prototype.toggle = function (e) {
        return this.isShown ? this.hide() : this.show(e)
    }, n.prototype.show = function (t) {
        var n = this, r = e.Event("show.bs.modal", {relatedTarget: t});
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function () {
            var r = e.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), r && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var i = e.Event("shown.bs.modal", {relatedTarget: t});
            r ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
                n.$element.trigger("focus").trigger(i)
            }).emulateTransitionEnd(300) : n.$element.trigger("focus").trigger(i)
        }))
    }, n.prototype.hide = function (t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function (e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function (e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, n.prototype.hideModal = function () {
        var e = this;
        this.$element.hide(), this.backdrop(function () {
            e.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (t) {
        var n = this, r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = e.support.transition && r;
            if (this.$backdrop = e('<div class="modal-backdrop ' + r + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function (e) {
                    e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t)return;
            i ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(150) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function () {
                n.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(150) : s()
        } else t && t()
    }, n.prototype.checkScrollbar = function () {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, n.prototype.setScrollbar = function () {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", "")
    }, n.prototype.measureScrollbar = function () {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var r = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function () {
        return e.fn.modal = r, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var r = e(this), i = r.attr("href"), s = e(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            o = s.data("bs.modal") ? "toggle" : e.extend({remote: !/#/.test(i) && i}, s.data(), r.data());
        r.is("a") && n.preventDefault(), s.one("show.bs.modal", function (e) {
            e.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
                r.is(":visible") && r.trigger("focus")
            })
        }), t.call(s, o, this)
    })
}(jQuery), +function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.tooltip"), s = "object" == typeof t && t;
            (i || "destroy" != t) && (i || r.data("bs.tooltip", i = new n(this, s)), "string" == typeof t && i[t]())
        })
    }

    var n = function (e, t) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t)
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, n.prototype.init = function (t, n, r) {
        this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && e(this.options.viewport.selector || this.options.viewport);
        for (var i = this.options.trigger.split(" "), s = i.length; s--;) {
            var o = i[s];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)); else if ("manual" != o) {
                var u = "hover" == o ? "mouseenter" : "focusin", f = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(u + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(f + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, n.prototype.getDelegateOptions = function () {
        var t = {}, n = this.getDefaults();
        return this._options && e.each(this._options, function (e, r) {
            n[e] != r && (t[e] = r)
        }), t
    }, n.prototype.enter = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void (n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }, n.prototype.leave = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void (n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function () {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var n = e.contains(document.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !n)return;
            var r = this, i = this.tip(), s = this.getUID(this.type);
            this.setContent(), i.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && i.addClass("fade");
            var o = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
                u = /\s?auto?\s?/i, f = u.test(o);
            f && (o = o.replace(u, "") || "top"), i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(o).data("bs." + this.type, this), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
            var l = this.getPosition(), c = i[0].offsetWidth, h = i[0].offsetHeight;
            if (f) {
                var p = o, d = this.$element.parent(), v = this.getPosition(d);
                o = "bottom" == o && l.top + l.height + h - v.scroll > v.height ? "top" : "top" == o && l.top - v.scroll - h < 0 ? "bottom" : "right" == o && l.right + c > v.width ? "left" : "left" == o && l.left - c < v.left ? "right" : o, i.removeClass(p).addClass(o)
            }
            var m = this.getCalculatedOffset(o, l, c, h);
            this.applyPlacement(m, o);
            var g = function () {
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null
            };
            e.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", g).emulateTransitionEnd(150) : g()
        }
    }, n.prototype.applyPlacement = function (t, n) {
        var r = this.tip(), i = r[0].offsetWidth, s = r[0].offsetHeight, o = parseInt(r.css("margin-top"), 10),
            u = parseInt(r.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(u) && (u = 0), t.top = t.top + o, t.left = t.left + u, e.offset.setOffset(r[0], e.extend({
            using: function (e) {
                r.css({top: Math.round(e.top), left: Math.round(e.left)})
            }
        }, t), 0), r.addClass("in");
        var f = r[0].offsetWidth, l = r[0].offsetHeight;
        "top" == n && l != s && (t.top = t.top + s - l);
        var c = this.getViewportAdjustedDelta(n, t, f, l);
        c.left ? t.left += c.left : t.top += c.top;
        var h = c.left ? 2 * c.left - i + f : 2 * c.top - s + l, p = c.left ? "left" : "top",
            d = c.left ? "offsetWidth" : "offsetHeight";
        r.offset(t), this.replaceArrow(h, r[0][d], p)
    }, n.prototype.replaceArrow = function (e, t, n) {
        this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
    }, n.prototype.setContent = function () {
        var e = this.tip(), t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function () {
        function t() {
            "in" != n.hoverState && r.detach(), n.$element.trigger("hidden.bs." + n.type)
        }

        var n = this, r = this.tip(), i = e.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(i), i.isDefaultPrevented() ? void 0 : (r.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", t).emulateTransitionEnd(150) : t(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function () {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (t) {
        t = t || this.$element;
        var n = t[0], r = "BODY" == n.tagName;
        return e.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null, {
            scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop(),
            width: r ? e(window).width() : t.outerWidth(),
            height: r ? e(window).height() : t.outerHeight()
        }, r ? {top: 0, left: 0} : t.offset())
    }, n.prototype.getCalculatedOffset = function (e, t, n, r) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - r,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {top: t.top + t.height / 2 - r / 2, left: t.left - n} : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    }, n.prototype.getViewportAdjustedDelta = function (e, t, n, r) {
        var i = {top: 0, left: 0};
        if (!this.$viewport)return i;
        var s = this.options.viewport && this.options.viewport.padding || 0, o = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var u = t.top - s - o.scroll, a = t.top + s - o.scroll + r;
            u < o.top ? i.top = o.top - u : a > o.top + o.height && (i.top = o.top + o.height - a)
        } else {
            var f = t.left - s, l = t.left + s + n;
            f < o.left ? i.left = o.left - f : l > o.width && (i.left = o.left + o.width - l)
        }
        return i
    }, n.prototype.getTitle = function () {
        var e, t = this.$element, n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, n.prototype.getUID = function (e) {
        do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
        return e
    }, n.prototype.tip = function () {
        return this.$tip = this.$tip || e(this.options.template)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.validate = function () {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var r = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function () {
        return e.fn.tooltip = r, this
    }
}(jQuery), +function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.popover"), s = "object" == typeof t && t;
            (i || "destroy" != t) && (i || r.data("bs.popover", i = new n(this, s)), "string" == typeof t && i[t]())
        })
    }

    var n = function (e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip)throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.2.0", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.setContent = function () {
        var e = this.tip(), t = this.getTitle(), n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").empty()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
        var e = this.$element, t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, n.prototype.tip = function () {
        return this.$tip || (this.$tip = e(this.options.template)), this.$tip
    };
    var r = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function () {
        return e.fn.popover = r, this
    }
}(jQuery), +function (e) {
    "use strict";
    function t(n, r) {
        var i = e.proxy(this.process, this);
        this.$body = e("body"), this.$scrollElement = e(e(n).is("body") ? window : n), this.options = e.extend({}, t.DEFAULTS, r), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", i), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.scrollspy"), s = "object" == typeof n && n;
            i || r.data("bs.scrollspy", i = new t(this, s)), "string" == typeof n && i[n]()
        })
    }

    t.VERSION = "3.2.0", t.DEFAULTS = {offset: 10}, t.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function () {
        var t = "offset", n = 0;
        e.isWindow(this.$scrollElement[0]) || (t = "position", n = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var r = this;
        this.$body.find(this.selector).map(function () {
            var r = e(this), i = r.data("target") || r.attr("href"), s = /^#./.test(i) && e(i);
            return s && s.length && s.is(":visible") && [[s[t]().top + n, i]] || null
        }).sort(function (e, t) {
            return e[0] - t[0]
        }).each(function () {
            r.offsets.push(this[0]), r.targets.push(this[1])
        })
    }, t.prototype.process = function () {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(),
            r = this.options.offset + n - this.$scrollElement.height(), i = this.offsets, s = this.targets,
            o = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), t >= r)return o != (e = s[s.length - 1]) && this.activate(e);
        if (o && t <= i[0])return o != (e = s[0]) && this.activate(e);
        for (e = i.length; e--;)o != s[e] && t >= i[e] && (!i[e + 1] || t <= i[e + 1]) && this.activate(s[e])
    }, t.prototype.activate = function (t) {
        this.activeTarget = t, e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            r = e(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
    };
    var r = e.fn.scrollspy;
    e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function () {
        return e.fn.scrollspy = r, this
    }, e(window).on("load.bs.scrollspy.data-api", function () {
        e('[data-spy="scroll"]').each(function () {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery), +function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.tab");
            i || r.data("bs.tab", i = new n(this)), "string" == typeof t && i[t]()
        })
    }

    var n = function (t) {
        this.element = e(t)
    };
    n.VERSION = "3.2.0", n.prototype.show = function () {
        var t = this.element, n = t.closest("ul:not(.dropdown-menu)"), r = t.data("target");
        if (r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var i = n.find(".active:last a")[0], s = e.Event("show.bs.tab", {relatedTarget: i});
            if (t.trigger(s), !s.isDefaultPrevented()) {
                var o = e(r);
                this.activate(t.closest("li"), n), this.activate(o, o.parent(), function () {
                    t.trigger({type: "shown.bs.tab", relatedTarget: i})
                })
            }
        }
    }, n.prototype.activate = function (t, n, r) {
        function i() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), o ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
        }

        var s = n.find("> .active"), o = r && e.support.transition && s.hasClass("fade");
        o ? s.one("bsTransitionEnd", i).emulateTransitionEnd(150) : i(), s.removeClass("in")
    };
    var r = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function () {
        return e.fn.tab = r, this
    }, e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (n) {
        n.preventDefault(), t.call(e(this), "show")
    })
}(jQuery), +function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.affix"), s = "object" == typeof t && t;
            i || r.data("bs.affix", i = new n(this, s)), "string" == typeof t && i[t]()
        })
    }

    var n = function (t, r) {
        this.options = e.extend({}, n.DEFAULTS, r), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.2.0", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(), t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var t = e(document).height(), r = this.$target.scrollTop(), i = this.$element.offset(),
                s = this.options.offset, o = s.top, u = s.bottom;
            "object" != typeof s && (u = o = s), "function" == typeof o && (o = s.top(this.$element)), "function" == typeof u && (u = s.bottom(this.$element));
            var f = null != this.unpin && r + this.unpin <= i.top ? !1 : null != u && i.top + this.$element.height() >= t - u ? "bottom" : null != o && o >= r ? "top" : !1;
            if (this.affixed !== f) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (f ? "-" + f : ""), h = e.Event(l + ".bs.affix");
                this.$element.trigger(h), h.isDefaultPrevented() || (this.affixed = f, this.unpin = "bottom" == f ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(e.Event(l.replace("affix", "affixed"))), "bottom" == f && this.$element.offset({top: t - this.$element.height() - u}))
            }
        }
    };
    var r = e.fn.affix;
    e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function () {
        return e.fn.affix = r, this
    }, e(window).on("load", function () {
        e('[data-spy="affix"]').each(function () {
            var n = e(this), r = n.data();
            r.offset = r.offset || {}, r.offsetBottom && (r.offset.bottom = r.offsetBottom), r.offsetTop && (r.offset.top = r.offsetTop), t.call(n, r)
        })
    })
}(jQuery);
(function (e, t, n) {
    e.fn.backstretch = function (r, i) {
        (r === n || 0 === r.length) && e.error("No images were supplied for Backstretch");
        0 === e(t).scrollTop() && t.scrollTo(0, 0);
        return this.each(function () {
            var t = e(this), n = t.data("backstretch");
            if (n) {
                if ("string" == typeof r && "function" == typeof n[r]) {
                    n[r](i);
                    return
                }
                i = e.extend(n.options, i);
                n.destroy(!0)
            }
            n = new s(this, r, i);
            t.data("backstretch", n)
        })
    };
    e.backstretch = function (t, n) {
        return e("body").backstretch(t, n).data("backstretch")
    };
    e.expr[":"].backstretch = function (t) {
        return e(t).data("backstretch") !== n
    };
    e.fn.backstretch.defaults = {centeredX: !0, centeredY: !0, duration: 5e3, fade: 0};
    var r = {
        left: 0,
        top: 0,
        overflow: "hidden",
        margin: 0,
        padding: 0,
        height: "100%",
        width: "100%",
        zIndex: -999999
    }, i = {
        position: "absolute",
        display: "none",
        margin: 0,
        padding: 0,
        border: "none",
        width: "auto",
        height: "auto",
        maxHeight: "none",
        maxWidth: "none",
        zIndex: -999999
    }, s = function (n, i, s) {
        this.options = e.extend({}, e.fn.backstretch.defaults, s || {});
        this.images = e.isArray(i) ? i : [i];
        e.each(this.images, function () {
            e("<img />")[0].src = this
        });
        this.isBody = n === document.body;
        this.$container = e(n);
        this.$root = this.isBody ? o ? e(t) : e(document) : this.$container;
        n = this.$container.children(".backstretch").first();
        this.$wrap = n.length ? n : e('<div class="backstretch"></div>').css(r).appendTo(this.$container);
        this.isBody || (n = this.$container.css("position"), i = this.$container.css("zIndex"), this.$container.css({
            position: "static" === n ? "relative" : n,
            zIndex: "auto" === i ? 0 : i,
            background: "none"
        }), this.$wrap.css({zIndex: -999998}));
        this.$wrap.css({position: this.isBody && o ? "fixed" : "absolute"});
        this.index = 0;
        this.show(this.index);
        e(t).on("resize.backstretch", e.proxy(this.resize, this)).on("orientationchange.backstretch", e.proxy(function () {
            this.isBody && 0 === t.pageYOffset && (t.scrollTo(0, 1), this.resize())
        }, this))
    };
    s.prototype = {
        resize: function () {
            try {
                var e = {left: 0, top: 0}, n = this.isBody ? this.$root.width() : this.$root.innerWidth(), r = n,
                    i = this.isBody ? t.innerHeight ? t.innerHeight : this.$root.height() : this.$root.innerHeight(),
                    s = r / this.$img.data("ratio"), o;
                s >= i ? (o = (s - i) / 2, this.options.centeredY && (e.top = "-" + o + "px")) : (s = i, r = s * this.$img.data("ratio"), o = (r - n) / 2, this.options.centeredX && (e.left = "-" + o + "px"));
                this.$wrap.css({width: n, height: i}).find("img:not(.deleteable)").css({width: r, height: s}).css(e)
            } catch (u) {
            }
            return this
        }, show: function (t) {
            if (!(Math.abs(t) > this.images.length - 1)) {
                var n = this, r = n.$wrap.find("img").addClass("deleteable"), s = {relatedTarget: n.$container[0]};
                n.$container.trigger(e.Event("backstretch.before", s), [n, t]);
                this.index = t;
                clearInterval(n.interval);
                n.$img = e("<img />").css(i).bind("load", function (i) {
                    var o = this.width || e(i.target).width();
                    i = this.height || e(i.target).height();
                    e(this).data("ratio", o / i);
                    e(this).fadeIn(n.options.speed || n.options.fade, function () {
                        r.remove();
                        n.paused || n.cycle();
                        e(["after", "show"]).each(function () {
                            n.$container.trigger(e.Event("backstretch." + this, s), [n, t])
                        })
                    });
                    n.resize()
                }).appendTo(n.$wrap);
                n.$img.attr("src", n.images[t]);
                return n
            }
        }, next: function () {
            return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
        }, prev: function () {
            return this.show(0 === this.index ? this.images.length - 1 : this.index - 1)
        }, pause: function () {
            this.paused = !0;
            return this
        }, resume: function () {
            this.paused = !1;
            this.next();
            return this
        }, cycle: function () {
            1 < this.images.length && (clearInterval(this.interval), this.interval = setInterval(e.proxy(function () {
                this.paused || this.next()
            }, this), this.options.duration));
            return this
        }, destroy: function (n) {
            e(t).off("resize.backstretch orientationchange.backstretch");
            clearInterval(this.interval);
            n || this.$wrap.remove();
            this.$container.removeData("backstretch")
        }
    };
    var o, u = navigator.userAgent, a = navigator.platform, f = u.match(/AppleWebKit\/([0-9]+)/), f = !!f && f[1],
        l = u.match(/Fennec\/([0-9]+)/), l = !!l && l[1], c = u.match(/Opera Mobi\/([0-9]+)/), h = !!c && c[1],
        p = u.match(/MSIE ([0-9]+)/), p = !!p && p[1];
    o = !((-1 < a.indexOf("iPhone") || -1 < a.indexOf("iPad") || -1 < a.indexOf("iPod")) && f && 534 > f || t.operamini && "[object OperaMini]" === {}.toString.call(t.operamini) || c && 7458 > h || -1 < u.indexOf("Android") && f && 533 > f || l && 6 > l || "palmGetResource" in t && f && 534 > f || -1 < u.indexOf("MeeGo") && -1 < u.indexOf("NokiaBrowser/8.5.0") || p && 6 >= p)
})(jQuery, window);
(function (e) {
    "use strict";
    function t(e) {
        return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
    }

    function n(e, t) {
        var n = r(e, t) ? s : i;
        n(e, t)
    }

    var r, i, s;
    if ("classList" in document.documentElement) {
        r = function (e, t) {
            return e.classList.contains(t)
        };
        i = function (e, t) {
            e.classList.add(t)
        };
        s = function (e, t) {
            e.classList.remove(t)
        }
    } else {
        r = function (e, n) {
            return t(n).test(e.className)
        };
        i = function (e, t) {
            if (!r(e, t)) {
                e.className = e.className + " " + t
            }
        };
        s = function (e, n) {
            e.className = e.className.replace(t(n), " ")
        }
    }
    var o = {hasClass: r, addClass: i, removeClass: s, toggleClass: n, has: r, add: i, remove: s, toggle: n};
    if (typeof define === "function" && define.amd) {
        define(o)
    } else {
        e.classie = o
    }
})(window);
(function () {
    function e() {
    }

    function t(e, t) {
        for (var n = e.length; n--;)if (e[n].listener === t)return n;
        return -1
    }

    function n(e) {
        return function () {
            return this[e].apply(this, arguments)
        }
    }

    var r = e.prototype, i = this, s = i.EventEmitter;
    r.getListeners = function (e) {
        var t, n, r = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in r)r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n])
        } else t = r[e] || (r[e] = []);
        return t
    }, r.flattenListeners = function (e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1)n.push(e[t].listener);
        return n
    }, r.getListenersAsObject = function (e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, r.addListener = function (e, n) {
        var r, i = this.getListenersAsObject(e), s = "object" == typeof n;
        for (r in i)i.hasOwnProperty(r) && -1 === t(i[r], n) && i[r].push(s ? n : {listener: n, once: !1});
        return this
    }, r.on = n("addListener"), r.addOnceListener = function (e, t) {
        return this.addListener(e, {listener: t, once: !0})
    }, r.once = n("addOnceListener"), r.defineEvent = function (e) {
        return this.getListeners(e), this
    }, r.defineEvents = function (e) {
        for (var t = 0; e.length > t; t += 1)this.defineEvent(e[t]);
        return this
    }, r.removeListener = function (e, n) {
        var r, i, s = this.getListenersAsObject(e);
        for (i in s)s.hasOwnProperty(i) && (r = t(s[i], n), -1 !== r && s[i].splice(r, 1));
        return this
    }, r.off = n("removeListener"), r.addListeners = function (e, t) {
        return this.manipulateListeners(!1, e, t)
    }, r.removeListeners = function (e, t) {
        return this.manipulateListeners(!0, e, t)
    }, r.manipulateListeners = function (e, t, n) {
        var r, i, s = e ? this.removeListener : this.addListener, o = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)for (r = n.length; r--;)s.call(this, t, n[r]); else for (r in t)t.hasOwnProperty(r) && (i = t[r]) && ("function" == typeof i ? s.call(this, r, i) : o.call(this, r, i));
        return this
    }, r.removeEvent = function (e) {
        var t, n = typeof e, r = this._getEvents();
        if ("string" === n) delete r[e]; else if ("object" === n)for (t in r)r.hasOwnProperty(t) && e.test(t) && delete r[t]; else delete this._events;
        return this
    }, r.removeAllListeners = n("removeEvent"), r.emitEvent = function (e, t) {
        var n, r, i, s, o = this.getListenersAsObject(e);
        for (i in o)if (o.hasOwnProperty(i))for (r = o[i].length; r--;)n = o[i][r], n.once === !0 && this.removeListener(e, n.listener), s = n.listener.apply(this, t || []), s === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, r.trigger = n("emitEvent"), r.emit = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, r.setOnceReturnValue = function (e) {
        return this._onceReturnValue = e, this
    }, r._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, r._getEvents = function () {
        return this._events || (this._events = {})
    }, e.noConflict = function () {
        return i.EventEmitter = s, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this), function (e) {
    function t(t) {
        var n = e.event;
        return n.target = n.target || n.srcElement || t, n
    }

    var n = document.documentElement, r = function () {
    };
    n.addEventListener ? r = function (e, t, n) {
        e.addEventListener(t, n, !1)
    } : n.attachEvent && (r = function (e, n, r) {
            e[n + r] = r.handleEvent ? function () {
                var n = t(e);
                r.handleEvent.call(r, n)
            } : function () {
                var n = t(e);
                r.call(e, n)
            }, e.attachEvent("on" + n, e[n + r])
        });
    var i = function () {
    };
    n.removeEventListener ? i = function (e, t, n) {
        e.removeEventListener(t, n, !1)
    } : n.detachEvent && (i = function (e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (r) {
                e[t + n] = void 0
            }
        });
    var s = {bind: r, unbind: i};
    "function" == typeof define && define.amd ? define("eventie/eventie", s) : e.eventie = s
}(this), function (e, t) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, r) {
        return t(e, n, r)
    }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
}(window, function (e, t, n) {
    function r(e, t) {
        for (var n in t)e[n] = t[n];
        return e
    }

    function i(e) {
        return "[object Array]" === h.call(e)
    }

    function s(e) {
        var t = [];
        if (i(e)) t = e; else if ("number" == typeof e.length)for (var n = 0,
                                                                       r = e.length; r > n; n++)t.push(e[n]); else t.push(e);
        return t
    }

    function o(e, t, n) {
        if (!(this instanceof o))return new o(e, t);
        "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = s(e), this.options = r({}, this.options), "function" == typeof t ? n = t : r(this.options, t), n && this.on("always", n), this.getImages(), f && (this.jqDeferred = new f.Deferred);
        var i = this;
        setTimeout(function () {
            i.check()
        })
    }

    function u(e) {
        this.img = e
    }

    function a(e) {
        this.src = e, p[e] = this
    }

    var f = e.jQuery, l = e.console, c = l !== void 0, h = Object.prototype.toString;
    o.prototype = new t, o.prototype.options = {}, o.prototype.getImages = function () {
        this.images = [];
        for (var e = 0, t = this.elements.length; t > e; e++) {
            var n = this.elements[e];
            "IMG" === n.nodeName && this.addImage(n);
            var r = n.nodeType;
            if (r && (1 === r || 9 === r || 11 === r))for (var i = n.querySelectorAll("img"), s = 0,
                                                               o = i.length; o > s; s++) {
                var u = i[s];
                this.addImage(u)
            }
        }
    }, o.prototype.addImage = function (e) {
        var t = new u(e);
        this.images.push(t)
    }, o.prototype.check = function () {
        function e(e, i) {
            return t.options.debug && c && l.log("confirm", e, i), t.progress(e), n++, n === r && t.complete(), !0
        }

        var t = this, n = 0, r = this.images.length;
        if (this.hasAnyBroken = !1, !r)return this.complete(), void 0;
        for (var i = 0; r > i; i++) {
            var s = this.images[i];
            s.on("confirm", e), s.check()
        }
    }, o.prototype.progress = function (e) {
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
        var t = this;
        setTimeout(function () {
            t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
        })
    }, o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var t = this;
        setTimeout(function () {
            if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                var n = t.hasAnyBroken ? "reject" : "resolve";
                t.jqDeferred[n](t)
            }
        })
    }, f && (f.fn.imagesLoaded = function (e, t) {
        var n = new o(this, e, t);
        return n.jqDeferred.promise(f(this))
    }), u.prototype = new t, u.prototype.check = function () {
        var e = p[this.img.src] || new a(this.img.src);
        if (e.isConfirmed)return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
        if (this.img.complete && void 0 !== this.img.naturalWidth)return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
        var t = this;
        e.on("confirm", function (e, n) {
            return t.confirm(e.isLoaded, n), !0
        }), e.check()
    }, u.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emit("confirm", this, t)
    };
    var p = {};
    return a.prototype = new t, a.prototype.check = function () {
        if (!this.isChecked) {
            var e = new Image;
            n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
        }
    }, a.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, a.prototype.onload = function (e) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(e)
    }, a.prototype.onerror = function (e) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
    }, a.prototype.confirm = function (e, t) {
        this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
    }, a.prototype.unbindProxyEvents = function (e) {
        n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
    }, o
});
"function" !== typeof Object.create && (Object.create = function (e) {
    function t() {
    }

    t.prototype = e;
    return new t
});
(function (e, t, n) {
    var r = {
        init: function (t, n) {
            this.$elem = e(n);
            this.options = e.extend({}, e.fn.owlCarousel.options, this.$elem.data(), t);
            this.userOptions = t;
            this.loadContent()
        }, loadContent: function () {
            function t(e) {
                var t, r = "";
                if ("function" === typeof n.options.jsonSuccess) n.options.jsonSuccess.apply(this, [e]); else {
                    for (t in e.owl)e.owl.hasOwnProperty(t) && (r += e.owl[t].item);
                    n.$elem.html(r)
                }
                n.logIn()
            }

            var n = this, r;
            "function" === typeof n.options.beforeInit && n.options.beforeInit.apply(this, [n.$elem]);
            "string" === typeof n.options.jsonPath ? (r = n.options.jsonPath, e.getJSON(r, t)) : n.logIn()
        }, logIn: function () {
            this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
            this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
            this.$elem.css({opacity: 0});
            this.orignalItems = this.options.items;
            this.checkBrowser();
            this.wrapperWidth = 0;
            this.checkVisible = null;
            this.setVars()
        }, setVars: function () {
            if (0 === this.$elem.children().length)return !1;
            this.baseClass();
            this.eventTypes();
            this.$userItems = this.$elem.children();
            this.itemsAmount = this.$userItems.length;
            this.wrapItems();
            this.$owlItems = this.$elem.find(".owl-item");
            this.$owlWrapper = this.$elem.find(".owl-wrapper");
            this.playDirection = "next";
            this.prevItem = 0;
            this.prevArr = [0];
            this.currentItem = 0;
            this.customEvents();
            this.onStartup()
        }, onStartup: function () {
            this.updateItems();
            this.calculateAll();
            this.buildControls();
            this.updateControls();
            this.response();
            this.moveEvents();
            this.stopOnHover();
            this.owlStatus();
            !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
            !0 === this.options.autoPlay && (this.options.autoPlay = 5e3);
            this.play();
            this.$elem.find(".owl-wrapper").css("display", "block");
            this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
            this.onstartup = !1;
            this.eachMoveUpdate();
            "function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
        }, eachMoveUpdate: function () {
            !0 === this.options.lazyLoad && this.lazyLoad();
            !0 === this.options.autoHeight && this.autoHeight();
            this.onVisibleItems();
            "function" === typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
        }, updateVars: function () {
            "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
            this.watchVisibility();
            this.updateItems();
            this.calculateAll();
            this.updatePosition();
            this.updateControls();
            this.eachMoveUpdate();
            "function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
        }, reload: function () {
            var e = this;
            t.setTimeout(function () {
                e.updateVars()
            }, 0)
        }, watchVisibility: function () {
            var e = this;
            if (!1 === e.$elem.is(":visible")) e.$elem.css({opacity: 0}), t.clearInterval(e.autoPlayInterval), t.clearInterval(e.checkVisible); else return !1;
            e.checkVisible = t.setInterval(function () {
                e.$elem.is(":visible") && (e.reload(), e.$elem.animate({opacity: 1}, 200), t.clearInterval(e.checkVisible))
            }, 500)
        }, wrapItems: function () {
            this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
            this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
            this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
            this.$elem.css("display", "block")
        }, baseClass: function () {
            var e = this.$elem.hasClass(this.options.baseClass), t = this.$elem.hasClass(this.options.theme);
            e || this.$elem.addClass(this.options.baseClass);
            t || this.$elem.addClass(this.options.theme)
        }, updateItems: function () {
            var t, n;
            if (!1 === this.options.responsive)return !1;
            if (!0 === this.options.singleItem)return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
            t = e(this.options.responsiveBaseWidth).width();
            t > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
            if (!1 !== this.options.itemsCustom)for (this.options.itemsCustom.sort(function (e, t) {
                return e[0] - t[0]
            }), n = 0; n < this.options.itemsCustom.length; n += 1)this.options.itemsCustom[n][0] <= t && (this.options.items = this.options.itemsCustom[n][1]); else t <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), t <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), t <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), t <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), t <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
            this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
        }, response: function () {
            var n = this, r, i;
            if (!0 !== n.options.responsive)return !1;
            i = e(t).width();
            n.resizer = function () {
                e(t).width() !== i && (!1 !== n.options.autoPlay && t.clearInterval(n.autoPlayInterval), t.clearTimeout(r), r = t.setTimeout(function () {
                    i = e(t).width();
                    n.updateVars()
                }, n.options.responsiveRefreshRate))
            };
            e(t).resize(n.resizer)
        }, updatePosition: function () {
            this.jumpTo(this.currentItem);
            !1 !== this.options.autoPlay && this.checkAp()
        }, appendItemsSizes: function () {
            var t = this, n = 0, r = t.itemsAmount - t.options.items;
            t.$owlItems.each(function (i) {
                var s = e(this);
                s.css({width: t.itemWidth}).data("owl-item", Number(i));
                if (0 === i % t.options.items || i === r) i > r || (n += 1);
                s.data("owl-roundPages", n)
            })
        }, appendWrapperSizes: function () {
            this.$owlWrapper.css({width: this.$owlItems.length * this.itemWidth * 2, left: 0});
            this.appendItemsSizes()
        }, calculateAll: function () {
            this.calculateWidth();
            this.appendWrapperSizes();
            this.loops();
            this.max()
        }, calculateWidth: function () {
            this.itemWidth = Math.round(this.$elem.width() / this.options.items)
        }, max: function () {
            var e = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
            this.options.items > this.itemsAmount ? this.maximumPixels = e = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = e);
            return e
        }, min: function () {
            return 0
        }, loops: function () {
            var t = 0, n = 0, r, i;
            this.positionsInArray = [0];
            this.pagesInArray = [];
            for (r = 0; r < this.itemsAmount; r += 1)n += this.itemWidth, this.positionsInArray.push(-n), !0 === this.options.scrollPerPage && (i = e(this.$owlItems[r]), i = i.data("owl-roundPages"), i !== t && (this.pagesInArray[t] = this.positionsInArray[r], t = i))
        }, buildControls: function () {
            if (!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = e('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);
            !0 === this.options.pagination && this.buildPagination();
            !0 === this.options.navigation && this.buildButtons()
        }, buildButtons: function () {
            var t = this, n = e('<div class="owl-buttons"/>');
            t.owlControls.append(n);
            t.buttonPrev = e("<div/>", {"class": "owl-prev", html: t.options.navigationText[0] || ""});
            t.buttonNext = e("<div/>", {"class": "owl-next", html: t.options.navigationText[1] || ""});
            n.append(t.buttonPrev).append(t.buttonNext);
            n.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (e) {
                e.preventDefault()
            });
            n.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (n) {
                n.preventDefault();
                e(this).hasClass("owl-next") ? t.next() : t.prev()
            })
        }, buildPagination: function () {
            var t = this;
            t.paginationWrapper = e('<div class="owl-pagination"/>');
            t.owlControls.append(t.paginationWrapper);
            t.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (n) {
                n.preventDefault();
                Number(e(this).data("owl-page")) !== t.currentItem && t.goTo(Number(e(this).data("owl-page")), !0)
            })
        }, updatePagination: function () {
            var t, n, r, i, s, o;
            if (!1 === this.options.pagination)return !1;
            this.paginationWrapper.html("");
            t = 0;
            n = this.itemsAmount - this.itemsAmount % this.options.items;
            for (i = 0; i < this.itemsAmount; i += 1)0 === i % this.options.items && (t += 1, n === i && (r = this.itemsAmount - this.options.items), s = e("<div/>", {"class": "owl-page"}), o = e("<span></span>", {
                text: !0 === this.options.paginationNumbers ? t : "",
                "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
            }), s.append(o), s.data("owl-page", n === i ? r : i), s.data("owl-roundPages", t), this.paginationWrapper.append(s));
            this.checkPagination()
        }, checkPagination: function () {
            var t = this;
            if (!1 === t.options.pagination)return !1;
            t.paginationWrapper.find(".owl-page").each(function () {
                e(this).data("owl-roundPages") === e(t.$owlItems[t.currentItem]).data("owl-roundPages") && (t.paginationWrapper.find(".owl-page").removeClass("active"), e(this).addClass("active"))
            })
        }, checkNavigation: function () {
            if (!1 === this.options.navigation)return !1;
            !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
        }, updateControls: function () {
            this.updatePagination();
            this.checkNavigation();
            this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
        }, destroyControls: function () {
            this.owlControls && this.owlControls.remove()
        }, next: function (e) {
            if (this.isTransition)return !1;
            this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
            if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))if (!0 === this.options.rewindNav) this.currentItem = 0, e = "rewind"; else return this.currentItem = this.maximumItem, !1;
            this.goTo(this.currentItem, e)
        }, prev: function (e) {
            if (this.isTransition)return !1;
            this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1);
            if (0 > this.currentItem)if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, e = "rewind"; else return this.currentItem = 0, !1;
            this.goTo(this.currentItem, e)
        }, goTo: function (e, n, r) {
            var i = this;
            if (i.isTransition)return !1;
            "function" === typeof i.options.beforeMove && i.options.beforeMove.apply(this, [i.$elem]);
            e >= i.maximumItem ? e = i.maximumItem : 0 >= e && (e = 0);
            i.currentItem = i.owl.currentItem = e;
            if (!1 !== i.options.transitionStyle && "drag" !== r && 1 === i.options.items && !0 === i.browser.support3d)return i.swapSpeed(0), !0 === i.browser.support3d ? i.transition3d(i.positionsInArray[e]) : i.css2slide(i.positionsInArray[e], 1), i.afterGo(), i.singleItemTransition(), !1;
            e = i.positionsInArray[e];
            !0 === i.browser.support3d ? (i.isCss3Finish = !1, !0 === n ? (i.swapSpeed("paginationSpeed"), t.setTimeout(function () {
                i.isCss3Finish = !0
            }, i.options.paginationSpeed)) : "rewind" === n ? (i.swapSpeed(i.options.rewindSpeed), t.setTimeout(function () {
                i.isCss3Finish = !0
            }, i.options.rewindSpeed)) : (i.swapSpeed("slideSpeed"), t.setTimeout(function () {
                i.isCss3Finish = !0
            }, i.options.slideSpeed)), i.transition3d(e)) : !0 === n ? i.css2slide(e, i.options.paginationSpeed) : "rewind" === n ? i.css2slide(e, i.options.rewindSpeed) : i.css2slide(e, i.options.slideSpeed);
            i.afterGo()
        }, jumpTo: function (e) {
            "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
            e >= this.maximumItem || -1 === e ? e = this.maximumItem : 0 >= e && (e = 0);
            this.swapSpeed(0);
            !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[e]) : this.css2slide(this.positionsInArray[e], 1);
            this.currentItem = this.owl.currentItem = e;
            this.afterGo()
        }, afterGo: function () {
            this.prevArr.push(this.currentItem);
            this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
            this.prevArr.shift(0);
            this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
            "function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
        }, stop: function () {
            this.apStatus = "stop";
            t.clearInterval(this.autoPlayInterval)
        }, checkAp: function () {
            "stop" !== this.apStatus && this.play()
        }, play: function () {
            var e = this;
            e.apStatus = "play";
            if (!1 === e.options.autoPlay)return !1;
            t.clearInterval(e.autoPlayInterval);
            e.autoPlayInterval = t.setInterval(function () {
                e.next(!0)
            }, e.options.autoPlay)
        }, swapSpeed: function (e) {
            "slideSpeed" === e ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === e ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof e && this.$owlWrapper.css(this.addCssSpeed(e))
        }, addCssSpeed: function (e) {
            return {
                "-webkit-transition": "all " + e + "ms ease",
                "-moz-transition": "all " + e + "ms ease",
                "-o-transition": "all " + e + "ms ease",
                transition: "all " + e + "ms ease"
            }
        }, removeTransition: function () {
            return {"-webkit-transition": "", "-moz-transition": "", "-o-transition": "", transition: ""}
        }, doTranslate: function (e) {
            return {
                "-webkit-transform": "translate3d(" + e + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + e + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + e + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + e + "px, 0px, 0px)",
                transform: "translate3d(" + e + "px, 0px,0px)"
            }
        }, transition3d: function (e) {
            this.$owlWrapper.css(this.doTranslate(e))
        }, css2move: function (e) {
            this.$owlWrapper.css({left: e})
        }, css2slide: function (e, t) {
            var n = this;
            n.isCssFinish = !1;
            n.$owlWrapper.stop(!0, !0).animate({left: e}, {
                duration: t || n.options.slideSpeed, complete: function () {
                    n.isCssFinish = !0
                }
            })
        }, checkBrowser: function () {
            var e = n.createElement("div");
            e.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
            e = e.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
            this.browser = {
                support3d: null !== e && 1 === e.length,
                isTouch: "ontouchstart" in t || t.navigator.msMaxTouchPoints
            }
        }, moveEvents: function () {
            if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents()
        }, eventTypes: function () {
            var e = ["s", "e", "x"];
            this.ev_types = {};
            !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
            this.ev_types.start = e[0];
            this.ev_types.move = e[1];
            this.ev_types.end = e[2]
        }, disabledEvents: function () {
            this.$elem.on("dragstart.owl", function (e) {
                e.preventDefault()
            });
            this.$elem.on("mousedown.disableTextSelect", function (t) {
                return e(t.target).is("input, textarea, select, option")
            })
        }, gestures: function () {
            function r(e) {
                if (void 0 !== e.touches)return {x: e.touches[0].pageX, y: e.touches[0].pageY};
                if (void 0 === e.touches) {
                    if (void 0 !== e.pageX)return {x: e.pageX, y: e.pageY};
                    if (void 0 === e.pageX)return {x: e.clientX, y: e.clientY}
                }
            }

            function i(t) {
                "on" === t ? (e(n).on(u.ev_types.move, s), e(n).on(u.ev_types.end, o)) : "off" === t && (e(n).off(u.ev_types.move), e(n).off(u.ev_types.end))
            }

            function s(i) {
                i = i.originalEvent || i || t.event;
                u.newPosX = r(i).x - a.offsetX;
                u.newPosY = r(i).y - a.offsetY;
                u.newRelativeX = u.newPosX - a.relativePos;
                "function" === typeof u.options.startDragging && !0 !== a.dragging && 0 !== u.newRelativeX && (a.dragging = !0, u.options.startDragging.apply(u, [u.$elem]));
                (8 < u.newRelativeX || -8 > u.newRelativeX) && !0 === u.browser.isTouch && (void 0 !== i.preventDefault ? i.preventDefault() : i.returnValue = !1, a.sliding = !0);
                (10 < u.newPosY || -10 > u.newPosY) && !1 === a.sliding && e(n).off("touchmove.owl");
                u.newPosX = Math.max(Math.min(u.newPosX, u.newRelativeX / 5), u.maximumPixels + u.newRelativeX / 5);
                !0 === u.browser.support3d ? u.transition3d(u.newPosX) : u.css2move(u.newPosX)
            }

            function o(n) {
                n = n.originalEvent || n || t.event;
                var r;
                n.target = n.target || n.srcElement;
                a.dragging = !1;
                !0 !== u.browser.isTouch && u.$owlWrapper.removeClass("grabbing");
                u.dragDirection = 0 > u.newRelativeX ? u.owl.dragDirection = "left" : u.owl.dragDirection = "right";
                0 !== u.newRelativeX && (r = u.getNewPosition(), u.goTo(r, !1, "drag"), a.targetElement === n.target && !0 !== u.browser.isTouch && (e(n.target).on("click.disable", function (t) {
                    t.stopImmediatePropagation();
                    t.stopPropagation();
                    t.preventDefault();
                    e(t.target).off("click.disable")
                }), n = e._data(n.target, "events").click, r = n.pop(), n.splice(0, 0, r)));
                i("off")
            }

            var u = this, a = {
                offsetX: 0,
                offsetY: 0,
                baseElWidth: 0,
                relativePos: 0,
                position: null,
                minSwipe: null,
                maxSwipe: null,
                sliding: null,
                dargging: null,
                targetElement: null
            };
            u.isCssFinish = !0;
            u.$elem.on(u.ev_types.start, ".owl-wrapper", function (n) {
                n = n.originalEvent || n || t.event;
                var s;
                if (3 === n.which)return !1;
                if (!(u.itemsAmount <= u.options.items)) {
                    if (!1 === u.isCssFinish && !u.options.dragBeforeAnimFinish || !1 === u.isCss3Finish && !u.options.dragBeforeAnimFinish)return !1;
                    !1 !== u.options.autoPlay && t.clearInterval(u.autoPlayInterval);
                    !0 === u.browser.isTouch || u.$owlWrapper.hasClass("grabbing") || u.$owlWrapper.addClass("grabbing");
                    u.newPosX = 0;
                    u.newRelativeX = 0;
                    e(this).css(u.removeTransition());
                    s = e(this).position();
                    a.relativePos = s.left;
                    a.offsetX = r(n).x - s.left;
                    a.offsetY = r(n).y - s.top;
                    i("on");
                    a.sliding = !1;
                    a.targetElement = n.target || n.srcElement
                }
            })
        }, getNewPosition: function () {
            var e = this.closestItem();
            e > this.maximumItem ? e = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = e = 0);
            return e
        }, closestItem: function () {
            var t = this, n = !0 === t.options.scrollPerPage ? t.pagesInArray : t.positionsInArray, r = t.newPosX,
                i = null;
            e.each(n, function (s, o) {
                r - t.itemWidth / 20 > n[s + 1] && r - t.itemWidth / 20 < o && "left" === t.moveDirection() ? (i = o, t.currentItem = !0 === t.options.scrollPerPage ? e.inArray(i, t.positionsInArray) : s) : r + t.itemWidth / 20 < o && r + t.itemWidth / 20 > (n[s + 1] || n[s] - t.itemWidth) && "right" === t.moveDirection() && (!0 === t.options.scrollPerPage ? (i = n[s + 1] || n[n.length - 1], t.currentItem = e.inArray(i, t.positionsInArray)) : (i = n[s + 1], t.currentItem = s + 1))
            });
            return t.currentItem
        }, moveDirection: function () {
            var e;
            0 > this.newRelativeX ? (e = "right", this.playDirection = "next") : (e = "left", this.playDirection = "prev");
            return e
        }, customEvents: function () {
            var e = this;
            e.$elem.on("owl.next", function () {
                e.next()
            });
            e.$elem.on("owl.prev", function () {
                e.prev()
            });
            e.$elem.on("owl.play", function (t, n) {
                e.options.autoPlay = n;
                e.play();
                e.hoverStatus = "play"
            });
            e.$elem.on("owl.stop", function () {
                e.stop();
                e.hoverStatus = "stop"
            });
            e.$elem.on("owl.goTo", function (t, n) {
                e.goTo(n)
            });
            e.$elem.on("owl.jumpTo", function (t, n) {
                e.jumpTo(n)
            })
        }, stopOnHover: function () {
            var e = this;
            !0 === e.options.stopOnHover && !0 !== e.browser.isTouch && !1 !== e.options.autoPlay && (e.$elem.on("mouseover", function () {
                e.stop()
            }), e.$elem.on("mouseout", function () {
                "stop" !== e.hoverStatus && e.play()
            }))
        }, lazyLoad: function () {
            var t, n, r, i, s;
            if (!1 === this.options.lazyLoad)return !1;
            for (t = 0; t < this.itemsAmount; t += 1)n = e(this.$owlItems[t]), "loaded" !== n.data("owl-loaded") && (r = n.data("owl-item"), i = n.find(".lazyOwl"), "string" !== typeof i.data("src") ? n.data("owl-loaded", "loaded") : (void 0 === n.data("owl-loaded") && (i.hide(), n.addClass("loading").data("owl-loaded", "checked")), (s = !0 === this.options.lazyFollow ? r >= this.currentItem : !0) && r < this.currentItem + this.options.items && i.length && this.lazyPreload(n, i)))
        }, lazyPreload: function (e, n) {
            function r() {
                e.data("owl-loaded", "loaded").removeClass("loading");
                n.removeAttr("data-src");
                "fade" === s.options.lazyEffect ? n.fadeIn(400) : n.show();
                "function" === typeof s.options.afterLazyLoad && s.options.afterLazyLoad.apply(this, [s.$elem])
            }

            function i() {
                o += 1;
                s.completeImg(n.get(0)) || !0 === u ? r() : 100 >= o ? t.setTimeout(i, 100) : r()
            }

            var s = this, o = 0, u;
            "DIV" === n.prop("tagName") ? (n.css("background-image", "url(" + n.data("src") + ")"), u = !0) : n[0].src = n.data("src");
            i()
        }, autoHeight: function () {
            function n() {
                var n = e(i.$owlItems[i.currentItem]).height();
                i.wrapperOuter.css("height", n + "px");
                i.wrapperOuter.hasClass("autoHeight") || t.setTimeout(function () {
                    i.wrapperOuter.addClass("autoHeight")
                }, 0)
            }

            function r() {
                o += 1;
                i.completeImg(s.get(0)) ? n() : 100 >= o ? t.setTimeout(r, 100) : i.wrapperOuter.css("height", "")
            }

            var i = this, s = e(i.$owlItems[i.currentItem]).find("img"), o;
            void 0 !== s.get(0) ? (o = 0, r()) : n()
        }, completeImg: function (e) {
            return !e.complete || "undefined" !== typeof e.naturalWidth && 0 === e.naturalWidth ? !1 : !0
        }, onVisibleItems: function () {
            var t;
            !0 === this.options.addClassActive && this.$owlItems.removeClass("active");
            this.visibleItems = [];
            for (t = this.currentItem; t < this.currentItem + this.options.items; t += 1)this.visibleItems.push(t), !0 === this.options.addClassActive && e(this.$owlItems[t]).addClass("active");
            this.owl.visibleItems = this.visibleItems
        }, transitionTypes: function (e) {
            this.outClass = "owl-" + e + "-out";
            this.inClass = "owl-" + e + "-in"
        }, singleItemTransition: function () {
            var e = this, t = e.outClass, n = e.inClass, r = e.$owlItems.eq(e.currentItem),
                i = e.$owlItems.eq(e.prevItem),
                s = Math.abs(e.positionsInArray[e.currentItem]) + e.positionsInArray[e.prevItem],
                o = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2;
            e.isTransition = !0;
            e.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": o + "px",
                "-moz-perspective-origin": o + "px",
                "perspective-origin": o + "px"
            });
            i.css({
                position: "relative",
                left: s + "px"
            }).addClass(t).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
                e.endPrev = !0;
                i.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                e.clearTransStyle(i, t)
            });
            r.addClass(n).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
                e.endCurrent = !0;
                r.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                e.clearTransStyle(r, n)
            })
        }, clearTransStyle: function (e, t) {
            e.css({position: "", left: ""}).removeClass(t);
            this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
        }, owlStatus: function () {
            this.owl = {
                userOptions: this.userOptions,
                baseElement: this.$elem,
                userItems: this.$userItems,
                owlItems: this.$owlItems,
                currentItem: this.currentItem,
                prevItem: this.prevItem,
                visibleItems: this.visibleItems,
                isTouch: this.browser.isTouch,
                browser: this.browser,
                dragDirection: this.dragDirection
            }
        }, clearEvents: function () {
            this.$elem.off(".owl owl mousedown.disableTextSelect");
            e(n).off(".owl owl");
            e(t).off("resize", this.resizer)
        }, unWrap: function () {
            0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
            this.clearEvents();
            this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
        }, destroy: function () {
            this.stop();
            t.clearInterval(this.checkVisible);
            this.unWrap();
            this.$elem.removeData()
        }, reinit: function (t) {
            t = e.extend({}, this.userOptions, t);
            this.unWrap();
            this.init(t, this.$elem)
        }, addItem: function (e, t) {
            var n;
            if (!e)return !1;
            if (0 === this.$elem.children().length)return this.$elem.append(e), this.setVars(), !1;
            this.unWrap();
            n = void 0 === t || -1 === t ? -1 : t;
            n >= this.$userItems.length || -1 === n ? this.$userItems.eq(-1).after(e) : this.$userItems.eq(n).before(e);
            this.setVars()
        }, removeItem: function (e) {
            if (0 === this.$elem.children().length)return !1;
            e = void 0 === e || -1 === e ? -1 : e;
            this.unWrap();
            this.$userItems.eq(e).remove();
            this.setVars()
        }
    };
    e.fn.owlCarousel = function (t) {
        return this.each(function () {
            if (!0 === e(this).data("owl-init"))return !1;
            e(this).data("owl-init", !0);
            var n = Object.create(r);
            n.init(t, this);
            e.data(this, "owlCarousel", n)
        })
    };
    e.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: t,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
})(jQuery, window, document);
!function (e, t, n, r) {
    function i(t, n) {
        this.element = t, this.options = e.extend({}, o, n), this._defaults = o, this._name = s, this.init()
    }

    var s = "stellar", o = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: !0,
            verticalScrolling: !0,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: !1,
            parallaxBackgrounds: !0,
            parallaxElements: !0,
            hideDistantElements: !0,
            hideElement: function (e) {
                e.hide()
            },
            showElement: function (e) {
                e.show()
            }
        }, u = {
            scroll: {
                getLeft: function (e) {
                    return e.scrollLeft()
                }, setLeft: function (e, t) {
                    e.scrollLeft(t)
                }, getTop: function (e) {
                    return e.scrollTop()
                }, setTop: function (e, t) {
                    e.scrollTop(t)
                }
            }, position: {
                getLeft: function (e) {
                    return -1 * parseInt(e.css("left"), 10)
                }, getTop: function (e) {
                    return -1 * parseInt(e.css("top"), 10)
                }
            }, margin: {
                getLeft: function (e) {
                    return -1 * parseInt(e.css("margin-left"), 10)
                }, getTop: function (e) {
                    return -1 * parseInt(e.css("margin-top"), 10)
                }
            }, transform: {
                getLeft: function (e) {
                    var t = getComputedStyle(e[0])[l];
                    return "none" !== t ? -1 * parseInt(t.match(/(-?[0-9]+)/g)[4], 10) : 0
                }, getTop: function (e) {
                    var t = getComputedStyle(e[0])[l];
                    return "none" !== t ? -1 * parseInt(t.match(/(-?[0-9]+)/g)[5], 10) : 0
                }
            }
        }, a = {
            position: {
                setLeft: function (e, t) {
                    e.css("left", t)
                }, setTop: function (e, t) {
                    e.css("top", t)
                }
            }, transform: {
                setPosition: function (e, t, n, r, i) {
                    e[0].style[l] = "translate3d(" + (t - n) + "px, " + (r - i) + "px, 0)"
                }
            }
        }, f = function () {
            var t, n = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/, r = e("script")[0].style, i = "";
            for (t in r)if (n.test(t)) {
                i = t.match(n)[0];
                break
            }
            return "WebkitOpacity" in r && (i = "Webkit"), "KhtmlOpacity" in r && (i = "Khtml"), function (e) {
                return i + (i.length > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e)
            }
        }(), l = f("transform"), c = e("<div />", {style: "background:#fff"}).css("background-position-x") !== r,
        h = c ? function (e, t, n) {
            e.css({"background-position-x": t, "background-position-y": n})
        } : function (e, t, n) {
            e.css("background-position", t + " " + n)
        }, p = c ? function (e) {
            return [e.css("background-position-x"), e.css("background-position-y")]
        } : function (e) {
            return e.css("background-position").split(" ")
        },
        d = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                setTimeout(e, 1e3 / 60)
            };
    i.prototype = {
        init: function () {
            this.options.name = s + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({firstLoad: !0}), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
        }, _defineElements: function () {
            this.element === n.body && (this.element = t), this.$scrollElement = e(this.element), this.$element = this.element === t ? e("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== r ? e(this.options.viewportElement) : this.$scrollElement[0] === t || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
        }, _defineGetters: function () {
            var e = this, t = u[e.options.scrollProperty];
            this._getScrollLeft = function () {
                return t.getLeft(e.$scrollElement)
            }, this._getScrollTop = function () {
                return t.getTop(e.$scrollElement)
            }
        }, _defineSetters: function () {
            var t = this, n = u[t.options.scrollProperty], r = a[t.options.positionProperty], i = n.setLeft,
                s = n.setTop;
            this._setScrollLeft = "function" == typeof i ? function (e) {
                i(t.$scrollElement, e)
            } : e.noop, this._setScrollTop = "function" == typeof s ? function (e) {
                s(t.$scrollElement, e)
            } : e.noop, this._setPosition = r.setPosition || function (e, n, i, s, o) {
                    t.options.horizontalScrolling && r.setLeft(e, n, i), t.options.verticalScrolling && r.setTop(e, s, o)
                }
        }, _handleWindowLoadAndResize: function () {
            var n = this, r = e(t);
            n.options.responsive && r.bind("load." + this.name, function () {
                n.refresh()
            }), r.bind("resize." + this.name, function () {
                n._detectViewport(), n.options.responsive && n.refresh()
            })
        }, refresh: function (n) {
            var r = this, i = r._getScrollLeft(), s = r._getScrollTop();
            n && n.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), n && n.firstLoad && /WebKit/.test(navigator.userAgent) && e(t).load(function () {
                var e = r._getScrollLeft(), t = r._getScrollTop();
                r._setScrollLeft(e + 1), r._setScrollTop(t + 1), r._setScrollLeft(e), r._setScrollTop(t)
            }), this._setScrollLeft(i), this._setScrollTop(s)
        }, _detectViewport: function () {
            var e = this.$viewportElement.offset(), t = null !== e && e !== r;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = t ? e.top : 0, this.viewportOffsetLeft = t ? e.left : 0
        }, _findParticles: function () {
            {
                var t = this;
                this._getScrollLeft(), this._getScrollTop()
            }
            if (this.particles !== r)for (var n = this.particles.length - 1; n >= 0; n--)this.particles[n].$element.data("stellar-elementIsActive", r);
            this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function () {
                var n, i, s, o, u, a, f, l, c, h = e(this), p = 0, d = 0, v = 0, m = 0;
                if (h.data("stellar-elementIsActive")) {
                    if (h.data("stellar-elementIsActive") !== this)return
                } else h.data("stellar-elementIsActive", this);
                t.options.showElement(h), h.data("stellar-startingLeft") ? (h.css("left", h.data("stellar-startingLeft")), h.css("top", h.data("stellar-startingTop"))) : (h.data("stellar-startingLeft", h.css("left")), h.data("stellar-startingTop", h.css("top"))), s = h.position().left, o = h.position().top, u = "auto" === h.css("margin-left") ? 0 : parseInt(h.css("margin-left"), 10), a = "auto" === h.css("margin-top") ? 0 : parseInt(h.css("margin-top"), 10), l = h.offset().left - u, c = h.offset().top - a, h.parents().each(function () {
                    var t = e(this);
                    return t.data("stellar-offset-parent") === !0 ? (p = v, d = m, f = t, !1) : (v += t.position().left, void (m += t.position().top))
                }), n = h.data("stellar-horizontal-offset") !== r ? h.data("stellar-horizontal-offset") : f !== r && f.data("stellar-horizontal-offset") !== r ? f.data("stellar-horizontal-offset") : t.horizontalOffset, i = h.data("stellar-vertical-offset") !== r ? h.data("stellar-vertical-offset") : f !== r && f.data("stellar-vertical-offset") !== r ? f.data("stellar-vertical-offset") : t.verticalOffset, t.particles.push({
                    $element: h,
                    $offsetParent: f,
                    isFixed: "fixed" === h.css("position"),
                    horizontalOffset: n,
                    verticalOffset: i,
                    startingPositionLeft: s,
                    startingPositionTop: o,
                    startingOffsetLeft: l,
                    startingOffsetTop: c,
                    parentOffsetLeft: p,
                    parentOffsetTop: d,
                    stellarRatio: h.data("stellar-ratio") !== r ? h.data("stellar-ratio") : 1,
                    width: h.outerWidth(!0),
                    height: h.outerHeight(!0),
                    isHidden: !1
                })
            })
        }, _findBackgrounds: function () {
            var t, n = this, i = this._getScrollLeft(), s = this._getScrollTop();
            this.backgrounds = [], this.options.parallaxBackgrounds && (t = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (t = t.add(this.$element)), t.each(function () {
                var t, o, u, a, f, l, c, d = e(this), v = p(d), g = 0, y = 0, b = 0, w = 0;
                if (d.data("stellar-backgroundIsActive")) {
                    if (d.data("stellar-backgroundIsActive") !== this)return
                } else d.data("stellar-backgroundIsActive", this);
                d.data("stellar-backgroundStartingLeft") ? h(d, d.data("stellar-backgroundStartingLeft"), d.data("stellar-backgroundStartingTop")) : (d.data("stellar-backgroundStartingLeft", v[0]), d.data("stellar-backgroundStartingTop", v[1])), u = "auto" === d.css("margin-left") ? 0 : parseInt(d.css("margin-left"), 10), a = "auto" === d.css("margin-top") ? 0 : parseInt(d.css("margin-top"), 10), f = d.offset().left - u - i, l = d.offset().top - a - s, d.parents().each(function () {
                    var t = e(this);
                    return t.data("stellar-offset-parent") === !0 ? (g = b, y = w, c = t, !1) : (b += t.position().left, void (w += t.position().top))
                }), t = d.data("stellar-horizontal-offset") !== r ? d.data("stellar-horizontal-offset") : c !== r && c.data("stellar-horizontal-offset") !== r ? c.data("stellar-horizontal-offset") : n.horizontalOffset, o = d.data("stellar-vertical-offset") !== r ? d.data("stellar-vertical-offset") : c !== r && c.data("stellar-vertical-offset") !== r ? c.data("stellar-vertical-offset") : n.verticalOffset, n.backgrounds.push({
                    $element: d,
                    $offsetParent: c,
                    isFixed: "fixed" === d.css("background-attachment"),
                    horizontalOffset: t,
                    verticalOffset: o,
                    startingValueLeft: v[0],
                    startingValueTop: v[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(v[0], 10)) ? 0 : parseInt(v[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(v[1], 10)) ? 0 : parseInt(v[1], 10),
                    startingPositionLeft: d.position().left,
                    startingPositionTop: d.position().top,
                    startingOffsetLeft: f,
                    startingOffsetTop: l,
                    parentOffsetLeft: g,
                    parentOffsetTop: y,
                    stellarRatio: d.data("stellar-background-ratio") === r ? 1 : d.data("stellar-background-ratio")
                })
            }))
        }, _reset: function () {
            var e, t, n, r, i;
            for (i = this.particles.length - 1; i >= 0; i--)e = this.particles[i], t = e.$element.data("stellar-startingLeft"), n = e.$element.data("stellar-startingTop"), this._setPosition(e.$element, t, t, n, n), this.options.showElement(e.$element), e.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (i = this.backgrounds.length - 1; i >= 0; i--)r = this.backgrounds[i], r.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), h(r.$element, r.startingValueLeft, r.startingValueTop)
        }, destroy: function () {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = e.noop, e(t).unbind("load." + this.name).unbind("resize." + this.name)
        }, _setOffsets: function () {
            var n = this, r = e(t);
            r.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), r.bind("resize.horizontal-" + this.name, function () {
                n.horizontalOffset = n.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), r.bind("resize.vertical-" + this.name, function () {
                n.verticalOffset = n.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        }, _repositionElements: function () {
            var e, t, n, r, i, s, o, u, a, f, l = this._getScrollLeft(), c = this._getScrollTop(), p = !0, d = !0;
            if (this.currentScrollLeft !== l || this.currentScrollTop !== c || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = l, this.currentScrollTop = c, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, f = this.particles.length - 1; f >= 0; f--)e = this.particles[f], t = e.isFixed ? 1 : 0, this.options.horizontalScrolling ? (s = (l + e.horizontalOffset + this.viewportOffsetLeft + e.startingPositionLeft - e.startingOffsetLeft + e.parentOffsetLeft) * -(e.stellarRatio + t - 1) + e.startingPositionLeft, u = s - e.startingPositionLeft + e.startingOffsetLeft) : (s = e.startingPositionLeft, u = e.startingOffsetLeft), this.options.verticalScrolling ? (o = (c + e.verticalOffset + this.viewportOffsetTop + e.startingPositionTop - e.startingOffsetTop + e.parentOffsetTop) * -(e.stellarRatio + t - 1) + e.startingPositionTop, a = o - e.startingPositionTop + e.startingOffsetTop) : (o = e.startingPositionTop, a = e.startingOffsetTop), this.options.hideDistantElements && (d = !this.options.horizontalScrolling || u + e.width > (e.isFixed ? 0 : l) && u < (e.isFixed ? 0 : l) + this.viewportWidth + this.viewportOffsetLeft, p = !this.options.verticalScrolling || a + e.height > (e.isFixed ? 0 : c) && a < (e.isFixed ? 0 : c) + this.viewportHeight + this.viewportOffsetTop), d && p ? (e.isHidden && (this.options.showElement(e.$element), e.isHidden = !1), this._setPosition(e.$element, s, e.startingPositionLeft, o, e.startingPositionTop)) : e.isHidden || (this.options.hideElement(e.$element), e.isHidden = !0);
                for (f = this.backgrounds.length - 1; f >= 0; f--)n = this.backgrounds[f], t = n.isFixed ? 0 : 1, r = this.options.horizontalScrolling ? (l + n.horizontalOffset - this.viewportOffsetLeft - n.startingOffsetLeft + n.parentOffsetLeft - n.startingBackgroundPositionLeft) * (t - n.stellarRatio) + "px" : n.startingValueLeft, i = this.options.verticalScrolling ? (c + n.verticalOffset - this.viewportOffsetTop - n.startingOffsetTop + n.parentOffsetTop - n.startingBackgroundPositionTop) * (t - n.stellarRatio) + "px" : n.startingValueTop, h(n.$element, r, i)
            }
        }, _handleScrollEvent: function () {
            var e = this, t = !1, n = function () {
                e._repositionElements(), t = !1
            }, r = function () {
                t || (d(n), t = !0)
            };
            this.$scrollElement.bind("scroll." + this.name, r), r()
        }, _startAnimationLoop: function () {
            var e = this;
            this._animationLoop = function () {
                d(e._animationLoop), e._repositionElements()
            }, this._animationLoop()
        }
    }, e.fn[s] = function (t) {
        var n = arguments;
        return t === r || "object" == typeof t ? this.each(function () {
            e.data(this, "plugin_" + s) || e.data(this, "plugin_" + s, new i(this, t))
        }) : "string" == typeof t && "_" !== t[0] && "init" !== t ? this.each(function () {
            var r = e.data(this, "plugin_" + s);
            r instanceof i && "function" == typeof r[t] && r[t].apply(r, Array.prototype.slice.call(n, 1)), "destroy" === t && e.data(this, "plugin_" + s, null)
        }) : void 0
    }, e[s] = function () {
        var n = e(t);
        return n.stellar.apply(n, Array.prototype.slice.call(arguments, 0))
    }, e[s].scrollProperty = u, e[s].positionProperty = a, t.Stellar = i
}(jQuery, this, document);
!function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t(require, exports, module) : e.scrollReveal = t()
}(this, function () {
    return window.scrollReveal = function (e) {
        "use strict";
        function t(t) {
            this.docElem = e.document.documentElement, this.options = this.extend(this.defaults, t), this.styleBank = {}, 1 == this.options.init && this.init()
        }

        var n = 1, r = function () {
            return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function (t) {
                    e.setTimeout(t, 1e3 / 60)
                }
        }();
        return t.prototype = {
            defaults: {
                after: "0s",
                enter: "bottom",
                move: "24px",
                over: "0.66s",
                easing: "ease-in-out",
                opacity: 0,
                viewportFactor: .33,
                reset: !1,
                init: !0
            }, init: function () {
                this.scrolled = !1;
                var t = this;
                this.elems = Array.prototype.slice.call(this.docElem.querySelectorAll("[data-scroll-reveal]")), this.elems.forEach(function (e) {
                    var r = e.getAttribute("data-scroll-reveal-id");
                    r || (r = n++, e.setAttribute("data-scroll-reveal-id", r)), t.styleBank[r] || (t.styleBank[r] = e.getAttribute("style")), t.update(e)
                });
                var s = function () {
                    t.scrolled || (t.scrolled = !0, r(function () {
                        t._scrollPage()
                    }))
                }, u = function () {
                    function e() {
                        t._scrollPage(), t.resizeTimeout = null
                    }

                    t.resizeTimeout && clearTimeout(t.resizeTimeout), t.resizeTimeout = setTimeout(e, 200)
                };
                e.addEventListener("scroll", s, !1), e.addEventListener("resize", u, !1)
            }, _scrollPage: function () {
                var e = this;
                this.elems.forEach(function (t) {
                    e.update(t)
                }), this.scrolled = !1
            }, parseLanguage: function (e) {
                function t(e) {
                    var t = [], n = ["from", "the", "and", "then", "but", "with"];
                    return e.forEach(function (e) {
                        n.indexOf(e) > -1 || t.push(e)
                    }), t
                }

                var n = e.getAttribute("data-scroll-reveal").split(/[, ]+/), r = {};
                return n = t(n), n.forEach(function (e, t) {
                    switch (e) {
                        case"enter":
                            return void (r.enter = n[t + 1]);
                        case"after":
                            return void (r.after = n[t + 1]);
                        case"wait":
                            return void (r.after = n[t + 1]);
                        case"move":
                            return void (r.move = n[t + 1]);
                        case"ease":
                            return r.move = n[t + 1], void (r.ease = "ease");
                        case"ease-in":
                            return r.move = n[t + 1], void (r.easing = "ease-in");
                        case"ease-in-out":
                            return r.move = n[t + 1], void (r.easing = "ease-in-out");
                        case"ease-out":
                            return r.move = n[t + 1], void (r.easing = "ease-out");
                        case"over":
                            return void (r.over = n[t + 1]);
                        default:
                            return
                    }
                }), r
            }, update: function (e) {
                var t = this.genCSS(e), n = this.styleBank[e.getAttribute("data-scroll-reveal-id")];
                return null != n ? n += ";" : n = "", e.getAttribute("data-scroll-reveal-initialized") || (e.setAttribute("style", n + t.initial), e.setAttribute("data-scroll-reveal-initialized", !0)), this.isElementInViewport(e, this.options.viewportFactor) ? e.getAttribute("data-scroll-reveal-complete") ? void 0 : this.isElementInViewport(e, this.options.viewportFactor) ? (e.setAttribute("style", n + t.target + t.transition), void (this.options.reset || setTimeout(function () {
                    "" != n ? e.setAttribute("style", n) : e.removeAttribute("style"), e.setAttribute("data-scroll-reveal-complete", !0)
                }, t.totalDuration))) : void 0 : void (this.options.reset && e.setAttribute("style", n + t.initial + t.reset))
            }, genCSS: function (e) {
                var t, n, r = this.parseLanguage(e);
                r.enter ? (("top" == r.enter || "bottom" == r.enter) && (t = r.enter, n = "y"), ("left" == r.enter || "right" == r.enter) && (t = r.enter, n = "x")) : (("top" == this.options.enter || "bottom" == this.options.enter) && (t = this.options.enter, n = "y"), ("left" == this.options.enter || "right" == this.options.enter) && (t = this.options.enter, n = "x")), ("top" == t || "left" == t) && (r.move = r.move ? "-" + r.move : "-" + this.options.move);
                var i = r.move || this.options.move, s = r.over || this.options.over, o = r.after || this.options.after,
                    u = r.easing || this.options.easing, a = r.opacity || this.options.opacity,
                    f = "-webkit-transition: -webkit-transform " + s + " " + u + " " + o + ",  opacity " + s + " " + u + " " + o + ";transition: transform " + s + " " + u + " " + o + ", opacity " + s + " " + u + " " + o + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",
                    l = "-webkit-transition: -webkit-transform " + s + " " + u + " 0s,  opacity " + s + " " + u + " " + o + ";transition: transform " + s + " " + u + " 0s,  opacity " + s + " " + u + " " + o + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",
                    c = "-webkit-transform: translate" + n + "(" + i + ");transform: translate" + n + "(" + i + ");opacity: " + a + ";",
                    h = "-webkit-transform: translate" + n + "(0);transform: translate" + n + "(0);opacity: 1;";
                return {
                    transition: f,
                    initial: c,
                    target: h,
                    reset: l,
                    totalDuration: 1e3 * (parseFloat(s) + parseFloat(o))
                }
            }, getViewportH: function () {
                var t = this.docElem.clientHeight, n = e.innerHeight;
                return n > t ? n : t
            }, getOffset: function (e) {
                var t = 0, n = 0;
                do isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft); while (e = e.offsetParent);
                return {top: t, left: n}
            }, isElementInViewport: function (t, n) {
                var r = e.pageYOffset, i = r + this.getViewportH(), s = t.offsetHeight, o = this.getOffset(t).top,
                    u = o + s, n = n || 0;
                return i >= o + s * n && u >= r || "fixed" == (t.currentStyle ? t.currentStyle : e.getComputedStyle(t, null)).position
            }, extend: function (e, t) {
                for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }
        }, t
    }(window), scrollReveal
});
(function (e, t) {
    if (typeof define === "function" && define.amd) {
        define("smoothScroll", t(e))
    } else if (typeof exports === "object") {
        module.exports = t(e)
    } else {
        e.smoothScroll = t(e)
    }
})(this, function (e) {
    "use strict";
    var t = {};
    var n = !!document.querySelector && !!e.addEventListener;
    var r;
    var i = {
        speed: 500, easing: "easeInOutCubic", offset: 0, updateURL: true, callbackBefore: function () {
        }, callbackAfter: function () {
        }
    };
    var s = function (e, t, n) {
        if (Object.prototype.toString.call(e) === "[object Object]") {
            for (var r in e) {
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    t.call(n, e[r], r, e)
                }
            }
        } else {
            for (var i = 0, s = e.length; i < s; i++) {
                t.call(n, e[i], i, e)
            }
        }
    };
    var o = function (e, t) {
        var n = {};
        s(e, function (t, r) {
            n[r] = e[r]
        });
        s(t, function (e, r) {
            n[r] = t[r]
        });
        return n
    };
    var u = function (e) {
        var t = String(e);
        var n = t.length;
        var r = -1;
        var i;
        var s = "";
        var o = t.charCodeAt(0);
        while (++r < n) {
            i = t.charCodeAt(r);
            if (i === 0) {
                throw new InvalidCharacterError("Invalid character: the input contains U+0000.")
            }
            if (i >= 1 && i <= 31 || i == 127 || r === 0 && i >= 48 && i <= 57 || r === 1 && i >= 48 && i <= 57 && o === 45) {
                s += "\\" + i.toString(16) + " ";
                continue
            }
            if (i >= 128 || i === 45 || i === 95 || i >= 48 && i <= 57 || i >= 65 && i <= 90 || i >= 97 && i <= 122) {
                s += t.charAt(r);
                continue
            }
            s += "\\" + t.charAt(r)
        }
        return s
    };
    var a = function (e, t) {
        var n;
        if (e === "easeInQuad") n = t * t;
        if (e === "easeOutQuad") n = t * (2 - t);
        if (e === "easeInOutQuad") n = t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        if (e === "easeInCubic") n = t * t * t;
        if (e === "easeOutCubic") n = --t * t * t + 1;
        if (e === "easeInOutCubic") n = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        if (e === "easeInQuart") n = t * t * t * t;
        if (e === "easeOutQuart") n = 1 - --t * t * t * t;
        if (e === "easeInOutQuart") n = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
        if (e === "easeInQuint") n = t * t * t * t * t;
        if (e === "easeOutQuint") n = 1 + --t * t * t * t * t;
        if (e === "easeInOutQuint") n = t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
        return n || t
    };
    var f = function (e, t, n) {
        var r = 0;
        if (e.offsetParent) {
            do {
                r += e.offsetTop;
                e = e.offsetParent
            } while (e)
        }
        r = r - t - n;
        return r >= 0 ? r : 0
    };
    var l = function () {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
    };
    var c = function (e) {
        return !e || !(typeof JSON === "object" && typeof JSON.parse === "function") ? {} : JSON.parse(e)
    };
    var h = function (e, t) {
        if (history.pushState && (t || t === "true")) {
            history.pushState({pos: e.id}, "", window.location.pathname + e)
        }
    };
    t.animateScroll = function (t, n, r, s) {
        var p = o(p || i, r || {});
        var d = c(t ? t.getAttribute("data-options") : null);
        p = o(p, d);
        n = "#" + u(n.substr(1));
        var v = document.querySelector("[data-scroll-header]");
        var m = v === null ? 0 : v.offsetHeight + v.offsetTop;
        var g = e.pageYOffset;
        var y = f(document.querySelector(n), m, parseInt(p.offset, 10));
        var b;
        var w = y - g;
        var E = l();
        var S = 0;
        var x, T;
        if (t && t.tagName.toLowerCase() === "a" && s) {
            s.preventDefault()
        }
        h(n, p.updateURL);
        var N = function (r, i, s) {
            var o = e.pageYOffset;
            if (r == i || o == i || e.innerHeight + o >= E) {
                clearInterval(s);
                p.callbackAfter(t, n)
            }
        };
        var C = function () {
            S += 16;
            x = S / parseInt(p.speed, 10);
            x = x > 1 ? 1 : x;
            T = g + w * a(p.easing, x);
            e.scrollTo(0, Math.floor(T));
            N(T, y, b)
        };
        var k = function () {
            p.callbackBefore(t, n);
            b = setInterval(C, 16)
        };
        if (e.pageYOffset === 0) {
            e.scrollTo(0, 0)
        }
        k()
    };
    t.init = function (e) {
        if (!n)return;
        r = o(i, e || {});
        var u = document.querySelectorAll("[data-scroll]");
        s(u, function (e) {
            e.addEventListener("click", t.animateScroll.bind(null, e, e.hash, r), false)
        })
    };
    return t
});
(function (e) {
    function t() {
    }

    function n(e) {
        function n(t) {
            t.prototype.option || (t.prototype.option = function (t) {
                e.isPlainObject(t) && (this.options = e.extend(!0, this.options, t))
            })
        }

        function i(t, n) {
            e.fn[t] = function (i) {
                if ("string" == typeof i) {
                    for (var u = r.call(arguments, 1), a = 0, f = this.length; f > a; a++) {
                        var l = this[a], c = e.data(l, t);
                        if (c)if (e.isFunction(c[i]) && "_" !== i.charAt(0)) {
                            var h = c[i].apply(c, u);
                            if (void 0 !== h)return h
                        } else s("no such method '" + i + "' for " + t + " instance"); else s("cannot call methods on " + t + " prior to initialization; " + "attempted to call '" + i + "'")
                    }
                    return this
                }
                return this.each(function () {
                    var r = e.data(this, t);
                    r ? (r.option(i), r._init()) : (r = new n(this, i), e.data(this, t, r))
                })
            }
        }

        if (e) {
            var s = "undefined" == typeof console ? t : function (e) {
                console.error(e)
            };
            return e.bridget = function (e, t) {
                n(t), i(e, t)
            }, e.bridget
        }
    }

    var r = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], n) : n(e.jQuery)
})(window), function (e) {
    function t(t) {
        var n = e.event;
        return n.target = n.target || n.srcElement || t, n
    }

    var n = document.documentElement, r = function () {
    };
    n.addEventListener ? r = function (e, t, n) {
        e.addEventListener(t, n, !1)
    } : n.attachEvent && (r = function (e, n, r) {
            e[n + r] = r.handleEvent ? function () {
                var n = t(e);
                r.handleEvent.call(r, n)
            } : function () {
                var n = t(e);
                r.call(e, n)
            }, e.attachEvent("on" + n, e[n + r])
        });
    var i = function () {
    };
    n.removeEventListener ? i = function (e, t, n) {
        e.removeEventListener(t, n, !1)
    } : n.detachEvent && (i = function (e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (r) {
                e[t + n] = void 0
            }
        });
    var s = {bind: r, unbind: i};
    "function" == typeof define && define.amd ? define("eventie/eventie", s) : "object" == typeof exports ? module.exports = s : e.eventie = s
}(this), function (e) {
    function t(e) {
        "function" == typeof e && (t.isReady ? e() : s.push(e))
    }

    function n(e) {
        var n = "readystatechange" === e.type && "complete" !== i.readyState;
        if (!t.isReady && !n) {
            t.isReady = !0;
            for (var r = 0, o = s.length; o > r; r++) {
                var u = s[r];
                u()
            }
        }
    }

    function r(r) {
        return r.bind(i, "DOMContentLoaded", n), r.bind(i, "readystatechange", n), r.bind(e, "load", n), t
    }

    var i = e.document, s = [];
    t.isReady = !1, "function" == typeof define && define.amd ? (t.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], r)) : e.docReady = r(e.eventie)
}(this), function () {
    function e() {
    }

    function t(e, t) {
        for (var n = e.length; n--;)if (e[n].listener === t)return n;
        return -1
    }

    function n(e) {
        return function () {
            return this[e].apply(this, arguments)
        }
    }

    var r = e.prototype, i = this, s = i.EventEmitter;
    r.getListeners = function (e) {
        var t, n, r = this._getEvents();
        if (e instanceof RegExp) {
            t = {};
            for (n in r)r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n])
        } else t = r[e] || (r[e] = []);
        return t
    }, r.flattenListeners = function (e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1)n.push(e[t].listener);
        return n
    }, r.getListenersAsObject = function (e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, r.addListener = function (e, n) {
        var r, i = this.getListenersAsObject(e), s = "object" == typeof n;
        for (r in i)i.hasOwnProperty(r) && -1 === t(i[r], n) && i[r].push(s ? n : {listener: n, once: !1});
        return this
    }, r.on = n("addListener"), r.addOnceListener = function (e, t) {
        return this.addListener(e, {listener: t, once: !0})
    }, r.once = n("addOnceListener"), r.defineEvent = function (e) {
        return this.getListeners(e), this
    }, r.defineEvents = function (e) {
        for (var t = 0; e.length > t; t += 1)this.defineEvent(e[t]);
        return this
    }, r.removeListener = function (e, n) {
        var r, i, s = this.getListenersAsObject(e);
        for (i in s)s.hasOwnProperty(i) && (r = t(s[i], n), -1 !== r && s[i].splice(r, 1));
        return this
    }, r.off = n("removeListener"), r.addListeners = function (e, t) {
        return this.manipulateListeners(!1, e, t)
    }, r.removeListeners = function (e, t) {
        return this.manipulateListeners(!0, e, t)
    }, r.manipulateListeners = function (e, t, n) {
        var r, i, s = e ? this.removeListener : this.addListener, o = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)for (r = n.length; r--;)s.call(this, t, n[r]); else for (r in t)t.hasOwnProperty(r) && (i = t[r]) && ("function" == typeof i ? s.call(this, r, i) : o.call(this, r, i));
        return this
    }, r.removeEvent = function (e) {
        var t, n = typeof e, r = this._getEvents();
        if ("string" === n) delete r[e]; else if (e instanceof RegExp)for (t in r)r.hasOwnProperty(t) && e.test(t) && delete r[t]; else delete this._events;
        return this
    }, r.removeAllListeners = n("removeEvent"), r.emitEvent = function (e, t) {
        var n, r, i, s, o = this.getListenersAsObject(e);
        for (i in o)if (o.hasOwnProperty(i))for (r = o[i].length; r--;)n = o[i][r], n.once === !0 && this.removeListener(e, n.listener), s = n.listener.apply(this, t || []), s === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, r.trigger = n("emitEvent"), r.emit = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, r.setOnceReturnValue = function (e) {
        return this._onceReturnValue = e, this
    }, r._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, r._getEvents = function () {
        return this._events || (this._events = {})
    }, e.noConflict = function () {
        return i.EventEmitter = s, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}.call(this), function (e) {
    function t(e) {
        if (e) {
            if ("string" == typeof r[e])return e;
            e = e.charAt(0).toUpperCase() + e.slice(1);
            for (var t, s = 0, u = n.length; u > s; s++)if (t = n[s] + e, "string" == typeof r[t])return t
        }
    }

    var n = "Webkit Moz ms Ms O".split(" "), r = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
        return t
    }) : "object" == typeof exports ? module.exports = t : e.getStyleProperty = t
}(window), function (e) {
    function t(e) {
        var t = parseFloat(e), n = -1 === e.indexOf("%") && !isNaN(t);
        return n && t
    }

    function n() {
        for (var e = {width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0}, t = 0,
                 n = o.length; n > t; t++) {
            var r = o[t];
            e[r] = 0
        }
        return e
    }

    function r(e) {
        function r(e) {
            if ("string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var r = s(e);
                if ("none" === r.display)return n();
                var i = {};
                i.width = e.offsetWidth, i.height = e.offsetHeight;
                for (var l = i.isBorderBox = !(!f || !r[f] || "border-box" !== r[f]), c = 0, h = o.length; h > c; c++) {
                    var d = o[c], v = r[d];
                    v = u(e, v);
                    var m = parseFloat(v);
                    i[d] = isNaN(m) ? 0 : m
                }
                var g = i.paddingLeft + i.paddingRight, y = i.paddingTop + i.paddingBottom,
                    b = i.marginLeft + i.marginRight, w = i.marginTop + i.marginBottom,
                    E = i.borderLeftWidth + i.borderRightWidth, S = i.borderTopWidth + i.borderBottomWidth, x = l && a,
                    T = t(r.width);
                T !== !1 && (i.width = T + (x ? 0 : g + E));
                var N = t(r.height);
                return N !== !1 && (i.height = N + (x ? 0 : y + S)), i.innerWidth = i.width - (g + E), i.innerHeight = i.height - (y + S), i.outerWidth = i.width + b, i.outerHeight = i.height + w, i
            }
        }

        function u(e, t) {
            if (i || -1 === t.indexOf("%"))return t;
            var n = e.style, r = n.left, s = e.runtimeStyle, o = s && s.left;
            return o && (s.left = e.currentStyle.left), n.left = t, t = n.pixelLeft, n.left = r, o && (s.left = o), t
        }

        var a, f = e("boxSizing");
        return function () {
            if (f) {
                var e = document.createElement("div");
                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[f] = "border-box";
                var n = document.body || document.documentElement;
                n.appendChild(e);
                var r = s(e);
                a = 200 === t(r.width), n.removeChild(e)
            }
        }(), r
    }

    var i = e.getComputedStyle, s = i ? function (e) {
            return i(e, null)
        } : function (e) {
            return e.currentStyle
        },
        o = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], r) : "object" == typeof exports ? module.exports = r(require("get-style-property")) : e.getSize = r(e.getStyleProperty)
}(window), function (e, t) {
    function n(e, t) {
        return e[u](t)
    }

    function r(e) {
        if (!e.parentNode) {
            var t = document.createDocumentFragment();
            t.appendChild(e)
        }
    }

    function i(e, t) {
        r(e);
        for (var n = e.parentNode.querySelectorAll(t), i = 0, s = n.length; s > i; i++)if (n[i] === e)return !0;
        return !1
    }

    function s(e, t) {
        return r(e), n(e, t)
    }

    var o, u = function () {
        if (t.matchesSelector)return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], n = 0, r = e.length; r > n; n++) {
            var i = e[n], s = i + "MatchesSelector";
            if (t[s])return s
        }
    }();
    if (u) {
        var a = document.createElement("div"), f = n(a, "div");
        o = f ? n : s
    } else o = i;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
        return o
    }) : window.matchesSelector = o
}(this, Element.prototype), function (e) {
    function t(e, t) {
        for (var n in t)e[n] = t[n];
        return e
    }

    function n(e) {
        for (var t in e)return !1;
        return t = null, !0
    }

    function r(e) {
        return e.replace(/([A-Z])/g, function (e) {
            return "-" + e.toLowerCase()
        })
    }

    function i(e, i, s) {
        function u(e, t) {
            e && (this.element = e, this.layout = t, this.position = {x: 0, y: 0}, this._create())
        }

        var a = s("transition"), f = s("transform"), l = a && f, c = !!s("perspective"), h = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend"
        }[a], p = ["transform", "transition", "transitionDuration", "transitionProperty"], d = function () {
            for (var e = {}, t = 0, n = p.length; n > t; t++) {
                var r = p[t], i = s(r);
                i && i !== r && (e[r] = i)
            }
            return e
        }();
        t(u.prototype, e.prototype), u.prototype._create = function () {
            this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
        }, u.prototype.handleEvent = function (e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, u.prototype.getSize = function () {
            this.size = i(this.element)
        }, u.prototype.css = function (e) {
            var t = this.element.style;
            for (var n in e) {
                var r = d[n] || n;
                t[r] = e[n]
            }
        }, u.prototype.getPosition = function () {
            var e = o(this.element), t = this.layout.options, n = t.isOriginLeft, r = t.isOriginTop,
                i = parseInt(e[n ? "left" : "right"], 10), s = parseInt(e[r ? "top" : "bottom"], 10);
            i = isNaN(i) ? 0 : i, s = isNaN(s) ? 0 : s;
            var u = this.layout.size;
            i -= n ? u.paddingLeft : u.paddingRight, s -= r ? u.paddingTop : u.paddingBottom, this.position.x = i, this.position.y = s
        }, u.prototype.layoutPosition = function () {
            var e = this.layout.size, t = this.layout.options, n = {};
            t.isOriginLeft ? (n.left = this.position.x + e.paddingLeft + "px", n.right = "") : (n.right = this.position.x + e.paddingRight + "px", n.left = ""), t.isOriginTop ? (n.top = this.position.y + e.paddingTop + "px", n.bottom = "") : (n.bottom = this.position.y + e.paddingBottom + "px", n.top = ""), this.css(n), this.emitEvent("layout", [this])
        };
        var v = c ? function (e, t) {
            return "translate3d(" + e + "px, " + t + "px, 0)"
        } : function (e, t) {
            return "translate(" + e + "px, " + t + "px)"
        };
        u.prototype._transitionTo = function (e, t) {
            this.getPosition();
            var n = this.position.x, r = this.position.y, i = parseInt(e, 10), s = parseInt(t, 10),
                o = i === this.position.x && s === this.position.y;
            if (this.setPosition(e, t), o && !this.isTransitioning)return this.layoutPosition(), void 0;
            var u = e - n, a = t - r, f = {}, l = this.layout.options;
            u = l.isOriginLeft ? u : -u, a = l.isOriginTop ? a : -a, f.transform = v(u, a), this.transition({
                to: f,
                onTransitionEnd: {transform: this.layoutPosition},
                isCleaning: !0
            })
        }, u.prototype.goTo = function (e, t) {
            this.setPosition(e, t), this.layoutPosition()
        }, u.prototype.moveTo = l ? u.prototype._transitionTo : u.prototype.goTo, u.prototype.setPosition = function (e, t) {
            this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10)
        }, u.prototype._nonTransition = function (e) {
            this.css(e.to), e.isCleaning && this._removeStyles(e.to);
            for (var t in e.onTransitionEnd)e.onTransitionEnd[t].call(this)
        }, u.prototype._transition = function (e) {
            if (!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(e), void 0;
            var t = this._transn;
            for (var n in e.onTransitionEnd)t.onEnd[n] = e.onTransitionEnd[n];
            for (n in e.to)t.ingProperties[n] = !0, e.isCleaning && (t.clean[n] = !0);
            if (e.from) {
                this.css(e.from);
                var r = this.element.offsetHeight;
                r = null
            }
            this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
        };
        var m = f && r(f) + ",opacity";
        u.prototype.enableTransition = function () {
            this.isTransitioning || (this.css({
                transitionProperty: m,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(h, this, !1))
        }, u.prototype.transition = u.prototype[a ? "_transition" : "_nonTransition"], u.prototype.onwebkitTransitionEnd = function (e) {
            this.ontransitionend(e)
        }, u.prototype.onotransitionend = function (e) {
            this.ontransitionend(e)
        };
        var g = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
        u.prototype.ontransitionend = function (e) {
            if (e.target === this.element) {
                var t = this._transn, r = g[e.propertyName] || e.propertyName;
                if (delete t.ingProperties[r], n(t.ingProperties) && this.disableTransition(), r in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[r]), r in t.onEnd) {
                    var i = t.onEnd[r];
                    i.call(this), delete t.onEnd[r]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, u.prototype.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
        }, u.prototype._removeStyles = function (e) {
            var t = {};
            for (var n in e)t[n] = "";
            this.css(t)
        };
        var y = {transitionProperty: "", transitionDuration: ""};
        return u.prototype.removeTransitionStyles = function () {
            this.css(y)
        }, u.prototype.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
        }, u.prototype.remove = function () {
            if (!a || !parseFloat(this.layout.options.transitionDuration))return this.removeElem(), void 0;
            var e = this;
            this.on("transitionEnd", function () {
                return e.removeElem(), !0
            }), this.hide()
        }, u.prototype.reveal = function () {
            delete this.isHidden, this.css({display: ""});
            var e = this.layout.options;
            this.transition({from: e.hiddenStyle, to: e.visibleStyle, isCleaning: !0})
        }, u.prototype.hide = function () {
            this.isHidden = !0, this.css({display: ""});
            var e = this.layout.options;
            this.transition({
                from: e.visibleStyle,
                to: e.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: {
                    opacity: function () {
                        this.isHidden && this.css({display: "none"})
                    }
                }
            })
        }, u.prototype.destroy = function () {
            this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
        }, u
    }

    var s = e.getComputedStyle, o = s ? function (e) {
        return s(e, null)
    } : function (e) {
        return e.currentStyle
    };
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], i) : (e.Outlayer = {}, e.Outlayer.Item = i(e.EventEmitter, e.getSize, e.getStyleProperty))
}(window), function (e) {
    function t(e, t) {
        for (var n in t)e[n] = t[n];
        return e
    }

    function n(e) {
        return "[object Array]" === c.call(e)
    }

    function r(e) {
        var t = [];
        if (n(e)) t = e; else if (e && "number" == typeof e.length)for (var r = 0,
                                                                            i = e.length; i > r; r++)t.push(e[r]); else t.push(e);
        return t
    }

    function i(e, t) {
        var n = p(t, e);
        -1 !== n && t.splice(n, 1)
    }

    function s(e) {
        return e.replace(/(.)([A-Z])/g, function (e, t, n) {
            return t + "-" + n
        }).toLowerCase()
    }

    function o(n, o, c, p, d, v) {
        function m(e, n) {
            if ("string" == typeof e && (e = u.querySelector(e)), !e || !h(e))return a && a.error("Bad " + this.constructor.namespace + " element: " + e), void 0;
            this.element = e, this.options = t({}, this.constructor.defaults), this.option(n);
            var r = ++g;
            this.element.outlayerGUID = r, y[r] = this, this._create(), this.options.isInitLayout && this.layout()
        }

        var g = 0, y = {};
        return m.namespace = "outlayer", m.Item = v, m.defaults = {
            containerStyle: {position: "relative"},
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
            visibleStyle: {opacity: 1, transform: "scale(1)"}
        }, t(m.prototype, c.prototype), m.prototype.option = function (e) {
            t(this.options, e)
        }, m.prototype._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), t(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, m.prototype.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, m.prototype._itemize = function (e) {
            for (var t = this._filterFindItemElements(e), n = this.constructor.Item, r = [], i = 0,
                     s = t.length; s > i; i++) {
                var o = t[i], u = new n(o, this);
                r.push(u)
            }
            return r
        }, m.prototype._filterFindItemElements = function (e) {
            e = r(e);
            for (var t = this.options.itemSelector, n = [], i = 0, s = e.length; s > i; i++) {
                var o = e[i];
                if (h(o))if (t) {
                    d(o, t) && n.push(o);
                    for (var u = o.querySelectorAll(t), a = 0, f = u.length; f > a; a++)n.push(u[a])
                } else n.push(o)
            }
            return n
        }, m.prototype.getItemElements = function () {
            for (var e = [], t = 0, n = this.items.length; n > t; t++)e.push(this.items[t].element);
            return e
        }, m.prototype.layout = function () {
            this._resetLayout(), this._manageStamps();
            var e = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function () {
            this.getSize()
        }, m.prototype.getSize = function () {
            this.size = p(this.element)
        }, m.prototype._getMeasurement = function (e, t) {
            var n, r = this.options[e];
            r ? ("string" == typeof r ? n = this.element.querySelector(r) : h(r) && (n = r), this[e] = n ? p(n)[t] : r) : this[e] = 0
        }, m.prototype.layoutItems = function (e, t) {
            e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
        }, m.prototype._getItemsForLayout = function (e) {
            for (var t = [], n = 0, r = e.length; r > n; n++) {
                var i = e[n];
                i.isIgnored || t.push(i)
            }
            return t
        }, m.prototype._layoutItems = function (e, t) {
            function n() {
                r.emitEvent("layoutComplete", [r, e])
            }

            var r = this;
            if (!e || !e.length)return n(), void 0;
            this._itemsOn(e, "layout", n);
            for (var i = [], s = 0, o = e.length; o > s; s++) {
                var u = e[s], a = this._getItemLayoutPosition(u);
                a.item = u, a.isInstant = t || u.isLayoutInstant, i.push(a)
            }
            this._processLayoutQueue(i)
        }, m.prototype._getItemLayoutPosition = function () {
            return {x: 0, y: 0}
        }, m.prototype._processLayoutQueue = function (e) {
            for (var t = 0, n = e.length; n > t; t++) {
                var r = e[t];
                this._positionItem(r.item, r.x, r.y, r.isInstant)
            }
        }, m.prototype._positionItem = function (e, t, n, r) {
            r ? e.goTo(t, n) : e.moveTo(t, n)
        }, m.prototype._postLayout = function () {
            this.resizeContainer()
        }, m.prototype.resizeContainer = function () {
            if (this.options.isResizingContainer) {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
            }
        }, m.prototype._getContainerSize = l, m.prototype._setContainerMeasure = function (e, t) {
            if (void 0 !== e) {
                var n = this.size;
                n.isBorderBox && (e += t ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
            }
        }, m.prototype._itemsOn = function (e, t, n) {
            function r() {
                return i++, i === s && n.call(o), !0
            }

            for (var i = 0, s = e.length, o = this, u = 0, a = e.length; a > u; u++) {
                var f = e[u];
                f.on(t, r)
            }
        }, m.prototype.ignore = function (e) {
            var t = this.getItem(e);
            t && (t.isIgnored = !0)
        }, m.prototype.unignore = function (e) {
            var t = this.getItem(e);
            t && delete t.isIgnored
        }, m.prototype.stamp = function (e) {
            if (e = this._find(e)) {
                this.stamps = this.stamps.concat(e);
                for (var t = 0, n = e.length; n > t; t++) {
                    var r = e[t];
                    this.ignore(r)
                }
            }
        }, m.prototype.unstamp = function (e) {
            if (e = this._find(e))for (var t = 0, n = e.length; n > t; t++) {
                var r = e[t];
                i(r, this.stamps), this.unignore(r)
            }
        }, m.prototype._find = function (e) {
            return e ? ("string" == typeof e && (e = this.element.querySelectorAll(e)), e = r(e)) : void 0
        }, m.prototype._manageStamps = function () {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var e = 0, t = this.stamps.length; t > e; e++) {
                    var n = this.stamps[e];
                    this._manageStamp(n)
                }
            }
        }, m.prototype._getBoundingRect = function () {
            var e = this.element.getBoundingClientRect(), t = this.size;
            this._boundingRect = {
                left: e.left + t.paddingLeft + t.borderLeftWidth,
                top: e.top + t.paddingTop + t.borderTopWidth,
                right: e.right - (t.paddingRight + t.borderRightWidth),
                bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
            }
        }, m.prototype._manageStamp = l, m.prototype._getElementOffset = function (e) {
            var t = e.getBoundingClientRect(), n = this._boundingRect, r = p(e), i = {
                left: t.left - n.left - r.marginLeft,
                top: t.top - n.top - r.marginTop,
                right: n.right - t.right - r.marginRight,
                bottom: n.bottom - t.bottom - r.marginBottom
            };
            return i
        }, m.prototype.handleEvent = function (e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, m.prototype.bindResize = function () {
            this.isResizeBound || (n.bind(e, "resize", this), this.isResizeBound = !0)
        }, m.prototype.unbindResize = function () {
            this.isResizeBound && n.unbind(e, "resize", this), this.isResizeBound = !1
        }, m.prototype.onresize = function () {
            function e() {
                t.resize(), delete t.resizeTimeout
            }

            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var t = this;
            this.resizeTimeout = setTimeout(e, 100)
        }, m.prototype.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, m.prototype.needsResizeLayout = function () {
            var e = p(this.element), t = this.size && e;
            return t && e.innerWidth !== this.size.innerWidth
        }, m.prototype.addItems = function (e) {
            var t = this._itemize(e);
            return t.length && (this.items = this.items.concat(t)), t
        }, m.prototype.appended = function (e) {
            var t = this.addItems(e);
            t.length && (this.layoutItems(t, !0), this.reveal(t))
        }, m.prototype.prepended = function (e) {
            var t = this._itemize(e);
            if (t.length) {
                var n = this.items.slice(0);
                this.items = t.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(n)
            }
        }, m.prototype.reveal = function (e) {
            var t = e && e.length;
            if (t)for (var n = 0; t > n; n++) {
                var r = e[n];
                r.reveal()
            }
        }, m.prototype.hide = function (e) {
            var t = e && e.length;
            if (t)for (var n = 0; t > n; n++) {
                var r = e[n];
                r.hide()
            }
        }, m.prototype.getItem = function (e) {
            for (var t = 0, n = this.items.length; n > t; t++) {
                var r = this.items[t];
                if (r.element === e)return r
            }
        }, m.prototype.getItems = function (e) {
            if (e && e.length) {
                for (var t = [], n = 0, r = e.length; r > n; n++) {
                    var i = e[n], s = this.getItem(i);
                    s && t.push(s)
                }
                return t
            }
        }, m.prototype.remove = function (e) {
            e = r(e);
            var t = this.getItems(e);
            if (t && t.length) {
                this._itemsOn(t, "remove", function () {
                    this.emitEvent("removeComplete", [this, t])
                });
                for (var n = 0, s = t.length; s > n; n++) {
                    var o = t[n];
                    o.remove(), i(o, this.items)
                }
            }
        }, m.prototype.destroy = function () {
            var e = this.element.style;
            e.height = "", e.position = "", e.width = "";
            for (var t = 0, n = this.items.length; n > t; t++) {
                var r = this.items[t];
                r.destroy()
            }
            this.unbindResize(), delete this.element.outlayerGUID, f && f.removeData(this.element, this.constructor.namespace)
        }, m.data = function (e) {
            var t = e && e.outlayerGUID;
            return t && y[t]
        }, m.create = function (e, n) {
            function r() {
                m.apply(this, arguments)
            }

            return Object.create ? r.prototype = Object.create(m.prototype) : t(r.prototype, m.prototype), r.prototype.constructor = r, r.defaults = t({}, m.defaults), t(r.defaults, n), r.prototype.settings = {}, r.namespace = e, r.data = m.data, r.Item = function () {
                v.apply(this, arguments)
            }, r.Item.prototype = new v, o(function () {
                for (var t = s(e), n = u.querySelectorAll(".js-" + t), i = "data-" + t + "-options", o = 0,
                         l = n.length; l > o; o++) {
                    var c, h = n[o], p = h.getAttribute(i);
                    try {
                        c = p && JSON.parse(p)
                    } catch (d) {
                        a && a.error("Error parsing " + i + " on " + h.nodeName.toLowerCase() + (h.id ? "#" + h.id : "") + ": " + d);
                        continue
                    }
                    var v = new r(h, c);
                    f && f.data(h, e, v)
                }
            }), f && f.bridget && f.bridget(e, r), r
        }, m.Item = v, m
    }

    var u = e.document, a = e.console, f = e.jQuery, l = function () {
    }, c = Object.prototype.toString, h = "object" == typeof HTMLElement ? function (e) {
        return e instanceof HTMLElement
    } : function (e) {
        return e && "object" == typeof e && 1 === e.nodeType && "string" == typeof e.nodeName
    }, p = Array.prototype.indexOf ? function (e, t) {
        return e.indexOf(t)
    } : function (e, t) {
        for (var n = 0, r = e.length; r > n; n++)if (e[n] === t)return n;
        return -1
    };
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], o) : e.Outlayer = o(e.eventie, e.docReady, e.EventEmitter, e.getSize, e.matchesSelector, e.Outlayer.Item)
}(window), function (e) {
    function t(e) {
        function t() {
            e.Item.apply(this, arguments)
        }

        return t.prototype = new e.Item, t.prototype._create = function () {
            this.id = this.layout.itemGUID++, e.Item.prototype._create.call(this), this.sortData = {}
        }, t.prototype.updateSortData = function () {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var e = this.layout.options.getSortData, t = this.layout._sorters;
                for (var n in e) {
                    var r = t[n];
                    this.sortData[n] = r(this.element, this)
                }
            }
        }, t
    }

    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], t) : (e.Isotope = e.Isotope || {}, e.Isotope.Item = t(e.Outlayer))
}(window), function (e) {
    function t(e, t) {
        function n(e) {
            this.isotope = e, e && (this.options = e.options[this.namespace], this.element = e.element, this.items = e.filteredItems, this.size = e.size)
        }

        return function () {
            function e(e) {
                return function () {
                    return t.prototype[e].apply(this.isotope, arguments)
                }
            }

            for (var r = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"],
                     s = 0, o = r.length; o > s; s++) {
                var u = r[s];
                n.prototype[u] = e(u)
            }
        }(), n.prototype.needsVerticalResizeLayout = function () {
            var t = e(this.isotope.element), n = this.isotope.size && t;
            return n && t.innerHeight !== this.isotope.size.innerHeight
        }, n.prototype._getMeasurement = function () {
            this.isotope._getMeasurement.apply(this, arguments)
        }, n.prototype.getColumnWidth = function () {
            this.getSegmentSize("column", "Width")
        }, n.prototype.getRowHeight = function () {
            this.getSegmentSize("row", "Height")
        }, n.prototype.getSegmentSize = function (e, t) {
            var n = e + t, r = "outer" + t;
            if (this._getMeasurement(n, r), !this[n]) {
                var i = this.getFirstItemSize();
                this[n] = i && i[r] || this.isotope.size["inner" + t]
            }
        }, n.prototype.getFirstItemSize = function () {
            var t = this.isotope.filteredItems[0];
            return t && t.element && e(t.element)
        }, n.prototype.layout = function () {
            this.isotope.layout.apply(this.isotope, arguments)
        }, n.prototype.getSize = function () {
            this.isotope.getSize(), this.size = this.isotope.size
        }, n.modes = {}, n.create = function (e, t) {
            function r() {
                n.apply(this, arguments)
            }

            return r.prototype = new n, t && (r.options = t), r.prototype.namespace = e, n.modes[e] = r, r
        }, n
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : (e.Isotope = e.Isotope || {}, e.Isotope.LayoutMode = t(e.getSize, e.Outlayer))
}(window), function (e) {
    function t(e, t) {
        var r = e.create("masonry");
        return r.prototype._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var e = this.cols;
            for (this.colYs = []; e--;)this.colYs.push(0);
            this.maxY = 0
        }, r.prototype.measureColumns = function () {
            if (this.getContainerWidth(), !this.columnWidth) {
                var e = this.items[0], n = e && e.element;
                this.columnWidth = n && t(n).outerWidth || this.containerWidth
            }
            this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
        }, r.prototype.getContainerWidth = function () {
            var e = this.options.isFitWidth ? this.element.parentNode : this.element, n = t(e);
            this.containerWidth = n && n.innerWidth
        }, r.prototype._getItemLayoutPosition = function (e) {
            e.getSize();
            var t = e.size.outerWidth % this.columnWidth, r = t && 1 > t ? "round" : "ceil",
                s = Math[r](e.size.outerWidth / this.columnWidth);
            s = Math.min(s, this.cols);
            for (var o = this._getColGroup(s), u = Math.min.apply(Math, o), a = n(o, u),
                     f = {x: this.columnWidth * a, y: u}, l = u + e.size.outerHeight, c = this.cols + 1 - o.length,
                     h = 0; c > h; h++)this.colYs[a + h] = l;
            return f
        }, r.prototype._getColGroup = function (e) {
            if (2 > e)return this.colYs;
            for (var t = [], n = this.cols + 1 - e, r = 0; n > r; r++) {
                var i = this.colYs.slice(r, r + e);
                t[r] = Math.max.apply(Math, i)
            }
            return t
        }, r.prototype._manageStamp = function (e) {
            var n = t(e), r = this._getElementOffset(e), i = this.options.isOriginLeft ? r.left : r.right,
                s = i + n.outerWidth, o = Math.floor(i / this.columnWidth);
            o = Math.max(0, o);
            var u = Math.floor(s / this.columnWidth);
            u -= s % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
            for (var a = (this.options.isOriginTop ? r.top : r.bottom) + n.outerHeight,
                     f = o; u >= f; f++)this.colYs[f] = Math.max(a, this.colYs[f])
        }, r.prototype._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var e = {height: this.maxY};
            return this.options.isFitWidth && (e.width = this._getContainerFitWidth()), e
        }, r.prototype._getContainerFitWidth = function () {
            for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];)e++;
            return (this.cols - e) * this.columnWidth - this.gutter
        }, r.prototype.needsResizeLayout = function () {
            var e = this.containerWidth;
            return this.getContainerWidth(), e !== this.containerWidth
        }, r
    }

    var n = Array.prototype.indexOf ? function (e, t) {
        return e.indexOf(t)
    } : function (e, t) {
        for (var n = 0, r = e.length; r > n; n++) {
            var i = e[n];
            if (i === t)return n
        }
        return -1
    };
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], t) : e.Masonry = t(e.Outlayer, e.getSize)
}(window), function (e) {
    function t(e, t) {
        for (var n in t)e[n] = t[n];
        return e
    }

    function n(e, n) {
        var r = e.create("masonry"), i = r.prototype._getElementOffset, s = r.prototype.layout,
            o = r.prototype._getMeasurement;
        t(r.prototype, n.prototype), r.prototype._getElementOffset = i, r.prototype.layout = s, r.prototype._getMeasurement = o;
        var u = r.prototype.measureColumns;
        r.prototype.measureColumns = function () {
            this.items = this.isotope.filteredItems, u.call(this)
        };
        var a = r.prototype._manageStamp;
        return r.prototype._manageStamp = function () {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, a.apply(this, arguments)
        }, r
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], n) : n(e.Isotope.LayoutMode, e.Masonry)
}(window), function (e) {
    function t(e) {
        var t = e.create("fitRows");
        return t.prototype._resetLayout = function () {
            this.x = 0, this.y = 0, this.maxY = 0
        }, t.prototype._getItemLayoutPosition = function (e) {
            e.getSize(), 0 !== this.x && e.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
            var t = {x: this.x, y: this.y};
            return this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight), this.x += e.size.outerWidth, t
        }, t.prototype._getContainerSize = function () {
            return {height: this.maxY}
        }, t
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], t) : t(e.Isotope.LayoutMode)
}(window), function (e) {
    function t(e) {
        var t = e.create("vertical", {horizontalAlignment: 0});
        return t.prototype._resetLayout = function () {
            this.y = 0
        }, t.prototype._getItemLayoutPosition = function (e) {
            e.getSize();
            var t = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment, n = this.y;
            return this.y += e.size.outerHeight, {x: t, y: n}
        }, t.prototype._getContainerSize = function () {
            return {height: this.y}
        }, t
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], t) : t(e.Isotope.LayoutMode)
}(window), function (e) {
    function t(e, t) {
        for (var n in t)e[n] = t[n];
        return e
    }

    function n(e) {
        return "[object Array]" === l.call(e)
    }

    function r(e) {
        var t = [];
        if (n(e)) t = e; else if (e && "number" == typeof e.length)for (var r = 0,
                                                                            i = e.length; i > r; r++)t.push(e[r]); else t.push(e);
        return t
    }

    function i(e, t) {
        var n = c(t, e);
        -1 !== n && t.splice(n, 1)
    }

    function s(e, n, s, a, l) {
        function c(e, t) {
            return function (n, r) {
                for (var i = 0, s = e.length; s > i; i++) {
                    var o = e[i], u = n.sortData[o], a = r.sortData[o];
                    if (u > a || a > u) {
                        var f = void 0 !== t[o] ? t[o] : t, l = f ? 1 : -1;
                        return (u > a ? 1 : -1) * l
                    }
                }
                return 0
            }
        }

        var h = e.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
        h.Item = a, h.LayoutMode = l, h.prototype._create = function () {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var t in l.modes)this._initLayoutMode(t)
        }, h.prototype.reloadItems = function () {
            this.itemGUID = 0, e.prototype.reloadItems.call(this)
        }, h.prototype._itemize = function () {
            for (var t = e.prototype._itemize.apply(this, arguments), n = 0, r = t.length; r > n; n++) {
                var i = t[n];
                i.id = this.itemGUID++
            }
            return this._updateItemsSortData(t), t
        }, h.prototype._initLayoutMode = function (e) {
            var n = l.modes[e], r = this.options[e] || {};
            this.options[e] = n.options ? t(n.options, r) : r, this.modes[e] = new n(this)
        }, h.prototype.layout = function () {
            return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0)
        }, h.prototype._layout = function () {
            var e = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, e), this._isLayoutInited = !0
        }, h.prototype.arrange = function (e) {
            this.option(e), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
        }, h.prototype._init = h.prototype.arrange, h.prototype._getIsInstant = function () {
            var e = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = e, e
        }, h.prototype._filter = function (e) {
            function t() {
                c.reveal(i), c.hide(s)
            }

            var n = this.options.filter;
            n = n || "*";
            for (var r = [], i = [], s = [], o = this._getFilterTest(n), u = 0, a = e.length; a > u; u++) {
                var f = e[u];
                if (!f.isIgnored) {
                    var l = o(f);
                    l && r.push(f), l && f.isHidden ? i.push(f) : l || f.isHidden || s.push(f)
                }
            }
            var c = this;
            return this._isInstant ? this._noTransition(t) : t(), r
        }, h.prototype._getFilterTest = function (e) {
            return o && this.options.isJQueryFiltering ? function (t) {
                return o(t.element).is(e)
            } : "function" == typeof e ? function (t) {
                return e(t.element)
            } : function (t) {
                return s(t.element, e)
            }
        }, h.prototype.updateSortData = function (e) {
            this._getSorters(), e = r(e);
            var t = this.getItems(e);
            t = t.length ? t : this.items, this._updateItemsSortData(t)
        }, h.prototype._getSorters = function () {
            var e = this.options.getSortData;
            for (var t in e) {
                var n = e[t];
                this._sorters[t] = d(n)
            }
        }, h.prototype._updateItemsSortData = function (e) {
            for (var t = 0, n = e.length; n > t; t++) {
                var r = e[t];
                r.updateSortData()
            }
        };
        var d = function () {
            function e(e) {
                if ("string" != typeof e)return e;
                var n = u(e).split(" "), r = n[0], i = r.match(/^\[(.+)\]$/), s = i && i[1], o = t(s, r),
                    a = h.sortDataParsers[n[1]];
                return e = a ? function (e) {
                    return e && a(o(e))
                } : function (e) {
                    return e && o(e)
                }
            }

            function t(e, t) {
                var n;
                return n = e ? function (t) {
                    return t.getAttribute(e)
                } : function (e) {
                    var n = e.querySelector(t);
                    return n && f(n)
                }
            }

            return e
        }();
        h.sortDataParsers = {
            parseInt: function (e) {
                return parseInt(e, 10)
            }, parseFloat: function (e) {
                return parseFloat(e)
            }
        }, h.prototype._sort = function () {
            var e = this.options.sortBy;
            if (e) {
                var t = [].concat.apply(e, this.sortHistory), n = c(t, this.options.sortAscending);
                this.filteredItems.sort(n), e !== this.sortHistory[0] && this.sortHistory.unshift(e)
            }
        }, h.prototype._mode = function () {
            var e = this.options.layoutMode, t = this.modes[e];
            if (!t)throw Error("No layout mode: " + e);
            return t.options = this.options[e], t
        }, h.prototype._resetLayout = function () {
            e.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, h.prototype._getItemLayoutPosition = function (e) {
            return this._mode()._getItemLayoutPosition(e)
        }, h.prototype._manageStamp = function (e) {
            this._mode()._manageStamp(e)
        }, h.prototype._getContainerSize = function () {
            return this._mode()._getContainerSize()
        }, h.prototype.needsResizeLayout = function () {
            return this._mode().needsResizeLayout()
        }, h.prototype.appended = function (e) {
            var t = this.addItems(e);
            if (t.length) {
                var n = this._filterRevealAdded(t);
                this.filteredItems = this.filteredItems.concat(n)
            }
        }, h.prototype.prepended = function (e) {
            var t = this._itemize(e);
            if (t.length) {
                var n = this.items.slice(0);
                this.items = t.concat(n), this._resetLayout(), this._manageStamps();
                var r = this._filterRevealAdded(t);
                this.layoutItems(n), this.filteredItems = r.concat(this.filteredItems)
            }
        }, h.prototype._filterRevealAdded = function (e) {
            var t = this._noTransition(function () {
                return this._filter(e)
            });
            return this.layoutItems(t, !0), this.reveal(t), e
        }, h.prototype.insert = function (e) {
            var t = this.addItems(e);
            if (t.length) {
                var n, r, i = t.length;
                for (n = 0; i > n; n++)r = t[n], this.element.appendChild(r.element);
                var s = this._filter(t);
                for (this._noTransition(function () {
                    this.hide(s)
                }), n = 0; i > n; n++)t[n].isLayoutInstant = !0;
                for (this.arrange(), n = 0; i > n; n++)delete t[n].isLayoutInstant;
                this.reveal(s)
            }
        };
        var v = h.prototype.remove;
        return h.prototype.remove = function (e) {
            e = r(e);
            var t = this.getItems(e);
            if (v.call(this, e), t && t.length)for (var n = 0, s = t.length; s > n; n++) {
                var o = t[n];
                i(o, this.filteredItems)
            }
        }, h.prototype._noTransition = function (e) {
            var t = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var n = e.call(this);
            return this.options.transitionDuration = t, n
        }, h
    }

    var o = e.jQuery, u = String.prototype.trim ? function (e) {
        return e.trim()
    } : function (e) {
        return e.replace(/^\s+|\s+$/g, "")
    }, a = document.documentElement, f = a.textContent ? function (e) {
        return e.textContent
    } : function (e) {
        return e.innerText
    }, l = Object.prototype.toString, c = Array.prototype.indexOf ? function (e, t) {
        return e.indexOf(t)
    } : function (e, t) {
        for (var n = 0, r = e.length; r > n; n++)if (e[n] === t)return n;
        return -1
    };
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], s) : e.Isotope = s(e.Outlayer, e.getSize, e.matchesSelector, e.Isotope.Item, e.Isotope.LayoutMode)
}(window);
(function (e) {
    "use strict";
    e.fn.fitVids = function (t) {
        var n = {customSelector: null, ignore: null};
        if (!document.getElementById("fit-vids-style")) {
            var r = document.head || document.getElementsByTagName("head")[0];
            var i = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";
            var s = document.createElement("div");
            s.innerHTML = '<p>x</p><style id="fit-vids-style">' + i + "</style>";
            r.appendChild(s.childNodes[1])
        }
        if (t) {
            e.extend(n, t)
        }
        return this.each(function () {
            var t = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            if (n.customSelector) {
                t.push(n.customSelector)
            }
            var r = ".fitvidsignore";
            if (n.ignore) {
                r = r + ", " + n.ignore
            }
            var i = e(this).find(t.join(","));
            i = i.not("object object");
            i = i.not(r);
            i.each(function () {
                var t = e(this);
                if (t.parents(r).length > 0) {
                    return
                }
                if (this.tagName.toLowerCase() === "embed" && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length) {
                    return
                }
                if (!t.css("height") && !t.css("width") && (isNaN(t.attr("height")) || isNaN(t.attr("width")))) {
                    t.attr("height", 9);
                    t.attr("width", 16)
                }
                var n = this.tagName.toLowerCase() === "object" || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height(),
                    i = !isNaN(parseInt(t.attr("width"), 10)) ? parseInt(t.attr("width"), 10) : t.width(), s = n / i;
                if (!t.attr("id")) {
                    var o = "fitvid" + Math.floor(Math.random() * 999999);
                    t.attr("id", o)
                }
                t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", s * 100 + "%");
                t.removeAttr("height").removeAttr("width")
            })
        })
    }
})(window.jQuery || window.Zepto);
(function () {
    var e = [].indexOf || function (e) {
            for (var t = 0, n = this.length; t < n; t++) {
                if (t in this && this[t] === e)return t
            }
            return -1
        }, t = [].slice;
    (function (e, t) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function (n) {
                return t(n, e)
            })
        } else {
            return t(e.jQuery, e)
        }
    })(window, function (n, r) {
        var i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b;
        i = n(r);
        c = e.call(r, "ontouchstart") >= 0;
        u = {horizontal: {}, vertical: {}};
        a = 1;
        l = {};
        f = "waypoints-context-id";
        d = "resize.waypoints";
        v = "scroll.waypoints";
        m = 1;
        g = "waypoints-waypoint-ids";
        y = "waypoint";
        b = "waypoints";
        s = function () {
            function e(e) {
                var t = this;
                this.$element = e;
                this.element = e[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + a++;
                this.oldScroll = {x: e.scrollLeft(), y: e.scrollTop()};
                this.waypoints = {horizontal: {}, vertical: {}};
                this.element[f] = this.id;
                l[this.id] = this;
                e.bind(v, function () {
                    var e;
                    if (!(t.didScroll || c)) {
                        t.didScroll = true;
                        e = function () {
                            t.doScroll();
                            return t.didScroll = false
                        };
                        return r.setTimeout(e, n[b].settings.scrollThrottle)
                    }
                });
                e.bind(d, function () {
                    var e;
                    if (!t.didResize) {
                        t.didResize = true;
                        e = function () {
                            n[b]("refresh");
                            return t.didResize = false
                        };
                        return r.setTimeout(e, n[b].settings.resizeThrottle)
                    }
                })
            }

            e.prototype.doScroll = function () {
                var e, t = this;
                e = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                if (c && (!e.vertical.oldScroll || !e.vertical.newScroll)) {
                    n[b]("refresh")
                }
                n.each(e, function (e, r) {
                    var i, s, o;
                    o = [];
                    s = r.newScroll > r.oldScroll;
                    i = s ? r.forward : r.backward;
                    n.each(t.waypoints[e], function (e, t) {
                        var n, i;
                        if (r.oldScroll < (n = t.offset) && n <= r.newScroll) {
                            return o.push(t)
                        } else if (r.newScroll < (i = t.offset) && i <= r.oldScroll) {
                            return o.push(t)
                        }
                    });
                    o.sort(function (e, t) {
                        return e.offset - t.offset
                    });
                    if (!s) {
                        o.reverse()
                    }
                    return n.each(o, function (e, t) {
                        if (t.options.continuous || e === o.length - 1) {
                            return t.trigger([i])
                        }
                    })
                });
                return this.oldScroll = {x: e.horizontal.newScroll, y: e.vertical.newScroll}
            };
            e.prototype.refresh = function () {
                var e, t, r, i = this;
                r = n.isWindow(this.element);
                t = this.$element.offset();
                this.doScroll();
                e = {
                    horizontal: {
                        contextOffset: r ? 0 : t.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: r ? 0 : t.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[b]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return n.each(e, function (e, t) {
                    return n.each(i.waypoints[e], function (e, r) {
                        var i, s, o, u, a;
                        i = r.options.offset;
                        o = r.offset;
                        s = n.isWindow(r.element) ? 0 : r.$element.offset()[t.offsetProp];
                        if (n.isFunction(i)) {
                            i = i.apply(r.element)
                        } else if (typeof i === "string") {
                            i = parseFloat(i);
                            if (r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil(t.contextDimension * i / 100)
                            }
                        }
                        r.offset = s - t.contextOffset + t.contextScroll - i;
                        if (r.options.onlyOnScroll && o != null || !r.enabled) {
                            return
                        }
                        if (o !== null && o < (u = t.oldScroll) && u <= r.offset) {
                            return r.trigger([t.backward])
                        } else if (o !== null && o > (a = t.oldScroll) && a >= r.offset) {
                            return r.trigger([t.forward])
                        } else if (o === null && t.oldScroll >= r.offset) {
                            return r.trigger([t.forward])
                        }
                    })
                })
            };
            e.prototype.checkEmpty = function () {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([d, v].join(" "));
                    return delete l[this.id]
                }
            };
            return e
        }();
        o = function () {
            function e(e, t, r) {
                var i, s;
                if (r.offset === "bottom-in-view") {
                    r.offset = function () {
                        var e;
                        e = n[b]("viewportHeight");
                        if (!n.isWindow(t.element)) {
                            e = t.$element.height()
                        }
                        return e - n(this).outerHeight()
                    }
                }
                this.$element = e;
                this.element = e[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = t;
                this.enabled = r.enabled;
                this.id = "waypoints" + m++;
                this.offset = null;
                this.options = r;
                t.waypoints[this.axis][this.id] = this;
                u[this.axis][this.id] = this;
                i = (s = this.element[g]) != null ? s : [];
                i.push(this.id);
                this.element[g] = i
            }

            e.prototype.trigger = function (e) {
                if (!this.enabled) {
                    return
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, e)
                }
                if (this.options.triggerOnce) {
                    return this.destroy()
                }
            };
            e.prototype.disable = function () {
                return this.enabled = false
            };
            e.prototype.enable = function () {
                this.context.refresh();
                return this.enabled = true
            };
            e.prototype.destroy = function () {
                delete u[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty()
            };
            e.getWaypointsByElement = function (e) {
                var t, r;
                r = e[g];
                if (!r) {
                    return []
                }
                t = n.extend({}, u.horizontal, u.vertical);
                return n.map(r, function (e) {
                    return t[e]
                })
            };
            return e
        }();
        p = {
            init: function (e, t) {
                var r;
                t = n.extend({}, n.fn[y].defaults, t);
                if ((r = t.handler) == null) {
                    t.handler = e
                }
                this.each(function () {
                    var e, r, i, u;
                    e = n(this);
                    i = (u = t.context) != null ? u : n.fn[y].defaults.context;
                    if (!n.isWindow(i)) {
                        i = e.closest(i)
                    }
                    i = n(i);
                    r = l[i[0][f]];
                    if (!r) {
                        r = new s(i)
                    }
                    return new o(e, r, t)
                });
                n[b]("refresh");
                return this
            }, disable: function () {
                return p._invoke.call(this, "disable")
            }, enable: function () {
                return p._invoke.call(this, "enable")
            }, destroy: function () {
                return p._invoke.call(this, "destroy")
            }, prev: function (e, t) {
                return p._traverse.call(this, e, t, function (e, t, n) {
                    if (t > 0) {
                        return e.push(n[t - 1])
                    }
                })
            }, next: function (e, t) {
                return p._traverse.call(this, e, t, function (e, t, n) {
                    if (t < n.length - 1) {
                        return e.push(n[t + 1])
                    }
                })
            }, _traverse: function (e, t, i) {
                var s, o;
                if (e == null) {
                    e = "vertical"
                }
                if (t == null) {
                    t = r
                }
                o = h.aggregate(t);
                s = [];
                this.each(function () {
                    var t;
                    t = n.inArray(this, o[e]);
                    return i(s, t, o[e])
                });
                return this.pushStack(s)
            }, _invoke: function (e) {
                this.each(function () {
                    var t;
                    t = o.getWaypointsByElement(this);
                    return n.each(t, function (t, n) {
                        n[e]();
                        return true
                    })
                });
                return this
            }
        };
        n.fn[y] = function () {
            var e, r;
            r = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [];
            if (p[r]) {
                return p[r].apply(this, e)
            } else if (n.isFunction(r)) {
                return p.init.apply(this, arguments)
            } else if (n.isPlainObject(r)) {
                return p.init.apply(this, [null, r])
            } else if (!r) {
                return n.error("jQuery Waypoints needs a callback function or handler option.")
            } else {
                return n.error("The " + r + " method does not exist in jQuery Waypoints.")
            }
        };
        n.fn[y].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        h = {
            refresh: function () {
                return n.each(l, function (e, t) {
                    return t.refresh()
                })
            }, viewportHeight: function () {
                var e;
                return (e = r.innerHeight) != null ? e : i.height()
            }, aggregate: function (e) {
                var t, r, i;
                t = u;
                if (e) {
                    t = (i = l[n(e)[0][f]]) != null ? i.waypoints : void 0
                }
                if (!t) {
                    return []
                }
                r = {horizontal: [], vertical: []};
                n.each(r, function (e, i) {
                    n.each(t[e], function (e, t) {
                        return i.push(t)
                    });
                    i.sort(function (e, t) {
                        return e.offset - t.offset
                    });
                    r[e] = n.map(i, function (e) {
                        return e.element
                    });
                    return r[e] = n.unique(r[e])
                });
                return r
            }, above: function (e) {
                if (e == null) {
                    e = r
                }
                return h._filter(e, "vertical", function (e, t) {
                    return t.offset <= e.oldScroll.y
                })
            }, below: function (e) {
                if (e == null) {
                    e = r
                }
                return h._filter(e, "vertical", function (e, t) {
                    return t.offset > e.oldScroll.y
                })
            }, left: function (e) {
                if (e == null) {
                    e = r
                }
                return h._filter(e, "horizontal", function (e, t) {
                    return t.offset <= e.oldScroll.x
                })
            }, right: function (e) {
                if (e == null) {
                    e = r
                }
                return h._filter(e, "horizontal", function (e, t) {
                    return t.offset > e.oldScroll.x
                })
            }, enable: function () {
                return h._invoke("enable")
            }, disable: function () {
                return h._invoke("disable")
            }, destroy: function () {
                return h._invoke("destroy")
            }, extendFn: function (e, t) {
                return p[e] = t
            }, _invoke: function (e) {
                var t;
                t = n.extend({}, u.vertical, u.horizontal);
                return n.each(t, function (t, n) {
                    n[e]();
                    return true
                })
            }, _filter: function (e, t, r) {
                var i, s;
                i = l[n(e)[0][f]];
                if (!i) {
                    return []
                }
                s = [];
                n.each(i.waypoints[t], function (e, t) {
                    if (r(i, t)) {
                        return s.push(t)
                    }
                });
                s.sort(function (e, t) {
                    return e.offset - t.offset
                });
                return n.map(s, function (e) {
                    return e.element
                })
            }
        };
        n[b] = function () {
            var e, n;
            n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [];
            if (h[n]) {
                return h[n].apply(null, e)
            } else {
                return h.aggregate.call(null, n)
            }
        };
        n[b].settings = {resizeThrottle: 100, scrollThrottle: 30};
        return i.on("load.waypoints", function () {
            return n[b]("refresh")
        })
    })
}).call(this);
(function (e) {
    e.fn.countTo = function (t) {
        t = e.extend({}, e.fn.countTo.defaults, t || {});
        var n = Math.ceil(t.speed / t.refreshInterval), r = (t.to - t.from) / n;
        return e(this).each(function () {
            function i() {
                u += r;
                o++;
                e(s).html(u.toFixed(t.decimals));
                if (typeof t.onUpdate == "function") {
                    t.onUpdate.call(s, u)
                }
                if (o >= n) {
                    clearInterval(a);
                    u = t.to;
                    if (typeof t.onComplete == "function") {
                        t.onComplete.call(s, u)
                    }
                }
            }

            var s = this, o = 0, u = t.from, a = setInterval(i, t.refreshInterval)
        })
    };
    e.fn.countTo.defaults = {
        from: 0,
        to: 100,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        onUpdate: null,
        onComplete: null
    }
})(jQuery);
!function () {
    function e() {
    }

    function t(e) {
        return s.retinaImageSuffix + e
    }

    function n(e, n) {
        if (this.path = e || "", "undefined" != typeof n && null !== n) this.at_2x_path = n, this.perform_check = !1; else {
            if (void 0 !== document.createElement) {
                var r = document.createElement("a");
                r.href = this.path, r.pathname = r.pathname.replace(o, t), this.at_2x_path = r.href
            } else {
                var i = this.path.split("?");
                i[0] = i[0].replace(o, t), this.at_2x_path = i.join("?")
            }
            this.perform_check = !0
        }
    }

    function r(e) {
        this.el = e, this.path = new n(this.el.getAttribute("src"), this.el.getAttribute("data-at2x"));
        var t = this;
        this.path.check_2x_variant(function (e) {
            e && t.swap()
        })
    }

    var i = "undefined" == typeof exports ? window : exports,
        s = {retinaImageSuffix: "", check_mime_type: !0, force_original_dimensions: !0};
    i.Retina = e, e.configure = function (e) {
        null === e && (e = {});
        for (var t in e)e.hasOwnProperty(t) && (s[t] = e[t])
    }, e.init = function (e) {
        null === e && (e = i);
        var t = e.onload || function () {
            };
        e.onload = function () {
            var e, n, i = document.getElementsByTagName("img"), s = [];
            for (e = 0; e < i.length; e += 1)n = i[e], n.getAttributeNode("data-no-retina") || s.push(new r(n));
            t()
        }
    }, e.isRetina = function () {
        var e = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
        return i.devicePixelRatio > 1 ? !0 : i.matchMedia && i.matchMedia(e).matches ? !0 : !1
    };
    var o = /\.\w+$/;
    i.RetinaImagePath = n, n.confirmed_paths = [], n.prototype.is_external = function () {
        return !(!this.path.match(/^https?\:/i) || this.path.match("//" + document.domain))
    }, n.prototype.check_2x_variant = function (e) {
        var t, r = this;
        return this.is_external() ? e(!1) : this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path ? this.at_2x_path in n.confirmed_paths ? e(!0) : (t = new XMLHttpRequest, t.open("HEAD", this.at_2x_path), t.onreadystatechange = function () {
            if (4 !== t.readyState)return e(!1);
            if (t.status >= 200 && t.status <= 399) {
                if (s.check_mime_type) {
                    var i = t.getResponseHeader("Content-Type");
                    if (null === i || !i.match(/^image/i))return e(!1)
                }
                return n.confirmed_paths.push(r.at_2x_path), e(!0)
            }
            return e(!1)
        }, t.send(), void 0) : e(!0)
    }, i.RetinaImage = r, r.prototype.swap = function (e) {
        function t() {
            n.el.complete ? (s.force_original_dimensions && (n.el.setAttribute("width", n.el.offsetWidth), n.el.setAttribute("height", n.el.offsetHeight)), n.el.setAttribute("src", e)) : setTimeout(t, 5)
        }

        "undefined" == typeof e && (e = this.path.at_2x_path);
        var n = this;
        t()
    }, e.isRetina() && e.init(i)
}();
(function (e) {
    "use strict";
    function t(e) {
        this.el = e;
        this.el.style.strokeDasharray = this.el.style.strokeDashoffset = this.el.getTotalLength()
    }

    t.prototype._draw = function (e) {
        this.el.style.strokeDashoffset = this.el.getTotalLength() * (1 - e)
    };
    t.prototype.setProgress = function (e, t) {
        this._draw(e);
        if (t && typeof t === "function") {
            setTimeout(t, 200)
        }
    };
    t.prototype.setProgressFn = function (e) {
        if (typeof e === "function") {
            e(this)
        }
    };
    e.PathLoader = t
})(window);
(function (e) {
    "use strict";
    function t(e, t) {
        for (var n in t) {
            if (t.hasOwnProperty(n)) {
                e[n] = t[n]
            }
        }
        return e
    }

    function n(e, n) {
        this.el = e;
        this.options = t({}, this.options);
        t(this.options, n);
        this._init()
    }

    n.prototype.options = {start: 0};
    n.prototype._init = function () {
        this.tabs = [].slice.call(this.el.querySelectorAll("nav > ul > li"));
        this.items = [].slice.call(this.el.querySelectorAll(".content-wrap > section"));
        this.current = -1;
        this._show();
        this._initEvents()
    };
    n.prototype._initEvents = function () {
        var e = this;
        this.tabs.forEach(function (t, n) {
            t.addEventListener("click", function (t) {
                t.preventDefault();
                e._show(n)
            })
        })
    };
    n.prototype._show = function (e) {
        if (this.current >= 0) {
            this.tabs[this.current].className = this.items[this.current].className = ""
        }
        this.current = e != undefined ? e : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
        this.tabs[this.current].className = "tab-current";
        this.items[this.current].className = "content-current"
    };
    e.CBPFWTabs = n
})(window);
(function (e) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera)