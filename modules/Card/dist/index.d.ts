import React, { ReactNode } from 'react';

type paddingSize = 0 | 8 | 16 | 24 | undefined;
type borderAccent = 'info' | 'success' | 'warning' | 'error' | undefined;
type shadow = 'flat' | 'outline' | 'rised';
interface CardProps {
    customClassName?: string;
    id?: string;
    paddingSize?: paddingSize;
    borderAccent?: borderAccent;
    shadow?: shadow;
    children: ReactNode;
}

declare const Card: ({ children, id, customClassName, borderAccent, paddingSize, shadow }: CardProps) => React.JSX.Element;

interface CardContent {
    children: React.ReactNode;
}
declare const CardContent: ({ children }: CardContent) => React.JSX.Element;

interface CardHeader {
    children?: React.ReactNode;
    title: string;
}
declare const CardHeader: ({ children, title }: CardHeader) => React.JSX.Element;

interface CardFooterProps {
    children?: React.ReactNode;
    link?: {
        href: string;
        text: string;
        isBlank?: boolean;
    };
    route?: string;
}
declare const CardFooter: ({ children, link, route }: CardFooterProps) => React.JSX.Element;

export { Card, CardContent, CardFooter, CardHeader };
