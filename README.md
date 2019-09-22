<MainGrid>

<HeaderTitle>
  
# CRUD application w/ Angular 5 <br/> using JWT for authentication and authorization

<TitleAction href="https://github.com/stefanosAgelastos/cvEditorFront" label="Go to github repo" />
<TitleAction href="http://makeyourcv.stefworks.ml" label="Go to demo" />
</HeaderTitle>


<InfoGrid>

<InfoPaper>
  
### Description
 
This is an SPA, made with Angular 5. This project was coded as an exam project for 5th semester's **(Spring 2018) elective course: Front End development** at KEA's Computer Science AP. For this project I got an excellent evaluation during the exam. The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0. You can see the demo, which is hosted on github pages. At the moment there's no server online, so one cannot login.

</InfoPaper>

<InfoPaper>
<MyChip label="Front-end Development"/>
<MyChip label="Typescript"/>
<MyChip label="Angular 5"/>
<MyChip label="JWT auth"/>
<MyChip label="Karma"/>
<MyChip label="Protractor"/>
</InfoPaper>

</InfoGrid>

<PanelGrid>
<Panel id="1" heading="What?" secondaryHeading="About the technologies I used" >

### The Stack:
- Angular 5 framework
- Typescript
- JWT for signup, signin and accessing authorised resources
- Karma for unit testing
- Protractor for end-to-end testing
</Panel>

<Panel id="2" heading="What for?" secondaryHeading="About the functionality" >  
  
### Main features
  
The application exposes a Sign-in Sign-up page to the public. Authentication is based on JWT tokens, and is implemented buy the Java REST api found [here](https://github.com/stefanosAgelastos/personalRest) After succesfull authentication, it fetches the user's saved resources which are of two types. It allows full CRUD operations on both resource. I am especially proud of using inheritance in order to provide abstract logic for both resources.
</Panel>

<Panel id="3" heading="For Devs" secondaryHeading="Angular scripts" >

## Scripts
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
</Panel>

</PanelGrid>


</MainGrid>


