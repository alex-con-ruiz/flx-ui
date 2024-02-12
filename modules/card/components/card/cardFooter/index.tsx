import React, { ReactNode, useContext } from 'react';
import './styles.css';
import { styleContext } from '../context';

interface CardFooterProps {
	children?: React.ReactNode;
	link?: {
		href: string;
		text: string;
		isBlank?: boolean;
	};
	route?: string;
}

export const CardFooter = ({ children, link, route }: CardFooterProps) => {
	const { paddingSize } = useContext(styleContext);
	let templateToRender: ReactNode;
	
	
	if (link) {
		const { href, text, isBlank } = link;
		templateToRender = (
			<div className='flx-card__footer--link'>
				<a href={href} target={isBlank ? '_blank' : '_self'} rel="noopener noreferrer">{text}</a> 
				<div>⮞</div>
			</div>
		);
	} else if (route) {
		templateToRender = (
			<div>
				<span>{route}</span>
			</div>
		);
	} else { templateToRender = null; }



	return (
		<div
			className={`flx-card__footer ${link || route ? 'flx-card__footer--hover' : ''}`}
			style={{ padding: `${paddingSize || paddingSize === 0 ? `${paddingSize}px` : ''}` }}
		>
			{!children && templateToRender}
			{(!link && !route) && children}
		</div>
	);
};
