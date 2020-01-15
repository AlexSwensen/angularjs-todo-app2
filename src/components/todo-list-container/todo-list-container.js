import {app} from '../../angularjs.module';
app.component('todo-list-container', {
    bindings: {
    },
    template: require('!raw-loader!./todo-list-container.html')
})