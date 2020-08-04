import React from 'react';
import classNames from 'classnames';

import { Card, CardProps } from '../../../ui/card';
import { pillClass } from '../../../ui/pill';

import styles from './default-label.module.scss';

export function DefaultLabel(props: CardProps) {
	const { className, ...rest } = props;
	return <Card {...rest} className={classNames(className, pillClass, styles.defaultLabel)} />;
}
