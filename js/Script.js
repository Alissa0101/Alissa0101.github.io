
movingImage("#left_About", 'left', function(pos){return 0}, function(pos){return pos>0}, function(pos){return pos+50})
movingImage("#right_About", 'left', function(pos){return ($(window).width()-$('#right_About').width())}, function(pos){return pos<($(window).width()-$('#right_About').width())}, function(pos){return (($(window).width()-pos)-$('#right_About').width())-50})

movingImage("#left_pcSpecs", 'left', function(pos){return 0}, function(pos){return pos>0}, function(pos){return pos+50})
movingImage("#right_pcSpecs", 'left', function(pos){return ($(window).width()-$('#right_pcSpecs').width())}, function(pos){return pos<($(window).width()-$('#right_pcSpecs').width())}, function(pos){return (($(window).width()-pos)-$('#right_pcSpecs').width())-50})


movingImage("#left_bdImage", 'left', function(pos){return 0}, function(pos){return pos>0}, function(pos){return pos+50})
movingImage("#right_bdImage", 'left', function(pos){return ($(window).width()-$('#right_bdImage').width())}, function(pos){return pos<($(window).width()-$('#right_bdImage').width())}, function(pos){return (($(window).width()-pos)-$('#right_bdImage').width())-50})

movingImage("#left_something2", 'left', function(pos){return 0}, function(pos){return pos>0}, function(pos){return pos+50})
movingImage("#right_something2", 'left', function(pos){return ($(window).width()-$('#right_something2').width())}, function(pos){return pos<($(window).width()-$('#right_something2').width())}, function(pos){return (($(window).width()-pos)-$('#right_something2').width())-50})

movingImage("#left_tensorflow", 'left', function(pos){return 0}, function(pos){return pos>0}, function(pos){return pos+50})
movingImage("#right_tensorflow", 'left', function(pos){return ($(window).width()-$('#right_tensorflow').width())}, function(pos){return pos<($(window).width()-$('#right_tensorflow').width())}, function(pos){return (($(window).width()-pos)-$('#right_tensorflow').width())-50})


movingText("#section_desc_About")
movingText("#section_desc_pcSpecs")
movingText("#section_desc_bdImage")
movingText("#section_desc_something2")
movingText("#section_desc_tensorflow")


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

    if($(elem).offset() != undefined){
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((docViewBottom >= elemTop));
    }
    
    return false;

    
}