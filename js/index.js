window.addEventListener("load", onChannelPressed)
window.addEventListener("load", onAuthorPressed)

function onChannelPressed(){
    document.getElementById("button").addEventListener("click", showChannel)
}

function onAuthorPressed(){
    document.getElementById("copyright").addEventListener("click", showInfoBox)
}

function showChannel(){
    window.open("https://www.youtube.com/channel/UCWdAoF96VZPYs6ldnTazCXw")
}

function showInfoBox(){
    window.alert("Le site à été développé par 9e_Docteur pour PandaRebel4307. Ce site est encore en construction. Merci donc d'être comprhénsible sur les critiques à propos du site. Copyright 2022.")
}


