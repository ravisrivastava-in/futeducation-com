
// new card popup model of register allpay 
function length_of_popup_heding(txt) {
    h_tag_text = document.getElementById("title_from_blog")
    let a =txt.substring(0,50)
    h_tag_text.innerHTML = a

}
function openmmodal(id) {
    const title0 = document.getElementById("title_from_blog")
    const logoimage = document.getElementById("logo_image_from_blog")
    $('#exampleModal').modal('show'); // This will open the modal with the ID "exampleModal"

    $.ajax({
        type: "post",
        url: "/hello_wrold",
        data: {
            uuido: id,
            csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val()
        }, success: function (res) {
            // title0.innerHTML = 
            length_of_popup_heding(res.blog_title)
            logoimage.src = res.mg_logo
            logoimage.alt = res.logo_alt_name
            
        }

    })

}



function card_dwo() {
    const f_name = document.getElementById("f_name").value
    const l_name = document.getElementById("l_name").value
    const Email = document.getElementById("Email").value
    const phone_number = document.getElementById("phone_number").value
    const city = document.getElementById("city").value
    const er = document.getElementById("alerts_er")
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression pattern for phone number validation (basic example)
    const phoneNumberPattern = /^[0-9]{10}$/;
    if (f_name === "") {
        er.innerHTML = "Please Enter First Name"
        er.style.display = "block"
    }
    else if (l_name === "") {
        er.innerHTML = "Please Enter Last Name"
        er.style.display = "block"
    }
    else if (Email === "") {
        er.innerHTML = "Please Enter Email"
        er.style.display = "block"

    }
    else if (!emailPattern.test(Email)) {
        er.innerHTML = "Invalid email address";
        er.style.display = "block"

    }
    else if (!phoneNumberPattern.test(phone_number)) {
        er.innerHTML = "Invalid phone number. Enter a 10-digit number without spaces or special characters.";
        er.style.display = "block"
    }
    else if(city ===""){
        er.innerHTML = "Please enter your city name"
    }
    else {
        er.style.display = "none"

        $.ajax({
            type: "post",
            url: "/hello_wrold",
            data: {
                f_name: f_name,
                l_name: l_name,
                Email: Email,
                phone_number: phone_number,
                city: city,
                csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val()
            },
            success: function (data) {
                if (data === "Your Request Sended Successfully") {
                    swal({
                        title: "Register Now To Apply",
                        text: data,
                        icon: "warning",
                        button: "continue",
                    }).then(() => {
                        window.location.reload();
                    });
                }
                else if (data === "Submit Successfully") {
                    swal({
                        title: "Register Now To Apply",
                        text: "Form submit successfully",
                        icon: "success",
                        button: "continue",
                    }).then(() => {
                        window.location.reload();
                    });
                }
                else {
                    swal({
                        title: "Register Now To Apply",
                        text: "Please try again",
                        icon: "error",
                        button: "continue",
                    }).then(() => {
                        window.location.reload();
                    });
                }

            }
        })
    }
}



