import React, { Component } from 'react';
import classNames from 'classnames';
import { createPopper, Instance, Options } from '@popperjs/core';
//@ts-ignore
import createRef from 'react-create-ref';

import styles from './ref-tooltip.module.scss';

export type RefTooltipProps = {
	targetElement?: HTMLElement,
	popperOptions?: Partial<Options>,
	motionTracking?: boolean,
} & React.HTMLAttributes<HTMLDivElement>;

export class RefTooltip extends Component<RefTooltipProps> {
	ref: any = createRef();
	popperInstance: Instance | undefined;

	componentWillUnmount() {
		this.destroy();
	}

	componentDidUpdate(prevProps: RefTooltipProps) {
		const nextProps = this.props;

		if (prevProps.targetElement !== nextProps.targetElement) {
			this.reposition(nextProps.targetElement);
		}
	}

	reposition = (targetElement?: HTMLElement) => {
		const { popperOptions = popperDefaultOptions } = this.props;
		const popperElement = this.ref.current;

		if (!targetElement) {
			this.destroy();
		}

		if (!targetElement || !popperElement) return;

		this.popperInstance = createPopper(targetElement, popperElement, popperOptions);
		
		window.requestAnimationFrame(this.step);
	};
	
	private step = () => {
		if (!this.popperInstance || !this.props.motionTracking) return;

		this.popperInstance.update();
		window.requestAnimationFrame(this.step);
	};

	destroy = () => {
		if (!this.popperInstance) return;

		this.popperInstance.destroy();
		this.popperInstance = undefined;
	};

	render() {
		const { className, targetElement, popperOptions, motionTracking, ...rest } = this.props;
		return (
			<div
				{...rest}
				ref={this.ref}
				className={classNames(styles.tooltipWrapper, className)}
				data-ignore-component-highlight
			/>
		);
	}
}

const popperDefaultOptions: Partial<Options> = {
	placement: 'top',
	modifiers: [
		{
			name: 'flip',
			enabled: false,
		},
	],
};
