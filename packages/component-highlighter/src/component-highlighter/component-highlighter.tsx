import React, { Component, HTMLAttributes } from 'react';
import classNames from 'classnames';

import debounce from 'lodash.debounce';

import styles from './component-highlighter.module.scss';
import { RefTooltip } from '../ref-tooltip';
import { OverlayBorder } from '../overlay-border';
import { VersionMap } from './content-type';

import { ComponentLabel } from '../component-label';

export type ComponentHighlighterProps = {
	active?: boolean;
	fullScopeName?: boolean;
	versionMap?: VersionMap;
	blacklist?: Set<string>;
	motionTracking?: boolean;
} & HTMLAttributes<HTMLDivElement>;

type ComponentHighlighterState = {
	highlightTargetId?: string;
	targetElement?: HTMLElement;
};

export class ComponentHighlighter extends Component<
	ComponentHighlighterProps,
	ComponentHighlighterState
> {
	state: ComponentHighlighterState = {
		highlightTargetId: undefined,
		targetElement: undefined,
	};

	static defaultProps = {
		fullScopeName: true,
	};

	componentWillReceiveProps(nextProps: ComponentHighlighterProps) {
		const prevProps = this.props;

		if (prevProps.active !== nextProps.active && nextProps.active !== true) {
			this.setState({ highlightTargetId: undefined, targetElement: undefined });
		}
	}

	componentWillUnmount() {
		this.highlight.cancel();
	}

	private _highlight = (targetElement: HTMLElement | null) => {
		const { blacklist = new Set<string>() } = this.props;

		for (let elem = targetElement; !!elem; elem = elem.parentElement) {
			if (elem.hasAttribute('data-ignore-component-highlight')) {
				return;
			}

			const value = elem.getAttribute('data-bit-id');

			if (value && blacklist.has(value)) {
				continue;
			}

			if (value) {
				this.setState({ targetElement: elem, highlightTargetId: value });
				return;
			}
		}

		this.setState({ targetElement: undefined, highlightTargetId: undefined });
		return;
	};

	private highlight = debounce(this._highlight, 50);

	private handleEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const { target } = event;
		const element = target as HTMLElement;

		if (!element) return;

		this.highlight(element);
	};

	private handleLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		this.highlight(null);
	};

	render() {
		const {
			active,
			children,
			fullScopeName,
			versionMap = {},
			blacklist,
			motionTracking,
			...rest
		} = this.props;
		const { highlightTargetId, targetElement } = this.state;

		const explicitVersion = highlightTargetId && versionMap[highlightTargetId];

		return (
			<div
				{...rest}
				className={classNames(
					styles.componentHighlighter,
					active && styles.active,
					highlightTargetId && styles.highlighting
				)}
				onMouseOver={this.handleEnter}
				onMouseLeave={this.handleLeave}
			>
				{children}

				<RefTooltip
					className={styles.tooltip}
					targetElement={targetElement}
					motionTracking={motionTracking}
				>
					<ComponentLabel
						bitId={highlightTargetId}
						versionOverride={explicitVersion}
						fullScopeName={fullScopeName}
						data-ignore-component-highlight
					/>
				</RefTooltip>

				<OverlayBorder
					targetElement={targetElement}
					className={styles.border}
					motionTracking={motionTracking}
					data-ignore-component-highlight
				/>
			</div>
		);
	}
}
