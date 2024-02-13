import React from 'react';
import { styleContext } from '../context';
import './styles.css';

import { CardProps, ChildToRender } from '../interfaces';

export const Card = ({ children, id, customClassName, borderAccent, paddingSize, shadow = 'flat' }: CardProps) => {
	// Child Managemnt
	let childToRender = {} as ChildToRender;

	React.Children // @ts-expect-error avoid error iterating child element while alocating them always in the same order
		.map(children, child => ({ [`${child && child?.type['name']}`]: child }))?.forEach(child => {
			childToRender = { ...childToRender, ...child };
		});
	
	// Classes
	const shadowClass = `flx-card__shadow--${shadow}`;
	const customClass = customClassName ? customClassName : '';

	const {CardHeader, CardContent, CardFooter} = childToRender;
	
	return (
		<styleContext.Provider value={{
			paddingSize: paddingSize,
			borderAccent: borderAccent,
			siblings: {
				header: CardHeader ? true : false, // need the bolean not the ReactNode
				footer: CardFooter ? true : false, // need the bolean not the ReactNode
			}
		}}>
			<article
				id={id}
				className={`flx-card ${customClass} ${shadowClass}`}
			>
				{CardHeader || null}
				{CardContent}
				{CardFooter || null}
			</article>
		</styleContext.Provider>
	);
};