

var getHrefRefs = function () {
    var href = location.href;
    var index = href.indexOf("?");
    var refes = href.substring(href.indexOf("?") + 1);
    var opts = {};
    var index = 0;
    var file = "";
    refes = refes.split("&");

    for (var i = 0; i < refes.length; i++) {
        file = refes[i];
        file = file.split("=");
        if (file[1]) {
            index = file[1].indexOf("#");
            if (index == -1) {
                opts[file[0]] = file[1];
            } else {
                opts[file[0]] = file[1].substring(0, file[1].indexOf("#"));
            }
        }
    };

    return opts;
}


function getCompare(ver) {
    var opts = getHrefRefs();
    var version = 0;
    var result = 0;
    if (!opts.version) return;
    version = opts.version.split(".");
    if (version.length < 3) return;

    for (var j = 0; j < ver.length; j++) {
        if (version[j] * 1 < ver[j]) {
        	result = -1;
        	break;
        }
        else if (version[j] * 1 > ver[j]){
        	result = 1;
        	break;
        }
    }
    return result;
}

function helpDetail(isShow){
    var $item = $('.item');

    $item.eq('0').addClass('open').siblings('.help-cont').slideDown(100);

    $item.click(function(e) {
        e.preventDefault();
        $(this).toggleClass('open').siblings('.help-cont').slideToggle(100);
    });
    isShow && $('.other').css('display','block');
}