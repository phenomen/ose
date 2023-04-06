import DefaultTheme from 'vitepress/theme';
import './ose.scss';
import Coin from './components/Coin.vue';

export default {
	...DefaultTheme,
	enhanceApp(ctx) {
		DefaultTheme.enhanceApp(ctx);
		ctx.app.component('Coin', Coin);
	},
};
