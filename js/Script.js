
movingImage("#left_ccg", 'left', function(pos){return 0}, function(pos){return pos>0}, function(pos){return pos+50})
movingImage("#right_ccg", 'left', function(pos){return ($(window).width()-$('#right_ccg').width())}, function(pos){return pos<($(window).width()-$('#right_ccg').width())}, function(pos){return (($(window).width()-pos)-$('#right_ccg').width())-50})

movingImage("#left_terminalEngine", 'left', function(pos){return 0}, function(pos){return pos>0}, function(pos){return pos+50})
movingImage("#right_terminalEngine", 'left', function(pos){return ($(window).width()-$('#right_terminalEngine').width())}, function(pos){return pos<($(window).width()-$('#right_terminalEngine').width())}, function(pos){return (($(window).width()-pos)-$('#right_terminalEngine').width())-50})


movingImage("#left_simpleml", 'left', function(pos){return 0}, function(pos){return pos>0}, function(pos){return pos+50})
movingImage("#right_simpleml", 'left', function(pos){return ($(window).width()-$('#right_simpleml').width())}, function(pos){return pos<($(window).width()-$('#right_simpleml').width())}, function(pos){return (($(window).width()-pos)-$('#right_simpleml').width())-50})

movingImage("#left_ofp", 'left', function(pos){return 0}, function(pos){return pos>0}, function(pos){return pos+50})
movingImage("#right_ofp", 'left', function(pos){return ($(window).width()-$('#right_ofp').width())}, function(pos){return pos<($(window).width()-$('#right_ofp').width())}, function(pos){return (($(window).width()-pos)-$('#right_ofp').width())-50})

movingImage("#left_tensorflow", 'left', function(pos){return 0}, function(pos){return pos>0}, function(pos){return pos+50})
movingImage("#right_tensorflow", 'left', function(pos){return ($(window).width()-$('#right_tensorflow').width())}, function(pos){return pos<($(window).width()-$('#right_tensorflow').width())}, function(pos){return (($(window).width()-pos)-$('#right_tensorflow').width())-50})

movingImage("#left_js", 'left', function(pos){return 0}, function(pos){return pos>0}, function(pos){return pos+50})
movingImage("#right_js", 'left', function(pos){return ($(window).width()-$('#right_js').width())}, function(pos){return pos<($(window).width()-$('#right_js').width())}, function(pos){return (($(window).width()-pos)-$('#right_js').width())-50})


movingText("#section_desc_ccg")
movingText("#section_desc_terminalEngine")
movingText("#section_desc_simpleml")
movingText("#section_desc_ofp")
movingText("#section_desc_tensorflow")
movingText("#section_desc_js")


//($(window).width()-$('#right').width())
function movingImage(name, op, defaultVal, check, side){
    let reachedEnd = false
    $(window).on('load resize scroll', function() {
        if(reachedEnd == false){
            $(name).each(function() {
                var windowTop = $(window).scrollTop();
                var elementTop = $(this).offset().top;
                var leftPosition = side(windowTop - elementTop);
                if(check(leftPosition)){
                    leftPosition = defaultVal
                }
                change = {}
                change[op] = leftPosition
                $(name)
                .css(change);
            });
        }
    });
}


function movingText(name){
    $(window).scroll(function(){
        if(isScrolledIntoView(name)){
            $(document).ready(function(){
                $(name).animate({'margin-top': 50, 'opacity': 1}, 500);
            })
        }
    })
}

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();


    return ((docViewBottom >= elemTop));
}