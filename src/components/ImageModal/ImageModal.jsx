import css from './ImageModal.module.css';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#modal-root');

export default function ImageModal({ isOpen, modalFoto, closeModal }) {
  //   let subtitle;

  //   function afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = '#f00';
  //   }
  function cutDescription() {
    const { description } = modalFoto;

    return description ? (description.length > 55
      ? `${description.slice(0, 55)}...`
      : description.slice(0, 55)) : 'there is no description';
  }
  const desc = cutDescription()

  return (
    <ReactModal
      isOpen={isOpen}
      //   style={css}
      onRequestClose={closeModal}
      //   onAfterOpen={afterOpenModal}
      contantLabel={modalFoto.description}
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <img
        // ref={_subtitle => (subtitle = _subtitle)}
        src={modalFoto.urls.regular}
        alt={modalFoto.description}
        // className={css.Modal}
      />
      <div className={css.Info}>
        <p>{`description: ${desc}`}</p>
        <p>{`likes: ${modalFoto.likes}`}</p>
        <p>{`author: ${modalFoto.user.name}`}</p>
      </div>
    </ReactModal>
  );
}
