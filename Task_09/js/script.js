

jQuery(document).ready(function ($) 
{

           
    $("#btnPrepend").click(function (e)
    {

        e.preventDefault();
        //  console.log('submission detected');
        if ($("#inputtext").val() == "")
        alert("You Must insert some value");          
        else
        {
                   
            $("#values").prepend("<p>" + $("#inputtext").val() + "</div>");

        }

               

    });

});




