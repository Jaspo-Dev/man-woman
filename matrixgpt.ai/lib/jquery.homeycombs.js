(function($) {
    $.fn.honeycombs = function(options) {
        var settings = $.extend({
            combWidth: 230,
            margin: 10
        }, options);
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
            settings = $.extend({
                combWidth: 130,
                margin: 10
            }, options);
        }

        function initialise(element) {
            $(element).addClass('honeycombs-wrapper');
            var width = 0;
            var combWidth = 0;
            var combHeight = 0;
            var num = 0;
            var $wrapper = null;

            function buildHtml() {
                $(element).find('.comb').wrapAll('<div class="honeycombs-inner-wrapper"></div>');
                $wrapper = $(element).find('.honeycombs-inner-wrapper');
                $(element).find('.comb').append('<div class="hex_l"></div>');
                $(element).find('.hex_l').append('<div class="hex_r"></div>');
                $(element).find('.hex_r').append('<div class="hex_inner"></div>');
                $(element).find('.hex_inner').append('<div class="inner_span"><div class="inner-text"></div></div>');
                num = 0;
                $(element).find('.comb').each(function() {
                    num = num + 1;
                    var image = $(this).find('img').attr('src');
                    var css = 'url("' + image + '") ';
                    var a_href = $(this).find('a').attr('href');
                    var a_class = $(this).find('a').attr('class');
                    if (typeof(a_href) != "undefined" && a_href !== null) {
                        if (typeof(a_class) != "undefined" && a_class !== null) {
                            $(this).find('.hex_inner').wrapAll('<a class="' + a_class + '" href="' + a_href + '"></a>');
                        } else {
                            $(this).find('.hex_inner').wrapAll('<a class="" href="' + a_href + '"></a>');
                        }
                    }
                    $(this).find('.hex_inner').attr('style', 'background-image: ' + css);
                    $(this).find('.hex_inner').attr('style', 'background-image: ' + css);
                    if ($(this).find('span').length > 0) {
                        $(this).find('.inner_span .inner-text').html($(this).find('span').html());
                    } else {
                        $(this).find('.inner_span').remove();
                    };
                });
                $(element).find('img, span, .inner_span').hide();
            }

            function updateScales() {
                combWidth = settings.combWidth;
                combHeight = (Math.sqrt(3) * combWidth) / 2;
                edgeWidth = combWidth / 2;
                $(element).find('.comb').width(combWidth).height(combHeight);
                $(element).find('.hex_l, .hex_r').width(combWidth).height(combHeight);
                $(element).find('.hex_inner').width(combWidth).height(combHeight);
            }

            function reorder(animate) {
                updateScales();
                width = $(element).width();
                newWidth = (num / 1.5) * settings.combWidth;
                if (newWidth < width) {
                    width = newWidth;
                }
                $wrapper.width(width);
                var row = 0;
                var upDown = 1;
                var left = 0;
                var top = 0;
                var cols = 0;
                $(element).find('.comb').each(function(index) {
                    top = (row * (combHeight + settings.margin)) + (upDown * (combHeight / 2 + (settings.margin / 2)));
                    if (animate == true) {
                        $(this).stop(true, false);
                        $(this).animate({
                            'left': left,
                            'top': top
                        });
                    } else {
                        $(this).css('left', left).css('top', top);
                    }
                    left = left + (combWidth - combWidth / 4 + settings.margin);
                    upDown = (upDown + 1) % 2;
                    if (row == 0) {
                        cols = cols + 1;
                    }
                    if (left + combWidth > width) {
                        left = 0;
                        row = row + 1;
                        upDown = 1;
                    }
                });
                $wrapper.width(cols * (combWidth / 4 * 3 + settings.margin) + combWidth / 4).height((row + 1) * (combHeight + settings.margin) + combHeight / 2);
            }
            $(window).resize(function() {
                reorder(true);
            });
            $(element).find('.comb').mouseenter(function() {
                $(this).find('.inner_span').stop(true, true);
                $(this).find('.inner_span').fadeIn();
            });
            $(element).find('.comb').mouseleave(function() {
                $(this).find('.inner_span').stop(true, true);
                $(this).find('.inner_span').fadeOut();
            });
            buildHtml();
            reorder(false);
        }
        return this.each(function() {
            initialise(this);
        });
    }
}(jQuery));