function length_of_popup_heding(txt){h_tag_text=document.getElementById("title_from_blog")
let a=txt.substring(0,50)
h_tag_text.innerHTML=a}
function openmmodal(id){const title0=document.getElementById("title_from_blog")
const logoimage=document.getElementById("logo_image_from_blog")
$('#exampleModal').modal('show');$.ajax({type:"post",url:"/hello_wrold",data:{uuido:id,csrfmiddlewaretoken:$("input[name=csrfmiddlewaretoken]").val()},success:function(res){length_of_popup_heding(res.blog_title)
logoimage.src=res.mg_logo
logoimage.alt=res.logo_alt_name}})}
function card_dwo(){const f_name=document.getElementById("f_name").value
const l_name=document.getElementById("l_name").value
const Email=document.getElementById("Email").value
const phone_number=document.getElementById("phone_number").value
const city=document.getElementById("city").value
const er=document.getElementById("alerts_er")
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;const phoneNumberPattern=/^[0-9]{10}$/;if(f_name===""){er.innerHTML="Please Enter First Name"
er.style.display="block"}
else if(l_name===""){er.innerHTML="Please Enter Last Name"
er.style.display="block"}
else if(Email===""){er.innerHTML="Please Enter Email"
er.style.display="block"}
else if(!emailPattern.test(Email)){er.innerHTML="Invalid email address";er.style.display="block"}
else if(!phoneNumberPattern.test(phone_number)){er.innerHTML="Invalid phone number. Enter a 10-digit number without spaces or special characters.";er.style.display="block"}
else if(city===""){er.innerHTML="Please enter your city name"}
else{er.style.display="none"
$.ajax({type:"post",url:"/hello_wrold",data:{f_name:f_name,l_name:l_name,Email:Email,phone_number:phone_number,city:city,csrfmiddlewaretoken:$("input[name=csrfmiddlewaretoken]").val()},success:function(data){if(data==="Your Request Sended Successfully"){swal({title:"Register Now To Apply",text:data,icon:"warning",button:"continue",}).then(()=>{window.location.reload();});}
else if(data==="Submit Successfully"){swal({title:"Register Now To Apply",text:"Form submit successfully",icon:"success",button:"continue",}).then(()=>{window.location.reload();});}
else{swal({title:"Register Now To Apply",text:"Please try again",icon:"error",button:"continue",}).then(()=>{window.location.reload();});}}})}};function btech_jsfunck_oflinks(data_link){fetch("/b-tech",{method:"POST",body:JSON.stringify({"link_data":data_link}),headers:{"X-CSRFToken":document.querySelector("input[name=csrfmiddlewaretoken]").value}}).then(data=>data.json()).then((data)=>{document.getElementById("total_blog_of_btech").style.display="none"
document.getElementById("total_blog_of_btech2").style.display="none"
let content_div=document.getElementById("creating_div_using_js_of_b_tech");let content_div2=document.getElementById("creating_div_using_js_of_b_tech2");if(data.error_of_blog=="No Data Found"){let xyz=document.querySelectorAll("#this_is_error_heding")
xyz.forEach(item=>item.style.display="block")
content_div.style.display="none"
content_div2.style.display="none"}
else{let b_tech_blogs_of_link=data.backend_respons_of_b_tech;let b_tech_blogs_of_check_model_1_html=data.b_tech_check_model_1;let b_tech_blogs_of_check_model_2_blog_post=data.b_tech_check_model_2;let b_tech_blogs_of_check_model_3_btech=data.b_tech_check_model_3;content_div.style.display="block"
content_div2.style.display="block"
content_div.innerHTML="";content_div2.innerHTML="";let total_count=data.count_link_blog+b_tech_blogs_of_check_model_1_html.length+b_tech_blogs_of_check_model_2_blog_post.length+b_tech_blogs_of_check_model_3_btech.length
document.getElementById("heding_and_total_colage").innerHTML=`${data_link} : Found ${total_count} Colleges`
b_tech_blogs_of_link.forEach((blogs_btech)=>{const element_of_inner_div=`
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
            `;const element_of_inner_div2=`
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
content_div.insertAdjacentHTML('beforeend',element_of_inner_div);content_div2.insertAdjacentHTML('beforeend',element_of_inner_div2);});b_tech_blogs_of_check_model_2_blog_post.forEach((blogs_btech)=>{const element_of_inner_div=`
         

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
            `;const element_of_inner_div2=`
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
content_div.insertAdjacentHTML('beforeend',element_of_inner_div);content_div2.insertAdjacentHTML('beforeend',element_of_inner_div2);});b_tech_blogs_of_check_model_1_html.forEach((blogs_btech)=>{const element_of_inner_div=`
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
            `;const element_of_inner_div2=`
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
content_div.insertAdjacentHTML('beforeend',element_of_inner_div);content_div2.insertAdjacentHTML('beforeend',element_of_inner_div2);});b_tech_blogs_of_check_model_3_btech.forEach((blogs_btech)=>{const element_of_inner_div=`
           
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
            `;const element_of_inner_div2=`
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
content_div.insertAdjacentHTML('beforeend',element_of_inner_div);content_div2.insertAdjacentHTML('beforeend',element_of_inner_div2);});window.location.href="#creating_div_using_js_of_b_tech"}});};function isValidEmail(email){const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return emailRegex.test(email);}
function coment_js_form(blog_id){let coment_user_name=document.getElementById("coment_user_name").value
let coment_user_email=document.getElementById("coment_user_email").value
let coment_user_text=document.getElementById("coment_user_text").value
if(coment_user_name===""){swal({title:"Comment",text:"Please Enter Name",icon:"error",button:"continue",});}
else if(coment_user_email===""){swal({title:"Comment",text:"Please Enter Email",icon:"error",button:"continue",});}
else if(!isValidEmail(coment_user_email)){swal({title:"Comment",text:"Please enter a valid email address.",icon:"error",button:"continue",});}
else if(coment_user_text===""){swal({title:"Comment",text:"Please Enter Your Comment",icon:"error",button:"continue",});}
else{let currentUrl=window.location.href;data={coment_user_name:coment_user_name,coment_user_email:coment_user_email,coment_user_text:coment_user_text,blog_slug:blog_id,blogurl:currentUrl,}
fetch("/adminsion_data_form",{method:"POST",body:JSON.stringify(data),headers:{"X-CSRFToken":document.querySelector("input[name=csrfmiddlewaretoken]").value}}).then(data=>data.json()).then((data)=>{swal({title:"Comment",text:data.coment_success,icon:"success",button:"continue",}).then(()=>window.location.reload())})}};function mbbs_jsfunck_oflinks(data_link){fetch("/mbbs",{method:"POST",body:JSON.stringify({"link_data":data_link}),headers:{"X-CSRFToken":document.querySelector("input[name=csrfmiddlewaretoken]").value}}).then(data=>data.json()).then((data)=>{document.getElementById("total_blog_of_btech").style.display="none"
document.getElementById("total_blog_of_btech2").style.display="none"
let content_div=document.getElementById("creating_div_using_js_of_b_tech");let content_div2=document.getElementById("creating_div_using_js_of_b_tech2");if(data.error_of_blog=="No Data Found"){let xyz=document.querySelectorAll("#this_is_error_heding")
xyz.forEach(item=>item.style.display="block")
content_div.style.display="none"
content_div2.style.display="none"}
else{let b_tech_blogs_of_link=data.backend_respons_of_b_tech;let b_tech_blogs_of_check_model_1_html=data.b_tech_check_model_1;let b_tech_blogs_of_check_model_2_blog_post=data.b_tech_check_model_2;let b_tech_blogs_of_check_model_3_btech=data.b_tech_check_model_3;content_div.style.display="block"
content_div2.style.display="block"
content_div.innerHTML="";content_div2.innerHTML="";let total_count=data.count_link_blog+b_tech_blogs_of_check_model_1_html.length+b_tech_blogs_of_check_model_2_blog_post.length+b_tech_blogs_of_check_model_3_btech.length
document.getElementById("heding_and_total_colage").innerHTML=`${data_link} : Found ${total_count} Colleges`
b_tech_blogs_of_link.forEach((blogs_btech)=>{const element_of_inner_div=`
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
            `;const element_of_inner_div2=`
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
content_div.insertAdjacentHTML('beforeend',element_of_inner_div);content_div2.insertAdjacentHTML('beforeend',element_of_inner_div2);});b_tech_blogs_of_check_model_2_blog_post.forEach((blogs_btech)=>{const element_of_inner_div=`
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
            `;const element_of_inner_div2=`
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
content_div.insertAdjacentHTML('beforeend',element_of_inner_div);content_div2.insertAdjacentHTML('beforeend',element_of_inner_div2);});b_tech_blogs_of_check_model_1_html.forEach((blogs_btech)=>{const element_of_inner_div=`
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
            `;const element_of_inner_div2=`
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
content_div.insertAdjacentHTML('beforeend',element_of_inner_div);content_div2.insertAdjacentHTML('beforeend',element_of_inner_div2);});b_tech_blogs_of_check_model_3_btech.forEach((blogs_btech)=>{const element_of_inner_div=`
              
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
            `;const element_of_inner_div2=`
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
content_div.insertAdjacentHTML('beforeend',element_of_inner_div);content_div2.insertAdjacentHTML('beforeend',element_of_inner_div2);});window.location.href="#creating_div_using_js_of_b_tech"}});};function mbbs_search_bard_state_city(){let search_np=document.getElementById("mbss_top_state_citysearch_input").value
let ul_list_state_city=document.querySelectorAll("#mbss_state_city_list li")
ul_list_state_city.forEach((elemen)=>{let atagtext=elemen.textContent.toLowerCase()
let search_text=search_np.toLowerCase()
if(atagtext.includes(search_text)){elemen.style.display="block"}
else{elemen.style.display="none"}});}
function mbbs_search_neet2023(){let search_np=document.getElementById("mbbs_neet2023_search_input").value
let ul_list_state_city=document.querySelectorAll("#mbbs_neet2023_list li")
ul_list_state_city.forEach((elemen)=>{let atagtext=elemen.textContent.toLowerCase()
let search_text=search_np.toLowerCase()
if(atagtext.includes(search_text)){elemen.style.display="block"}
else{elemen.style.display="none"}});}
function mbbs_abroud_search_btechexam(){let search_np=document.getElementById("mbbs_abroud_search_input").value
let ul_list_state_city=document.querySelectorAll("#mbbs_abroud_list li")
ul_list_state_city.forEach((elemen)=>{let atagtext=elemen.textContent.toLowerCase()
let search_text=search_np.toLowerCase()
if(atagtext.includes(search_text)){elemen.style.display="block"}
else{elemen.style.display="none"}});}
function mbbs_college_type_adms_search_bar(){let search_np=document.getElementById("mbbs_college_type_adms_search_input").value
let ul_list_state_city=document.querySelectorAll("#mbbs_college_type_admslist li")
ul_list_state_city.forEach((elemen)=>{let atagtext=elemen.textContent.toLowerCase()
let search_text=search_np.toLowerCase()
if(atagtext.includes(search_text)){elemen.style.display="block"}
else{elemen.style.display="none"}});}
function search_bard_cuttoff_mbbs(){let search_np=document.getElementById("cuttoff_mbbs_search_input").value
let ul_list_state_city=document.querySelectorAll("#cuttoff_mbbs_list li")
ul_list_state_city.forEach((elemen)=>{let atagtext=elemen.textContent.toLowerCase()
let search_text=search_np.toLowerCase()
if(atagtext.includes(search_text)){elemen.style.display="block"}
else{elemen.style.display="none"}});}
function mbbs_neet_ug_search_bard(){let search_np=document.getElementById("mbbs_neet_ug_search_input").value
let ul_list_state_city=document.querySelectorAll("#mbbs_neet_uglist li")
ul_list_state_city.forEach((elemen)=>{let atagtext=elemen.textContent.toLowerCase()
let search_text=search_np.toLowerCase()
if(atagtext.includes(search_text)){elemen.style.display="block"}
else{elemen.style.display="none"}});}
function mbbs_neet_ug_ayush_search_bard(){let search_np=document.getElementById("mbbs_neet_ug_ayush_search_input").value
let ul_list_state_city=document.querySelectorAll("#mbbs_neet_ug_ayushlist li")
ul_list_state_city.forEach((elemen)=>{let atagtext=elemen.textContent.toLowerCase()
let search_text=search_np.toLowerCase()
if(atagtext.includes(search_text)){elemen.style.display="block"}
else{elemen.style.display="none"}});}
function mbbs_neet_pg_search_bard_(){let search_np=document.getElementById("mbbs_neet_pg_search_input").value
let ul_list_state_city=document.querySelectorAll("#mbbs_neet_pglist li")
ul_list_state_city.forEach((elemen)=>{let atagtext=elemen.textContent.toLowerCase()
let search_text=search_np.toLowerCase()
if(atagtext.includes(search_text)){elemen.style.display="block"}
else{elemen.style.display="none"}});}
function mbbs_neet_pg_ayush_search_bard(){let search_np=document.getElementById("mbbs_neet_pg_ayush_search_input").value
let ul_list_state_city=document.querySelectorAll("#mbbs_neet_pg_ayushlist li")
ul_list_state_city.forEach((elemen)=>{let atagtext=elemen.textContent.toLowerCase()
let search_text=search_np.toLowerCase()
if(atagtext.includes(search_text)){elemen.style.display="block"}
else{elemen.style.display="none"}});};document.getElementById("number").addEventListener("input",function(){this.value=this.value.replace(/\D/g,'').slice(0,10);});function letest_update(){let user_name=document.getElementById("name").value;let number=document.getElementById("number").value;let email=document.getElementById("email").value;if(user_name===""){swal({title:"Name is required!",icon:"error",button:"continue",});}
else if(email===""){swal({title:"Email address is required!",icon:"error",button:"continue",});}
else if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){swal({title:"Please enter a valid email address!",icon:"error",button:"continue",});}
else if(number===""){swal({title:"Number is required!",icon:"error",button:"continue",});}
else if(number.length!==10){swal({title:"Please enter a valid 10-digit number!",icon:"error",button:"continue",});}
else{data={name:user_name,number_phone:number,user_email:email}
fetch("/",{method:"POST",body:JSON.stringify(data),headers:{"X-CSRFToken":document.querySelector("input[name=csrfmiddlewaretoken]").value}}).then(response=>response.json()).then((data)=>{swal({title:"Request Submit Successfully",text:data.formsave_,icon:"success",button:"continue",});}).catch(error=>console.error('Error:',error));}};