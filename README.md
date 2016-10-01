# Angular2HelloWorld
Another repository based on working through ng-book2 pre-releases<br/>
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.11-webpack.8.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.</br>
Note: generate does not add the import statement and declaration to app.module.ts. It must be added manually to use the component. *ng-book2-r41 implies that you simply run the generator, put the selector tag on app.component.html and it will appear on the page* **That is not correct**
While the generator appears to try and modify the app.component module, it fails to do so. Here is what the generator did when generating a component called hello-world:</br>
Created a hello-world directory under src/app and placed the hello-world.component.css,html,spec.ts,ts files in it. .html contains a simple paragraph with text stating 'hello-world works!' .css is empty. .spec.ts contains a basic test. .ts contains a decorator and empty class.</br>
**important** the generated ts reference converted representations of the component name used when generate was called. The selector is was defined as app-hello-world and the class was defined as HelloWorldComponent.
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
