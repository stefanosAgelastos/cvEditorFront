import { PersonalService } from './personal.service';
import { HttpClient } from '@angular/common/http';

var personalUrl = "http://localhost:8080/personal";
var contactUrl = "http://localhost:8080/contact";

let personalServiceFactory = (http: HttpClient) => {
    return new PersonalService(http, personalUrl);
};

let contactServiceFactory = (http: HttpClient) => {
    return new PersonalService(http, contactUrl);
};

export let personalServiceProvider = {
    provide: PersonalService,
    useFactory: personalServiceFactory,
    deps: [HttpClient]
};

export let contactServiceProvider = {
    provide: PersonalService,
    useFactory: contactServiceFactory,
    deps: [HttpClient]
};