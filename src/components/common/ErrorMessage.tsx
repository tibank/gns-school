import React, { FC, useRef } from 'react';
import styles from './ErrorMessage.module.css';

interface IErrorMessageProps {
    message: string;
}

export const ErrorMessage: FC<IErrorMessageProps> = ({ message }) => {
    const errorWindow = useRef<HTMLDivElement>(null);

    const hiddenMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
        const modal = errorWindow.current;
        if (modal) {
            modal.style.display = 'none';
        }
    };

    return (
        <div ref={errorWindow} className={`${styles.errorLayer}`}>
            <div className={`${styles.errorContent}`}>
                <div>{message}</div>
                <div className={styles.btnBlock}>
                    <button className={styles.btnOK} onClick={hiddenMessage}>
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};
