//variables generales
let vlrRating = 0;

// animacion #bg-card
gsap.from('#bg-card', {
    duration: 0.7,
    opacity: 0,
    y: -50,
    stagger: 0.5,
    ease: 'power1.out',
    delay: 1
});

gsap.to('#bg-card', {
    duration: 2,
    boxShadow: '0 0 40px 5px rgb(44,48,54)',
    repeat: -1,
    yoyo: true
});

// animacion de las estrellas

const stars = document.querySelectorAll('.bg-star-rating');

stars.forEach(function(star, index) {
    // recorremos cada estrella hasta el elemento seleccionado y le agregamos la clase checked
    star.addEventListener('click', function() {
        // obtenemos el index de la estrella seleccionada
        vlrRating = index + 1;
        
        //preguntamos si el elemento seleccionado tiene la clase checked
        if (star.classList.contains('checked')) {
            // tiene el checked
            //cambia el color de fondo a la estrella seleccionada
            for (let i = index + 1; i < stars.length; i++) {
                stars[i].classList.remove('checked');
                stars[i].querySelector('i').style.color = 'hsl(217, 12%, 63%)';
                stars[i].querySelector('i').classList.remove('fa-solid');
            }
        }
        else
        {
            // no tiene el checked
            for (let i = 0; i <= index; i++) {
                //cambiamos el color de fondo a la estrella seleccionada
                stars[i].classList.add('checked');
                //cambiamos el color del icono star a amarillo
                stars[i].querySelector('i').style.color = '#f1c40f';
                //cambiamos el icono de la estrella seleccionada
                stars[i].querySelector('i').classList.add('fa-solid');
            }
        }
    });
});

//ocultar el .content-1 y se muestre el .content-2
const btnSubmit = document.querySelector('#button-submit');
const content1 = document.querySelector('.content-1');
const content2 = document.querySelector('.content-2');

btnSubmit.addEventListener('click', function() {
    if (vlrRating == 0) {
        alert('Por favor califica el producto');
    } else {
        // animacion de salida del content-1
        gsap.to(content1, {
            duration: 0.5,
            opacity: 0,
            x: -10,
            stagger: 0.5,
            display: 'none',
            ease: 'power1.out',
            delay: 0.5
        });

        // animar el bg-card con una transicion para que cuando se desaparezca el content-1 y se vea el content-2 no cambie su tamaño bruscamente
        setTimeout(function() {
            gsap.to('#bg-card', {
                duration: 1,
                height: '40%',
                ease: 'power1.out',
                delay: 0.5
            });
        }, 200);
        // animacion de entrada del content-2
        //hacer la animacion de entrada del content-2 despues de 0.5 segundos
        setTimeout(function() {
            gsap.to(content2, {
                duration: 0.5,
                opacity: 1,
                x: 0,
                stagger: 0.5,
                display: 'block',
                ease: 'power1.out',
                delay: 0.5
            });
        }, 1500);

        // como mostrar texto html desde javascript a html
        const textRating = document.querySelector('.rating');
        textRating.innerHTML = `You qualified with ${vlrRating} <i class="fas fa-star"></i>`;
    }
});

// animacion de salida del content-2 y entrada del content-1 al darle clic al button-again
const btnAgain = document.querySelector('#button-again');

btnAgain.addEventListener('click', function() {
    // animacion de salida del content-2
    gsap.to(content2, {
        duration: 0.5,
        opacity: 0,
        x: -10,
        stagger: 0.5,
        display: 'none',
        ease: 'power1.out',
        delay: 0.5
    });

    // animar el bg-card con una transicion para que cuando se desaparezca el content-2 y se vea el content-1 no cambie su tamaño bruscamente
    setTimeout(function() {
        gsap.to('#bg-card', {
            duration: 1,
            height: '58%',
            ease: 'power1.out',
            delay: 0.5
        });
    }, 200);

    // animacion de entrada del content-1
    //hacer la animacion de entrada del content-1 despues de 1.5 segundos
    setTimeout(function() {
        gsap.to(content1, {
            duration: 0.5,
            opacity: 1,
            x: 0,
            stagger: 0.5,
            display: 'block',
            ease: 'power1.out',
            delay: 0.5
        });
    }, 1500);

    // limpiar las estrellas
    stars.forEach(function(star) {
        star.classList.remove('checked');
        star.querySelector('i').style.color = 'hsl(217, 12%, 63%)';
        star.querySelector('i').classList.remove('fa-solid');
    });
});

