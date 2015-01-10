$(document).ready(function(){
        $(".uptop, .upnews").bind('click',function(){
                  $('html, body').animate({ scrollTop: 0 }, 'slow');
                  return false;
        });
        
        $('#left_side + .container').height($('#left_side').height());
        
        p = $('.popap__overlay');
        p.click(function (event) {
                    e = event || window.event;
                    if (e.target == this) {
                        //$(p).css('display', 'none');
                        $(p).fadeOut(150);
                        //$(p,'.popup').css('top',$(document).scrollTop())
                    }
        });
        // открыть окно авторизации
        $('#head .login').bind('click', function(){
            $('#popup_login .popup').css('top',$(document).scrollTop())
            $("#popup_login").fadeIn(150); return false;
        });
        
        // открыть окно добавления новости, раздела
        $('.btn.plus, #more_info .btnbr').bind('click', function(){
            //$("#popup_add .popup").scrollTop( $(document).scrollTop());
            $('#popup_add .popup').css('top',$(document).scrollTop());
            $("#popup_add").fadeIn(150); 
            return false;
        });
        
        // открыть окно регистрации
        $('.registration').bind('click', function(){
            p.hide();
            $('#popup_reg .popup').css('top',$(document).scrollTop())
            $("#popup_reg").fadeIn(150); return false;
        });
        
        // регистрация ШАГ1
        $('#popup_reg .formbtn').bind('click', function(){
            p.hide();
            $('#popup_reg1 .popup').css('top',$(document).scrollTop())
            $("#popup_reg1").fadeIn(150); return false;
        });
        
        // регистрация ШАГ2
        $('#popup_reg1 .formbtn').bind('click', function(){
            p.hide();
            if($('input[name="type"]:checked','#popup_reg').val()==1){
            $('#popup_reg2f .popup').css('top',$(document).scrollTop())
            $("#popup_reg2f").fadeIn(150); return false;
            }else{
             $('#popup_reg2y .popup').css('top',$(document).scrollTop())
            $("#popup_reg2y").fadeIn(150); return false;   
            }
        });
        
        // регистрация ШАГ3f
        $('#popup_reg2f .formbtn').bind('click', function(){
            p.hide();
            $('#popup_reg3 .popup').css('top',$(document).scrollTop())
            $("#popup_reg3").fadeIn(150); return false;
        });
        // регистрация ШАГ3y
        $('#popup_reg2y .formbtn').bind('click', function(){
            p.hide();
            $('#popup_reg3 .popup').css('top',$(document).scrollTop())
            $("#popup_reg3").fadeIn(150); return false;
        });
        
        // регистрация FINISH
        $('#go').bind('click', function(){
            
            // отправка данных на сервак
            // 
            // 
            // 
            
            p.hide();
            $('#popup_reg4 .popup').css('top',$(document).scrollTop())
            $("#popup_reg4").fadeIn(150); return false;
        });
        
        
        // 
        $('#popup_reg .btn').bind('click', function(){
            $('#popup_add .popup').css('top',$(document).scrollTop());
            $("#popup_reg").hide();
            $("#popup_reg1").show(); 
            return false;
        });
        
        // upload image 
        $('#uploadImage').bind('click',function(){
            $(this).next().trigger('click');
        })
        // upload photo
        $(".add-media",'.add-photo').bind('click',function(){
            $('.add-photo').find('input[type="file"]').trigger('click');
        })
        // upload avatar
        $('#uploadAvatar').bind('click',function(){
            $(this).next().trigger('click');
        });
        
        // upload avatar
        $('#uploadVideo').bind('click',function(){
            $(this).next().trigger('click');
        });
        
        $('#newsVideoUrl').unbind().bind('input propertychange', function () {
            link = $.trim($(this).val());
            setYouTube(link);
        });
 
        $('#uploadToAdmin').bind('click',function(){
            $(this).next().trigger('click');
        });
        
        $("#navigator a").bind( 'click',function (){
                $("#navigator .active").removeClass('active');
                $(this).parent().addClass('active');
                    $('html, body').animate({
                        scrollTop: $($(this).attr('href')).offset().top
                    }, 1000);
                //});
                return false;
         });
        
        
        var reader  = new FileReader();

        set_upload($( ".file_upload.av1" ));
        set_upload($( ".file_upload.av2" ));
        set_upload($( ".file_upload.av3" ));
        set_upload($( ".file_upload.av0" ));
        
function set_upload(wrapper){        
        
        var inp = wrapper.find( "input[type='file']" ),
        btn = wrapper.find( "button" ),
        par = wrapper.find( ".alert" ),
        lbl = wrapper.find( "input[type='text']" );
        var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

        inp.change(function(){
            var file_name,file_param='';
            if( file_api && inp[ 0 ].files[ 0 ] ){
                file_name = inp[ 0 ].files[ 0 ].name;
                createReader(inp[0].files[0], function(w, h) {
                   file_param = "Размер: " + w + " x " + h + "px";
                   par.text( file_param );
                });
            }else
                file_name = inp.val().replace( "C:\\fakepath\\", '' );
            if( ! file_name.length ) return;
    
            if( lbl.is( ":visible" ) ){
                lbl.val( file_name );
                //btn.text( "Выбрать" );
            }else{
                //btn.text( file_name );
                }
        }).change();
}        
        
function createReader(file, whenReady) {
    reader.onload = function(evt) {
        var image = new Image();
        image.onload = function(evt) {
            var width = this.width;
            var height = this.height;
            if (whenReady) whenReady(width, height);
        };
        image.src = evt.target.result; 
    };
   reader.readAsDataURL(file);
};


// установка ссылки на youtube для видео
    function setYouTube(ytLink) {
        var widget = this;
        if (ytLink != null && ytLink.indexOf("http://youtu.be/") == 0) {
            ytLink = ytLink.replace('http://youtu.be/', '');
            $('#showVideo', widget.element).html('<iframe width="366" height="160" src="//www.youtube.com/embed/' + ytLink + '?rel=0" frameborder="0" allowfullscreen></iframe>');
        } else {
            $('#showVideo', widget.element).html('');
        }

    };

});        

