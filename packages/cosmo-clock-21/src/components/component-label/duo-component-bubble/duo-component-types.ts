import React from 'react';
import { CardProps } from '../../../ui/card';

export type DuoComponentBubbleProps = {
	packageId: String;
	fullScopeName?: boolean;
	version?: String,
} & CardProps;

export type ScopeBubbleProps = {
	packageId: String;
	fullScopeName?: boolean;
	version?: String,
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ComponentBubbleProps = {
	packageId: String;
	version?: String;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;
