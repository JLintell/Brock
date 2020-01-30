function onClick(){
    if(document.getElementById("checkbox").checked){
        led=true
    }else{
        led=false
    }
    sendRequest(led)
}

function sendRequest(led){
    var xhr = new XMLHttpRequest();
    var url = "status";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify({"led":led});
    xhr.send(data);
}