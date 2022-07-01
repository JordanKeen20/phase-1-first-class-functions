function receivesAFunction(spy){
    console.log(spy());
}

function returnsANamedFunction(){
    return function aNamedFunction(){}
}

function returnsAnAnonymousFunction(){
    return function() {};
}
