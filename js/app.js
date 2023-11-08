// jQuery('.page-contact .btn_submit').remove()
// jQuery('.page-contact .formulario-contato').append('<button  name="imagem" id="imagem">Enviar</button>')

jQuery(document).ready(function () {

    //ESCONDER ITENS NO SCROLL MOBLIE
    let body = document.querySelector('body');
    let currentTop = 0;
    let oldTop = 0;
    let headerTop = document.querySelector('#header').offsetHeight;

    body.setAttribute('data-scrolling', false);
    body.setAttribute('data-scrolling-mode', 'none');

    window.addEventListener('scroll', () => {
        currentTop = window.pageYOffset;

        if (currentTop == 0) body.setAttribute('data-scrolling', false);
        else body.setAttribute('data-scrolling', true);

        if (currentTop > headerTop) {
            if (oldTop > currentTop) {
                body.setAttribute('data-scrolling-mode', 'up');
            } else if (oldTop < currentTop) {
                body.setAttribute('data-scrolling-mode', 'down');
            } else {
                body.setAttribute('data-scrolling-mode', 'none');
            }
            oldTop = currentTop;
        } else body.setAttribute('data-scrolling-mode', 'none');
    });

});

if (jQuery(".page-product").length > 0) {
    // (function (a) { a.isScrollToFixed = function (b) { return !!a(b).data("ScrollToFixed") }; a.ScrollToFixed = function (d, i) { var m = this; m.$el = a(d); m.el = d; m.$el.data("ScrollToFixed", m); var c = false; var H = m.$el; var I; var F; var k; var e; var z; var E = 0; var r = 0; var j = -1; var f = -1; var u = null; var A; var g; function v() { H.trigger("preUnfixed.ScrollToFixed"); l(); H.trigger("unfixed.ScrollToFixed"); f = -1; E = H.offset().top; r = H.offset().left; if (m.options.offsets) { r += (H.offset().left - H.position().left) } if (j == -1) { j = r } I = H.css("position"); c = true; if (m.options.bottom != -1) { H.trigger("preFixed.ScrollToFixed"); x(); H.trigger("fixed.ScrollToFixed") } } function o() { var J = m.options.limit; if (!J) { return 0 } if (typeof (J) === "function") { return J.apply(H) } return J } function q() { return I === "fixed" } function y() { return I === "absolute" } function h() { return !(q() || y()) } function x() { if (!q()) { var J = H[0].getBoundingClientRect(); u.css({ display: H.css("display"), width: J.width, height: J.height, "float": H.css("float") }); cssOptions = { "z-index": m.options.zIndex, position: "fixed", top: m.options.bottom == -1 ? t() : "", bottom: m.options.bottom == -1 ? "" : m.options.bottom, "margin-left": "0px" }; if (!m.options.dontSetWidth) { cssOptions.width = H.css("width") } H.css(cssOptions); H.addClass(m.options.baseClassName); if (m.options.className) { H.addClass(m.options.className) } I = "fixed" } } function b() { var K = o(); var J = r; if (m.options.removeOffsets) { J = ""; K = K - E } cssOptions = { position: "absolute", top: K, left: J, "margin-left": "0px", bottom: "" }; if (!m.options.dontSetWidth) { cssOptions.width = H.css("width") } H.css(cssOptions); I = "absolute" } function l() { if (!h()) { f = -1; u.css("display", "none"); H.css({ "z-index": z, width: "", position: F, left: "", top: e, "margin-left": "" }); H.removeClass("scroll-to-fixed-fixed"); if (m.options.className) { H.removeClass(m.options.className) } I = null } } function w(J) { if (J != f) { H.css("left", r - J); f = J } } function t() { var J = m.options.marginTop; if (!J) { return 0 } if (typeof (J) === "function") { return J.apply(H) } return J } function B() { if (!a.isScrollToFixed(H) || H.is(":hidden")) { return } var M = c; var L = h(); if (!c) { v() } else { if (h()) { E = H.offset().top; r = H.offset().left } } var J = a(window).scrollLeft(); var N = a(window).scrollTop(); var K = o(); if (m.options.minWidth && a(window).width() < m.options.minWidth) { if (!h() || !M) { p(); H.trigger("preUnfixed.ScrollToFixed"); l(); H.trigger("unfixed.ScrollToFixed") } } else { if (m.options.maxWidth && a(window).width() > m.options.maxWidth) { if (!h() || !M) { p(); H.trigger("preUnfixed.ScrollToFixed"); l(); H.trigger("unfixed.ScrollToFixed") } } else { if (m.options.bottom == -1) { if (K > 0 && N >= K - t()) { if (!L && (!y() || !M)) { p(); H.trigger("preAbsolute.ScrollToFixed"); b(); H.trigger("unfixed.ScrollToFixed") } } else { if (N >= E - t()) { if (!q() || !M) { p(); H.trigger("preFixed.ScrollToFixed"); x(); f = -1; H.trigger("fixed.ScrollToFixed") } w(J) } else { if (!h() || !M) { p(); H.trigger("preUnfixed.ScrollToFixed"); l(); H.trigger("unfixed.ScrollToFixed") } } } } else { if (K > 0) { if (N + a(window).height() - H.outerHeight(true) >= K - (t() || -n())) { if (q()) { p(); H.trigger("preUnfixed.ScrollToFixed"); if (F === "absolute") { b() } else { l() } H.trigger("unfixed.ScrollToFixed") } } else { if (!q()) { p(); H.trigger("preFixed.ScrollToFixed"); x() } w(J); H.trigger("fixed.ScrollToFixed") } } else { w(J) } } } } } function n() { if (!m.options.bottom) { return 0 } return m.options.bottom } function p() { var J = H.css("position"); if (J == "absolute") { H.trigger("postAbsolute.ScrollToFixed") } else { if (J == "fixed") { H.trigger("postFixed.ScrollToFixed") } else { H.trigger("postUnfixed.ScrollToFixed") } } } var D = function (J) { if (H.is(":visible")) { c = false; B() } else { l() } }; var G = function (J) { (!!window.requestAnimationFrame) ? requestAnimationFrame(B) : B() }; var C = function () { var K = document.body; if (document.createElement && K && K.appendChild && K.removeChild) { var M = document.createElement("div"); if (!M.getBoundingClientRect) { return null } M.innerHTML = "x"; M.style.cssText = "position:fixed;top:100px;"; K.appendChild(M); var N = K.style.height, O = K.scrollTop; K.style.height = "3000px"; K.scrollTop = 500; var J = M.getBoundingClientRect().top; K.style.height = N; var L = (J === 100); K.removeChild(M); K.scrollTop = O; return L } return null }; var s = function (J) { J = J || window.event; if (J.preventDefault) { J.preventDefault() } J.returnValue = false }; m.init = function () { m.options = a.extend({}, a.ScrollToFixed.defaultOptions, i); z = H.css("z-index"); m.$el.css("z-index", m.options.zIndex); u = a("<div />"); I = H.css("position"); F = H.css("position"); k = H.css("float"); e = H.css("top"); if (h()) { m.$el.after(u) } a(window).bind("resize.ScrollToFixed", D); a(window).bind("scroll.ScrollToFixed", G); if ("ontouchmove" in window) { a(window).bind("touchmove.ScrollToFixed", B) } if (m.options.preFixed) { H.bind("preFixed.ScrollToFixed", m.options.preFixed) } if (m.options.postFixed) { H.bind("postFixed.ScrollToFixed", m.options.postFixed) } if (m.options.preUnfixed) { H.bind("preUnfixed.ScrollToFixed", m.options.preUnfixed) } if (m.options.postUnfixed) { H.bind("postUnfixed.ScrollToFixed", m.options.postUnfixed) } if (m.options.preAbsolute) { H.bind("preAbsolute.ScrollToFixed", m.options.preAbsolute) } if (m.options.postAbsolute) { H.bind("postAbsolute.ScrollToFixed", m.options.postAbsolute) } if (m.options.fixed) { H.bind("fixed.ScrollToFixed", m.options.fixed) } if (m.options.unfixed) { H.bind("unfixed.ScrollToFixed", m.options.unfixed) } if (m.options.spacerClass) { u.addClass(m.options.spacerClass) } H.bind("resize.ScrollToFixed", function () { u.height(H.height()) }); H.bind("scroll.ScrollToFixed", function () { H.trigger("preUnfixed.ScrollToFixed"); l(); H.trigger("unfixed.ScrollToFixed"); B() }); H.bind("detach.ScrollToFixed", function (J) { s(J); H.trigger("preUnfixed.ScrollToFixed"); l(); H.trigger("unfixed.ScrollToFixed"); a(window).unbind("resize.ScrollToFixed", D); a(window).unbind("scroll.ScrollToFixed", G); H.unbind(".ScrollToFixed"); u.remove(); m.$el.removeData("ScrollToFixed") }); D() }; m.init() }; a.ScrollToFixed.defaultOptions = { marginTop: 0, limit: 0, bottom: -1, zIndex: 1000, baseClassName: "scroll-to-fixed-fixed" }; a.fn.scrollToFixed = function (b) { return this.each(function () { (new a.ScrollToFixed(this, b)) }) } })(jQuery);
    // scroll
    (function ($) {
        // Atualizar o carrinho sozinho na pag de produto
        jQuery(document).ready(function ($) {

            $(document).ajaxComplete(function (event, xhr, settings) {
                if (settings.url.indexOf("cart_preview") !== -1) {
                    var UPDATECART = new CustomEvent('UPDATECART');
                    window.dispatchEvent(UPDATECART);
                }
            });
        })
        jQuery("#foto_p").removeAttr("data-target")
    })(jQuery);

    jQuery(document).ajaxComplete(function (event, xhr, settings) {

        jQuery('#plus').remove();
        jQuery('#minus').remove();

        if (jQuery('.page-product').length > 0) {

            jQuery('#quant').before('<button type="button" id="minus" class="product__quantity__button" > - </button> ');
            jQuery('#quant').after('<button type="button" id="plus"  class="product__quantity__button" > + </button> ');
            
            jQuery('#precoDe').text(jQuery('#precoDe').text().replace('De', ''))
            
            if(jQuery('#foto_p').find('.flags__ul').length == 0){
                jQuery('.page-product__image .flags__ul').clone().appendTo('#foto_p')
            }
        }
    });

    jQuery(document).on('click', '#plus', function () {
        var qtd = jQuery('#quant');
        var val = parseInt(qtd.val());

        if (val) {
            qtd.val(val + 1);
        }
    });

    jQuery(document).on('click', '#minus', function () {
        var qtd = jQuery('#quant');
        var val = parseInt(qtd.val());

        if ((val - 1) > 0) {
            qtd.val(--val);
        }
    });


    if (jQuery('.fotosCompreJunto').length > 0) {
        var aux;
        jQuery.each(jQuery('.fotosCompreJunto .produto img'), function () {
            aux = jQuery(this).attr('src');
            aux = aux.replace('/90_', '/180_');
            jQuery(this).attr('src', aux);
        });
    }

    jQuery('.related__list').slick({
        mobileFirst: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        centerPadding: '0px',
        arrows: true,
        dots: false,
        prevArrow: `<button aria-label="prev" type="button" class="slick-prev"><svg width="15px" height="30px" viewBox="0 0 15 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>484040 copy 3</title><desc>Created with Sketch.</desc><g id="Home" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="home-geniosshop" transform="translate(-315.000000, -1060.000000)" fill="#C6C6C6" fill-rule="nonzero"><g id="meio" transform="translate(315.000000, 210.000000)"><g id="vitrine-1" transform="translate(0.000000, 597.000000)"><g id="Group-29" transform="translate(0.000000, 74.000000)"><g id="484040-copy-3" transform="translate(7.500000, 194.000000) scale(-1, 1) translate(-7.500000, -194.000000) translate(0.000000, 179.000000)"><path d="M14.7693385,14.5700195 L1.07282101,0.250914397 C0.896498054,0.0672957198 0.62655642,0.00770428016 0.390642023,0.103774319 C0.154727626,0.198035019 0.000291828794,0.427237354 0.000291828794,0.681361868 L0.000291828794,3.1716537 C0.000291828794,3.33093385 0.0611089494,3.48414397 0.170544747,3.59964981 L10.9718872,15.0004086 L0.170603113,26.4012257 C0.0611673152,26.5167315 0.000350194553,26.6699416 0.000350194553,26.8292218 L0.000350194553,29.3195136 C0.000350194553,29.5736381 0.154785992,29.8028405 0.390700389,29.8971012 C0.466108949,29.9275097 0.545136187,29.9421012 0.622937743,29.9421012 C0.789513619,29.9421012 0.952470817,29.875214 1.07282101,29.7499611 L14.7693385,15.4309144 C14.9991829,15.1901556 14.9991829,14.8107782 14.7693385,14.5700195 Z" id="Path"></path></g></g></g></g></g></g></svg></button>`,
        nextArrow: `<button aria-label="next" type="button" class="slick-next"><svg width="15px" height="30px" viewBox="0 0 15 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Path</title><desc>Created with Sketch.</desc><g id="Home" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="home-geniosshop" transform="translate(-1590.000000, -1060.000000)" fill="#C6C6C6" fill-rule="nonzero"><g id="meio" transform="translate(315.000000, 210.000000)"><g id="vitrine-1" transform="translate(0.000000, 597.000000)"><g id="Group-29" transform="translate(0.000000, 74.000000)"><g id="484040-copy-2" transform="translate(1275.000000, 179.000000)"><path d="M14.7693385,14.5700195 L1.07282101,0.250914397 C0.896498054,0.0672957198 0.62655642,0.00770428016 0.390642023,0.103774319 C0.154727626,0.198035019 0.000291828794,0.427237354 0.000291828794,0.681361868 L0.000291828794,3.1716537 C0.000291828794,3.33093385 0.0611089494,3.48414397 0.170544747,3.59964981 L10.9718872,15.0004086 L0.170603113,26.4012257 C0.0611673152,26.5167315 0.000350194553,26.6699416 0.000350194553,26.8292218 L0.000350194553,29.3195136 C0.000350194553,29.5736381 0.154785992,29.8028405 0.390700389,29.8971012 C0.466108949,29.9275097 0.545136187,29.9421012 0.622937743,29.9421012 C0.789513619,29.9421012 0.952470817,29.875214 1.07282101,29.7499611 L14.7693385,15.4309144 C14.9991829,15.1901556 14.9991829,14.8107782 14.7693385,14.5700195 Z" id="Path"></path></g></g></g></g></g></g></svg></button>`,
        responsive: [{
            breakpoint: 424,
            settings: {
                centerPadding: '0px',
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                centerPadding: '00px',
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                centerPadding: '00px',
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 991,
            settings: {
                centerMode: false,
                dots: false,
                centerPadding: '0px',
                arrows: true,
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        }
        ]
    });


    const prodID = jQuery('.more-payments-modal').attr('id');
    jQuery('.more-payments-content').load('/mvc/store/product/payment_options', { loja: 1016754, IdProd: prodID, });

    setTimeout(function () {
        jQuery('.more-payments-content > li, .more-payments-content > li > a, .more-payments-content > li > table').removeAttr('id');
        if (!jQuery('.more-payments-content .Forma1 li').length) {
            jQuery('.more-payments-content').remove();
        } else {
            jQuery('.more-payments-content').show();
        }
    }, 5000);

    jQuery(".more-payments-trigger").on('click', function () {
        jQuery('.more-payments').toggleClass('open-payment');
    });

}


jQuery(document).on('thumbs:start', function () {
    var arrowPrevious = '<button type="button"  aria-label="Item anterior" class="slick-prev slick-arrow"><svg width="15px" height="28px" viewBox="0 0 15 28"><path d="M1.69082126,27.7103448 C1.49758454,27.9034483 1.25603865,28 0.990338164,28 C0.724637681,28 0.483091787,27.9034483 0.289855072,27.7103448 C-0.0966183575,27.3241379 -0.0966183575,26.6965517 0.289855072,26.3103448 L12.6086957,14 L0.289855072,1.68965517 C-0.0966183575,1.30344828 -0.0966183575,0.675862069 0.289855072,0.289655172 C0.676328502,-0.0965517241 1.30434783,-0.0965517241 1.69082126,0.289655172 L14.7101449,13.3 C15.0966184,13.6862069 15.0966184,14.3137931 14.7101449,14.7 L1.69082126,27.7103448 L1.69082126,27.7103448 Z" id="Path" transform="translate(7.500000, 14.000000) rotate(-180.000000) translate(-7.500000, -14.000000) "></path></svg></button>';
    var arrowNext = '<button type="button" aria-label="Próximo item" class="slick-next slick-arrow"><svg width="15px" height="28px" viewBox="0 0 15 28"><path d="M1.69082126,27.7103448 C1.49758454,27.9034483 1.25603865,28 0.990338164,28 C0.724637681,28 0.483091787,27.9034483 0.289855072,27.7103448 C-0.0966183575,27.3241379 -0.0966183575,26.6965517 0.289855072,26.3103448 L12.6086957,14 L0.289855072,1.68965517 C-0.0966183575,1.30344828 -0.0966183575,0.675862069 0.289855072,0.289655172 C0.676328502,-0.0965517241 1.30434783,-0.0965517241 1.69082126,0.289655172 L14.7101449,13.3 C15.0966184,13.6862069 15.0966184,14.3137931 14.7101449,14.7 L1.69082126,27.7103448 L1.69082126,27.7103448 Z" id="Path"></path></svg></button>';
    jQuery('.thumbs__list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        dots: false,
        prevArrow: arrowPrevious,
        nextArrow: arrowNext,
        verticalSwiping: true,

        responsive: [
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    vertical: false,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: false
                }
            }
        ]

    })
})






