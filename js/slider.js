//Slider Guadalajara

const slider_Guadalajara = document.querySelector("#slider-Guadalajara");
let sliderSection_Guadalajara = document.querySelectorAll(".slider__section-Guadalajara");
let sliderSectionLast_Guadalajara = sliderSection_Guadalajara[sliderSection_Guadalajara.length -1];

const btnLeft_Guadalajara = document.querySelector("#btn-left-Guadalajara");
const btnRight_Guadalajara = document.querySelector("#btn-right-Guadalajara");

slider_Guadalajara.insertAdjacentElement('afterbegin', sliderSectionLast_Guadalajara);

function Next_Guadalajara(){
    let sliderSectionFirts_Guadalajara = document.querySelectorAll(".slider__section-Guadalajara")[0];
    slider_Guadalajara.style.marginLeft = "-200%";
    slider_Guadalajara.style.transition = "all 2s"; //Tiempo de transicion entre imagenes
    setTimeout(function(){
        slider_Guadalajara.style.transition = "none";
        slider_Guadalajara.insertAdjacentElement('beforeend', sliderSectionFirts_Guadalajara);
        slider_Guadalajara.style.marginLeft = "-100%";
    }, 2000); //Tiempo de transicion entre imagenes
}

function Prev_Guadalajara(){
    let sliderSection_Guadalajara = document.querySelectorAll(".slider__section-Guadalajara");
    let sliderSectionLast_Guadalajara = sliderSection_Guadalajara[sliderSection_Guadalajara.length -1];
    slider_Guadalajara.style.marginLeft = "0";
    slider_Guadalajara.style.transition = "all 2s"; //tiempo de transicion entre imagenes
    setTimeout(function(){
        slider_Guadalajara.style.transition = "none";
        slider_Guadalajara.insertAdjacentElement('afterbegin', sliderSectionLast_Guadalajara);
        slider_Guadalajara.style.marginLeft = "-100%";
    }, 2000); //Tiempo de transicion entre imagenes
}

btnRight_Guadalajara.addEventListener('click', function(){
    Next_Guadalajara();
});

btnLeft_Guadalajara.addEventListener('click', function(){
    Prev_Guadalajara();
});

//Slider Zapopan

const slider_Zapopan = document.querySelector("#slider-Zapopan");
let sliderSection_Zapopan = document.querySelectorAll(".slider__section-Zapopan");
let sliderSectionLast_Zapopan = sliderSection_Zapopan[sliderSection_Zapopan.length -1];

const btnLeft_Zapopan = document.querySelector("#btn-left-Zapopan");
const btnRight_Zapopan = document.querySelector("#btn-right-Zapopan");

slider_Zapopan.insertAdjacentElement('afterbegin', sliderSectionLast_Zapopan);

function Next_Zapopan(){
    let sliderSectionFirts_Zapopan = document.querySelectorAll(".slider__section-Zapopan")[0];
    slider_Zapopan.style.marginLeft = "-200%";
    slider_Zapopan.style.transition = "all 2s"; //Tiempo de transicion entre imagenes
    setTimeout(function(){
        slider_Zapopan.style.transition = "none";
        slider_Zapopan.insertAdjacentElement('beforeend', sliderSectionFirts_Zapopan);
        slider_Zapopan.style.marginLeft = "-100%";
    }, 2000); //Tiempo de transicion entre imagenes
}

function Prev_Zapopan(){
    let sliderSection_Zapopan = document.querySelectorAll(".slider__section-Zapopan");
    let sliderSectionLast_Zapopan = sliderSection_Zapopan[sliderSection_Zapopan.length -1];
    slider_Zapopan.style.marginLeft = "0";
    slider_Zapopan.style.transition = "all 2s"; //tiempo de transicion entre imagenes
    setTimeout(function(){
        slider_Zapopan.style.transition = "none";
        slider_Zapopan.insertAdjacentElement('afterbegin', sliderSectionLast_Zapopan);
        slider_Zapopan.style.marginLeft = "-100%";
    }, 2000); //Tiempo de transicion entre imagenes
}

btnRight_Zapopan.addEventListener('click', function(){
    Next_Zapopan();
});

btnLeft_Zapopan.addEventListener('click', function(){
    Prev_Zapopan();
});

//Slider Tlaquepaque

