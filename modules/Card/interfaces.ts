import { ReactNode } from 'react';

export type paddingSize = 0 | 8 | 16 | 24 | undefined;

export type borderAccent = 'info' | 'success' | 'warning' | 'error' | undefined;

export type shadow = 'flat' | 'outline' | 'rised' ;

export interface CardProps {
    customClassName?: string;
    id?: string;
    paddingSize?: paddingSize;
    borderAccent?: borderAccent; 
    shadow?: shadow; 
    children: ReactNode;
}

export interface ChildToRender {
    CardHeader: ReactNode,
    CardContent: ReactNode,
    CardFooter: ReactNode,
}