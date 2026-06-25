let currentStep = 1;

function nextStep() {
    document.getElementById("step" + currentStep)
        .classList.remove("active");

    currentStep++;

    document.getElementById("step" + currentStep)
        .classList.add("active");
}

function showReview() {

    let fullName =
        document.getElementById("fullName").value;

    let phone =
        document.getElementById("phone").value;

    let county =
        document.getElementById("county").value;

    let idNumber =
        document.getElementById("idNumber").value;

    let email =
        document.getElementById("email").value;

    let category =
        document.getElementById("category").value;

    let source =
        document.getElementById("source").value;

    let occupation =
        document.getElementById("occupation").value;

    document.getElementById("review").innerHTML = `
        <strong>Full Name:</strong> ${fullName}<br>
        <strong>Phone:</strong> ${phone}<br>
        <strong>County:</strong> ${county}<br>
        <strong>ID Number:</strong> ${idNumber}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Category:</strong> ${category}<br>
        <strong>Source:</strong> ${source}<br>
        <strong>Occupation:</strong> ${occupation}
    `;

    nextStep();
}

function submitWhatsApp() {

    let fullName =
        document.getElementById("fullName").value;

    let phone =
        document.getElementById("phone").value;

    let county =
        document.getElementById("county").value;

    let idNumber =
        document.getElementById("idNumber").value;

    let email =
        document.getElementById("email").value;

    let category =
        document.getElementById("category").value;

    let source =
        document.getElementById("source").value;

    let occupation =
        document.getElementById("occupation").value;

    let message =
`PIONEER SUPPORT FUNDS APPLICATION

Full Name: ${fullName}
Phone Number: ${phone}
County: ${county}
ID Number: ${idNumber}
Email: ${email}
Category: ${category}
Occupation: ${occupation}
Source: ${source}`;

    let whatsapp =
`https://wa.me/254753016569?text=${encodeURIComponent(message)}`;

    window.open(whatsapp, "_blank");
}
