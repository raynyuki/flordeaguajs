
const URLJSON = 'https://jsonplaceholder.typicode.com/posts'

 $('#btnSub').click(function () {

    var emailData = $('input#email').val();
    console.log(emailData);
    if (emailData !== "") {
        $.ajax({
            url: URLJSON, 
            method: 'POST',
            data: {
                email: emailData 
            },
            success: function (data) {
                console.log(data);
                $(`#email`).remove();
                $(`#btnSub`).remove();
                $(`#newsletter`).prepend(`<p>Gracias por subscribirte</p>`);
            },
        });
    } else {
        alert("Insert a email!");
    }
});

// hacer una calculadora de metros2 para usar el for

