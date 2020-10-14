(function(win) {

    function sortear() {
        
        let min = 1; 
        let max = 100;
        let dif = max - min;
        let aleatorio = Math.random();
        let computador = min + Math.trunc(dif * aleatorio);
        console.log(computador);
        win.computador = computador;
        
    } 
    
    win.sortear = sortear;
    
})(window);