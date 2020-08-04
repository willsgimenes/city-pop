import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { DuoComponentBubble } from './duo-component-bubble';
import { DefaultLabel } from './default-label';

export type ComponentLabelProps = {
	packageId?: string;
	versionOverride?: string;
	fullScopeName?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export function ComponentLabel(props: ComponentLabelProps) {
	const { packageId, versionOverride, fullScopeName, className, ...rest } = props;

	if (!packageId) return null;

	const parsed = packageId;

	if (!parsed) {
		return (
			<DefaultLabel elevation="medium" className={className} {...rest}>
				{packageId}
			</DefaultLabel>
		);
	}

	return (
		<DuoComponentBubble
			version={versionOverride}
			packageId={parsed}
			elevation="medium"
			className={classNames(className)}
			fullScopeName={fullScopeName}
			{...rest}
		/>
	);
}

ComponentLabel.defaultProps = {
	fullScopeName: true,
};
