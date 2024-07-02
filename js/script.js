function kirim() {
    let form_name = document.querySelector("#form_name");
    let target_name = document.querySelector("#target_name");
    let form_availability = document.querySelector("#form_availability");
    let target_availability = document.querySelector("#target_availability");
    let form_role = document.querySelector("#form_role");
    let target_role = document.querySelector("#target_role");
    let form_age = document.querySelector("#form_age");
    let target_age = document.querySelector("#target_age");
    let form_location = document.querySelector("#form_location");
    let target_location = document.querySelector("#target_location");
    let form_experience = document.querySelector("#form_experience");
    let target_experience = document.querySelector("#target_experience");
    let form_email = document.querySelector("#form_email");
    let target_email = document.querySelector("#target_email");
    let form_el = document.querySelector("#theform");

    target_name.innerText = form_name.value;
    target_availability.innerText = form_availability.value;
    target_role.innerText = form_role.value;
    target_age.innerText = form_age.value;
    target_location.innerText = form_location.value;
    target_experience.innerText = form_experience.value;
    target_email.innerText = form_email.value;
    form_el.style.display = "none";
}

function show_form() {
    let form_el = document.querySelector("#theform")

    form_el.style.display = "block";
}

// function tes(){
//     console.log("test");
//   }