jQuery(document).ready(function () {
  if (jQuery(".page-search").length) {
    jQuery(".page-search #vitrine-catalogo fieldset [type=image]")
      .after(
        '<button type="submit" class="button-submit" name="submit">Buscar</button>'
      )
      .remove();
  }
});


if (jQuery('.page-product').length > 0) {
    if (jQuery('.fotosCompreJunto').length > 0) {
        var aux;
        jQuery.each(jQuery('.fotosCompreJunto .produto img'), function () {
            aux = jQuery(this).attr('src');
            aux = aux.replace('/90_', '/180_');
            jQuery(this).attr('src', aux);
        });
    }

    jQuery('.varTit').each(function(){
        jQuery(this).text( jQuery(this).text().replace(':', '') );
    })

    jQuery('.fotosCompreJunto>div').unwrap()
    
    jQuery('.precoCompreJunto').before( "<div class='equal color'>=</div>" );

    jQuery('[id*="form_compre_junto"]').append(jQuery(".comprejunto_botao"))

    jQuery('.compreJunto').show()
}



jQuery(document).ready(function () {
    //Escurecer a página nos hovers no desktop:
    if (jQuery(window).width() > 991) {

        jQuery('.menu__item--nv1').on('mouseover', function () {
            jQuery('.fade-on').addClass('fade-open');
        });

        jQuery('.menu__item--nv1').on('mouseout', function () {
            jQuery('.fade-on').removeClass('fade-open');
        });
    }
})

