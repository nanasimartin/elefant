
    fetch("https://elephant-api.herokuapp.com/elephants")
    .then(x => x.json())
    .then(y => megjelenit(y));
    
    function megjelenit(adatok){
        console.log(adatok)
    
        var sz="";
        for (item of adatok){
        sz+='<div class="col-sm-3">';
        sz+='<div class="sz">';
        sz+=item.name;
        sz+='<br>';
        sz+='<image src="'+item.image+'" style="width:70px; cursor:pointer", onclick="window.open(this.src)" >';
        sz+='<br>';
        sz+='<a href="'+item.wikilink+'">wikipedia</a>';
        sz+='</div>';
        sz+='</div>';
        }document.getElementById("elemek").innerHTML=sz;
    }
    
