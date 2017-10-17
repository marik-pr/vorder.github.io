'use strict';

class api{
    constructor(id){
        var parent = id;
        return;
    };
    getScript(script){      
        jQuery.ajax({
            async: false,
            type: 'GET',
            url: script,
            dataType: 'script',
            error: function(xhr, textStatus, errorThrown) {
                // Look at the `textStatus` and/or `errorThrown` properties.
            }
        })
    };
    
    getHtml(file, target){
        jQuery.ajax({
            async: false,
            type: 'GET',
            url: file,
            success: function(data){$(document.body).append(data)},
            dataType: 'html',
            error: function(xhr, textStatus, errorThrown) {
                // Look at the `textStatus` and/or `errorThrown` properties.
            }
        })
    };

    GetURLParameter(sParam){
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++)
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam)
            {
                return sParameterName[1];
            }
        }
    };
    
}