const slider_Tlaquepaque = document.querySelector("#slider-Tlaquepaque");
let sliderSection_Tlaquepaque = document.querySelectorAll(".slider__section-Tlaquepaque");
let sliderSectionLast_Tlaquepaque = sliderSection_Tlaquepaque[sliderSection_Tlaquepaque.length -1];

const btnLeft_Tlaquepaque = document.querySelector("#btn-left-Tlaquepaque");
const btnRight_Tlaquepaque = document.querySelector("#btn-right-Tlaquepaque");

slider_Tlaquepaque.insertAdjacentElement('afterbegin', sliderSectionLast_Tlaquepaque);

function Next_Tlaquepaque(){
    let sliderSectionFirts_Tlaquepaque = document.querySelectorAll(".slider__section-Tlaquepaque")[0];
    slider_Tlaquepaque.style.marginLeft = "-200%";
    slider_Tlaquepaque.style.transition = "all 2s"; //Tiempo de transicion entre imagenes
    setTimeout(function(){
        slider_Tlaquepaque.style.transition = "none";
        slider_Tlaquepaque.insertAdjacentElement('beforeend', sliderSectionFirts_Tlaquepaque);
        slider_Tlaquepaque.style.marginLeft = "-100%";
    }, 2000); //Tiempo de transicion entre imagenes
}

function Prev_Tlaquepaque(){
    let sliderSection_Tlaquepaque = document.querySelectorAll(".slider__section-Tlaquepaque");
    let sliderSectionLast_Tlaquepaque = sliderSection_Tlaquepaque[sliderSection_Tlaquepaque.length -1];
    slider_Tlaquepaque.style.marginLeft = "0";
    slider_Tlaquepaque.style.transition = "all 2s"; //tiempo de transicion entre imagenes
    setTimeout(function(){
        slider_Tlaquepaque.style.transition = "none";
        slider_Tlaquepaque.insertAdjacentElement('afterbegin', sliderSectionLast_Tlaquepaque);
        slider_Tlaquepaque.style.marginLeft = "-100%";
    }, 2000); //Tiempo de transicion entre imagenes
}

btnRight_Tlaquepaque.addEventListener('click', function(){
    Next_Tlaquepaque();
});

btnLeft_Tlaquepaque.addEventListener('click', function(){
    Prev_Tlaquepaque();
});

//Slider Tonala

const slider_Tonala = document.querySelector("#slider-Tonala");
let sliderSection_Tonala = document.querySelectorAll(".slider__section-Tonala");
let sliderSectionLast_Tonala = sliderSection_Tonala[sliderSection_Tonala.length -1];

const btnLeft_Tonala = document.querySelector("#btn-left-Tonala");
const btnRight_Tonala = document.querySelector("#btn-right-Tonala");

slider_Tonala.insertAdjacentElement('afterbegin', sliderSectionLast_Tonala);

function Next_Tonala(){
    let sliderSectionFirts_Tonala = document.querySelectorAll(".slider__section-Tonala")[0];
    slider_Tonala.style.marginLeft = "-200%";
    slider_Tonala.style.transition = "all 2s"; //Tiempo de transicion entre imagenes
    setTimeout(function(){
        slider_Tonala.style.transition = "none";
        slider_Tonala.insertAdjacentElement('beforeend', sliderSectionFirts_Tonala);
        slider_Tonala.style.marginLeft = "-100%";
    }, 2000); //Tiempo de transicion entre imagenes
}

function Prev_Tonala(){
    let sliderSection_Tonala = document.querySelectorAll(".slider__section-Tonala");
    let sliderSectionLast_Tonala = sliderSection_Tonala[sliderSection_Tonala.length -1];
    slider_Tonala.style.marginLeft = "0";
    slider_Tonala.style.transition = "all 2s"; //tiempo de transicion entre imagenes
    setTimeout(function(){
        slider_Tonala.style.transition = "none";
        slider_Tonala.insertAdjacentElement('afterbegin', sliderSectionLast_Tonala);
        slider_Tonala.style.marginLeft = "-100%";
    }, 2000); //Tiempo de transicion entre imagenes
}

btnRight_Tonala.addEventListener('click', function(){
    Next_Tonala();
});

btnLeft_Tonala.addEventListener('click', function(){
    Prev_Tonala();
});

