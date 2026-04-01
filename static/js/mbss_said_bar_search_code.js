function mbbs_search_bard_state_city() {
    let search_np = document.getElementById("mbss_top_state_citysearch_input").value
    let ul_list_state_city = document.querySelectorAll("#mbss_state_city_list li")
    ul_list_state_city.forEach((elemen) => {
        let atagtext = elemen.textContent.toLowerCase()
        let search_text = search_np.toLowerCase()
        if (atagtext.includes(search_text)) {
            elemen.style.display = "block"
        }
        else {
            elemen.style.display = "none"

        }
    });
}

function mbbs_search_neet2023() {
    let search_np = document.getElementById("mbbs_neet2023_search_input").value
    let ul_list_state_city = document.querySelectorAll("#mbbs_neet2023_list li")
    ul_list_state_city.forEach((elemen) => {
        let atagtext = elemen.textContent.toLowerCase()
        let search_text = search_np.toLowerCase()
        if (atagtext.includes(search_text)) {
            elemen.style.display = "block"
        }
        else {
            elemen.style.display = "none"

        }
    });
}


function mbbs_abroud_search_btechexam() {
    let search_np = document.getElementById("mbbs_abroud_search_input").value
    let ul_list_state_city = document.querySelectorAll("#mbbs_abroud_list li")
    ul_list_state_city.forEach((elemen) => {
        let atagtext = elemen.textContent.toLowerCase()
        let search_text = search_np.toLowerCase()
        if (atagtext.includes(search_text)) {
            elemen.style.display = "block"
        }
        else {
            elemen.style.display = "none"

        }
    });
}

function mbbs_college_type_adms_search_bar() {
    let search_np = document.getElementById("mbbs_college_type_adms_search_input").value
    let ul_list_state_city = document.querySelectorAll("#mbbs_college_type_admslist li")
    ul_list_state_city.forEach((elemen) => {
        let atagtext = elemen.textContent.toLowerCase()
        let search_text = search_np.toLowerCase()
        if (atagtext.includes(search_text)) {
            elemen.style.display = "block"
        }
        else {
            elemen.style.display = "none"

        }
    });
}



function search_bard_cuttoff_mbbs() {
    let search_np = document.getElementById("cuttoff_mbbs_search_input").value
    let ul_list_state_city = document.querySelectorAll("#cuttoff_mbbs_list li")
    ul_list_state_city.forEach((elemen) => {
        let atagtext = elemen.textContent.toLowerCase()
        let search_text = search_np.toLowerCase()
        if (atagtext.includes(search_text)) {
            elemen.style.display = "block"
        }
        else {
            elemen.style.display = "none"

        }
    });
}



function mbbs_neet_ug_search_bard() {
    let search_np = document.getElementById("mbbs_neet_ug_search_input").value
    let ul_list_state_city = document.querySelectorAll("#mbbs_neet_uglist li")
    ul_list_state_city.forEach((elemen) => {
        let atagtext = elemen.textContent.toLowerCase()
        let search_text = search_np.toLowerCase()
        if (atagtext.includes(search_text)) {
            elemen.style.display = "block"
        }
        else {
            elemen.style.display = "none"

        }
    });
}


function mbbs_neet_ug_ayush_search_bard() {
    let search_np = document.getElementById("mbbs_neet_ug_ayush_search_input").value
    let ul_list_state_city = document.querySelectorAll("#mbbs_neet_ug_ayushlist li")
    ul_list_state_city.forEach((elemen) => {
        let atagtext = elemen.textContent.toLowerCase()
        let search_text = search_np.toLowerCase()
        if (atagtext.includes(search_text)) {
            elemen.style.display = "block"
        }
        else {
            elemen.style.display = "none"

        }
    });
}



function mbbs_neet_pg_search_bard_() {
    let search_np = document.getElementById("mbbs_neet_pg_search_input").value
    let ul_list_state_city = document.querySelectorAll("#mbbs_neet_pglist li")
    ul_list_state_city.forEach((elemen) => {
        let atagtext = elemen.textContent.toLowerCase()
        let search_text = search_np.toLowerCase()
        if (atagtext.includes(search_text)) {
            elemen.style.display = "block"
        }
        else {
            elemen.style.display = "none"

        }
    });
}


function mbbs_neet_pg_ayush_search_bard() {
    let search_np = document.getElementById("mbbs_neet_pg_ayush_search_input").value
    let ul_list_state_city = document.querySelectorAll("#mbbs_neet_pg_ayushlist li")
    ul_list_state_city.forEach((elemen) => {
        let atagtext = elemen.textContent.toLowerCase()
        let search_text = search_np.toLowerCase()
        if (atagtext.includes(search_text)) {
            elemen.style.display = "block"
        }
        else {
            elemen.style.display = "none"

        }
    });
}


