import { useState, useEffect, useRef } from 'react';
import { animateScroll } from 'react-scroll';

import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';

import getFoto from './servises/getFoto';

import './App.css';

function App() {
  const [request, setRequest] = useState('');
  const [fotos, setFotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalFoto, setModalFoto] = useState({});

  // const isFirstRender = useRef(true);

  useEffect(() => {
    // if (isFirstRender.current) {
    //   console.log('first render');
    //   isFirstRender.current = false;
    //   return;
    // }
    // console.log('next render');
    const summonFotos = async () => {
      setIsLoading(true);
      await getFoto(request, page)
        .then(response =>
          setFotos(prevState => [...prevState, ...response.data.results])
        )
        .catch(error => setError(error))
        .finally(() => {
          setIsLoading(false);
          animateScroll.scrollToBottom();
        });
    };
    page < 2 && setFotos([]);
    request && summonFotos(request);
  }, [request, page]);

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <SearchBar onSubmit={setRequest} setFotos={setFotos} setPage={setPage} />

      {!error ? (
        <ImageGallery
          fotos={fotos}
          openModal={setIsOpen}
          setModalFoto={setModalFoto}
        />
      ) : (
        <ErrorMessage error={error} />
      )}
      <Loader loading={isLoading} />
      {fotos.length > 14 && !isLoading && <LoadMoreBtn setPage={setPage} />}
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          modalFoto={modalFoto}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default App;
