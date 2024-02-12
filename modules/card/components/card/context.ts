import { createContext } from 'react';
import { paddingSize, borderAccent } from './interfaces';

interface Context {
    paddingSize?: paddingSize;
    borderAccent?: borderAccent;
    siblings?: {
        header?: boolean;
        footer?: boolean;
    }
}

const context: Context = {
	paddingSize: 16,
};

export const styleContext = createContext(context);