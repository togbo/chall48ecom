import Head from "next/head";
import { Inter } from "@next/font/google";
import React from "react";
import styles from "@/styles/home_page.module.css";
import Card from "@/components/Card";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Home page</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                    integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
                    crossorigin="anonymous"
                    referrerpolicy="no-referrer"
                />
            </Head>
            <main className={styles.main}>
                <Card/>
            </main>
        </>
    );
}

Home.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