//Slider Tlajomulco

const slider_Tlajomulco = document.querySelector("#slider-Tlajomulco");
let sliderSection_Tlajomulco = document.querySelectorAll(".slider__section-Tlajomulco");
let sliderSectionLast_Tlajomulco = sliderSection_Tlajomulco[sliderSection_Tlajomulco.length -1];

const btnLeft_Tlajomulco = document.querySelector("#btn-left-Tlajomulco");
const btnRight_Tlajomulco = document.querySelector("#btn-right-Tlajomulco");

slider_Tlajomulco.insertAdjacentElement('afterbegin', sliderSectionLast_Tlajomulco);

function Next_Tlajomulco(){
    let sliderSectionFirts_Tlajomulco = document.querySelectorAll(".slider__section-Tlajomulco")[0];
    slider_Tlajomulco.style.marginLeft = "-200%";
    slider_Tlajomulco.style.transition = "all 2s"; //Tiempo de transicion entre imagenes
    setTimeout(function(){
        slider_Tlajomulco.style.transition = "none";
        slider_Tlajomulco.insertAdjacentElement('beforeend', sliderSectionFirts_Tlajomulco);
        slider_Tlajomulco.style.marginLeft = "-100%";
    }, 2000); //Tiempo de transicion entre imagenes
}

function Prev_Tlajomulco(){
    let sliderSection_Tlajomulco = document.querySelectorAll(".slider__section-Tlajomulco");
    let sliderSectionLast_Tlajomulco = sliderSection_Tlajomulco[sliderSection_Tlajomulco.length -1];
    slider_Tlajomulco.style.marginLeft = "0";
    slider_Tlajomulco.style.transition = "all 2s"; //tiempo de transicion entre imagenes
    setTimeout(function(){
        slider_Tlajomulco.style.transition = "none";
        slider_Tlajomulco.insertAdjacentElement('afterbegin', sliderSectionLast_Tlajomulco);
        slider_Tlajomulco.style.marginLeft = "-100%";
    }, 2000); //Tiempo de transicion entre imagenes
}

btnRight_Tlajomulco.addEventListener('click', function(){
    Next_Tlajomulco();
});

btnLeft_Tlajomulco.addEventListener('click', function(){
    Prev_Tlajomulco();
});

//Slider Elsalto

const slider_Elsalto = document.querySelector("#slider-Elsalto");
let sliderSection_Elsalto = document.querySelectorAll(".slider__section-Elsalto");
let sliderSectionLast_Elsalto = sliderSection_Elsalto[sliderSection_Elsalto.length -1];

const btnLeft_Elsalto = document.querySelector("#btn-left-Elsalto");
const btnRight_Elsalto = document.querySelector("#btn-right-Elsalto");

slider_Elsalto.insertAdjacentElement('afterbegin', sliderSectionLast_Elsalto);

function Next_Elsalto(){
    let sliderSectionFirts_Elsalto = document.querySelectorAll(".slider__section-Elsalto")[0];
    slider_Elsalto.style.marginLeft = "-200%";
    slider_Elsalto.style.transition = "all 2s"; //Tiempo de transicion entre imagenes
    setTimeout(function(){
        slider_Elsalto.style.transition = "none";
        slider_Elsalto.insertAdjacentElement('beforeend', sliderSectionFirts_Elsalto);
        slider_Elsalto.style.marginLeft = "-100%";
    }, 2000); //Tiempo de transicion entre imagenes
}

function Prev_Elsalto(){
    let sliderSection_Elsalto = document.querySelectorAll(".slider__section-Elsalto");
    let sliderSectionLast_Elsalto = sliderSection_Elsalto[sliderSection_Elsalto.length -1];
    slider_Elsalto.style.marginLeft = "0";
    slider_Elsalto.style.transition = "all 2s"; //tiempo de transicion entre imagenes
    setTimeout(function(){
        slider_Elsalto.style.transition = "none";
        slider_Elsalto.insertAdjacentElement('afterbegin', sliderSectionLast_Elsalto);
        slider_Elsalto.style.marginLeft = "-100%";
    }, 2000); //Tiempo de transicion entre imagenes
}

btnRight_Elsalto.addEventListener('click', function(){
    Next_Elsalto();
});

