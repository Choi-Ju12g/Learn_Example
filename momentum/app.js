const cal = {
    add : function(a,b){
        return(a+b);
    },
    minus : function(a,b){
        return(a-b);
    },
    dot : function(a,b){
        return(a*b);
    },
    divide : function(a,b){
        return(a/b);
    },

    square: function(a,b){
        return(a**b);
    },
    abs : function(a){
        if (a > 0) {
            return(a);
        }else{
            return(a*(-1));
        }
    }
};

cal.add(3,2);
cal.minus(3,2);
cal.dot(3,2);
cal.divide(3,2);
cal.square(3,2);
cal.abs(2);
cal.abs(-4);

const age = prompt("how old are you?");
console.log(typeof "15", typeof parseInt("15")); 