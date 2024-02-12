import React, { useContext } from 'react';
import './styles.css';
import { styleContext } from '../context';

interface CardHeader {
  children?: React.ReactNode;
  title: string;
}

export const CardHeader = ({ children, title }: CardHeader) => {
	const { paddingSize } = useContext(styleContext);
	return (
		<div 
			className="flx-card__header" 
			style={{ padding: `${paddingSize || paddingSize === 0 ? `${paddingSize}px` : ''}` }}
		>
			<h2>{title}</h2>
			{children}
		</div>
	);
};
