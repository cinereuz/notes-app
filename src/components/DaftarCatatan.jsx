import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils';

const DaftarCatatan = ({ catatan, hapusCatatan, arsipkanCatatan, kembalikanDariArsip, isArsip }) => {
  const [kataKunci, setKataKunci] = useState('');

  const filteredCatatan = catatan.filter((item) => (isArsip || !item.archived) && (item.title.toLowerCase().includes(kataKunci.toLowerCase()) || item.body.toLowerCase().includes(kataKunci.toLowerCase())));

  const catatanYangDiTampilkan = isArsip ? filteredCatatan : filteredCatatan.filter((item) => !item.archived);

  return (
    <div>
      <h2>{isArsip ? 'Arsip Catatan' : 'Daftar Catatan'}</h2>
      {!isArsip && (
        <div>
          <label>Cari catatan:</label>
          <input type="text" placeholder="Cari catatan..." value={kataKunci} onChange={(e) => setKataKunci(e.target.value)} />
        </div>
      )}
      {catatanYangDiTampilkan.length === 0 ? (
        <p>Tidak ada catatan</p>
      ) : (
        <ul>
          {catatanYangDiTampilkan.map((catatan) => (
            <li key={catatan.id}>
              <strong>{catatan.title}</strong>
              <p>{catatan.body}</p>
              <p>Created At: {showFormattedDate(catatan.createdAt)}</p>
              <Link to={`/detail-catatan/${catatan.id}`}>Lihat Detail</Link>
              <button onClick={() => hapusCatatan(catatan.id, isArsip)}>Hapus</button>
              <button onClick={() => (isArsip ? kembalikanDariArsip(catatan.id) : arsipkanCatatan(catatan.id))}>{isArsip ? 'Keluarkan dari Arsip' : catatan.archived ? 'Pindahkan dari Arsip' : 'Arsipkan'}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

DaftarCatatan.propTypes = {
  catatan: PropTypes.array,
  hapusCatatan: PropTypes.func,
  arsipkanCatatan: PropTypes.func,
  kembalikanDariArsip: PropTypes.func,
  isArsip: PropTypes.bool,
};

export default DaftarCatatan;
