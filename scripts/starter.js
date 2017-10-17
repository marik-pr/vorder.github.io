'use strict';
var config = {};

config.url = 'qstatix.github.io';
config.template_name = 'mara'; 
config.template_path = config.url + '/templates/' + config.template_name;
config.template_path_js = config.template_path + '/js/';
config.template_path_html = config.template_path + '/html/';
config.template_path_css = config.template_path + '/css/';
config.template_path_img = config.template_path + '/img/';
config.nocache = Math.random()*1976;

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
        return;
        
    };
    
    loadTemplate(){
        var u = config.template_path_js + 'template.js?nochache=' + config.nocache;
        a.getScript(u);
        return;
    }
};





      