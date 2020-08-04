import React from 'react';
import classNames from 'classnames';

import { Card, CardProps } from '../../card';
import { pillClass } from '../../pill';

import styles from './default-label.module.scss';

export function DefaultLabel(props: CardProps) {
	const { className, ...rest } = props;
	return <Card {...rest} className={classNames(className, pillClass, styles.defaultLabel)} />;
}
