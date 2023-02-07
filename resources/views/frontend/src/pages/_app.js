import React from 'react';
import '@/styles/globals.css';
import { Footer} from '@/layouts/layout';
import { Header } from '@/layouts/Header';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}