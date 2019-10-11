function roll_dice(dice_num) {
    var i;
    var results = [];
    var dice_options = ['Opp.png', 'Strife.png', 'Success_Exp.png', 'Success.png']//['success', 'opportunity', 'blank', 'explosive success/strife', 'opportunity/strife', 'success/strife'];
    for(i=0; i<dice_num; i++){
      var randomNumber = Math.floor(Math.random() * dice_options.length);
      results.push(dice_options[randomNumber]);
    }
    return results;
  }

function fillTable(result, tab, head){
  var table = document.getElementById(tab);
  table.cellPadding = '10';
  for(var i = 0;i<table.rows.length;){
    table.deleteRow(i);
  }
  var header = table.createTHead();
  var row = header.insertRow(0);    
  var cell = row.insertCell(0);
  cell.innerHTML =  head;
  //cell.bgColor = 'white'; 
  for (var i = 0; i < result.length; i++)
  {
    let row = table.insertRow(i+1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = '<img src='+result[i] +' alt="" width="50%" height = "50%"/>';//result[i];
    //cell1.bgColor = 'white'; 
    var exp_roll = result[i];
    var count = 1;
    while (String(exp_roll).includes('Success_Exp')){
      var exp_roll = roll_dice(1);
      var cell2 = row.insertCell(count);
      cell2.innerHTML = '<img src='+exp_roll +' alt="" width="50%" height = "50%"/>';//exp_roll;
      //cell2.bgColor = 'white'; 
      count += 1;
    }
  }
}

var button = document.getElementById('bd_roll');

button.onclick = function() {
  var dice_num = document.getElementById('bd_num').value;
  var result = roll_dice(dice_num);
  fillTable(result, 'bd_table', "<b>Black Dice Results</b>");
};
var wbutton = document.getElementById('wd_roll');

wbutton.onclick = function() {
  var dice_num = document.getElementById('wd_num').value;
  var result = roll_dice(dice_num);
  fillTable(result, 'wd_table', "<b>White Dice Results</b>");
};

var abutton = document.getElementById('ad_roll');

abutton.onclick = function() {
  var dice_num = document.getElementById('bd_num').value;
  var result = roll_dice(dice_num);
  fillTable(result, 'bd_table', "<b>Black Dice Results</b>");
  
  var dice_num = document.getElementById('wd_num').value;
  var result = roll_dice(dice_num);
  fillTable(result, 'wd_table', "<b>White Dice Results</b>");
};