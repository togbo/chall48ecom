import React from 'react';
import styles from "@/styles/home_page.module.css";

export default function ShopCard({name}) {
    return (
        <div className={styles.shopcard}>
            {/* <h2>--,--€</h2>
            <div className={styles.shopItems}> */}
                <p>{name}</p>
                {/* <p>Price</p>
                <span>+</span>
                <span>-</span>
                <span className={styles.image}></span>
            </div> */}
        </div>
    );
};



