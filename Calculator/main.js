var c=0;
document.addEventListener('keypress', number);
document.addEventListener('keydown', check);
function test(){
  var t = $("#in").val();
  if(t.includes('^')){
    t = t.replace("^","**");
    // console.log(t);
  }
  var res = eval(t);
  $("#out").val(res);
}

function change(val){
  var test1 = $("#in").val();
  var test = test1+val;
  $("#in").val(test);
  if((c == 0) && (val != '+' && val != '-' && val != '*' && val != '/' && val!= '^')){
    // console.log(c);
    $("#out").val(test);
  }
  else if(val == '+' || val == '-' || val == '*' || val == '/' || val == '^'){
    console.log(c);
    c=1;
  }
  else if (val != '+' && val != '-' && val != '*' && val != '/' && val!= '^') {
    var t = $("#in").val();
    console.log(t);
    if(t.includes('^')){
      t = t.replace("^","**");
      console.log(t);
    }
    var res = eval(t);
    $("#out").val(res);
  }
}

function test2(){
  $("#in").val("");
  $("#out").val("");

}
function test3(){
  var val  = $("#in").val();
  $("#in").val(val.substr(0, val.length - 1));
  $("#out").val("");
}


function number(e){
  var key=e.which || e.KeyCode || e.charCode;
  var val = String.fromCharCode(key);
  // console.log(key);
        if  ( (key >=48 && key <= 57) ||(val == '+' || val == '-' || val == '*' || val == '/' || val == '^' || val =='.') ){
           change(String.fromCharCode(key));
        }

}
function check(e){
  var key=e.which || e.KeyCode || e.charCode;
  if(key == 8){
      test3();
  }
  if(key == 27){
    test2();
  }
  if(key == 13){
    test();
  }
}
