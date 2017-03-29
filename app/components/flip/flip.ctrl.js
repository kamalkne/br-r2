(() => {
    'use strict';

    app.cache = {};
    app.switch = function(count) {
        if (count) {
            if (!app.cache[count]) {
                app.cache[1] = document.getElementById('create-screen');
                app.cache[2] = document.getElementById('list-screen');
            }
            for (let i in app.cache) {
                if (app.cache.hasOwnProperty(i)) {
                    if (parseInt(i) === count) {
                        app.cache[i].style.display = 'block';
                    } else {
                        app.cache[i].style.display = 'none';
                    }
                }
            }
            if (count === 2) {
                app.listTasks();
            }
        }
    };
})();