btnLeft_Elsalto.addEventListener('click', function(){
    Prev_Elsalto();
});

//Slider Ixtahuacan

const slider_Ixt = document.querySelector("#slider-Ixt");
let sliderSection_Ixt = document.querySelectorAll(".slider__section-Ixt");
let sliderSectionLast_Ixt = sliderSection_Ixt[sliderSection_Ixt.length -1];

const btnLeft_Ixt = document.querySelector("#btn-left-Ixt");
const btnRight_Ixt = document.querySelector("#btn-right-Ixt");

slider_Ixt.insertAdjacentElement('afterbegin', sliderSectionLast_Ixt);

function Next_Ixt(){
    let sliderSectionFirts_Ixt = document.querySelectorAll(".slider__section-Ixt")[0];
    slider_Ixt.style.marginLeft = "-200%";
    slider_Ixt.style.transition = "all 2s"; //Tiempo de transicion entre imagenes
    setTimeout(function(){
        slider_Ixt.style.transition = "none";
        slider_Ixt.insertAdjacentElement('beforeend', sliderSectionFirts_Ixt);
        slider_Ixt.style.marginLeft = "-100%";
    }, 2000); //Tiempo de transicion entre imagenes
}

function Prev_Ixt(){
    let sliderSection_Ixt = document.querySelectorAll(".slider__section-Ixt");
    let sliderSectionLast_Ixt = sliderSection_Ixt[sliderSection_Ixt.length -1];
    slider_Ixt.style.marginLeft = "0";
    slider_Ixt.style.transition = "all 2s"; //tiempo de transicion entre imagenes
    setTimeout(function(){
        slider_Ixt.style.transition = "none";
        slider_Ixt.insertAdjacentElement('afterbegin', sliderSectionLast_Ixt);
        slider_Ixt.style.marginLeft = "-100%";
    }, 2000); //Tiempo de transicion entre imagenes
}

btnRight_Ixt.addEventListener('click', function(){
    Next_Ixt();
});

btnLeft_Ixt.addEventListener('click', function(){
    Prev_Ixt();
});

//Slider la Laja

const slider_Laja = document.querySelector("#slider-Laja");
let sliderSection_Laja = document.querySelectorAll(".slider__section-Laja");
let sliderSectionLast_Laja = sliderSection_Laja[sliderSection_Laja.length -1];

const btnLeft_Laja = document.querySelector("#btn-left-Laja");
const btnRight_Laja = document.querySelector("#btn-right-Laja");

slider_Laja.insertAdjacentElement('afterbegin', sliderSectionLast_Laja);

function Next_Laja(){
    let sliderSectionFirts_Laja = document.querySelectorAll(".slider__section-Laja")[0];
    slider_Laja.style.marginLeft = "-200%";
    slider_Laja.style.transition = "all 2s"; //Tiempo de transicion entre imagenes
    setTimeout(function(){
        slider_Laja.style.transition = "none";
        slider_Laja.insertAdjacentElement('beforeend', sliderSectionFirts_Laja);
        slider_Laja.style.marginLeft = "-100%";
    }, 2000); //Tiempo de transicion entre imagenes
}

function Prev_Laja(){
    let sliderSection_Laja = document.querySelectorAll(".slider__section-Laja");
    let sliderSectionLast_Laja = sliderSection_Laja[sliderSection_Laja.length -1];
    slider_Laja.style.marginLeft = "0";
    slider_Laja.style.transition = "all 2s"; //tiempo de transicion entre imagenes
    setTimeout(function(){
        slider_Laja.style.transition = "none";
        slider_Laja.insertAdjacentElement('afterbegin', sliderSectionLast_Laja);
        slider_Laja.style.marginLeft = "-100%";
    }, 2000); //Tiempo de transicion entre imagenes
}

btnRight_Laja.addEventListener('click', function(){
    Next_Laja();
});

btnLeft_Laja.addEventListener('click', function(){
    Prev_Laja();
});

//Funcion de movimiento automatico

setInterval(function(){
    Next_Guadalajara(),
    Next_Zapopan(),
    Next_Tonala(),
    Next_Tlaquepaque(),
    Next_Tlajomulco(),
    Next_Elsalto(),
    Next_Ixt(),
    Next_Laja()
    ;
}, 10000);
