const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const login_btn = document.querySelector("#login_btn");

login_btn.addEventListener("click",login);


function login() {
    const req = {
        id: id.value,
        pw: pw.value
    }
    console.log(req)
};
