(() => {
    'use strict';

    app.sort = function(what) {
        if (what === 'title') {
            app.tasks.sort(function(a, b) {
                return new Date(a.dud).getTime() - new Date(b.dud).getTime();
            });
        }
        app.populateRow({blank: true});
        for (let x = 0; x < app.tasks.length; x++) {
            // app.tasks[x], app.tasks[x].item
            app.populateRow({item: app.tasks[x], count: app.tasks[x].item});
        }
    };
})();
