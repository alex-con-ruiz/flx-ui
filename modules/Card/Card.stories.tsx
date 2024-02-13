import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {Card, CardContent, CardHeader, CardFooter } from './index';
// import { Card, CardContent, CardHeader, CardFooter } from './dist';

const meta = {
	title: 'Componets/Card',
	component: Card,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		children: {
			table: {
				type: { summary: '* required' },
				defaultValue: { summary: 'ReactNode' },
			}
		},
		id: {
			control: 'text',
			table: {
				type: { summary: 'Set id' },
				defaultValue: { summary: 'undefined' },
			}
		},
		customClassName: {
			control: 'text',
			table: {
				type: { summary: 'Custom class for external styles' },
				defaultValue: { summary: 'undefined' },
			}
		},
		borderAccent: {
			control: 'select',
			options: ['info', 'success', 'warning', 'error'],
			table: {
				type: { summary: 'Set border color' },
				defaultValue: { summary: 'undefined' },
			}
		},
		shadow: {
			control: 'select',
			options: ['flat', 'outline', 'rised'],
			table: {
				type: { summary: 'Set border color' },
				defaultValue: { summary: 'undefined' },
			}
		},
		paddingSize: {
			control: 'select',
			options: [0, 8, 16, 24],
			table: {
				type: { summary: 'Set padding from options' },
				defaultValue: { summary: 16 },
				required: true,
			}
		},
	},
	args: {
		children: undefined,
	}
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {
	render: (args) => <Card {...args}>
		<CardContent>
			<span>This is a Card and can be used to order o hightlight infomation on your page</span>
		</CardContent>
	</Card>,
};

export const Border: Story = {
	args: {
		borderAccent: 'info',
	},
	render: (args) => <Card {...args}>
		<CardContent>
			<span>This is a Card and can be used to order o hightlight infomation on your page</span>
		</CardContent>
	</Card>,
};

export const Shadows: Story = {
	render: (args) => (
		<>
			<Card shadow='flat' {...args}>
				<CardContent>
					<span>This is a Card has shadow <strong>flat</strong></span>
				</CardContent>
			</Card>
			<Card shadow='outline'  {...args}>
				<CardContent>
					<span>This is a Card has shadow <strong>outline</strong></span>
				</CardContent>
			</Card>
			<Card shadow='rised'  {...args}>
				<CardContent>
					<span>This is a Card has shadow <strong>rised</strong></span>
				</CardContent>
			</Card>
		</>
	),
};

export const Padding: Story = {
	render: () => (
		<>
			<Card paddingSize={0}>
				<CardContent>
					<span>This is a Card has a padding of <strong>0px</strong></span>
				</CardContent>
			</Card>
			<Card paddingSize={8}>
				<CardContent>
					<span>This is a Card has a padding of <strong>8px</strong></span>
				</CardContent>
			</Card>
			<Card paddingSize={16}>
				<CardContent>
					<span>This is a Card has a padding of <strong>16px</strong></span>
				</CardContent>
			</Card>
			<Card paddingSize={24}>
				<CardContent>
					<span>This is a Card has a padding of <strong>24px</strong></span>
				</CardContent>
			</Card>
		</>
	),
};

export const withHeader: Story = {
	render: (args) => <Card {...args}>
		<CardHeader title="Card Title" />
		<CardContent>
			<span>This is a Card and can be used to order o hightlight infomation on your page</span>
		</CardContent>
	</Card>,
};

export const withFooter: Story = {
	render: (args) => <Card {...args}>
		<CardContent>
			<span>This is a Card and can be used to order o hightlight infomation on your page</span>
		</CardContent>
		<CardFooter>
			<span>Footer</span>
		</CardFooter>
	</Card>,
};

export const withHeaderAndFooter: Story = {
	render: (args) => <Card {...args}>
		<CardHeader title="Card Title" />
		<CardContent>
			<span>This is a Card and can be used to order o hightlight infomation on your page</span>
		</CardContent>
		<CardFooter link={{ href: 'https//:www.google.com', text: 'Link to href', isBlank: true }}></CardFooter>
	</Card>,
};

