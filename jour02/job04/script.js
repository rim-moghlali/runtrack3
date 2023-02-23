function installListener(){
    document.addEventListener("keydown", function(event) {
        let keyloggerEl = document.getElementById("keylogger");
        let key = event.key;
        keyloggerEl.value += key;
        console.log(event);
    });
    console.log("ready");
}