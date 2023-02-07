import React from 'react';
import '@/styles/globals.css';
import { Footer, Header } from '@/layouts/layout';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}