
define(['IndexCtrl', 'MenuTpl'], function (IndexCtrl, menu){      
    
    var index_page = {
        
        template: function (){
            
            var titulo, cuerpo;
            
            titulo = IndexCtrl.titulo;
            cuerpo = IndexCtrl.cuerpo;
            
            var html = '<h1>'+ titulo +'</h1>'+
                       '<p>' + cuerpo + '</p>'+
                       '<button id="btn_menu">Ir al Menu</button>';
            
            $('#contenedor').html(html);
        }
        
    };   
    
    return {
        template: index_page.template
    };
    
});


