import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ fotos, openModal, setModalFoto }) {
  return (
    <ul className={css.gallery}>
      {fotos[0] &&
        fotos.map(foto => (
          <li
            className={css.ImageGalleryItem}
            key={foto.id}
            onClick={() => { openModal(true); return setModalFoto(foto)}}
          >
            <ImageCard options={foto} />
          </li>
        ))}
    </ul>
  );
}
