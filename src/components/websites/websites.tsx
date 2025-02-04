import { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { RiZoomOutLine, RiZoomInLine } from 'react-icons/ri';

import { cn } from '@/helpers/styles';
import { padNumber } from '@/helpers/number';

import styles from './websites.module.css';

interface WebsitesProps {
  websites: Array<{
    address: string;
    date: string;
    name: string;
    screenshot: string;
    url: string;
  }>;
}

export function Websites({ websites }: WebsitesProps) {
  const [style, setStyle] = useState<'big' | 'small'>('small');

  return (
    <>
      <div className={styles.styleWrapper}>
        <div className={styles.styleDivider} />
        <div className={styles.styleButtons}>
          <button
            className={cn(style === 'small' && styles.selected)}
            onClick={() => setStyle('small')}
          >
            <RiZoomOutLine />
          </button>
          <button
            className={cn(style === 'big' && styles.selected)}
            onClick={() => setStyle('big')}
          >
            <RiZoomInLine />
          </button>
        </div>
      </div>

      <section
        className={cn(
          styles.websites,
          style === 'small' && styles.small,
          style === 'big' && styles.big,
        )}
      >
        {websites.map((website, index) => (
          <a
            className={styles.website}
            href={website.url}
            key={`${website.address}-${index}`}
          >
            <div className={styles.screenshot}>
              <img
                alt={website.address}
                loading="lazy"
                src={website.screenshot}
              />
            </div>

            {style === 'small' && (
              <div className={styles.name}>{website.name}</div>
            )}

            {style === 'big' && (
              <div className={styles.details}>
                <div className={styles.row}>
                  <p className={styles.number}>
                    {padNumber(websites.length - index, 3)}
                  </p>
                  <p className={styles.name}>{website.name}</p>
                  <div className={styles.divider} />
                  <div className={styles.visit}>
                    <MdArrowOutward />
                  </div>
                </div>
              </div>
            )}
          </a>
        ))}
      </section>
    </>
  );
}
