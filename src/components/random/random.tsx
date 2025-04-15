import { pick } from '@/helpers/random';
import { websites } from '@/data/websites';

import styles from './random.module.css';

export function Random() {
  const openRandom = () => {
    const randomWebsite = pick(websites);

    window.location.href = `/websites/${randomWebsite.slug}`;
  };

  return (
    <button className={styles.button} onClick={openRandom}>
      (Random)
    </button>
  );
}
