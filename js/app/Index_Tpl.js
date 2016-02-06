
    define(['IndexCtrl'], function (IndexCtrl){      
        
        var index_page = {
            
            template: function (){
                
                var titulo, cuerpo;
                
                titulo = IndexCtrl.titulo;
                cuerpo = IndexCtrl.cuerpo;
                
                var html = '<h1>'+ titulo +'</h1>'+
                        '<p>' + cuerpo + '</p>'+
                        '<button data-action="btn_menu">Ir al Menu</button>';
                
                $('#contenedor').html(html);
                
                $('button[data-action="btn_menu"]').on('click', function (){        
                    require(['MenuTpl'], function(menu){ 
                        menu.template();
                    });                            
                }); 
                
            }        
        };   
        
        return {
            template: index_page.template
        };
        
    });


