var counter = 1;
//capitulo-1
setInterval(function () {
        document.getElementById("radio" + counter).checked = true;
            counter++;
            if (counter > 5) {
                    counter = 1;
            }  
    }, 5000);



//elas por elas 2
