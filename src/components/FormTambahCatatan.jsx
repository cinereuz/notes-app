import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FormTambahCatatan = ({ tambahCatatan }) => {
  const [judul, setJudul] = useState('');
  const [isi, setIsi] = useState('');

  const maksimumKarakterJudul = 50;

  const handleTambahCatatan = () => {
    if (judul && isi) {
      tambahCatatan({
        id: +new Date(),
        title: judul,
        body: isi,
        archived: false,
        createdAt: new Date().toISOString(),
      });

      setJudul('');
      setIsi('');
    }
  };

  return (
    <div>
      <h2>Tambah Catatan</h2>
      <label>Judul:</label>
      <input type="text" value={judul} onChange={(e) => setJudul(e.target.value.slice(0, maksimumKarakterJudul))} />
      <p>Jumlah karakter tersisa: {maksimumKarakterJudul - judul.length}</p>
      <label>Isi:</label>
      <textarea value={isi} onChange={(e) => setIsi(e.target.value)} />
      <button onClick={handleTambahCatatan}>Tambah Catatan</button>
    </div>
  );
};

FormTambahCatatan.propTypes = {
  tambahCatatan: PropTypes.func,
};

export default FormTambahCatatan;
