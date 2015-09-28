(function() {
    
var search = document.getElementById('search');    
    
    function filter() {
        var query = this.value.trim().toLowerCase();
        
        coders.forEach(function(e) {
            
            var index = 0;
            if (query) {
            index = e.indexOf(query); 
    }
    
            document.getElementById(e).style.display = index === -1 ? 'none' : '';
        });
    }
    
    if ('oninput' in search) {
        search.addEventListener('input', filter);
    } else {
        search.addEventListener('keyup', filter);
    }
        
}());