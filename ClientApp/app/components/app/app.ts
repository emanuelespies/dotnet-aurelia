import { Aurelia, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
    router: Router | undefined;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'DotnetCore';
        config.map([{
            route: [ '', 'home' ],
            name: 'home',
            settings: { icon: 'home' },
            moduleId: PLATFORM.moduleName('../home/home'),
            nav: true,
            title: 'Home'
        }, {
            route: 'counter',
            name: 'counter',
            settings: { icon: 'education' },
            moduleId: PLATFORM.moduleName('../counter/counter'),
            nav: true,
            title: 'Counter'
        }, {
            route: 'hello-world',
            name: 'helloworld',
            settings: { icon: 'globe' },
            moduleId: PLATFORM.moduleName('../helloworld/helloworld'),
            nav: true,
            title: 'Hello World'
        }, {
            route: 'contacts-list',
            name: 'contacts',
            settings: { icon: 'book' },
            moduleId: PLATFORM.moduleName('../contacts/contacts'),
            nav: true,
            title: 'Contact List'
        }, {
            route: 'contacts-list/:id',
            name: 'ContactDetail',
            settings: { icon: 'book' },
            moduleId: PLATFORM.moduleName('../contacts/ContactDetail')
        }, {
            route: 'fetch-data',
            name: 'fetchdata',
            settings: { icon: 'th-list' },
            moduleId: PLATFORM.moduleName('../fetchdata/fetchdata'),
            nav: true,
            title: 'Fetch data'
        }]);

        this.router = router;
    }
}
