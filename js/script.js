// for navbar scrolling effect
$(document).ready(function() {
    var myNav = $('.navbar');
    var anchor = $('.navbar-nav a');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            myNav.addClass('navbarScrolled');
            anchor.css("color", '#16a085');
        } else {
            myNav.removeClass('navbarScrolled');
            anchor.css("color", '#FFF');
        }
    });
   
    var validated=validateForm();
    $('#submit').click(function(e){
        e.preventDefault();
        if(validated==false){
            $('#signup-form').submit();
            alert('ok');
        } else {
            validateForm();
            alert('no');
        }
    });
        
   
})

//validating reigistration form
function validateForm() {
    function checkUsername() {
        $('#username').keydown(function() {
            if ($('#username').val().length < 6) {
                $('#username-alert').html("**username should be minimum of 6 characters");
                $(this).addClass('border');
            } else {
                $('#username-alert').html("");
                $(this).removeClass('border');
            }
        });
    }
   

    function checkEmail() {
        $('#email').keyup(function() {
            var emailInput = $(this).val();
            var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!emailformat.test(emailInput)) {
                $('#email-alert').html('**Invalid Email Format');
                $(this).addClass('border');
            } else {
                $('#email-alert').html('');
                $(this).removeClass('border');
            }
        });
    }
    

    function checkPhone() {
        $('#phone').keyup(function() {
            var phoneInput = $(this).val();
            var phoneformat = /^\d{10}$/;
            if (!phoneformat.test(phoneInput)) {
                $('#phone-alert').html('*Your input must contain 10 digit');
                $(this).addClass('border');
            } else {
                $('#phone-alert').html('');
                $(this).removeClass('border');
            }
        });

    }
    checkUsername();
    checkEmail();
    checkPhone();
    
}




