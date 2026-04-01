function search_bard_state_city(){let search_np=document.getElementById("top_state_citysearch_input").value
let ul_list_state_city=document.querySelectorAll("#state_city_list li")
ul_list_state_city.forEach((elemen)=>{let atagtext=elemen.textContent.toLowerCase()
let search_text=search_np.toLowerCase()
if(atagtext.includes(search_text)){elemen.style.display="block"}
else{elemen.style.display="none"}});}
function search_bard_colage(){let search_np=document.getElementById("college_search_input").value
let ul_list_state_city=document.querySelectorAll("#college_list li")
ul_list_state_city.forEach((elemen)=>{let atagtext=elemen.textContent.toLowerCase()
let search_text=search_np.toLowerCase()
if(atagtext.includes(search_text)){elemen.style.display="block"}
else{elemen.style.display="none"}});}
function search_bard_btechexam(){let search_np=document.getElementById("btechexam_search_input").value
let ul_list_state_city=document.querySelectorAll("#btechexam_list li")
ul_list_state_city.forEach((elemen)=>{let atagtext=elemen.textContent.toLowerCase()
let search_text=search_np.toLowerCase()
if(atagtext.includes(search_text)){elemen.style.display="block"}
else{elemen.style.display="none"}});}
function search_bard_cuttoff(){let search_np=document.getElementById("cutt_off_search_input").value
let ul_list_state_city=document.querySelectorAll("#cuttofullist li")
ul_list_state_city.forEach((elemen)=>{let atagtext=elemen.textContent.toLowerCase()
let search_text=search_np.toLowerCase()
if(atagtext.includes(search_text)){elemen.style.display="block"}
else{elemen.style.display="none"}});}
function validate(){let name=$("#name").val();let email=$("#email").val();let number=$("#number").val();let menu_corce=$("#menu_corce").val();let ms=$("#message").val()
console.log(ms)
if(name===""){$("#nameeer").text("Name is required!");}
else if(email===""){$("#emailerr").text("Email address is required!");}
else if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){$("#emailerr").text("Please enter a valid email address!");}
else if(number===""){$("#numbererr").text("Number is required!");}
else if(number.length!==10){$("#numbererr").text("Please enter a valid 10-digit number!");}
else if(menu_corce===""){$("#menuerr").text("Menu course is required!");}
else{$.ajax({type:"post",url:"/adminsion_data_form",data:{name:name,email:email,num:number,course:menu_corce,mass:ms,csrfmiddlewaretoken:$("input[name=csrfmiddlewaretoken]").val()},success:function(data){swal({title:"Admission Form",text:"Form submit successfully",icon:"success",button:"continue",});}})}};