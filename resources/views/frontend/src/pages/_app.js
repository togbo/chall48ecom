import React from 'react';
import '@/styles/globals.css';
import { Header } from '@/layouts/layout';

export default function App({ Component, pageProps }) {
    return (
        <Header>
            <Component {...pageProps} />
        </Header>
    );
}