
let scroll = document.querySelector("button.scroll")
window.addEventListener("scroll", e =>{

    if(window.scrollY > 100 & window.scrollY < 1100){
        scroll.classList.add("show")
    }
    else{
        scroll.classList.remove("show")
    }
})
    scroll.addEventListener("click", e => {

        if (scroll.classList.contains("show")){
            window.scrollTo({top: 0, behavior: "smooth"})
        }
        
    })


    
let scroll1 = document.querySelector("button.scroll1")
window.addEventListener("scroll", e =>{

    if(window.scrollY > 1100){
        scroll1.classList.add("show")
    }
    else{
        scroll1.classList.remove("show")
    }
})
    scroll1.addEventListener("click", e => {

        if (scroll1.classList.contains("show")){
            document.querySelector("#articles").scrollIntoView({top: 0, behavior: "smooth"})
        }
        
    })
