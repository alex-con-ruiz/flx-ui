import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: any;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        children: {
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        id: {
            control: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        customClassName: {
            control: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        borderAccent: {
            control: string;
            options: string[];
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        shadow: {
            control: string;
            options: string[];
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        paddingSize: {
            control: string;
            options: number[];
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: number;
                };
                required: boolean;
            };
        };
    };
    args: {
        children: undefined;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Base: Story;
export declare const Border: Story;
export declare const Shadows: Story;
export declare const Padding: Story;
export declare const withHeader: Story;
export declare const withFooter: Story;
export declare const withHeaderAndFooter: Story;
