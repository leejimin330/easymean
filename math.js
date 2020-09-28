/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */
/* eslint-env browser */
function Math(){ // eslint-disable-line no-unused-vars
    var x = 10;
    var y = 20;
    var z = x + y;
    document.getElementById('demo').innerHTML = z;

    x = "10";
    y = "20";
    z = x + y;
    document.getElementById('demo1').innerHTML = z;

    x = 10;
    y = 20;
    z = "30";
    var result = x + y + z;
    document.getElementById('demo2').innerHTML = result;

    x = "100";
    y = "10";
    z = x / y;
    document.getElementById('demo3').innerHTML = z;

    x = "100";
    y = "10";
    z = x * y;
    document.getElementById('demo4').innerHTML = z;

    x = "100";
    y = "10";
    z = x - y;
    document.getElementById('demo5').innerHTML = z;

    x = "100";
    y = "10";
    z = x + y;
    document.getElementById('demo6').innerHTML = z;

}