jQuery('.button--menu').click(function() {
    jQuery('body').addClass('menu__open')
});

jQuery('.button__close--navigation').click(function() {
    jQuery('body').removeClass('menu__open')
});


 
nArrow = `<button aria-label="next" type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="29" viewBox="0 0 16 29"><defs><clipPath id="arrowshowcase1"><path id="Caminho_338" data-name="Caminho 338" d="M0-14.5a2.06,2.06,0,0,1,.575-1.436L12.644-28.405a1.921,1.921,0,0,1,2.78,0,2.079,2.079,0,0,1,0,2.872L4.745-14.5,15.424-3.467a2.079,2.079,0,0,1,0,2.872,1.921,1.921,0,0,1-2.78,0L.575-13.064A2.06,2.06,0,0,1,0-14.5Z"/></clipPath><clipPath id="arrowshowcase2"><path id="Caminho_337" data-name="Caminho 337" d="M-315,5279H1605V-1153H-315Z"/></clipPath></defs><g id="Grupo_387" data-name="Grupo 387" transform="translate(0 29)"><g id="Grupo_386" data-name="Grupo 386" clip-path="url(#arrowshowcase1)"><g id="Grupo_385" data-name="Grupo 385" clip-path="url(#arrowshowcase2)"><path id="Caminho_336" data-name="Caminho 336" d="M21-34V5H-5V-34Z"/></g></g></g></svg></button>`;
pArrow = `<button aria-label="prev" type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="29" viewBox="0 0 16 29"><defs><clipPath id="arrowshowcase1"><path id="Caminho_338" data-name="Caminho 338" d="M0-14.5a2.06,2.06,0,0,1,.575-1.436L12.644-28.405a1.921,1.921,0,0,1,2.78,0,2.079,2.079,0,0,1,0,2.872L4.745-14.5,15.424-3.467a2.079,2.079,0,0,1,0,2.872,1.921,1.921,0,0,1-2.78,0L.575-13.064A2.06,2.06,0,0,1,0-14.5Z"/></clipPath><clipPath id="arrowshowcase2"><path id="Caminho_337" data-name="Caminho 337" d="M-315,5279H1605V-1153H-315Z"/></clipPath></defs><g id="Grupo_387" data-name="Grupo 387" transform="translate(0 29)"><g id="Grupo_386" data-name="Grupo 386" clip-path="url(#arrowshowcase1)"><g id="Grupo_385" data-name="Grupo 385" clip-path="url(#arrowshowcase2)"><path id="Caminho_336" data-name="Caminho 336" d="M21-34V5H-5V-34Z"/></g></g></g></svg></button>`;

