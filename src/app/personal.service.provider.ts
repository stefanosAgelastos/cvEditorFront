import { DetailService } from './detail.service';
import { HttpClient } from '@angular/common/http';

var personalUrl = "http://54.93.66.2:2300/personal";
var contactUrl = "http://54.93.66.2:2300/contact";

let personalServiceFactory = (http: HttpClient) => {
    return new DetailService(http, personalUrl);
};

let contactServiceFactory = (http: HttpClient) => {
    return new DetailService(http, contactUrl);
};

export let personalServiceProvider = {
    provide: DetailService,
    useFactory: personalServiceFactory,
    deps: [HttpClient]
};

export let contactServiceProvider = {
    provide: DetailService,
    useFactory: contactServiceFactory,
    deps: [HttpClient]
};