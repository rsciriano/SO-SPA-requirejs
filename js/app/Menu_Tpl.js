
define(['MenuCtrl'], function (MenuCtrl){
    
    var menu_page = {
        
        template_m: function (){
            
            var titulo, cuerpo;
            
            titulo = MenuCtrl.titulo;
            cuerpo = MenuCtrl.cuerpo;
            
            var html = '<h1>'+ titulo +'</h1>'+
                       '<p>' + cuerpo + '</p>'+
                       '<button id="btn_index">Ir al index</button>';
            
            $('#contenedor').html(html);
        }
        
    };
   
    return {
        template_m: menu_page.template_m
    };
    
});



