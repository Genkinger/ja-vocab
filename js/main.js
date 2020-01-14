function loadJson(json_data,callback){
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', json_data, false); 
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
        }
    };
    xobj.send(null);  
}

let homeApp = new Vue({
    el: '#app',
    data: function(){
        let vocab_n5;
        let vocab_n4;
        let vocab_n2;
        loadJson('js/vocab-n5.json',function(response){
            vocab_n5 = JSON.parse(response);
        });
        loadJson('js/vocab-n4.json',function(response){
            vocab_n4 = JSON.parse(response);
        });
        loadJson('js/vocab-n2.json',function(response){
            vocab_n2 = JSON.parse(response);
        });

        return {
            n5: vocab_n5,
            n4: vocab_n4,
            n2: vocab_n2,
            current: vocab_n5
        }
    }
})
