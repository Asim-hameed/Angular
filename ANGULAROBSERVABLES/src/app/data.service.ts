import {Injectable, EventEmitter} from "@angular/core"
import {Subject} from "rxjs"
@Injectable()
export class DataService{
    dataEmitter = new Subject<string>();

    raiseDataEmitterEvent(data:string){
this.dataEmitter.next(data);
    }

}
