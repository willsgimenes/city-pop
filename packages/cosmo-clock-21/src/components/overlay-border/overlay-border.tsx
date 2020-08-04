import React, { Component, RefObject } from 'react';
import classNames from 'classnames';

//@ts-ignore
import createRef from 'react-create-ref';
import { Instance, createPopper } from '@popperjs/core';

import styles from './overlay-border.module.scss';
import { ignorePopperSize } from '../../utils/ignore-popper-size';
import { resizeToMatchReference } from '../../utils/resize-to-match-reference';

const BASE_OFFSET = +styles.offset;

export type ComponentBorderProps = {
	targetElement?: HTMLElement;
	motionTracking?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export class OverlayBorder extends Component<ComponentBorderProps> {
	private popperInstance?: Instance;
	private ref: RefObject<HTMLDivElement> = createRef();

	componentDidMount() {
		const { targetElement } = this.props;
		if (targetElement) {
			this.reposition(targetElement);
		}
	}

	componentWillUnmount() {
		this.destroy();
	}

	componentDidUpdate(prevProps: ComponentBorderProps) {
		const nextProps = this.props;

		if (prevProps.targetElement !== nextProps.targetElement) {
			this.reposition(nextProps.targetElement);
		}
	}

	private reposition = (targetElement?: HTMLElement) => {
		if (!targetElement) {
			this.destroy();
			return;
		}

		const overlayElem = this.ref.current;
		if (!overlayElem) return;

		this.popperInstance = createPopper(targetElement, overlayElem, {
			placement: 'top-start',
			modifiers: popperModifiers,
		});

		window.requestAnimationFrame(this.step);
	};

	private step = () => {
		if (!this.popperInstance || !this.props.motionTracking) return;

		this.popperInstance.update();
		window.requestAnimationFrame(this.step);
	};

	private destroy() {
		if (!this.popperInstance) return;
		this.popperInstance.destroy();
		this.popperInstance = undefined;
	}

	render() {
		const { className, targetElement, motionTracking, ...rest } = this.props;
		return (
			<div
				{...rest}
				className={classNames(className, styles.overlayBorder)}
				ref={this.ref}
			/>
		);
	}
}

const popperModifiers = [
	ignorePopperSize,
	resizeToMatchReference,
	{
		name: 'flip',
		enabled: false,
	},
	{
		name: 'offset',
		options: {
			offset: ({ reference }: any) => [BASE_OFFSET, BASE_OFFSET - reference.height],
		},
	},
];
