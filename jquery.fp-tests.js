// FP-stylish stuff already existing on jQuery
test("jQuery.filter", function(){
   same($(testArray).filter(function(){ return this % 20 == 0;}).get(), Array(20,40), "items matching for predicate are returned");
});

test("jQuery.map", function(){
   same($(testArray).map(function(){ return this+1; }).get(), Array(11,21,31,41), "items are mapped with function");
});

module("fp");

var testArray = Array(10,20,30,40);
var testAssociativeArray = {
    foo: 1,
    bar: 2,
};

test("jQuery.fp.head", function(){
    equals($(testArray).head(), 10, "Head returns first item of array");
});

test("jQuery.fp.tail", function(){
    var tail = $(testArray).tail();
    equals(tail.length, 3, "tail contains all but first item of given array");
    same($(tail).get(), Array(20,30,40), "Tail returns all but first items of given array");
});

test("jQuery.fp.getOrElse", function(){
    equals($(testAssociativeArray["foo"]).getOrElse(123), 1, "get retuns value from associative array");
    equals($(testAssociativeArray["zoo"]).getOrElse(123), 123, "when value is not found on associative array default value is returned");    	
});

test("jQuery.fp.foldLeft", function(){
    equals($(testArray).foldLeft(0, function(val1, val2){ return val1 + val2; }), 100, "array can be folded left");
    equals($(testArray).foldLeft(0, function(val1, val2){ return val1 + ", " + val2; }), "0, 10, 20, 30, 40", "foldLeft is done in proper order");
});

test("jQuery.fp.foldRight", function(){
    equals($(testArray).foldRight(0, function(val1, val2){ return val1 + val2; }), 100, "array can be folded right");
    equals($(testArray).foldRight(0, function(val1, val2){ return val1 + ", " + val2; }) , "0, 40, 30, 20, 10", "foldRight is done in proper order");
});

test("jQuery.fp.reverse", function(){
    same($(testArray).reverse().get(), Array(40,30,20,10), "array can be reversed");
});

test("jQuery.fp.exists", function(){
   equals($(testArray).exists(function(){ return this % 50 == 0;}), false, "when no matching element false is returned");
   equals($(testArray).exists(function(){ return this % 10 == 0;}), true, "when matching element is found true is returned");
});