function btech_jsfunck_oflinks(data_link) {
    fetch("/b-tech", {
        method: "POST",
        body: JSON.stringify({ "link_data": data_link }),
        headers: {
            "X-CSRFToken": document.querySelector("input[name=csrfmiddlewaretoken]").value
        }
    })
    .then(data => data.json())
    .then((data) => {
        document.getElementById("total_blog_of_btech").style.display = "none"
        document.getElementById("total_blog_of_btech2").style.display = "none"
        let content_div = document.getElementById("creating_div_using_js_of_b_tech");
        let content_div2 = document.getElementById("creating_div_using_js_of_b_tech2");
        if (data.error_of_blog == "No Data Found") {
            let xyz=document.querySelectorAll("#this_is_error_heding")
            xyz.forEach(item => item.style.display="block")
            content_div.style.display="none"
            content_div2.style.display="none"
        }
        else {
            
            let b_tech_blogs_of_link = data.backend_respons_of_b_tech; // main blog page
            //in data base select check box model data
            let b_tech_blogs_of_check_model_1_html = data.b_tech_check_model_1; 
            let b_tech_blogs_of_check_model_2_blog_post = data.b_tech_check_model_2; 
            let b_tech_blogs_of_check_model_3_btech = data.b_tech_check_model_3; 

            content_div.style.display="block"
            content_div2.style.display="block"
            content_div.innerHTML = "";
            content_div2.innerHTML = "";
            let total_count=data.count_link_blog+b_tech_blogs_of_check_model_1_html.length+b_tech_blogs_of_check_model_2_blog_post.length+b_tech_blogs_of_check_model_3_btech.length
            document.getElementById("heding_and_total_colage").innerHTML = `${data_link} : Found ${total_count} Colleges`
            // this is main blog of b_tech 
            
            b_tech_blogs_of_link.forEach((blogs_btech) => {

                const element_of_inner_div = `
                <div class="single-event-list mt-30 p-0">
                    <div class="event-thum">
                        <a href="colleges/${blogs_btech.fields.engineering_htmlbcslug}">
                            <img src="/media/${blogs_btech.fields.engineering_post_image}"
                                class="img-fluid rounded-start p-2"
                                alt="${blogs_btech.fields.engineering_post_alt_name}" id="card_image_blog_mg">
                        </a>
                    </div>
                    <div class="event-cont mx-1">
                        <a class="d-flex mt-3" href="colleges/${blogs_btech.fields.engineering_htmlbcslug}">
                            <span><img src="/media/${blogs_btech.fields.engineering_college_logo}" class="img-fluid"
                                    alt="${blogs_btech.fields.engineering_college_logo_alt_name}"
                                    style="width:50px;height:50px"></span>
                            <p>${blogs_btech.fields.engineering_post_title}</p>
                        </a>
                        <div class="mx-4">
                            <span><i class="fa fa-clock-o"></i><span class="fw-bold">offer
                                </span>${blogs_btech.fields.courses_offered}</span>
                            <span><i class="fa fa-map-marker"></i> ${blogs_btech.fields.location}</span>
                            <span>${blogs_btech.fields.collage_type}</span>
                            <span><i class="fa-solid fa-star"
                                    style="color: #ffd43b;"></i>${blogs_btech.fields.reting}</span>


                            <span><span class="fw-bold">Total Fees Range
                                </span>₹${blogs_btech.fields.total_fees_range}</span>
                            <span><span class="fw-bold">Average
                                    Package</span>₹${blogs_btech.fields.average_package}</span>
                        </div>

                        <div id="new_card_btn" class="">
                            <button id="compare_btn" class="btn"
                                onclick="return openmmodal('${blogs_btech.fields.engineering_post_title}')"><i
                                    class="fa-solid fa-copy"></i> compare</button>
                            <button id="compare_btn_downlode"
                                onclick="return openmmodal('${blogs_btech.fields.engineering_post_title}')" class="btn">
                                <i class="fa-solid fa-download"></i>
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            `;
            const element_of_inner_div2=`
            <div class="single-blog mt-30">
                                        <div class="blog-thum">
                                            <a href="colleges/${blogs_btech.fields.engineering_htmlbcslug}">
                                                <img src="/media/${blogs_btech.fields.engineering_post_image}"
                                                    class="img-fluid rounded-start"
                                                    alt="${blogs_btech.fields.engineering_post_alt_name}">
                                            </a>
                                        </div>
                                        <div class="blog-cont">
                                            <a href="colleges/${blogs_btech.fields.engineering_htmlbcslug}">
                                                <h4>${blogs_btech.fields.engineering_post_title}</h4>
                                            </a>

                                            <ul>
                                                <li><a href="#"><i class="fa fa-clock-o"></i><span
                                                            class="fw-bold">offer</span> ${blogs_btech.fields.courses_offered}</a></li>
                                                <li><a href="#"><i class="fa fa-clock-o"></i><span class="fw-bold">offer
                                                        </span> ${blogs_btech.fields.courses_offered}</a></li>
                                                <li><a href="#"><i class="fa fa-map-marker"></i> ${blogs_btech.fields.location}</a></li>
                                                <li><a href="#"><i class="fa-solid fa-star"
                                                            style="color: #ffd43b;"></i>${blogs_btech.fields.reting}</a></li>
                                                <li><a href="#"><span class="fw-bold">Total Fees Range </span>
                                                        ₹${blogs_btech.fields.total_fees_range}</a></li>
                                                <li><a href="#"><span class="fw-bold">Type </span> ${blogs_btech.fields.collage_type}</a>
                                                </li>
                                                <li><a href="#"><span class="fw-bold">Average
                                                            Package</span> ₹${blogs_btech.fields.average_package}</a></li>
                                            </ul>
                                            <p>${blogs_btech.fields.engineering_post_meta_discreption}</p>
                                        </div>
                                    </div>
            `
                content_div.insertAdjacentHTML('beforeend', element_of_inner_div);
                content_div2.insertAdjacentHTML('beforeend', element_of_inner_div2);

            });

           

            // this is check box data from data base 
            // number 1 

            b_tech_blogs_of_check_model_2_blog_post.forEach((blogs_btech) => {

                const element_of_inner_div = `
         

                <div class="single-event-list mt-30 p-0">
                    <div class="event-thum">
                        <a href="colleges/${blogs_btech.fields.slug}">
                            <img src="/media/${blogs_btech.fields.blog_image}"
                                class="img-fluid rounded-start p-2"
                                alt="${blogs_btech.fields.image_alt_name}" id="card_image_blog_mg">
                        </a>
                    </div>
                    <div class="event-cont mx-1">
                        <a class="d-flex mt-3" href="colleges/${blogs_btech.fields.slug}">
                            <p>${blogs_btech.fields.meta_title}</p>
                        </a>
                        

                        <div id="new_card_btn" class="">
                            <button id="compare_btn" class="btn"
                                onclick="return openmmodal('${blogs_btech.fields.meta_title}')"><i
                                    class="fa-solid fa-copy"></i> compare</button>
                            <button id="compare_btn_downlode"
                                onclick="return openmmodal('${blogs_btech.fields.meta_title}')" class="btn">
                                <i class="fa-solid fa-download"></i>
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            `;
            const element_of_inner_div2=`
            <div class="single-blog mt-30">
                                        <div class="blog-thum">
                                            <a href="colleges/${blogs_btech.fields.slug}">
                                                <img src="/media/${blogs_btech.fields.blog_image}"
                                                    class="img-fluid rounded-start"
                                                    alt="${blogs_btech.fields.image_alt_name}">
                                            </a>
                                        </div>
                                        <div class="blog-cont">
                                            <a href="colleges/${blogs_btech.fields.slug}">
                                                <h4>${blogs_btech.fields.meta_title}</h4>
                                            </a>
                                            <p>${blogs_btech.fields.meta_description}</p>
                                        </div>
                                    </div>
            `
                content_div.insertAdjacentHTML('beforeend', element_of_inner_div);
                content_div2.insertAdjacentHTML('beforeend', element_of_inner_div2);

            });

            //  number 2

            b_tech_blogs_of_check_model_1_html.forEach((blogs_btech) => {

                const element_of_inner_div = `
                <div class="single-event-list mt-30 p-0">
                                        <div class="event-thum">
                                            <a href="/${blogs_btech.fields.htmlbcslug}">
                                                <img src="/media/${blogs_btech.fields.post_image}"
                                                    class="img-fluid rounded-start p-2"
                                                    alt="${blogs_btech.fields.post_alt_name}" id="card_image_blog_mg">
                                            </a>
                                        </div>
                                        <div class="event-cont mx-1">
                                            <a class="d-flex mt-3" href="/${blogs_btech.fields.htmlbcslug}">
                                                <p class="fw-bold">${blogs_btech.fields.post_title.slice(0, 60)}</p>
                                            </a>
                                            <p class="">${blogs_btech.fields.post_meta_discreption.slice(0, 150)}</p>
                                            

                                            <div id="new_card_btn" class="">
                                                <button id="compare_btn" class="btn"
                                                    onclick="return openmmodal('${blogs_btech.fields.post_title}')"><i
                                                        class="fa-solid fa-copy"></i> compare</button>
                                                <button id="compare_btn_downlode"
                                                    onclick="return openmmodal('${blogs_btech.fields.post_title}}')"
                                                    class="btn">
                                                    <i class="fa-solid fa-download"></i>
                                                    Download
                                                </button>
                                            </div>
                                        </div>

                                    </div>
            `;
                    const element_of_inner_div2 = `
            <div class="single-blog mt-30">
            <div class="blog-thum">
                <a href="/${blogs_btech.fields.htmlbcslug}">
                    <img src="/media/${blogs_btech.fields.post_image}"
                        class="img-fluid rounded-start"
                        alt="${blogs_btech.fields.post_alt_name}">
                </a>
            </div>
            <div class="blog-cont">
                <a href="/${blogs_btech.fields.htmlbcslug}">
                    <h4>${blogs_btech.fields.post_title.slice(0, 65)}</h4>
                </a>

                <ul>
                    <li><a href="#"><i class="fa fa-calendar"></i>${blogs_btech.fields.date}</a></li>
                    <li><a href="#"><i class="fa fa-user"></i>${blogs_btech.fields.author}</a></li>

                </ul>
                <p>${blogs_btech.fields.post_meta_discreption.slice(0, 150)}</p>
            </div>
        </div>
            `
                    content_div.insertAdjacentHTML('beforeend', element_of_inner_div);
                    content_div2.insertAdjacentHTML('beforeend', element_of_inner_div2);

                });


            // number 3 
            b_tech_blogs_of_check_model_3_btech.forEach((blogs_btech) => {

                const element_of_inner_div = `
           
                <div class="single-event-list mt-30 p-0">
                
                    <div class="event-thum">
                        <a href="colleges/${blogs_btech.fields.engineering_htmlbcslug}">
                            <img src="/media/${blogs_btech.fields.engineering_post_image}"
                                class="img-fluid rounded-start p-2"
                                alt="${blogs_btech.fields.engineering_post_alt_name}" id="card_image_blog_mg">
                        </a>
                    </div>
                    <div class="event-cont mx-1">
                        <a class="d-flex mt-3" href="colleges/${blogs_btech.fields.engineering_htmlbcslug}">
                            <span><img src="/media/${blogs_btech.fields.engineering_college_logo}" class="img-fluid"
                                    alt="${blogs_btech.fields.engineering_college_logo_alt_name}"
                                    style="width:50px;height:50px"></span>
                            <p>${blogs_btech.fields.engineering_post_title}</p>
                        </a>
                        <div class="mx-4">
                            <span><i class="fa fa-clock-o"></i><span class="fw-bold">offer
                                </span>${blogs_btech.fields.courses_offered}</span>
                            <span><i class="fa fa-map-marker"></i> ${blogs_btech.fields.location}</span>
                            <span>${blogs_btech.fields.collage_type}</span>
                            <span><i class="fa-solid fa-star"
                                    style="color: #ffd43b;"></i>${blogs_btech.fields.reting}</span>


                            <span><span class="fw-bold">Total Fees Range
                                </span>₹${blogs_btech.fields.total_fees_range}</span>
                            <span><span class="fw-bold">Average
                                    Package</span>₹${blogs_btech.fields.average_package}</span>
                        </div>

                        <div id="new_card_btn" class="">
                            <button id="compare_btn" class="btn"
                                onclick="return openmmodal('${blogs_btech.fields.engineering_post_title}')"><i
                                    class="fa-solid fa-copy"></i> compare</button>
                            <button id="compare_btn_downlode"
                                onclick="return openmmodal('${blogs_btech.fields.engineering_post_title}')" class="btn">
                                <i class="fa-solid fa-download"></i>
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            `;
            const element_of_inner_div2=`
            <div class="single-blog mt-30">
                                        <div class="blog-thum">
                                            <a href="colleges/${blogs_btech.fields.engineering_htmlbcslug}">
                                                <img src="/media/${blogs_btech.fields.engineering_post_image}"
                                                    class="img-fluid rounded-start"
                                                    alt="${blogs_btech.fields.engineering_post_alt_name}">
                                            </a>
                                        </div>
                                        <div class="blog-cont">
                                            <a href="colleges/${blogs_btech.fields.engineering_htmlbcslug}">
                                                <h4>${blogs_btech.fields.engineering_post_title}</h4>
                                            </a>

                                            <ul>
                                                <li><a href="#"><i class="fa fa-clock-o"></i><span
                                                            class="fw-bold">offer</span> ${blogs_btech.fields.courses_offered}</a></li>
                                                <li><a href="#"><i class="fa fa-clock-o"></i><span class="fw-bold">offer
                                                        </span> ${blogs_btech.fields.courses_offered}</a></li>
                                                <li><a href="#"><i class="fa fa-map-marker"></i> ${blogs_btech.fields.location}</a></li>
                                                <li><a href="#"><i class="fa-solid fa-star"
                                                            style="color: #ffd43b;"></i>${blogs_btech.fields.reting}</a></li>
                                                <li><a href="#"><span class="fw-bold">Total Fees Range </span>
                                                        ₹${blogs_btech.fields.total_fees_range}</a></li>
                                                <li><a href="#"><span class="fw-bold">Type </span> ${blogs_btech.fields.collage_type}</a>
                                                </li>
                                                <li><a href="#"><span class="fw-bold">Average
                                                            Package</span> ₹${blogs_btech.fields.average_package}</a></li>
                                            </ul>
                                            <p>${blogs_btech.fields.engineering_post_meta_discreption}</p>
                                        </div>
                                    </div>
            `
                content_div.insertAdjacentHTML('beforeend', element_of_inner_div);
                content_div2.insertAdjacentHTML('beforeend', element_of_inner_div2);

            });
            window.location.href="#creating_div_using_js_of_b_tech"

        }
    });
}
