import React from 'react';
import styles from "@/styles/home_page.module.css";

export default function ShopCard({ name }) {
    return (
        <div className={styles.shopcard}>
            <h2>--,--€</h2>
            <p>{name}</p>
            <span className={styles.image}></span>
            <input type="button" value="+" />
            <input type="button" value="-" />
            
        </div>
    );
};



