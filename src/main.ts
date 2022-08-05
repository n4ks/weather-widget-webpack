import Vue from 'vue';
import App from './App.vue';
import wrap from '@vue/web-component-wrapper';
import WidgetComponent from './components/weather-widget.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

const WrappedWidgetElement = wrap(Vue, WidgetComponent);

window.customElements.define('weather-widget', WrappedWidgetElement as any);
