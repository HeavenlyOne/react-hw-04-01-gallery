import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ setPage }) {
  return (
    <div className={css.buttonContainer}>
      <button
        type="button"
        className={css.Button}
        onClick={() => setPage(prevState => prevState + 1)}
      >
        Load more
      </button>
    </div>
  );
}
