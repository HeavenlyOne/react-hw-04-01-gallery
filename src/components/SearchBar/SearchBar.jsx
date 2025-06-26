// import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { CiSearch } from 'react-icons/ci';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

const notify = e =>
  !e &&
  toast('Say the words, Kaladin', { duration: 2000, style: { color: 'red' } });
const initialValue = {
  searchField: '',
};
export default function SearchBar({ onSubmit, setFotos, setPage }) {
  const handleSubmit = (e, { resetForm }) => {
    notify(e.searchField);

    setPage(1);
    onSubmit(e.searchField);
    resetForm();
  };
  return (
    <header className={css.Searchbar}>
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        <Form className={css.SearchForm}>
          <button
            type="submit"
            className={css.SearchFormButton}
            // onClick={notify}
          >
            <CiSearch size="24" />
          </button>
          <Field
            className={css.SearchFormInput}
            type="text"
            name="searchField"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <Toaster position="top-right" />
          {/* {!word && <Toaster position="top-right" />
          } */}
        </Form>
      </Formik>
    </header>
  );
}
