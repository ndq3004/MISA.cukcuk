$('#btnlogin').click(function(){
    var name = $('#username').val();
    var pass = $('#password').val();
// $('#notice-name').text(name.trim());

    if(name.trim()=='') {
        $('#notice-name').text("Bạn phải nhập tên đăng nhập");
    }
    else {
        if(name.trim() != "admin"){
            $('#notice-name').text("Tài khoản không tồn tại trong hệ thống!");
        }
        else{
            if(pass===''){
                $('#notice-password').text("Bạn phải nhập mật khẩu");
            }
            else{
                if(pass != "12345678"){
                    $('#notice-password').text("Mật khẩu không chính xác!");
                }
                else{
                    $('#notice-password').text("");
                    $('#notice-name').text("");
                    alert("login successfully!")
                }
            }
        }
    }
})
