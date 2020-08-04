import React from 'react';
import classNames from 'classnames';
import styles from './card.module.scss';
import { elevationClass, ElevationHeight } from '../elevation';
import { roundnessClass, Roundness } from '../roundness';
import { backgrounds } from '../background';

export type CardProps = {
	elevation?: ElevationHeight;
	roundness?: Roundness;
} & React.HTMLAttributes<HTMLDivElement>;

export function Card({
	className,
	elevation = 'low',
	roundness = 'default',
	...rest
}: CardProps) {
	return (
		<div
			className={classNames(
				styles.card,
				backgrounds.layer,
				elevationClass[elevation],
				roundnessClass[roundness],
				className
			)}
			{...rest}
		/>
	);
}

Card.defaultProps = {
	elevation: 'low',
	roundness: 'default',
};
