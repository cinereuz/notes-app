// DetailCatatanPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { showFormattedDate } from '../utils';
import PropTypes from 'prop-types';

const DetailCatatanPage = ({ catatan, isArsip }) => {
  const { id } = useParams();
  const catatanDetail = catatan.find((cat) => cat.id === parseInt(id));

  if (!catatanDetail || (isArsip && !catatanDetail.archived)) {
    return <p>Catatan tidak ditemukan</p>;
  }

  return (
    <div>
      <h2>Detail Catatan</h2>
      <strong>{catatanDetail.title}</strong>
      <p>{catatanDetail.body}</p>
      <p>Created At: {showFormattedDate(catatanDetail.createdAt)}</p>
    </div>
  );
};

DetailCatatanPage.propTypes = {
  catatan: PropTypes.array,
  isArsip: PropTypes.bool,
};

export default DetailCatatanPage;
