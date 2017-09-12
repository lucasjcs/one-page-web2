
$(document).ready(function () {
    scroll.init();
    validate.init();
});

var scroll = {
    init : function () {
        this.__setScrollMenu();
    },

    __setScrollMenu : function () {
        var $doc = $('html, body');
        $('.rollpage').click(function() {
            $doc.animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            return false;
        });
    }

};


var validate = {
    init : function () {
        this.__checkForm();

        this.__submit();
    },

    __checkForm : function () {

        $('input').blur(function () {
            if(this.value == "" || this.value == null){
                $(this).css("border","solid red 1px");
            }else{
                $(this).css("border","");
            }
        });


    },

    __submit : function () {
        $('form').submit(function (e) {
            e.preventDefault();
            $('#notice').text("Formulario enviado com sucesso");
            $('#notice').addClass('success');
        });


    }
};