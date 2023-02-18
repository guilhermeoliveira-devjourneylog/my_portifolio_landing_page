"use strict";
exports.id = 239;
exports.ids = [239];
exports.modules = {

/***/ 2115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addParlx = ()=>{
    window.addEventListener("scroll", ()=>{
        var scrolled = window.pageYOffset;
        if (document.querySelector(".fixed-slider .capt .parlx")) {
            document.querySelector(".fixed-slider .capt .parlx").style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
            document.querySelector(".fixed-slider .capt .parlx").style.opacity = 1 - scrolled / 600;
        }
        if (document.querySelector(".fixed-slider .caption")) {
            document.querySelector(".fixed-slider .caption").style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
            document.querySelector(".fixed-slider .caption").style.opacity = 1 - scrolled / 600;
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addParlx);


/***/ }),

/***/ 9239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _components_Split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8636);
/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2532);
/* harmony import */ var _common_addParlx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2115);
/* harmony import */ var _common_initIsotope__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8063);


/* eslint-disable @next/next/no-img-element */ 





const Demos = ()=>{
    const fixedHeader = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);
    const MainContent = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);
    const [pageLoaded, setPageLoaded] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        setPageLoaded(true);
        if (pageLoaded) {
            window.addEventListener("load", ()=>{
                setTimeout(()=>{
                    (0,_common_initIsotope__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
                }, 1000);
            });
            setTimeout(()=>{
                (0,_common_initIsotope__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
            }, 1000);
        }
    }, [
        pageLoaded
    ]);
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        setInterval(()=>{
            if (fixedHeader.current) {
                var slidHeight = fixedHeader.current.offsetHeight;
            }
            if (MainContent.current) {
                MainContent.current.style.marginTop = slidHeight + "px";
            }
        }, 1000);
    }, [
        fixedHeader,
        MainContent
    ]);
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        (0,_common_addParlx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
        document.querySelector("body").style.backgroundColor = "#181b21";
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "6433e68bfac1cfec",
                children: ".masonery.jsx-6433e68bfac1cfec .item-img.jsx-6433e68bfac1cfec {position:relative;\noverflow:hidden}\n.masonery.jsx-6433e68bfac1cfec .gallery.jsx-6433e68bfac1cfec .items.jsx-6433e68bfac1cfec {padding:0 40px;\nmargin-top:80px;\ntext-align:center}\n.masonery.jsx-6433e68bfac1cfec .gallery.jsx-6433e68bfac1cfec .items.jsx-6433e68bfac1cfec h6.jsx-6433e68bfac1cfec {margin-top:25px;\nfont-size:17px;\nfont-weight:400;\nfont-family:\"Barlow Condensed\", sans-serif;\ntext-align:center;\ntext-transform:uppercase;\nletter-spacing:3px}\n.masonery.jsx-6433e68bfac1cfec .gallery.jsx-6433e68bfac1cfec .items.jsx-6433e68bfac1cfec .item-img.jsx-6433e68bfac1cfec:hover img.jsx-6433e68bfac1cfec {}\n.masonery.jsx-6433e68bfac1cfec .item-img.jsx-6433e68bfac1cfec:hover .tlinks.jsx-6433e68bfac1cfec {opacity:1}\n.masonery.jsx-6433e68bfac1cfec .item-img.jsx-6433e68bfac1cfec .tlinks.jsx-6433e68bfac1cfec {position:absolute;\ntop:0;\nleft:0;\nwidth:100%;\nheight:100%;\n-webkit-transition:all 0.4s;\ntransition:all 0.4s;\nbackground:rgba(0, 0, 0, 0.5);\nopacity:0;\npadding:0 40px}\n.masonery.jsx-6433e68bfac1cfec .item-img.jsx-6433e68bfac1cfec .tag.jsx-6433e68bfac1cfec {position:absolute;\ntop:15px;\nright:15px;\npadding:8px 20px;\nborder-radius:5px;\nbackground:#ff0036;\ncolor:#fff;\nfont-size:13px}\n.masonery.jsx-6433e68bfac1cfec .item-img.jsx-6433e68bfac1cfec .tlinks.jsx-6433e68bfac1cfec a.jsx-6433e68bfac1cfec {padding:14px 20px;\nborder-radius:5px;\nbackground:#32363e;\ncolor:#fff;\nfont-size:14px;\nfont-weight:500;\nmargin:5px 0}\n.masonery.jsx-6433e68bfac1cfec .item-img.jsx-6433e68bfac1cfec .tlinks.jsx-6433e68bfac1cfec a.jsx-6433e68bfac1cfec:last-of-type {background:#75dab4;\ncolor:#181b21;\nmargin-left:5px}\n.masonery.jsx-6433e68bfac1cfec .item-img.jsx-6433e68bfac1cfec .new.jsx-6433e68bfac1cfec {padding:10px 30px;\nbackground:#75dab4;\nposition:absolute;\ntop:0;\nleft:-60px;\nwidth:200px;\n-webkit-transform:rotate(-30deg);\n-moz-transform:rotate(-30deg);\n-ms-transform:rotate(-30deg);\ntransform:rotate(-30deg);\nfont-size:13px}"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                ref: fixedHeader,
                style: {
                    backgroundImage: "url(/img/demos/bg.png)"
                },
                "data-overlay-dark": "4",
                className: "jsx-6433e68bfac1cfec" + " " + "works-header fixed-slider hfixd valign bg-img",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "jsx-6433e68bfac1cfec" + " " + "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-6433e68bfac1cfec" + " " + "row justify-content-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-6433e68bfac1cfec" + " " + "col-lg-9 col-md-11 static",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-6433e68bfac1cfec" + " " + "capt mt-50",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-6433e68bfac1cfec" + " " + "parlx",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "custom-font",
                                                children: "Creative Showcase Portfolio"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-6433e68bfac1cfec",
                                                children: "Creative way to showcase your works at their absolute best."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-6433e68bfac1cfec" + " " + "bactxt custom-font valign",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                color: "transparent"
                                            },
                                            className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                            children: "avo"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: MainContent,
                className: "jsx-6433e68bfac1cfec" + " " + "main-content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-6433e68bfac1cfec" + " " + "masonery section-padding sub-bg",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-6433e68bfac1cfec" + " " + "container-fluid",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-6433e68bfac1cfec" + " " + "sec-head custom-font text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Split__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                "data-splitting": true,
                                                className: "jsx-6433e68bfac1cfec" + " " + "wow words chars splitting",
                                                children: "Home Pages."
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-6433e68bfac1cfec" + " " + "tbg",
                                            children: "Home Pages"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-6433e68bfac1cfec" + " " + "row",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-6433e68bfac1cfec" + " " + "gallery full-width",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/home/home5-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/home/home5-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/5.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "Freelancer"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/about/about-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/about/about-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/6.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "About Us"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/contact/contact-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/contact/contact-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/7.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "Contact Us"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        style: {
                            background: "#181b21"
                        },
                        className: "jsx-6433e68bfac1cfec" + " " + "masonery section-padding pb-70",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-6433e68bfac1cfec" + " " + "container-fluid",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-6433e68bfac1cfec" + " " + "sec-head custom-font text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Split__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                "data-splitting": true,
                                                className: "jsx-6433e68bfac1cfec" + " " + "wow words chars splitting",
                                                children: "Portfolio."
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-6433e68bfac1cfec" + " " + "tbg",
                                            children: "Portfolio Showcase"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-6433e68bfac1cfec" + " " + "row",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-6433e68bfac1cfec" + " " + "gallery full-width",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    "data-wow-delay": ".4s",
                                                    className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                        href: "/project-details2/project-details2-dark",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            target: "_blank",
                                                                            className: "jsx-6433e68bfac1cfec",
                                                                            children: "Dark Version"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                        href: "/project-details2/project-details2-light",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            target: "_blank",
                                                                            className: "jsx-6433e68bfac1cfec",
                                                                            children: "Light Version"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/img/demos/16.png",
                                                            alt: "image",
                                                            className: "jsx-6433e68bfac1cfec"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                        className: "jsx-6433e68bfac1cfec",
                                                        children: "Project Details"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                        className: "jsx-6433e68bfac1cfec" + " " + "footer-half sub-bg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-6433e68bfac1cfec" + " " + "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-6433e68bfac1cfec" + " " + "copyrights text-center mt-0",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "jsx-6433e68bfac1cfec",
                                    children: [
                                        "\xa9 2023. Made with passion by ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#0",
                                            className: "jsx-6433e68bfac1cfec",
                                            children: "Guilherme Oliveira"
                                        }),
                                        "."
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Demos);


/***/ })

};
;