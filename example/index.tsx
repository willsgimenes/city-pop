import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ComponentHighlighter from "@willsgimenes/component-highlighter";

const versions = { '@willsgimenes/marina': '1.0.3' };

const App = () => {
  return (
    <div>
      <ComponentHighlighter
			active
			versionMap={versions}
			fullScopeName
			style={{ width: 'fit-content', margin: 'auto', position: 'relative', top: '200px' }}
			data-package-id="@willsgimenes/marina"
		>
			<h1>hover me!</h1>
		</ComponentHighlighter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
