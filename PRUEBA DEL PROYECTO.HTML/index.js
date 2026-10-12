window.addEventListener("load", function () {

    console.log("Bienvenido a Librería Estudiantil JP");

});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

        topBtn.style.alignItems = "center";
        topBtn.style.justifyContent = "center";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ========================================
// ANIMACIÓN DE LAS SECCIONES
// ========================================

const secciones = document.querySelectorAll(".section");


const observer = new IntersectionObserver(

    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";

                entrada.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


secciones.forEach(function (seccion) {

    seccion.style.opacity = "0";

    seccion.style.transform =
        "translateY(40px)";

    seccion.style.transition =
        "opacity .8s ease, transform .8s ease";

    observer.observe(seccion);

});


// ========================================
// EFECTO EN LAS TARJETAS
// ========================================

const tarjetas =
    document.querySelectorAll(".card");


tarjetas.forEach(function (tarjeta) {

    tarjeta.addEventListener("mouseenter", function () {

        tarjeta.style.transform =
            "translateY(-10px)";

    });


    tarjeta.addEventListener("mouseleave", function () {

        tarjeta.style.transform =
            "translateY(0)";

    });

});


// ========================================
// VALIDACIÓN DEL FORMULARIO
// ========================================

const formulario =
    document.getElementById("formulario");


formulario.addEventListener("submit", function(e) {

    const nombre =
        formulario.querySelector(
            'input[name="nombre"]'
        ).value.trim();

    const correo =
        formulario.querySelector(
            'input[name="correo"]'
        ).value.trim();

    const asunto =
        formulario.querySelector(
            'input[name="asunto"]'
        ).value.trim();

    const mensaje =
        formulario.querySelector(
            'textarea[name="mensaje"]'
        ).value.trim();

    if (
        nombre === "" ||
        correo === "" ||
        asunto === "" ||
        mensaje === ""
    ) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    alert("Tu formulario se está enviando...");
});


// ========================================
// CERRAR MENSAJES CON ESC
// ========================================

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});