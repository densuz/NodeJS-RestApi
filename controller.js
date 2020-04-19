'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi Rest API WORKING!", res)
};

//Tampilkan Data Mahasiswa
exports.tampilmhs = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });

};

//Tampilkan Data Mahasiswa berdasarkan id
exports.tampilberdasarkansid = function (req, res) {
    let id = req.params.id_mhs;
    connection.query('SELECT * FROM mahasiswa WHERE id_mhs = ?', [id_mhs],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//Tambahkan Data Mahasiswa
exports.tambahdataMhs = function (req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var prodi = req.body.prodi;

    connection.query('INSERT INTO mahasiswa (nim,nama,prodi) VALUES(?,?,?)', [nim, nama, prodi],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Berhasil Ditambahkan!", res)
            }

        });
};

//mengubah data berdasarkan id
exports.ubahdatamhs = function (req, res) {
    var id = req.body.id_mhs;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var prodi = req.body.prodi;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, prodi=? WHERE id_mhs=?', [nim, nama, prodi, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data!", res)
            }
        });
};

//Menghapus Data Mahasiswa Berdasarkan id
exports.hapusdatamhs = function (req, res) {
    var id = req.body.id_mhs;


    connection.query('DELETE FROM mahasiswa WHERE id_mhs=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menghapus Data!", res)
            }
        });
};

//tampilkan matakuliah Group
exports.tampilgroupmatkul = function (req, res) {
    connection.query('SELECT mahasiswa.id_mhs,mahasiswa.nim, mahasiswa.nama,mahasiswa.prodi, matakuliah.matakuliah,matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matkul = matakuliah.id_matkul AND krs.id_mahasiswa = mahasiswa.id_mhs ORDER BY mahasiswa.id_mhs',
    function (error , rows ,fields) {
        if (error) {
            console.log(error);
        } else {
            response.oknested(rows, res)
        }
        
    });
}
    
       