import React from 'react';
import styles from './NavGrid.module.css';

export default function NavGrid({cols = undefined, children}) {
    if (!Array.isArray(children)) {
        children = [children]
    }

    const colSize = 12 / (cols ?? children.length);

    return (
        <div className={'row ' + styles.row}>
            {children.map((child, idx) => (
                <div key={idx} className={`col col--${colSize}`}>
                    {child}
                </div>
            ))}
        </div>
    )
}
