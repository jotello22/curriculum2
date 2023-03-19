let menuVisible = false;
//funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("office");
        habilidades[3].classList.add("comunicacion");
        habilidades[4].classList.add("equipo");
        habilidades[5].classList.add("creatividad");
        habilidades[6].classList.add("resolucion"); }}

window.onscroll = function(){
    efectoHabilidades();}
