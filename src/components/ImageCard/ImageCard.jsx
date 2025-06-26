import css from './ImageCard.module.css'

export default function ImageCard({ options }) {
  const {description, urls, user, likes} = options
  return (
    <div>
      <img
        src={urls.small}
        alt={description}
        className={css.ImageGalleryItemImage}
      />
    </div>
  );
}