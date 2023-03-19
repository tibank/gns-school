import React from 'react';
import { ColumnHeader } from './ColumnHeader';

import styles from './CoursesListHeader.module.css';

export const CoursesListHeader = () => {
    return (
        <div className={styles.list}>
            <ColumnHeader title='Name' width={40} />
            <ColumnHeader title='Qty lessons' width={10} />
            <ColumnHeader title='Skills' width={30} />
            <ColumnHeader title='Rate' width={10} />
            <ColumnHeader title='Foto' width={10} />
        </div>
    );
};
