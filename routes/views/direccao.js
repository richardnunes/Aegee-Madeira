var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var locals = res.locals,
        view = new keystone.View(req, res);

    // Set locals
    locals.section = 'direccao';

    locals.info = {
        title: "Conheça a nossa equipa",
        text: "Our Board Team consists of enthusiastic and motivated young individuals aiming to create an open and tolerant society of today and tomorrow."

        //Board Info
    };

    // Render the view
    view.render('direccao');

}