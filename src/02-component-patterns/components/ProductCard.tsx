import styles from '../styles/styles.module.css';
import { createContext, useContext, useState } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';
import { ProductButtons, ProductImage, ProductTitle } from "../components"

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({children, product }:ProductCardProps) => {

    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
             <div className={ styles.productCard }>
                {children}
            </div>
        </Provider>
    )
}