if ($('.showcase__list[data-carousel=on]')) {
    $('.showcase__list[data-carousel=on]').each(function () {
        $(this).find('.showcase__item--empty').remove();
        $(this).not('.slick-initialized').slick({
            mobileFirst: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: pArrow,
            nextArrow: nArrow,
            infinite: true,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
            ]
        });
    });

}

jQuery(document).ready(function ($) {
if ($('.products-related .showcase__list')) {
    $('.products-related .showcase__list').each(function () {
        $(this).not('.slick-initialized').slick({
            mobileFirst: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: pArrow,
            nextArrow: nArrow,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
            ]
        });
    });
}
})

// setTimeout (
//     ()=> {
//       jQuery(document).ready(
//           () => {
//               jQuery(".tray__counter__floating").appendTo(jQuery(".showcase__header")[0]);
//           }
//       )
//   },
// 1000)


nArrow = `<button aria-label="next" type="button" class="slick-next"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="37.333" viewBox="0 0 20 37.333"><defs><clipPath id="clip-path"><path id="Path_310" data-name="Path 310" d="M17.746-37.614A1.29,1.29,0,0,1,18.68-38a1.29,1.29,0,0,1,.934.386,1.32,1.32,0,0,1,0,1.867L3.188-19.333,19.614-2.92a1.32,1.32,0,0,1,0,1.867,1.322,1.322,0,0,1-1.868,0L.386-18.4a1.32,1.32,0,0,1,0-1.867L17.746-37.614Z" fill="none" clip-rule="evenodd"/></clipPath><clipPath id="clip-path-2"><path id="Path_309" data-name="Path 309" d="M-396,5739H1605V-481H-396Z" fill="none"/></clipPath></defs><g id="Group_337" data-name="Group 337" transform="translate(0 38)" clip-path="url(#clip-path)"><g id="Group_336" data-name="Group 336" clip-path="url(#clip-path-2)"><path id="Path_308" data-name="Path 308" d="M25,4.333H-5V-43H25Z" fill="#f1f1f1"/></g></g></svg> </button>`;
pArrow = `<button aria-label="prev" type="button" class="slick-prev"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="37.333" viewBox="0 0 20 37.333"><defs><clipPath id="clip-path"><path id="Path_310" data-name="Path 310" d="M17.746-37.614A1.29,1.29,0,0,1,18.68-38a1.29,1.29,0,0,1,.934.386,1.32,1.32,0,0,1,0,1.867L3.188-19.333,19.614-2.92a1.32,1.32,0,0,1,0,1.867,1.322,1.322,0,0,1-1.868,0L.386-18.4a1.32,1.32,0,0,1,0-1.867L17.746-37.614Z" fill="none" clip-rule="evenodd"/></clipPath><clipPath id="clip-path-2"><path id="Path_309" data-name="Path 309" d="M-396,5739H1605V-481H-396Z" fill="none"/></clipPath></defs><g id="Group_337" data-name="Group 337" transform="translate(0 38)" clip-path="url(#clip-path)"><g id="Group_336" data-name="Group 336" clip-path="url(#clip-path-2)"><path id="Path_308" data-name="Path 308" d="M25,4.333H-5V-43H25Z" fill="#f1f1f1"/></g></g></svg> </button>`;

