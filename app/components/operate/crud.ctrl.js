(() => {
    'use strict';

    app.createTask = function() {
        var taskObject = {
            tit: document.getElementById('tit').value,
            desc: document.getElementById('desc').value,
            asg: document.getElementById('asg').value,
            dud: document.getElementById('dud').value,
            sts: document.getElementById('sts').value,
            pri: document.getElementById('pri').value
        };
        let tCount = localStorage.getItem('count');
        if (tCount) {
            tCount++;
        } else {
            tCount = 0;
        }
        localStorage.setItem('count', tCount);
        localStorage.setItem('t-' + tCount, JSON.stringify(taskObject));
        alert('Created');
    };

    app.listTasks = function() {
        app.tasks = [];
        // app.populateRow('', '', true);
        app.populateRow({blank: true});
        for (let item in localStorage) {
            if (localStorage.hasOwnProperty(item)) {
                if (item.startsWith('t-')) {
                    let i = JSON.parse(localStorage.getItem(item));
                    if (i.tit) {
                        i.id = item;
                        app.tasks.push(i);
                        // app.populateRow(i, item);
                        app.populateRow({item: i, count: item});
                    }
                }
            }
        }
    };

    app.editTask = function(e) {
        console.log(e.dataset.item);
        var a = document.getElementById(e.dataset.item);
        let l = JSON.parse(localStorage.getItem(e.dataset.item));
        l.tit = a.childNodes[0].firstChild.value;
        localStorage.setItem(e.dataset.item, JSON.stringify(l));
        alert('Saved');
    };
})();
