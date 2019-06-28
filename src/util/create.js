import Vue from 'vue';

export default function create(component, props) {
    const vm = new Vue({
        render(createElement) {
            return createElement(component, {props});
        }
    }).$mount();

    document.body.appendChild(vm.$el);

    const comp = vm.$children[0];

    comp.remove = function() {
        document.body.removeChild(vm.$el);

        vm.$destroy();
    }

    return comp;
}