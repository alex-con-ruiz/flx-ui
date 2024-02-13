/// <reference types="react" />
import { paddingSize, borderAccent } from './interfaces';
interface Context {
    paddingSize?: paddingSize;
    borderAccent?: borderAccent;
    siblings?: {
        header?: boolean;
        footer?: boolean;
    };
}
export declare const styleContext: import("react").Context<Context>;
export {};
