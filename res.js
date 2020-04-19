'use strict';

exports.ok = function (values, res) {
    var data = {
        'status': 200,
        'values': values
    };

    res.json(data);
    res.end();
};

//Response untuk NESTED tabel MATAKULIAH
exports.oknested = function (values, res) {
    //lakukan akumulasi
    const hasil = values.reduce((akumulasikan, item) => {
        //Tentukan key group
        if (akumulasikan[item.nama]) {
            //buat variabel grup nama mahasiswa
            const group = akumulasikan[item.nama];
            //cek jika isi array matakuliah
            if (Array.isArray(group.matakuliah)) {
                //if true ,maka tambahkan value ke dalam group matakuliah
                group.matakuliah.push(item.matakuliah);
            } else{
                group.matakuliah =[group.matakuliah, item.matakuliah];
            }
                
            }else {
                akumulasikan[item.nama] = item;
        }
        return akumulasikan;
    }, {});

    var data = {
        'status': 200,
        'values': hasil
    };
    res.json(data);
    res.end();
};