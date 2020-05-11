// Service Worker
if('serviceWorker' in navigator){
    console.log("Puedes usar los service worker en tu navegador");

    navigator.serviceWorker.register('./sw.js')
        .then(res => console.log("ServiceWorker cargado correctamente. ", res))
        .catch(err => console.log("No se ha podido registrar el ServiceWorker. ", err));
}else{
    console.log("No puedes usar los service worker en tu navegador");
}

// Scroll Suavizado
$(document).ready(function(){
    $("#menu a").click(function(e){
        e.preventDefault();
        
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        });
        
        return false;
    });
});