// ArsipCatatanPage.jsx
import React from 'react';
import DaftarCatatan from '../components/DaftarCatatan';
import DetailCatatanPage from './DetailCatatanPage';
import PropTypes from 'prop-types';

const ArsipCatatanPage = ({ catatan = [], hapusCatatan = () => {}, arsipkanCatatan = () => {}, kembalikanCatatan = () => {} }) => {
  const kembalikanDariArsip = (id) => {
    kembalikanCatatan(id);
  };

  const catatanDiarsipkan = catatan.filter((cat) => cat.archived);

  return (
    <div>
      {catatanDiarsipkan.length > 0 && <DetailCatatanPage catatan={catatanDiarsipkan} isArsip={true} />}

      <DaftarCatatan catatan={catatan} hapusCatatan={hapusCatatan} arsipkanCatatan={arsipkanCatatan} kembalikanDariArsip={kembalikanDariArsip} isArsip={true} />
    </div>
  );
};

ArsipCatatanPage.propTypes = {
  catatan: PropTypes.array,
  hapusCatatan: PropTypes.func,
  arsipkanCatatan: PropTypes.func,
  kembalikanCatatan: PropTypes.func,
};

export default ArsipCatatanPage;
