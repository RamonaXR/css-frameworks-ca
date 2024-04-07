import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";

router();

function removeClass() {
    let screenWidth = window.innerWidth;
    const buttonsNav = document.querySelectorAll("nav a span");
    buttonsNav.forEach(btn => {
        if (screenWidth > "768") {
            btn.classList.remove("visually-hidden-custom");
        }
        if (screenWidth < "769") {
            btn.classList.add("visually-hidden-custom");
        }
    });
}



function router() {
    switch(location.pathname) {
        case "/profile/":
        case "/feed/":
            window.addEventListener("resize", () => {
                removeClass();
            } );
    }
}
