import React, { useState } from 'react';
import styles from "@/styles/home_page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Header() {
    const [burgerActive, setBurgerActive] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const [shopItems, setShopItems] = useState(false);

    const handleBurgerClick = () => {
        setBurgerActive(!burgerActive);
        setShowPopup(!showPopup);
    };

    const handleShopClick = () => {
        setShopItems(!shopItems);
    };

    return (
        <header className={styles.header}>
            <div className={`${styles.burger} ${burgerActive ? styles.active : ''}`} onClick={handleBurgerClick}>
                <span />
            </div>
            {showPopup && (
                <div className={styles.popupdiv}>
                    <a href="#">Profil</a>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            )}

            <input type="search" placeholder="Search" className={styles.search} />

            <div className={styles.Logo}>
                <h1>Logo</h1>
            </div>

            <div className={styles.shop}>
                <button className={styles.shopbtn} onClick={handleShopClick} > Buy </button>
                {shopItems && (
                    <div className={styles.popupShop}>
                        <h2>--,--€</h2>
                        <div className={styles.shopItems}>
                            <p>Name Item</p>
                            <p>Price</p>
                            <span>+</span>
                            <span>-</span>
                            <span className={styles.image}></span>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

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