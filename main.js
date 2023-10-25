var httpReg = new XMLHttpRequest();
httpReg.open("GET","https://forkify-api.herokuapp.com/api/search?q=pizza");
httpReg.send();
var result=[];
httpReg.onreadystatechange= function(){
    if(httpReg.readyState==4){
        result=JSON.parse(httpReg.response).recipes;
        displayData();
    }
}
function displayData(){
    var data = "";
    for( var i=0;i<result.length;i++){
        data+=
        <div class="col-lg-3">
            <div class="recipe bg-info">
                <img src="${result[i].image_url}" class="img-fluid"/>
                <h2>${result[i].title}</h2>
            </div>
        </div>
    }
    document.getElementById("post").innerHTML=data;
}