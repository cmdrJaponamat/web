const nameInput = document.querySelector("#Name_input");
const subButton = document.querySelector("#Submit_input");
subButton.disabled = true;
let nameValue;

nameInput.addEventListener("input", () => {
        nameValue = nameInput.value;
        console.log(nameValue);
    }
)
nameInput.addEventListener("blur", () => {
        if (!nameValue || nameValue.length < 3) {
            nameInput.className = "input_error";
            if (!document.querySelector("#error_message")) {
                const p = document.createElement("p");
                p.id = "error_message";
                p.textContent = "Username must be more then 3 character.";
                document.querySelector("#name_input_container").append(p);
            }
        }
        else {
            nameInput.className = "";
            if (document.querySelector("#error_message")) {
                document.querySelector("#error_message").remove();
            }
        }
    }
)
const passInput = document.querySelector("#Password_input");
let passValue;
passInput.addEventListener("input", () => {
        passValue = passInput.value;
    }
)
passInput.addEventListener("blur", () => {
        if (!passValue || passValue.length < 5) {
            passInput.className = "input_error";
            if (!document.querySelector("#pass_error_message")) {
                const p = document.createElement("p");
                p.id = "pass_error_message";
                p.textContent = "Password must be more then 5 character.";
                document.querySelector("#pass_input_container").append(p);
            }
        }
        else {
            passInput.className = "";
            if (document.querySelector("#pass_error_message")) {
                document.querySelector("#pass_error_message").remove();
            }
        }
    }
)

subButton.addEventListener("mouseover", ()=> {
    document.body.style.backgroundColor = "2472C1FF";
    if (nameValue && passValue && nameValue.length>3 && passValue>5) {
        subButton.disabled = false;
        subButton.className = "";
    }
    else {
        subButton.className = "input_error";
        passInput.className = "input_error";
        nameInput.className = "input_error";
        subButton.disabled = true;
    }
})

function handler() {
    console.log("Hello world!");
}