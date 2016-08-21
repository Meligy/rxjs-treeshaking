import { Observable } from 'rxjs/Observable';
//import { Observable } from 'rxjs/Rx';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

Observable
    .from([1,2,3])
    .map(function(n) { return  "Number " + n; })
    .subscribe(console.log);