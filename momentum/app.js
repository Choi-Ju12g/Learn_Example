const cal = {
    add : function(a,b){
        console.log(a+b);
    },
    minus : function(a,b){
        console.log(a-b);
    },
    dot : function(a,b){
        console.log(a*b);
    },
    divide : function(a,b){
        console.log(a/b);
    },

    square: function(a,b){
        console.log(a**b);
    },
    abs : function(a){
        if (a > 0) {
            console.log(a);
        }else{
            console.log(a*(-1));
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
