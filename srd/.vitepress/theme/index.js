import DefaultTheme from 'vitepress/theme';
import './ose.scss';
import Coin from './components/Coin.vue';

export default {
	...DefaultTheme,
	enhanceApp(ctx) {
		DefaultTheme.enhanceApp(ctx);
		ctx.app.component('Coin', Coin);
	},
	head: [['script', { src: 'https://cdn.vercel-insights.com/v1/script.debug.js' }]],
};
