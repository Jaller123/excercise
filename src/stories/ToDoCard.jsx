import React from 'react'
import styles from './TodoCard.module.css'

export default function TodoCard({
title,
done = false,
loading = false, 
onToggle,
onDelete,
}) {
    return(
        <>
            <div className={styles.card}>
                <input 
                    type="checkbox"
                    checked={done}
                    disabled={loading}
                    onChange={() => onToggle?.()}
                />

                <div className={styles.content}>
                    <div
                        className={`${styles.title} ${done ? styles.done : ""}`}
                    >
                        {title}
                    </div>

                    {loading && <div className={styles.loading}>Saving...</div>}
                </div>
                <button
                    className={styles.delete}
                    disabled={loading}
                    onClick={() => onDelete?.()}
                    >
                        Delete
                </button>
            </div>
        </>
    )
}