function roll_dice(dice_num, dice_options) {
    var i;
    var results = {};
    for(i=0; i<dice_num; i++){
      var randomNumber = Math.floor(Math.random() * dice_options.length);
      results[i] = dice_options[randomNumber];
    }
    return results;
  }

function fillTable(result, tab, head, dice_options, column){
  var table = document.getElementById(tab);
  table.cellPadding = '10';
  //Create Header row
  var header = table.createTHead();
  var row = header.insertRow(0); 
  //Fill necessary Cells
  //for (var i=0; i<1; i++){
    row.insertCell(0);
    //row.insertCell(-1*i);
  //}
  var cell = row.insertCell(column);
  cell.innerHTML =  head;
  
  for (var key in result)
  {
    val = parseInt(key);
    let row = table.insertRow(val+1);
    //for (var i=0; i<2; i++){
      row.insertCell(0);
      //row.insertCell(-1*i);
    //}
    var cell1 = row.insertCell(column);
    cell1.innerHTML = '<img src='+result[val] +' alt="" width="50%" height = "50%"/>';//result[i];
    //cell1.bgColor = 'white'; 
    var exp_roll = result[val];
    var count = val*column;
    while (String(exp_roll).includes('Success_Exp')){
      var exp_roll = roll_dice(1, dice_options);
      var cell2 = row.insertCell(count);
      cell2.innerHTML = '<img src='+exp_roll[0] +' alt="" width="50%" height = "50%"/>';//exp_roll;
      //cell2.bgColor = 'white'; 
      count += 1;
    }
  }
}

function button_click(dice_input_id, dice_options, table_id, header, column){
  var dice_num = document.getElementById(dice_input_id).value;
  var result = roll_dice(dice_num, dice_options);
  fillTable(result, table_id, header, dice_options, column);
}

var bbutton = document.getElementById('bd_roll');
var wbutton = document.getElementById('wd_roll');
var abutton = document.getElementById('ad_roll');
//['success', 'opportunity', 'blank', 'explosive success/strife', 'opportunity/strife', 'success/strife'];

bbutton.onclick = function(){
  var table = document.getElementById('bd_table');
  table.cellPadding = '10';
  //Clear table
  for(var i = 0;i<table.rows.length;){
    table.deleteRow(i);
  }
  button_click('bd_num', ['Opp.png', 'Strife.png', 'Success_Exp.png', 'Success.png'],'bd_table', "<b>Black Dice Results</b>", -1);
};

wbutton.onclick = function(){
  var table = document.getElementById('wd_table');
  table.cellPadding = '10';
  //Clear table
  for(var i = 0;i<table.rows.length;){
    table.deleteRow(i);
  }
  button_click('wd_num', ['Opp.png', 'Strife.png', 'Success_Exp.png', 'Success.png'],'wd_table', "<b>White Dice Results</b>", 1);
};

abutton.onclick = function() {
  var table = document.getElementById('bd_table');
  table.cellPadding = '10';
  //Clear table
  for(var i = 0;i<table.rows.length;){
    table.deleteRow(i);
  }
  button_click('bd_num', ['Opp.png', 'Strife.png', 'Success_Exp.png', 'Success.png'],'bd_table', "<b>Black Dice Results</b>", -1);
  button_click('wd_num', ['Opp.png', 'Strife.png', 'Success_Exp.png', 'Success.png'],'bd_table', "<b>White Dice Results</b>", 1);
};