if( jQuery('.banner--javascript .banner__list[data-carousel="true"]') && jQuery('.banner--javascript .banner__list[data-carousel="true"]').length) {
    jQuery('.banner--javascript .banner__list').not('.slick-initialized').slick({
        mobileFirst: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: pArrow,
        nextArrow: nArrow,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]   
    });
}
nArrow = `<button aria-label="next" type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="11.75" height="20" viewBox="0 0 11.75 20"> <path id="Caminho_148" data-name="Caminho 148" d="M101.8,9.22l8.9-8.9a1.1,1.1,0,0,1,1.547,0l.655.655a1.1,1.1,0,0,1,0,1.547L105.426,10l7.482,7.482a1.1,1.1,0,0,1,0,1.547l-.655.655a1.1,1.1,0,0,1-1.547,0L101.8,10.772a1.1,1.1,0,0,1,0-1.553Z" transform="translate(-101.478 0)" fill="#BEBFBF"/> </svg></button>`;
pArrow = `<button aria-label="prev" type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="11.75" height="20" viewBox="0 0 11.75 20"> <g id="_271228" data-name="271228" opacity="0.3"> <g id="Grupo_317" data-name="Grupo 317" transform="translate(0)"> <path id="Caminho_148" data-name="Caminho 148" d="M101.8,9.22l8.9-8.9a1.1,1.1,0,0,1,1.547,0l.655.655a1.1,1.1,0,0,1,0,1.547L105.426,10l7.482,7.482a1.1,1.1,0,0,1,0,1.547l-.655.655a1.1,1.1,0,0,1-1.547,0L101.8,10.772a1.1,1.1,0,0,1,0-1.553Z" transform="translate(-101.478 0)" fill="#BEBFBF"/> </g> </g> </svg></button>`;


if (jQuery(window).width() > 991) {
    if (jQuery('.marcas__list[data-carousel="true"]')) {
        jQuery('.marcas__list[data-carousel="true"]').each(function () {
            jQuery(this).not('.slick-initialized').slick({
                mobileFirst: false,
                slidesToShow: 6,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                prevArrow: pArrow,
                nextArrow: nArrow,
                responsive: [
                    {
                        breakpoint: 426,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                    {
                        breakpoint: 769,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                ]
            });
        });

    }
} else {
    if (jQuery('.marcas__list[data-carousel="true"]')) {
        jQuery('.marcas__list[data-carousel="true"]').each(function () {
            jQuery(this).not('.slick-initialized').slick({
                mobileFirst: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 426,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                    {
                        breakpoint: 769,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                    {
                        breakpoint: 991,
                        settings: 'unslick'
                    },
                ]
            });
        });

    }

}



var controls = Array.from(document.querySelectorAll("[aria-controls]"));
var body = document.querySelector("body");

controls.forEach(control => {
    control.addEventListener("click", evt => {
        var currentTarget = evt.currentTarget;
        var id = `#${currentTarget.getAttribute("aria-controls")}`;

        if (id.indexOf("slick") === -1) {
            var el = document.querySelector(id);
            var currentHidden = el.getAttribute("aria-hidden");
            var hasFixed = el.getAttribute("data-fixed") == "false" ? false : true;

            if (currentHidden != "false" && currentHidden != "true")
                currentHidden = "true";
            if (hasFixed) {
                if (currentHidden === "true") body.classList.add("fixed");
                else body.classList.remove("fixed");
            }

            el.setAttribute("aria-hidden", currentHidden === "true" ? false : true);
        }
    });
});



if (jQuery('.page-product').length > 0) {
    jQuery(document).ready(function ($) {
        var button = $('#bt-submit-comments');

        if(button) {
            var buttonAction = $(`<button class="comments__button" type="button">Avaliar</button>`);
            button.after(buttonAction);

            buttonAction.click(() => {
                button.trigger('click');
            });
        }

    })
}


function close(){
    jQuery(".countdown__content").css("display", "none");
  }
  
  jQuery(window).on("load" ,function() {
  
    if (jQuery("#dataPromotion").length > 0 &&  jQuery("#countdown").length > 0) {
  
        var dataString = '';
  
        dataString = jQuery("#dataPromotion").text();

        // Context object
          const c = {
            context: {},
            values: {}, 
            times: {}
          };

        
        const launchDate = new Date(dataString).getTime();
        
        function init() {
            
            // Get displayed values
            c.values.seconds = document.getElementById('seconds-value');
            c.values.minutes = document.getElementById('minutes-value');
            c.values.hours = document.getElementById('hours-value');
            c.values.days = document.getElementById('days-value');
    
            setInterval(function() {
                // Get todays date and time (ms)
                const now = new Date().getTime();
            
                // Get distance from now to launchDate
                const distance = launchDate - now;
  
               
  
                // Time calculations
                c.times.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                c.times.hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                c.times.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                c.times.seconds = Math.floor((distance % (1000 * 60))  / (1000 ));
  
  
                c.values.days.innerText = c.times.days;
                c.values.hours.innerText = c.times.hours;
                c.values.minutes.innerText = c.times.minutes;
                c.values.seconds.innerText = c.times.seconds;
                
          }, 1000);
         
        }        
        init();
    }
  })
  

  setTimeout (
    ()=> {
       jQuery(document).ready(
           () => {
               jQuery(".countdown__timer").appendTo(jQuery(".showcase__header")[0]);
           }
       )
   },
1000)

 


// function FakeSelect() {
//     $('select').each(function(){
//         if($(this).closest('.fake-select').length === 0) {
//             var text = $(this).find('option:selected').text();
//             var fake = $('<div class="fake-select">');
//             var label = $('<span class="fake-select__label">').text(text);
//             var cssClass = $(this).attr('class').split(' ');

//             cssClass.forEach((item) => {
//                 if(item !== '') {
//                     fake.addClass(item);
//                 }
//             })

//             fake.prepend(label);
//             $(this).after(fake);
//             fake.append(this);

//             $(this).change(() => { label.text($(this).find('option:selected').text()) });
//         }
//     });
// }

// FakeSelect();

// document.addEventListener('FAKESELECT', () => { FakeSelect() }, false);

if($('.instafeed[data-carousel="true"] .instafeed__list') && $('.instafeed[data-carousel="true"] .instafeed__list').length) {
    $('.instafeed[data-carousel="true"] .instafeed__list').not('.slick-initialized').slick({
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 240,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 960,
                settings: "unslick"
            }
        ]   
    });
}

// Get cookie function
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);

    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// call getCokkie function and set into exists variable
var exists = getCookie('LGPDAlertToKids');

// check if cookie is active
if (exists != 'true') {

    jQuery("body").addClass("show-lgpd-alert");

    jQuery(".lgpd-alert__close").on("click", function (e) {
        if (e.target === e.currentTarget) {
            jQuery("body").removeClass("show-lgpd-alert");
            window.sessionStorage.setItem("lgpd-alert", 1);
            document.cookie = "LGPDAlertToKids=true";
        }
    });

};


function debounce(func){
    var timer;
    return function(event){
        if(timer) clearTimeout(timer);
        timer = setTimeout(func,200,event);
    };
}

