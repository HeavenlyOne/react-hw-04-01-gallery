import css from './Loader.module.css'
import { PulseLoader } from 'react-spinners'

export default function Loader({loading}) {
    return (
      <div className={css.Container}>
        <PulseLoader
          color="rgba(0, 128, 0, 1)"
          loading={loading}
          size={25}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
}