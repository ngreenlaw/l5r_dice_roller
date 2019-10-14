function roll_dice(dice_num, dice_options) {
    var i;
    var results = [];
    for(i=0; i<dice_num; i++){
      var randomNumber = Math.floor(Math.random() * dice_options.length);
      results.push(dice_options[randomNumber]);
    }
    return results;
  }

function fillTable(result, tab, head, dice_options){
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
      var exp_roll = roll_dice(1, dice_options);
      var cell2 = row.insertCell(count);
      cell2.innerHTML = '<img src='+exp_roll +' alt="" width="50%" height = "50%"/>';//exp_roll;
      //cell2.bgColor = 'white'; 
      count += 1;
    }
  }
}

function button_click(dice_input_id, dice_options, table_id, header){
  var dice_num = document.getElementById(dice_input_id).value;
  var dice_options = ['Opp.png', 'Strife.png', 'Success_Exp.png', 'Success.png']
  //['success', 'opportunity', 'blank', 'explosive success/strife', 'opportunity/strife', 'success/strife'];
  var result = roll_dice(dice_num, dice_options);
  fillTable(result, table_id, header, dice_options);
}

var button = document.getElementById('bd_roll');

button.onclick = function() {
  var dice_num = document.getElementById('bd_num').value;
  var dice_options = ['Opp.png', 'Strife.png', 'Success_Exp.png', 'Success.png']
  //['success', 'opportunity', 'blank', 'explosive success/strife', 'opportunity/strife', 'success/strife'];
  var result = roll_dice(dice_num, dice_options);
  fillTable(result, 'bd_table', "<b>Black Dice Results</b>", dice_options);
};
var wbutton = document.getElementById('wd_roll');

wbutton.onclick = function() {
  var dice_num = document.getElementById('wd_num').value;
  var dice_options = ['Opp.png', 'Strife.png', 'Success_Exp.png', 'Success.png']
  //['success', 'opportunity', 'blank', 'explosive success/strife', 'opportunity/strife', 'success/strife'];
  var result = roll_dice(dice_num, dice_options);
  fillTable(result, 'wd_table', "<b>White Dice Results</b>", dice_options);
};

var abutton = document.getElementById('ad_roll');

abutton.onclick = function() {
  var dice_num = document.getElementById('bd_num').value;
  var dice_options = ['Opp.png', 'Strife.png', 'Success_Exp.png', 'Success.png']
  //['success', 'opportunity', 'blank', 'explosive success/strife', 'opportunity/strife', 'success/strife'];
  var result = roll_dice(dice_num, dice_options);
  fillTable(result, 'bd_table', "<b>Black Dice Results</b>", dice_options);
  
  var dice_num = document.getElementById('wd_num').value;
  var dice_options = ['Opp.png', 'Strife.png', 'Success_Exp.png', 'Success.png']
  //['success', 'opportunity', 'blank', 'explosive success/strife', 'opportunity/strife', 'success/strife'];
  var result = roll_dice(dice_num, dice_options);
  fillTable(result, 'wd_table', "<b>White Dice Results</b>", dice_options);
};