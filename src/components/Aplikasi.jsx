import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DaftarCatatan from './DaftarCatatan';
import FormTambahCatatanPage from '../pages/FormTambahCatatanPage';
import ArsipCatatanPage from '../pages/ArsipCatatanPage';
import DetailCatatanPage from '../pages/DetailCatatanPage';
import { getInitialData } from '../utils';
import '../styles/style.css';

const Aplikasi = () => {
  const initialData = getInitialData();
  const [catatan, setCatatan] = React.useState(initialData);
  const [arsip, setArsip] = React.useState([]);

  const tambahCatatan = (catatanBaru) => {
    setCatatan([...catatan, catatanBaru]);
  };

  const hapusCatatan = (id, isFromArsip) => {
    if (isFromArsip) {
      hapusDariArsip(id);
    } else {
      hapusDariDaftar(id);
    }
  };

  const hapusDariDaftar = (id) => {
    setCatatan((prevCatatan) => prevCatatan.filter((catatan) => catatan.id !== id));
    setArsip((prevArsip) => prevArsip.filter((catatan) => catatan.id !== id));
  };

  const hapusDariArsip = (id) => {
    setArsip((prevArsip) => prevArsip.filter((catatan) => catatan.id !== id));
  };

  const arsipkanCatatan = (id) => {
    setCatatan((prevCatatan) => prevCatatan.filter((catatan) => catatan.id !== id));
    setArsip((prevArsip) => {
      const catatanDipindahkan = catatan.find((catatan) => catatan.id === id);
      return [...prevArsip, catatanDipindahkan];
    });
  };

  const kembalikanCatatan = (id) => {
    const catatanDikembalikan = arsip.find((catatan) => catatan.id === id);

    if (catatanDikembalikan) {
      setCatatan((prevCatatan) => [...prevCatatan, catatanDikembalikan]);
      setArsip((prevArsip) => prevArsip.filter((catatan) => catatan.id !== id));
    }
  };

  return (
    <Router>
      <div className="container">
        <h1>Aplikasi Catatan Pribadi</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Daftar Catatan</Link>
            </li>
            <li>
              <Link to="/tambah-catatan">Tambah Catatan</Link>
            </li>
            <li>
              <Link to="/arsip-catatan">Arsip Catatan</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/tambah-catatan" element={<FormTambahCatatanPage tambahCatatan={tambahCatatan} />} />
          <Route path="/arsip-catatan" element={<ArsipCatatanPage catatan={arsip} hapusCatatan={(id) => hapusCatatan(id, true)} arsipkanCatatan={arsipkanCatatan} kembalikanCatatan={kembalikanCatatan} />} />
          <Route path="/detail-catatan/:id" element={<DetailCatatanPage catatan={catatan} />} />
          <Route path="/" element={<DaftarCatatan catatan={catatan} hapusCatatan={hapusCatatan} arsipkanCatatan={arsipkanCatatan} kembalikanDariArsip={kembalikanCatatan} isArsip={false} />} />
        </Routes>
      </div>
    </Router>
  );
};

Aplikasi.propTypes = {
  initialData: PropTypes.array,
  catatan: PropTypes.array,
  arsip: PropTypes.array,
  tambahCatatan: PropTypes.func,
  hapusCatatan: PropTypes.func,
  hapusDariDaftar: PropTypes.func,
  hapusDariArsip: PropTypes.func,
  arsipkanCatatan: PropTypes.func,
  kembalikanCatatan: PropTypes.func,
};

export default Aplikasi;