function navigationHiddenResize() {
    var widthNavigation = $('.menu--navigation .menu__ul--nv1').outerWidth();
    var widthCurrent = 0;
    $('.menu--navigation .menu__item--nv1').removeClass('menu__item--hidden');
    $('.menu--navigation .menu__item--nv1').each(function(){
        widthCurrent += $(this).outerWidth();
        if(widthCurrent > widthNavigation) {
            $(this).addClass('menu__item--hidden');
        }
    });
}

function navigationAlign() {
    $('.menu--navigation').each(function(){
        $(this).find('.menu--nv2').removeClass('menu--rtl');
        $(this).find('.menu--nv2').each(function(){
            var nav = $(this).closest('.menu--nv1').outerWidth();
            var left = $(this).offset().left + $(this).outerWidth();

            if(left > nav) {

                $(this).addClass('menu--rtl');
            }
        });
    })
}

var childs = Array.from(document.querySelectorAll('.menu__item--has-child'));

childs.forEach((child) => {
    child.addEventListener('click', (evt) => {
        const target = evt.target;
        if (evt.currentTarget === target) {
            var expanded = target.getAttribute('aria-expanded');
            if (expanded !== 'true' && expanded !== 'false') expanded = 'false';
            target.setAttribute('aria-expanded', expanded === 'true' ? false : true);
            jQuery(target).find('> .menu--sub').slideToggle();
        }
    }, false);
});

var childsMenuAll = Array.from(document.querySelectorAll('.menu--all-1 .menu__item--has-child'));

childsMenuAll.forEach((child) => {
    child.addEventListener('click', (evt) => {
        const target = evt.target;
        if (evt.currentTarget === target) {
            var expanded = target.getAttribute('aria-expanded');
            if (expanded !== 'true' && expanded !== 'false') expanded = 'false';
            target.setAttribute('aria-expanded', expanded === 'true' ? false : true);
            jQuery(target).find('> .menu--sub').slideToggle();
        }
    }, false);
});


// para mover o menu
// function navigationMove() {
//     jQuery('.menu__item--nv1:nth-child(4)').each(function(){
//         jQuery(this).find('.menu--nv2').each(function(){
//             jQuery( ".menu__item--has-child" ).mouseover(function() {
//                 jQuery(this).find('')
//             });
//         });
//     });
// }


// Ajustar para que, quando houver poucas categorias, deixar uma ao lado da outra
jQuery(document).ready(function () {
    if (jQuery('.menu__ul .menu__item--nv1').length <= 5) {
        jQuery('.menu--navigation .menu__ul--nv1').css('justify-content', 'flex-start');
    }
});

// window.addEventListener('resize', debounce(function(e){
//     navigationHiddenResize();
//     navigationAlign();
// }));

// navigationHiddenResize();
// navigationAlign();

if(jQuery('.methods[data-carousel="true"]').length) {
    jQuery('.methods__ul').slick({
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        prevArrow: `<button aria-label="prev" type="button" class="slick-prev"><svg id="Grupo_397" data-name="Grupo 397" xmlns="http://www.w3.org/2000/svg" width="20" height="37.333" viewBox="0 0 20 37.333">
        <path id="Caminho_310" data-name="Caminho 310" d="M17.746-37.614A1.29,1.29,0,0,1,18.68-38a1.29,1.29,0,0,1,.934.386,1.32,1.32,0,0,1,0,1.867L3.188-19.333,19.614-2.92a1.32,1.32,0,0,1,0,1.867,1.322,1.322,0,0,1-1.868,0L.386-18.4a1.32,1.32,0,0,1,0-1.867L17.746-37.614Z" transform="translate(0 38)" fill="#d4dedd" fill-rule="evenodd"/>
      </svg>
      </button>`,
        nextArrow: `<button aria-label="prev" type="button" class="slick-next"><svg id="Grupo_396" data-name="Grupo 396" xmlns="http://www.w3.org/2000/svg" width="20" height="37.333" viewBox="0 0 20 37.333">
        <path id="Caminho_310" data-name="Caminho 310" d="M2.254-37.614A1.29,1.29,0,0,0,1.32-38a1.29,1.29,0,0,0-.934.386,1.32,1.32,0,0,0,0,1.867L16.812-19.333.386-2.92a1.32,1.32,0,0,0,0,1.867,1.322,1.322,0,0,0,1.868,0L19.614-18.4a1.32,1.32,0,0,0,0-1.867L2.254-37.614Z" transform="translate(0 38)" fill="#d4dedd" fill-rule="evenodd"/>
      </svg>      
      </button>`,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            }        
        ]
    });
    
}


nArrow = `<button aria-label="next" type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="29" viewBox="0 0 16 29"><defs><clipPath id="arrowshowcase1"><path id="Caminho_338" data-name="Caminho 338" d="M0-14.5a2.06,2.06,0,0,1,.575-1.436L12.644-28.405a1.921,1.921,0,0,1,2.78,0,2.079,2.079,0,0,1,0,2.872L4.745-14.5,15.424-3.467a2.079,2.079,0,0,1,0,2.872,1.921,1.921,0,0,1-2.78,0L.575-13.064A2.06,2.06,0,0,1,0-14.5Z"/></clipPath><clipPath id="arrowshowcase2"><path id="Caminho_337" data-name="Caminho 337" d="M-315,5279H1605V-1153H-315Z"/></clipPath></defs><g id="Grupo_387" data-name="Grupo 387" transform="translate(0 29)"><g id="Grupo_386" data-name="Grupo 386" clip-path="url(#arrowshowcase1)"><g id="Grupo_385" data-name="Grupo 385" clip-path="url(#arrowshowcase2)"><path id="Caminho_336" data-name="Caminho 336" d="M21-34V5H-5V-34Z"/></g></g></g></svg></button>`;
pArrow = `<button aria-label="prev" type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="29" viewBox="0 0 16 29"><defs><clipPath id="arrowshowcase1"><path id="Caminho_338" data-name="Caminho 338" d="M0-14.5a2.06,2.06,0,0,1,.575-1.436L12.644-28.405a1.921,1.921,0,0,1,2.78,0,2.079,2.079,0,0,1,0,2.872L4.745-14.5,15.424-3.467a2.079,2.079,0,0,1,0,2.872,1.921,1.921,0,0,1-2.78,0L.575-13.064A2.06,2.06,0,0,1,0-14.5Z"/></clipPath><clipPath id="arrowshowcase2"><path id="Caminho_337" data-name="Caminho 337" d="M-315,5279H1605V-1153H-315Z"/></clipPath></defs><g id="Grupo_387" data-name="Grupo 387" transform="translate(0 29)"><g id="Grupo_386" data-name="Grupo 386" clip-path="url(#arrowshowcase1)"><g id="Grupo_385" data-name="Grupo 385" clip-path="url(#arrowshowcase2)"><path id="Caminho_336" data-name="Caminho 336" d="M21-34V5H-5V-34Z"/></g></g></g></svg></button>`;

