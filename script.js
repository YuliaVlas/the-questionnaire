const form = document.querySelector(".form");
const notification = document.getElementById("notification");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const secondName = document.getElementById("secondName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const agree = document.getElementById("agree").checked;

    fetch("https://polinashneider.space/user", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer: YuliaVlas", 
        },
        body: JSON.stringify({
            name,
            secondName,
            phone,
            email,
            agree,
        }),
    })
        .then(response => response.json())

        .then(data => {
            notification.textContent = "Данные успешно отправлены!";
            notification.classList.remove("hidden");
            notification.classList.add("success");

            form.reset();

            setTimeout(() => {
              notification.classList.add("hidden");
              notification.classList.remove("success");
              notification.textContent = "";
          }, 3000);
        })
        .catch(error => {
            notification.textContent = `Ошибка: ${error.message}`;
            notification.classList.remove("hidden");
            notification.classList.add("error");
        });
});