import App from './App';
import ExampleButton from './example/example_button';
import ExampleAlert from './example/example_alert';
import ExamplePortlet from './example/example_portlet';
import ExampleModal from './example/example_modal';
import ExampleSelect from './example/example_select';
import ExamplePicker from './example/example_picker';
import ExampleTree from './example/example_tree';
import ExampleTable from './example/example_table';
import ExampleChart from './example/example_chart';
import ExampleCheckbox from './example/example_checkbox';
import Doc from './example/doc.vue';

export default [{
    path: '/',
    name: 'app',
    component: App,
    children: [{
        path: '/buttons',
        component: ExampleButton
    }]
}, {
    path: '/doc',
    name: 'doc',
    component: Doc,
    children: [{
        path: '/buttons',
        name: 'buttons',
        component: ExampleButton
    }, {
        path: '/portlet',
        name: 'portlet',
        component: ExamplePortlet
    }, {
        path: '/alert',
        name: 'alert',
        component: ExampleAlert
    }, {
        path: '/modal',
        name: 'modal',
        component: ExampleModal
    }, {
        path: '/select',
        name: 'select',
        component: ExampleSelect
    }, {
        path: '/picker',
        name: 'picker',
        component: ExamplePicker
    }, {
        path: '/tree',
        name: 'tree',
        component: ExampleTree
    }, {
        path: '/table',
        name: 'table',
        component: ExampleTable
    }, {
        path: '/chart',
        name: 'chart',
        component: ExampleChart
    }, {
        path: '/checkbox',
        name: 'checkbox',
        component: ExampleCheckbox
    }]
}];
