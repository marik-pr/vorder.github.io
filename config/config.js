var config = {};

config.url = window.location.href; //'https://qstatix.github.io';
config.template_name = 'mara'; 
config.template_path = config.url + '/templates/' + config.template_name;
config.template_path_js = config.template_path + '/js/';
config.template_path_html = config.template_path + '/html/';
config.template_path_css = config.template_path + '/css/';
config.template_path_img = config.template_path + '/img/';
config.nocache = Math.random()*1976;
