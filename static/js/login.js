$('input').focus(function(){
    var currentInput = this;
    $(currentInput).parent('.input-item').removeClass('border-input-before');
    $(currentInput).parent('.input-item').addClass('border-input');
})
$('input').blur(function(){
    var currentInput = this;
    var value = $(currentInput).val();
    if(value.trim().length == 0){
        $(currentInput).parent('.input-item').css("border", "1px solid red");
        $(currentInput).parent('.input-item').attr("title", "Không được bỏ trống trường này!");
        // $('currentInput .notice').text("*");
        // debugger;
        // $(currentInput).parent('.input-item').children('.star').append('<span style="display:inline-block; color:red;">*</span>');
        // $(currentInput).parent('.input-item').children('.star').attr('value','*');
        $(currentInput).parents('.inline').children('.star').text('*');
        

    }
    else{
        $(currentInput).parent('.input-item').css("border", "1px solid rgb(111, 125, 136)");
        $(currentInput).parents('.inline').children('.star').text('');
        // $(currentInput).parent('.input-item').addClass('border-input-before');
    }
    
})
$('#btnlogin').click(function(){
    var inputcheck = $('[requiredInput="true"]');
    var textholder = '';
    var check = $('.notice ul');
    check.remove();
    $('.notice').append('<ul></ul>')
    $.each(inputcheck, function(index, item){
        var value = $(item).val().trim();
        // textholder = '<li>' + $(item).attr("placeholder").val() + '</li>';
        textholder = '<li>' +"Không được để trống "+ $(item).attr("placeholder") + '</li>';
        // debugger;
        if(value.length == 0) {
            $('.notice ul').append(textholder);
        }
    })
    if($('#username').val().trim().length != 0 && $('#password').val().length != 0){
        if($('#username').val().trim() != 'admin' || $('#password').val() != '1'){
            alert("wrong account!")
    }}
    if($('#username').val().trim() ==='admin' && $('#password').val() ==='1'){
        // debugger;
        $('body').append('<div id="success" style="cirsor: move; position: fixed; width: 360px; height: 170px; top: 50%; left:50%; margin-left: -180px; margin-top: -85px; border: 1px solid gray; background-color: rgb(211, 205, 205);">'+
                            '<div style="height: 30px;padding-top: 4px; background-color:blue;">Login succesfully!</div>'+
                            '<div>Press Cancel to logout or Continue to access profile!</div>'+
                            '<div style="position: absolute; bottom: 3px; right:3px;">'+
                                '<button id="cancel">Cancel</button>'+
                                '<button id="continue">Continue</button>'+
                            '</div>');
        
    
    }
    $('#success').draggable();
    $('#cancel').click( function(){$('#success').hide();});
    $('#continue').click( function(){$('#success').hide();});
})

