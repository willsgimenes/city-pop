import React from 'react';
import classNames from 'classnames';
import { Card } from '../../../ui/card';

import scopeStyles from './scope-colors.module.scss';
import { BASE_URL } from '../base-url';

import { DuoComponentBubbleProps, ScopeBubbleProps, ComponentBubbleProps } from './duo-component-types';
import styles from './duo-component-bubble.module.scss';

export function DuoComponentBubble({
	packageId,
	fullScopeName,
	className,
	version,
	...rest
}: DuoComponentBubbleProps) {
	const scopeFullName = packageId.split('/')[0];

	return (
		<Card
			{...rest}
			className={classNames(
				className,
				scopeStyles.scopeColorDefinition,
				styles.duoComponentBubble
			)}
			data-current-scope={scopeFullName}
			data-ignore-component-highlight
		>
			<ScopeBubble
				packageId={packageId}
				fullScopeName={fullScopeName}
				className={styles.scopeBubble}
			/>
			<ComponentBubble packageId={packageId} version={version} />
		</Card>
	);
}

function ScopeBubble({ packageId, fullScopeName, className, ...rest }: ScopeBubbleProps) {
	const name = packageId.split('/')[0];
	const scopeUrl = `${BASE_URL}/${packageId}`;

	return (
		<a
			href={scopeUrl}
			className={classNames(styles.link, className)}
			rel="noopener noreferrer"
			target="_blank"
			{...rest}
		>
			<div className={classNames(styles.scopeName)}>
				{ name }
			</div>
		</a>
	);
}

function ComponentBubble({ packageId, className, version, ...rest }: ComponentBubbleProps) {
	const fullName = packageId.split('/')[1];
	const url = `${BASE_URL}/${packageId}`;
	return (
		<a
			href={url}
			className={classNames(styles.link, styles.componentName, className)}
			rel="noopener noreferrer"
			target="_blank"
		>
			<div className={styles.fullName}>{fullName}</div>
			{version && (
				<div className={styles.version}>
					 <span className={styles.separator}>|</span>
					{version}
				</div>
			)}
		</a>
	);
}
