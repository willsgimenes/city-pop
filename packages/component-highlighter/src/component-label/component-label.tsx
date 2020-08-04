import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { DuoComponentBubble } from './duo-component-bubble';
import { DefaultLabel } from './default-label';

export type ComponentLabelProps = {
	bitId?: string;
	versionOverride?: string;
	fullScopeName?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export function ComponentLabel(props: ComponentLabelProps) {
	const { bitId, versionOverride, fullScopeName, className, ...rest } = props;

	if (!bitId) return null;

	const parsed = bitId;

	if (!parsed) {
		return (
			<DefaultLabel elevation="medium" className={className} {...rest}>
				{bitId}
			</DefaultLabel>
		);
	}

	return (
		<DuoComponentBubble
			version={versionOverride}
			bitId={parsed}
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
