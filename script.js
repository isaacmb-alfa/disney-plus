document.addEventListener("DOMContentLoaded", function () {

    // Selecciona todos los elementos <video> en la página
    const videos = document.querySelectorAll("video");
    let sliderInner = document.querySelector(".slider-inner");
    let images = sliderInner.querySelectorAll("img");
    const search = document.querySelector(".search-button");

    let index = 0;

    function moveToRight() {
        let percentage = index * -100;
        let imageActive = images[index];

        if (images.length == 0) {
            images[1].classList.add('activo');
        }

        // Restablecer el índice si excede la longitud de la matriz de imágenes
        if (index >= images.length) {
            index = 0;
            percentage = 0;
            sliderInner.style.transition = "none";
            sliderInner.style.transform = "translateX(" + percentage + "%)";
            return;
        }

        // Elimina la clase 'activo' de la imagen activa anterior
        images.forEach(image => image.classList.remove('activo'));
        // console.log(images[index], index);

        // Agrega la clase 'activo' a la imagen actual y mueve el control deslizante
        imageActive.classList.add('activo');
        sliderInner.style.transition = "all ease-in .5s";
        sliderInner.style.transform = "translateX(" + percentage + "%)";

        // Move to the next image index
        index++;
    }

    setInterval(moveToRight, 3000);


    videos.forEach(video => {
        let card = video.parentElement;
   
        // Agrega un evento 'mouseenter' a cada <video>
        card.addEventListener("mouseenter", function () {
            // Agrega el atributo autoplay al video
            video.setAttribute("autoplay", true);
            video.setAttribute("loop", true);
            // Reproduce el video
            video.play();
        });

        // Agrega un evento 'mouseleave' a cada <video>
        card.addEventListener("mouseleave", function () {
            // Remueve el atributo autoplay del video
            video.removeAttribute("autoplay");
            video.removeAttribute("loop");
            // Pausa el video
            video.pause();
        });
    });
    if(search){

    search.addEventListener('click', function(e){
        const barSearch = document.querySelector(".search");
        const barSearch2 = document.querySelector(".bar-search");
        const titleSearch = document.querySelector(".bar-search h2");
        console.log(barSearch, barSearch2, titleSearch);
        barSearch.classList.toggle("activo");
        barSearch2.classList.toggle("activo");
        titleSearch.classList.toggle("activo");
    });
    }
});