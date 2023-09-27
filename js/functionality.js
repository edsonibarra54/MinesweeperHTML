const tam = 10;
var array = new Array(tam);

function begin(){

    //Bidimensional 10x10 Array
    for(var i = 0 ; i < tam ; i++){
        array[i] = new Array(tam);
    }

    for(var i = 0 ; i < tam ; i++){
        for (var j = 0 ; j < tam ; j++){
            array[i][j] = (Math.floor(Math.random() * 100)) + 1;
        }
    }
     
    for(var i = 0; i < tam ; i++){
        console.log(array[i]);
    }
}

function checkValue(positionI, positiionJ){
    document.getElementById(positionI+positiionJ).innerHTML = array[positionI][positiionJ];
}