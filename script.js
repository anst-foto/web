function submitForm() {
    let firstname = document.getElementById("firstname");
    let middlename = document.getElementById("middlename");
    let lastname = document.getElementById("lastname");
    let dateOfBirth = document.getElementById("dateOfBirth");
    let age = 0;


    if (firstname.value === "" || lastname.value === "") {
        firstname.classList.add("error");
        lastname.classList.add("error");
        alert("Заполните все поля!");
    } else {
        firstname.classList.remove("error");
        lastname.classList.remove("error");
        let birthDate = new Date(dateOfBirth.value);
        let today = new Date();
        age = today.getFullYear() - birthDate.getFullYear();
        if (birthDate > today) {
            dateOfBirth.classList.add("error");
            alert("Дата рождения не может быть из будущего!");
        } else {
            dateOfBirth.classList.remove("error");
        }
    }

    let output = document.getElementById("output");
    output.innerHTML =
        `
        <p>Имя: ${firstname.value} ${middlename.value} ${lastname.value}</p>
        <p>Возраст: ${age} лет</p>
        `
    }