import { Modifier } from '@popperjs/core';

export type ResizeToMatchReferenceOptions = {
	offset: [number, number];
};

export const resizeToMatchReference: Modifier<string, ResizeToMatchReferenceOptions> = {
	name: 'resizeToMatchReference',
	enabled: true,
	phase: 'main',
	fn({ state, options }) {
		const { offset: [offsetX, offsetY] = [0, 0] } = options;

		const {
			rects: {
				reference: { width, height },
			},
		} = state;

		state.styles.popper = {
			...state.styles.popper,
			width: width + offsetX + 'px',
			height: height + offsetY + 'px',
		};
	},
};
