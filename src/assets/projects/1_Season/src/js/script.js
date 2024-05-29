let message = document.getElementById("message")
let inputText = document.getElementById("input-text")

function changeText(){
    let text = inputText.value.toLowerCase();
    let tema = document.getElementById("themes")

   
    if (text === "winter") {
        tema.style.backgroundImage = "url('src/images/winter.jpg')";
        tema.style.backgroundPosition = "center";
        tema.style.backgroundRepeat = "no-repeat";
        tema.style.backgroundSize ="cover";
        message.innerText = text;
    } 
    
    else if (text === "summer") {
        tema.style.backgroundImage = "url('src/images/summer.jpg')";
        tema.style.backgroundPosition = "center";
        tema.style.backgroundRepeat = "no-repeat";
        tema.style.backgroundSize ="cover";
        message.innerText = text;
    } 
    
    else if (text === "autumn") {
        tema.style.backgroundImage = "url('src/images/autumn.jpg')";
        tema.style.backgroundPosition = "center";
        tema.style.backgroundRepeat = "no-repeat";
        tema.style.backgroundSize ="cover";
        message.innerText = text;
    } 
    
    else if (text === "spring") {
        tema.style.backgroundImage = "url('src/images/spring.jpg')";
        tema.style.backgroundPosition = "center";
        tema.style.backgroundRepeat = "no-repeat";
        tema.style.backgroundSize ="cover";
        message.innerText = text;
    } 
    
    else {
        tema.get
        tema.style.backgroundImage = "url('src/images/sky.jpg')";
        tema.style.backgroundPosition = "center";
        tema.style.backgroundRepeat = "no-repeat";
        tema.style.backgroundSize ="cover";
        message.innerText = "Enter a season!";
    }
    
}
