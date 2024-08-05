const btns = document.querySelectorAll("button");

for (let btn of btns) {
    btn.addEventListener("click", (e) => {
        console.log("button was clicked");
    })
}