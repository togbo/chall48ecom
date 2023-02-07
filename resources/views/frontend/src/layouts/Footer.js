import React, { useState } from 'react';
import styles from "@/styles/home_page.module.css";




export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                    <p>Instance : numero instance</p>
                    <span>
                        <h2>Logo</h2>
                    </span>
                    <h2>Nom commercant</h2>
            </div>
        </footer>
    );
}