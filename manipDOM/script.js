window.onload = ()=>{

    let zoom = document.querySelector("#zoom")
    let zoomImg = document.querySelector("#zoom img")
    let cross = document.querySelector("span")

    document.querySelectorAll("img").forEach(item =>{
       //Event img
        item.addEventListener("mouseenter", ()=>{
            if(zoom.style.display === "none"){
                item.classList.add("overlay")
                addClass(item,"fig");
            }
            
            item.addEventListener("mouseleave", () =>{
                item.classList.remove("overlay")
            if(zoom.style.display === "none")
                removeClass(item, "fig")
            })
        })

        //Zoom/deZoom img
        item.addEventListener("click", () =>{
            let src = item.attributes.src.nodeValue;
            let alt = item.attributes.alt.nodeValue
            zoom.style.display = "flex"
            zoomImg.style.width = 100%
            attribute(zoomImg, "src", src)
            attribute(zoomImg, "alt", alt)
        })
        cross.addEventListener("click", zoomMinus)

    })

    //Form
    let pseudo = document.querySelector("[name=user-name]")
    let mail = document.querySelector("[name=user-mail]")
    let confirmMail = document.querySelector("[name=user-confirm")
   

    pseudo.addEventListener("keyup", verifName)
    mail.addEventListener("keyup", verifMail)
    confirmMail.addEventListener("keyup",()=>{
        confirmation(mail, confirmMail)
    })
    

    //FONCTIONS
    function attribute(item, y, x){
        item.setAttribute(y, x)
    }
    function addClass(item,clasS){
        item.nextElementSibling.classList.add(clasS)
    }
    function removeClass(item, clasS){
        item.nextElementSibling.classList.remove(clasS)
    }
    function zoomMinus(){
        this.parentElement.style.display = "none"
    }

    //form
    function verifName(){
        if(this.value.length <= 4){
            removeClass(this, "valid-feedback")
            addClass(this, "invalid-feedback")
        }
        else{
            removeClass(this, "invalid-feedback")
            addClass(this, "valid-feedback")
        }
    }
    function verifMail(){

        for(let i = 0; i < this.value.length; i++){
            if(this.value[i] != "@"){
                 addClass(this, "invalid-mail")
                this.nextElementSibling.innerText = "Votre Email n'est pas conforme"
            }
            else{
                removeClass(this, "invalid-mail")
                break;
            }
        }
    }
    function confirmation(a, b){
            for(let i = 0; i < a.value.length; i++){
               if(a.value[i] != b.value[i]){
                    addClass(b, "invalid-mail")
                   b.nextElementSibling.innerText = "Le mail n'est pas le même."
               }   
               else{
                removeClass(b, "invalid-mail")
                b.nextElementSibling.innerText = ""
               }
            }
        }
    }

