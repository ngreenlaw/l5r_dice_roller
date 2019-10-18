function roll_dice(dice_num, dice_options) {
    var i;
    var results = {};
    for(i=0; i<dice_num; i++){
      var randomNumber = Math.floor(Math.random() * dice_options.length);
      results[i] = {};
      var result = dice_options[randomNumber];
      let values = [];
      values.push(result);

      while (String(result).includes('Success_Exp')){
        var randomNumber = Math.floor(Math.random() * dice_options.length);
        var result = dice_options[randomNumber];
        values.push(dice_options[randomNumber]);
      }
      results[i]['result'] = values;
      results[i]['cell_count'] = values.length;
    }
    return results;
  }

function fillTable(result, tab, head, dice_num){
  var table = document.getElementById(tab);
  table.cellPadding = '10';
  var column = 0;
  var row_count = table.rows.length;
  if (row_count == 0){
        //Create Header row
        var header = table.createTHead();
        var row = header.insertRow(0); 
        var cell = row.insertCell(0);
        cell.innerHTML =  head;
        cell.className = "background_cell";
        for (var row_num = 1; row_num <= dice_num; row_num++){
          table.insertRow(row_num);
        }
  } else {
    column = 1;
    var cell = table.rows[0].insertCell(column);
    cell.innerHTML =  head;
    cell.className = "background_cell";
    for (var row_num = row_count; row_num <= dice_num; row_num++){
      let new_row = table.insertRow(row_num);
      let new_cell = new_row.insertCell(0);
      new_cell.style.backgroundColor = "transparent"
    }
  }

    for (var key in result)
    {
      val = parseInt(key);
      let r = table.rows[val+1]
      var num_rolls = parseInt(result[key]['cell_count']);
      var cell = r.insertCell(column);
      cell.className = "background_cell";
      for (var ce = 0; ce < num_rolls; ce++){
        cell.innerHTML += '<img src='+result[val]['result'][ce] +
          ' alt="" class="dice_image" display:block align=center style="border:5px solid black" height = "50%"/>';
        }
      }
}

function button_click(dice_input_id, dice_options, table_id, header){
  var dice_num = document.getElementById(dice_input_id).value;
  var result = roll_dice(dice_num, dice_options);
  fillTable(result, table_id, header, dice_num);
}

var bbutton = document.getElementById('bd_roll');
var wbutton = document.getElementById('wd_roll');
var abutton = document.getElementById('ad_roll');
var dice_options_black = ['Opp_black.png', 'Strife_black.png', 'Success_Exp_black.png', 'Success_black.png']
var dice_options_white = ['Opp.png', 'Strife.png', 'Success_Exp.png', 'Success.png']
//['success', 'opportunity', 'blank', 'explosive success/strife', 'opportunity/strife', 'success/strife'];

bbutton.onclick = function(){
  var table = document.getElementById('d_table');
  table.cellPadding = '10';
  //Clear table
  for(var i = 0;i<table.rows.length;){
    table.deleteRow(i);
  }
  button_click('bd_num', dice_options_black,'d_table', "<b>~~Black Dice Results~~</b>");
};

wbutton.onclick = function(){
  var table = document.getElementById('d_table');
  table.cellPadding = '10';
  //Clear table
  for(var i = 0;i<table.rows.length;){
    table.deleteRow(i);
  }
  button_click('wd_num', dice_options_white, 'd_table', "<b>~~White Dice Results~~</b>");
};

abutton.onclick = function() {
  var table = document.getElementById('d_table');
  table.cellPadding = '10';
  //Clear table
  for(var i = 0;i<table.rows.length;){
    table.deleteRow(i);
  }
  button_click('bd_num', dice_options_black,'d_table', "<b>~~Black Dice Results~~</b>");
  button_click('wd_num', dice_options_white,'d_table', "<b>~~White Dice Results~~</b>");
};