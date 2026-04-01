// Add event listener to restrict input to numeric characters
document.getElementById("number").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, '').slice(0, 10);
});

function letest_update() {
    let user_name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    if (user_name === "") {
        swal({
            title: "Name is required!",
            icon: "error",
            button: "continue",
        });
    }
    else if (email === "") {
        swal({
            title: "Email address is required!",
            icon: "error",
            button: "continue",
        });

    }

    else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        swal({
            title: "Please enter a valid email address!",
            icon: "error",
            button: "continue",
        });
    }
    else if (number === "") {
        swal({
            title: "Number is required!",
            icon: "error",
            button: "continue",
        });
    }

    else if (number.length !== 10) {
        swal({
            title: "Please enter a valid 10-digit number!",
            icon: "error",
            button: "continue",
        });

    }
    else {
        data = {
            name: user_name,
            number_phone: number,
            user_email: email
        }
        fetch("/", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "X-CSRFToken": document.querySelector("input[name=csrfmiddlewaretoken]").value
            }
        })
            .then(response => response.json())
            .then((data) => {
                swal({
                    title: "Request Submit Successfully",
                    text: data.formsave_,
                    icon: "success",
                    button: "continue",
                });
            })
            .catch(error => console.error('Error:', error));
    }
}