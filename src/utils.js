import isArray from '@tinkoff/utils/is/array';
import hoist from 'hoist-non-react-statics';

function unUsedFn() {
	console.log('marked-text')
	console.log(isArray([]));
	console.log(hoist);
}

function mainFn() { }

export { mainFn };