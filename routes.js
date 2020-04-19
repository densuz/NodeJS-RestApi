'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilmhs);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkansid);

    app.route('/tambah')
        .post(jsonku.tambahdataMhs);
    app.route('/ubah')
        .put(jsonku.ubahdatamhs)
    app.route('/hapus')
        .delete(jsonku.hapusdatamhs)
    app.route('/tampilgroupmatkul')
        .get(jsonku.tampilgroupmatkul)
};