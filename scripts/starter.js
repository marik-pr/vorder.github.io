'use strict';


var s;
var a;
var t;   

$(document).ready(function($){

    
    s = new starter(this);
    a = new api(this);
    s.loadTemplate(this);
    t = new template(this);

       
});

class starter{
    
    constructor(){
        
        jQuery.ajax({
            async: false,
            type: 'GET',
            url: 'config/config.js',
            dataType: 'script',
            error: function(xhr, textStatus, errorThrown) {
            }
        })
    };
    
    loadTemplate(){
        var u = config.template_path_js + 'template.js?nochache=' + config.nocache;
        a.getScript(u);
        return;
    }
};





      