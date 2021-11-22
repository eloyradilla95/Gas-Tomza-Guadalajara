let upload = document.querySelectorAll(".upload");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i < upload.length; i++){
        let alturaupload = upload[i].offsetTop;
        if(alturaupload - 500 < scrollTop){
            upload[i].style.opacity = 1;
            upload[i].classList.add("show_me_above")
        }
    }
}

window.addEventListener('scroll', mostrarScroll);