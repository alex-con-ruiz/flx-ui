import React from 'react';
import './styles.css';
interface CardFooterProps {
    children?: React.ReactNode;
    link?: {
        href: string;
        text: string;
        isBlank?: boolean;
    };
    route?: string;
}
export declare const CardFooter: ({ children, link, route }: CardFooterProps) => React.JSX.Element;
export {};
