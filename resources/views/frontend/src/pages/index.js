import { Inter } from "@next/font/google";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className={styles.home}>
            <Link href={"/connexion"}>
                <button className={styles.connexionAccessButton}>
                    Connexion access
                </button>
            </Link>
            <Link href={"/home_page"}>
                <button className={styles.homePageAccessButton}>
                    Home page access
                </button>
            </Link>
        </div>
    );
}
