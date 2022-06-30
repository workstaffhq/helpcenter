import React from 'react';
import styles from './NavCard.module.css';

export default function NavCard({title, children}) {
    return (
        <div className="card">
            <div className={'card__body ' + styles.body}>
                {children}
            </div>
        </div>
    );
}
