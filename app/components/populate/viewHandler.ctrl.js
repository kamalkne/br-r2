(() => {
    'use strict';

    // item, count, blank
    app.populateRow = function(config) {
        let item = config.item,
            count = config.count,
            blank = config.blank,
            tbody = document.getElementById('tasks-body');
        if (blank) {
            var table = tbody.parentNode;
            tbody.parentNode.removeChild(tbody);
            tbody = document.createElement('tbody');
            tbody.setAttribute('id', 'tasks-body');
            table.appendChild(tbody);
            return;
        }
        var row = tbody.insertRow(0),
            cell1 = row.insertCell(0),
            cell3 = row.insertCell(1),
            cell4 = row.insertCell(2),
            cell2 = row.insertCell(3),
            cell5 = row.insertCell(4);
        // cell1.innerHTML = item.asg;
        row.id = count;
        cell1.innerHTML = '<input type="text" value="' + item.tit + '">';
        cell2.innerHTML = '<input type="text" readonly value="' + item.desc + '">';
        cell3.innerHTML = '<input type="text" readonly value="' + item.dud + '">';
        cell4.innerHTML = '<input type="text" readonly value="' + item.pri + '">';
        cell5.innerHTML = '<button type="button" class="btn" onClick="app.editTask(this)" value="" ' +
            'data-item="' + count + '">SAVE</button>';
    };
})();
