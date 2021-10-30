function highlight(table) {
  // ваш код...
  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    if (row.cells[3].hasAttribute(`data-available`)) {

      if (row.cells[3].getAttribute(`data-available`) =='true') {
        row.classList.toggle('available');
      }
      if (row.cells[3].getAttribute(`data-available`) =='false') {
        row.classList.toggle('unavailable');
      }
    } else {
      row.hidden = true;
    }
    if (row.cells[2].textContent =='m') {
      row.classList.toggle('male');
    }
    if (row.cells[2].textContent =='f') {
      row.classList.toggle('female');
    }
    if (row.cells[1].textContent < 18) {
      row.style="text-decoration: line-through";
    }
  } 
}
