const btn = document.getElementById("counter");
let count = 0;

btn.addEventListener("click", () => {
    count++;
    btn.textContent = count;
});