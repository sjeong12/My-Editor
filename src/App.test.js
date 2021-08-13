import Vue from 'vue';
import Hello from './App.vue';

test('HelloWorld Component', () => {
	const cmp = new Vue(Hello).$mount();
	expect(cmp.message).toBe('Hello My Editor');
});
