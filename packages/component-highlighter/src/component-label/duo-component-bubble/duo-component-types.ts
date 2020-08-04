import React from 'react';
import { CardProps } from '../../card';

export type DuoComponentBubbleProps = {
	bitId: String;
	fullScopeName?: boolean;
	version?: String,
} & CardProps;

export type ScopeBubbleProps = {
	bitId: String;
	fullScopeName?: boolean;
	version?: String,
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ComponentBubbleProps = {
	bitId: String;
	version?: String;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;