jQuery('.news__content').load('/noticias .noticias', function () {
    jQuery('.news').show()

    if ($('.news[data-carousel="true"] ul.noticias').length) {
        $('.news[data-carousel="true"] ul.noticias').not('.slick-initialized').slick({
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: pArrow,
            nextArrow: nArrow,
            responsive: [
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                }
            ]
        });
    }
});
if(jQuery('.popupNews').length){
    if (!getCookieValueByName('popupNewsToKids')) {
        createpopupNewsCookies()
    }   
    
    function createpopupNewsCookies () {
        setTimeout(function() {
            jQuery('.popupNews').addClass('openned');
            closePopupNews();
            // validateForm();
        }, 3000)
    }

    function closePopupNews(){
        jQuery('.popupNews__close').on('click', function() {
            jQuery('.popupNews').removeClass('openned');
            setCookies("popupNewsToKids", true, 3);
        })
        jQuery('.popupNews__mask').on('click', function() {
            jQuery('.popupNews').removeClass('openned');
            setCookies("popupNewsToKids", true, 3);
        })
    }
}

var url = window.location.pathname

if(url == "/mvc/store/newsletter/")  {
    setCookies("popupNewsToKids", true, 3);
}


function getCookieValueByName (name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    return parts.length == 2 ? parts.pop().split(";").shift() : false;
}

function setCookies(cname, cvalue, exdays){
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}



/* Lazy Load  */
document.addEventListener('DOMContentLoaded', function () {
    let lazyImages = [].slice.call(document.querySelectorAll('img.lazy-new'))
    let active = false
    const lazyLoad = function () {
        if (active === false) {
            active = true
            setTimeout(function () {
                lazyImages.forEach(function (lazyImage) {
                    if (
                        lazyImage.getBoundingClientRect().top <=
                        window.innerHeight &&
                        lazyImage.getBoundingClientRect().bottom >= 0 &&
                        getComputedStyle(lazyImage).display !== 'none'
                    ) {
                        lazyImage.src = lazyImage.dataset.src
                        lazyImage.srcset = lazyImage.dataset.srcset

                        lazyImages = lazyImages.filter(function (image) {
                            return image !== lazyImage
                        })

                        if (lazyImages.length === 0) {
                            document.removeEventListener('scroll', lazyLoad)
                            window.removeEventListener('resize', lazyLoad)
                            window.removeEventListener(
                                'orientationchange',
                                lazyLoad
                            )
                        }
                        setTimeout(() => {
                        lazyImage.classList.remove('lazy-new')
                        }, 100);
                    }
                })
                active = false
            }, 200)
        }
    }
    document.addEventListener('scroll', lazyLoad)
    window.addEventListener('resize', lazyLoad)
    window.addEventListener('orientationchange', lazyLoad)
})


// add to cart
jQuery(document).ready(function () {
    if (jQuery(".product__button").length) {
        jQuery(".product__button").on("click", function () {
            const dataSession = jQuery("html").attr("data-session");
            const dataProdutoId = jQuery(this).attr("data-id");
            const dataQuantity = 1;
            jQuery
                .ajax({
                    method: "POST",
                    url: "/web_api/cart/",
                    contentType: "application/json; charset=utf-8",
                    data:
                        '{"Cart":{"session_id":"' +
                        dataSession +
                        '","product_id":"' +
                        dataProdutoId +
                        '", "quantity":"' +
                        dataQuantity +
                        '" ,"constiant_id":"0"}}',
                })
                .done((response, textStatus, jqXHR) => {
                    jQuery(this)
                        .closest(".product").find(".product__header")
                        .append(
                            jQuery('<span class="buy__button--ok">Produto adicionado</span>')
                            .hide()
                            .fadeIn(100)
                        );

                    setTimeout(function () {
                        jQuery(".buy__button--ok").fadeOut(100, function() { $(this).remove(); });
                    }, 1000);

                    const UPDATECART = new CustomEvent("UPDATECART", {
                        detail: response.data,
                    });
                    window.dispatchEvent(UPDATECART);
                })
                .fail(function (jqXHR, status, errorThrown) {
                    const response = jQuery.parseJSON(jqXHR.responseText);
                });
        });
    }
});
// end add to cart

if (typeof $tray === 'function') {
    $tray(document).on('thumbs:start', function () {
        
        aArrow = `<button aria-label="next" type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="29" viewBox="0 0 16 29"><defs><clipPath id="arrowshowcase1"><path id="Caminho_338" data-name="Caminho 338" d="M0-14.5a2.06,2.06,0,0,1,.575-1.436L12.644-28.405a1.921,1.921,0,0,1,2.78,0,2.079,2.079,0,0,1,0,2.872L4.745-14.5,15.424-3.467a2.079,2.079,0,0,1,0,2.872,1.921,1.921,0,0,1-2.78,0L.575-13.064A2.06,2.06,0,0,1,0-14.5Z"/></clipPath><clipPath id="arrowshowcase2"><path id="Caminho_337" data-name="Caminho 337" d="M-315,5279H1605V-1153H-315Z"/></clipPath></defs><g id="Grupo_387" data-name="Grupo 387" transform="translate(0 29)"><g id="Grupo_386" data-name="Grupo 386" clip-path="url(#arrowshowcase1)"><g id="Grupo_385" data-name="Grupo 385" clip-path="url(#arrowshowcase2)"><path id="Caminho_336" data-name="Caminho 336" d="M21-34V5H-5V-34Z"/></g></g></g></svg></button>`;
        bArrow = `<button aria-label="prev" type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="29" viewBox="0 0 16 29"><defs><clipPath id="arrowshowcase1"><path id="Caminho_338" data-name="Caminho 338" d="M0-14.5a2.06,2.06,0,0,1,.575-1.436L12.644-28.405a1.921,1.921,0,0,1,2.78,0,2.079,2.079,0,0,1,0,2.872L4.745-14.5,15.424-3.467a2.079,2.079,0,0,1,0,2.872,1.921,1.921,0,0,1-2.78,0L.575-13.064A2.06,2.06,0,0,1,0-14.5Z"/></clipPath><clipPath id="arrowshowcase2"><path id="Caminho_337" data-name="Caminho 337" d="M-315,5279H1605V-1153H-315Z"/></clipPath></defs><g id="Grupo_387" data-name="Grupo 387" transform="translate(0 29)"><g id="Grupo_386" data-name="Grupo 386" clip-path="url(#arrowshowcase1)"><g id="Grupo_385" data-name="Grupo 385" clip-path="url(#arrowshowcase2)"><path id="Caminho_336" data-name="Caminho 336" d="M21-34V5H-5V-34Z"/></g></g></g></svg></button>`;

        console.log(nArrow)
        $('.thumbs__list').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            prevArrow: bArrow,
            nextArrow: aArrow,
            arrows: true,
            responsive: [
                {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                }
            ]
        })
    })
}


