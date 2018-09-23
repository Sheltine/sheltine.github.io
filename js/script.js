document.getElementById("followers").innerHTML = 37;
var theme = new Audio("./sound/hedwigs_theme.mp3");
theme.play();

function test() {
    alert('Friendship is magic!');
    ++i;
}

function changePhoto(){
    document.getElementById("voldy").src = "./img/happy_voldy2.jpeg";
    document.getElementById("followers").innerHTML++;
    var btn =document.getElementById("bt");
    btn.disabled = true;
    btn.style.backgroundColor = "#e0e0eb";
    btn.style.color = "#868686";
    btn.style.fontStyle = "italic";
    btn.style.borderColor = "#868686";
    btn.style.cursor = "default";
    document.getElementById("bt");
}

function yuoded() {
    theme.pause();
    alert("AVADA KEDAVRA");
    var whole_page = document.getElementById("main");
    whole_page.parentNode.removeChild(whole_page);
    var end = new Audio("./sound/voldys_end.mp3");
    end.play();
    document.getElementById("dead").innerHTML = "YUO DED";
    return false;
}
