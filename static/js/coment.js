// Email validation function
function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function coment_js_form(blog_id){
    let coment_user_name=document.getElementById("coment_user_name").value
    let coment_user_email=document.getElementById("coment_user_email").value
    let coment_user_text=document.getElementById("coment_user_text").value
    
    if (coment_user_name===""){
        swal({
            title: "Comment",
            text: "Please Enter Name",
            icon: "error",
            button: "continue",
        });
    }
    else if(coment_user_email===""){
        swal({
            title: "Comment",
            text: "Please Enter Email",
            icon: "error",
            button: "continue",
        });
    }
    else if (!isValidEmail(coment_user_email)) {
        swal({
            title: "Comment",
            text: "Please enter a valid email address.",
            icon: "error",
            button: "continue",
        });
    }
    else if(coment_user_text===""){
        swal({
            title: "Comment",
            text: "Please Enter Your Comment",
            icon: "error",
            button: "continue",
        });
    }
    else{
        let currentUrl = window.location.href;
        data={
            coment_user_name:coment_user_name,
            coment_user_email:coment_user_email,
            coment_user_text:coment_user_text,
            blog_slug:blog_id,
            blogurl:currentUrl,
        }
        fetch("/adminsion_data_form", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "X-CSRFToken": document.querySelector("input[name=csrfmiddlewaretoken]").value
            }
        })
        .then(data => data.json())
        .then((data) => {
            swal({
                title: "Comment",
                text: data.coment_success,
                icon: "success",
                button: "continue",
            }).then(()=> window.location.reload())
        })
        
    }
}