import React, { useState } from "react";
import styles from "@/styles/home_page.module.css";
import ShopCard from "@/components/shopCard";

export default function Layout({ children }) {
    const [burgerActive, setBurgerActive] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const [isShown, setIsShown] = useState(false);

    const handleBurgerClick = () => {
        setBurgerActive(!burgerActive);
        setShowPopup(!showPopup);
    };

    const handleShopClick = () => {
        setIsShown(!isShown);
    };

    const [name, setName] = useState("test");
    // const [shopCardArray, setShopCardArray] = useState([name]);
    const shopCardArray = ["name", "name2", "name3"];

    // const addShopCard = async () => {
    //     setShopCardArray([...shopCardArray, name]);
    // };

    if (
        children.type.name === "Connexion" ||
        children.type.name === "createAccount"
    ) {
        return <div>{children}</div>;
    } else {
        return (
            <div>
                <header className={styles.header}>
                    <div
                        className={`${styles.burger} ${burgerActive ? styles.active : ""
                            }`}
                        onClick={handleBurgerClick}
                    >
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

                    <input
                        type="search"
                        placeholder="Search"
                        className={styles.search}
                    />

                    <div className={styles.Logo}>
                        <h1>Logo</h1>
                    </div>

                    <div className={styles.shop}>
                        <button
                            className={styles.shopbtn}
                            onClick={handleShopClick}
                        >
                            {" "}
                            Product{" "}
                        </button>
                        <div className={styles.popupShop}>
                            <div className={styles.allProduct}>
                                {shopCardArray.map((item) => {
                                    {
                                        return isShown ? (
                                            <ShopCard name={item} />
                                        ) : null;
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </header>
                <main>{children}</main>
                <footer className={styles.footer}>
                    <div className={styles.footerContent}>
                        <p>Instance : numero instance</p>
                        <span>
                            <h2>Logo</h2>
                        </span>
                        <h2>Nom commercant</h2>
                    </div>
                </footer>
            </div>
        );
    }
}
