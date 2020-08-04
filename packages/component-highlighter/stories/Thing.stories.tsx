// @ts-ignore
import React from 'react';

import { ComponentHighlighter } from '../src/component-highlighter'

export default {
  title: 'Welcome',
};

const versions = { '@willsgimenes/marina': '1.0.3' };

export const Default = () => <div>
  		<ComponentHighlighter
			active={true}
			versionMap={versions}
			fullScopeName
			style={{ width: 'fit-content', margin: 'auto', position: 'relative', top: '200px' }}
			data-bit-id="@willsgimenes/marina"
		>
			<h1>hover me!</h1>
		</ComponentHighlighter>
</div>