import React from "react"
import styles from './StatusBadge.module.css'

export default function StatusBadge ({
    status = "online",
    size = "md",
}) {
    return (<div className={`${styles.badge} ${styles[status]} ${styles[size]}`}>
        {status}
    </div>)
} 


