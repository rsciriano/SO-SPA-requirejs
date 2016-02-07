/* global require, template */

require.config({
    baseUrl: 'js',
    
    paths : {
      jquery : ['libs/jquery-1.12.0.min',
               'libs/jquery-2.2.0.min'],
      IndexTpl: 'app/Index_Tpl',
      IndexCtrl: 'app/Index_Ctrl',
      MenuTpl: 'app/Menu_Tpl',
      MenuCtrl: 'app/Menu_Ctrl'
    }  
});

require(['IndexTpl'], function (index){
    
    index.template();
            
});







