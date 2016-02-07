
define(['jquery', 'MenuCtrl'], function ($, MenuCtrl){
    
    var menu_page = {
        
        template: function (){
            
            var titulo, cuerpo;
            
            titulo = MenuCtrl.titulo;
            cuerpo = MenuCtrl.cuerpo;
            
            var html = '<h1>'+ titulo +'</h1>'+
                       '<p>' + cuerpo + '</p>'+
                       '<button data-action="btn_index">Ir al index</button>';
            
            $('#contenedor').html(html);
            
            $('button[data-action="btn_index"]').on('click', function (){        
                require(['IndexTpl'], function(index) {
                    index.template();  
                });                            
            }); 
        }
        
    };
   
    return {
        template: menu_page.template
    };
    
});



