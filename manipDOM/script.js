window.onload = ()=>{

    let zoom = document.querySelector("#zoom")
    let zoomImg = document.querySelector("#zoom img")
    let cross = document.querySelector("span")

    document.querySelectorAll("img").forEach(item =>{
        item.addEventListener("click", () =>{
            let src = item.attributes.src.nodeValue;
            let alt = item.attributes.alt.nodeValue
            zoom.style.display = "flex"
            zoomImg.style.width = 100%
            zoomImg.setAttribute("src", src)
            zoomImg.setAttribute("alt", alt)
            console.log(zoomImg);
        })

        cross.addEventListener("click", ()=>{
            zoom.style.display = "none"
        })

        item.addEventListener("mouseenter", ()=>{
            item.classList.add("overlay")
            item.nextElementSibling.classList.add("fig")
            console.log(item.nextElementSibling);
            item.addEventListener("mouseleave", () =>{
                item.classList.remove("overlay")
                item.nextElementSibling.classList.remove("fig")
            })
        })
    })

}