import React from 'react'
import styles from '../styles/Card.module.css'

export default function Card() {
    const cards = [
        {
            id: 1,
            title: 'Product 1',
            text: 'Pc gaming',

        },
        {
            id: 2,
            title: 'Product 2',
            text: 'Pc gaming',

        },
        {
            id: 3,
            title: 'Product 3',
            text: 'Pc gaming',

        },
        {
            id: 4,
            title: 'Product 4',
            text: 'Pc gaming',
        },
        {
            id: 5,
            title: 'Product 5',
            text: 'Pc gaming',
        },
        {
            id: 6,
            title: 'Product 6',
            text: 'Pc gaming',
        },
        {
            id: 7,
            title: 'Product 7',
            text: 'Pc gaming',
        },
        {
            id: 8,
            title: 'Product 8',
            text: 'Pc gaming',
        },
        {
            id: 9,
            title: 'Product 9',
            text: 'Pc gaming',
        },
        {
            id: 10,
            title: 'Product 10',
            text: 'Pc gaming',
        },
        {
            id: 11,
            title: 'Product 11',
            text: 'Pc gaming',
        },
        {
            id: 12,
            title: 'Product 12',
            text: 'Pc gaming',
        },
        {
            id: 13,
            title: 'Product 13',
            text: 'Pc gaming',
        },
        {
            id: 14,
            title: 'Product 14',
            text: 'Pc gaming',
        },
    ]
    return (
        <div className={styles.cards}>
            {cards.map(card => (
                <div className= {styles.root} key = {card.id}>
                    <div className={styles.cardwrapper}>
                        <div className={styles.card}>
                            <div className={styles.cardfront}>
                                <h2>{card.title }    </h2>
                                <div className={styles.line}></div>
                                <div className={styles.circle}>
                                </div>
                                <div className={styles.Dicover}>
                                    <h4>Discover Me </h4>
                                    <div className={styles.arrow}></div>
                                </div>
                            </div>
                            <div className={styles.cardback}>
                                <h1>{card.text}</h1>
                                <div className={styles.line2}></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repudiandae in atque quibusdam excepturi blanditiis, reiciendis</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
    )
}