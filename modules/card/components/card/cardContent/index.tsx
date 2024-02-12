import React, { useContext } from 'react';
import { styleContext } from '../context';
import './styles.css';

interface CardContent {
	children: React.ReactNode;
}

export const CardContent = ({ children }: CardContent) => {
	const { paddingSize, borderAccent, siblings } = useContext(styleContext);

	// Calculate border radius if siblings exist
	const siblingClass = `${siblings?.header ?
		'flx-card__border--header-sibling' : ''} ${siblings?.footer ? 'flx-card__border--footer-sibling' : ''}`;

	// Border
	const borderClass = `flx-card__border--${borderAccent} ${siblingClass}`;

	return (
		<div 
			className={`flx-card__content ${borderClass}`}
			style={{ padding: `${paddingSize || paddingSize === 0 ? `${paddingSize}px` : ''}` }}
		>
			{children}
		</div>
	);
};