// import axios from 'axios';

// document.addEventListener("DOMContentLoaded", function(){

//     var tabs = document.querySelector('.product-tabs');
//     if(tabs){
//         var urls = Array.from(tabs.querySelectorAll('[data-url]'));

//         urls.forEach((element) => {
//             var url = element.getAttribute('data-url');
//             axios.get(url)
//                 .then((data) => data.data)
//                 .then((data) => element.innerHTML = data);
//         });

//         var customTabs = Array.from(document.querySelectorAll('.product-tabs--custom .product-tabs__link'));

//         customTabs.forEach((customTab) => {
//             customTab.addEventListener('click', (evt) => {
//                 var href = evt.currentTarget.getAttribute('href');
//                 var hash = href.match(/^[^#]*#(.*)/)[1];

//                 if(hash) {
//                     var contents = Array.from(document.querySelectorAll('.prodBox'));
//                     var current = document.querySelector(`#${ hash }`);

//                     contents.forEach((content) => content.setAttribute('style', 'display:none'));
//                     if(current) current.setAttribute('style', 'display: block');

//                     customTabs.forEach((customTab) => customTab.classList.remove('on'));
//                     evt.currentTarget.classList.add('on');

//                 }

//                 evt.preventDefault();
//             });
//         });

//         if(customTabs.length) {
//             customTabs[0].classList.add('on');
//         }
//     }
// });

// var test = $("#tab-payments").attr("data-url");
// $.get(test, function(resultado){
//     $("#tab-payments").html(resultado);
// })
nArrow = `<button aria-label="next" type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="15.148" height="28.276" viewBox="0 0 15.148 28.276">
<path id="Caminho_611" data-name="Caminho 611" d="M1.707-37.707A.977.977,0,0,0,1-38a.977.977,0,0,0-.707.293,1,1,0,0,0,0,1.414l12.44,12.432L.293-11.43a1,1,0,0,0,0,1.414,1,1,0,0,0,1.415,0L14.855-23.155a1,1,0,0,0,0-1.414L1.707-37.707Z" transform="translate(0 38)" fill="#878787" fill-rule="evenodd"/>
</svg>
</button>`;
pArrow = `<button aria-label="prev" type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="15.148" height="28.276" viewBox="0 0 15.148 28.276">
<path id="Caminho_611" data-name="Caminho 611" d="M1.707-37.707A.977.977,0,0,0,1-38a.977.977,0,0,0-.707.293,1,1,0,0,0,0,1.414l12.44,12.432L.293-11.43a1,1,0,0,0,0,1.414,1,1,0,0,0,1.415,0L14.855-23.155a1,1,0,0,0,0-1.414L1.707-37.707Z" transform="translate(0 38)" fill="#878787" fill-rule="evenodd"/>
</svg></button>`;

if($('.reviews[data-carousel="true"] .dep_lista') && $('.reviews[data-carousel="true"] .dep_lista').length) {
    jQuery('.dep_lista li').not(':visible').remove()
    $('.dep_lista').not('.slick-initialized').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: pArrow,
        nextArrow: nArrow,
        infinite: false,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
            
        ]   
    });
}

if($('.rulers[data-carousel="true"] .rulers__list') && $('.rulers[data-carousel="true"] .rulers__list').length) {
    if (jQuery(window).width() < 991) {
        jQuery('.rulers__sep').remove()
        $('.rulers[data-carousel="true"] .rulers__list').not('.slick-initialized').slick({
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
            ]   
        });
    }
}




    jQuery(document).ready(function () {
        jQuery(window).ajaxComplete(function (event, xhr, settings) {
            if (settings) {
                if (settings.url.indexOf('variant_gallery') !== -1) {
                    loadThumb();
                }
            }
        });
        loadThumb();
    });

    function loadThumb() {
        var thumbs = jQuery('.produto-imagem-miniaturas');

        if (thumbs.length) {
            thumbs.hide();

            var images = thumbs.find('img, .icon-video');
            let html;

            if (jQuery('.thumbs').length) jQuery('.thumbs').remove();

            if (images.length) {
                html = `<div class="thumbs">`;
                html += `<ul class="thumbs__list">`;

                images.each((index, item) => {
                    html += createThumb(jQuery(item).attr('src'), index);
                });

                html += `</ul>`;
                html += `</div>`;
                thumbs.after(html);

                jQuery(document).trigger("thumbs:start");

                jQuery('.thumbs a').click((evt) => {
                    let index = jQuery(evt.currentTarget).attr('data-index');

                    selectThumb(index);

                    if (jQuery(evt.currentTarget).find('.thumbs__video').length) {
                        jQuery('#colVideo').show();
                    } else {
                        jQuery(jQuery('a', thumbs).eq(index)).mouseover().click();
                        jQuery('#colVideo').hide();
                    }
                    evt.preventDefault();
                });

                selectThumb('0');
            }
        }
    }

    function selectThumb(index) {
        jQuery(`.thumbs li`).removeClass('thumbs__item--actived');
        jQuery(`.thumbs [data-index=${index}]`).closest('li').addClass('thumbs__item--actived');
    }

    function createThumb(src, index) {
        if (src) {
            return `<li class="thumbs__item"><a class="thumbs__link" data-index="${index}" href="#${index}"><img class="thumbs__image" src="${src}" /></a></li>`;
        } else {
            return `<li class="thumbs__item"><a class="thumbs__link" data-index="${index}" href="#${index}"><span class="thumbs__video"></span></a></li>`;
        }
    }



 
// jQuery('.form_depto .btn_submit').remove()
// jQuery('.form_depto').append('<button  name="imagem" id="imagem">Enviar</button>')
