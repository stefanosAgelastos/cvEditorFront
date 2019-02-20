import { DetailService } from './detail.service';
import { HttpClient } from '@angular/common/http';

var apiUrl = "http://ec2-54-93-66-2.eu-central-1.compute.amazonaws.com";

var personalUrl = "/personal";
var contactUrl = "/contact";

let personalServiceFactory = (http: HttpClient) => {
    return new DetailService(http, apiUrl + personalUrl);
};

let contactServiceFactory = (http: HttpClient) => {
    return new DetailService(http, apiUrl + contactUrl);
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