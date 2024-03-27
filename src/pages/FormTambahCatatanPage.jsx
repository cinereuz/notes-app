import React from 'react';
import FormTambahCatatan from '../components/FormTambahCatatan';
import PropTypes from 'prop-types';

const FormTambahCatatanPage = ({ tambahCatatan }) => {
  return (
    <div>
      <FormTambahCatatan tambahCatatan={tambahCatatan} />
    </div>
  );
};

FormTambahCatatanPage.propTypes = {
  tambahCatatan: PropTypes.func,
};

export default FormTambahCatatanPage;
