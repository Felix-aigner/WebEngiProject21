import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getUser, postLogin, postSignUp } from "./core.action";

@Injectable()
export class CoreEffects {

    constructor(private action$: Actions, private coreService: CoreService) { }

    // getUser$ = createEffect(() => 
    //     this.action$.pipe(
    //         ofType(getUser),

    //     )
    // )

    // postLogin$ = createEffect(() => 
    //     this.action$.pipe(
    //         ofType(postLogin),
            
    //     )
    // )

    // postSignUp$ = createEffect(() => 
    //     this.action$.pipe(
    //         ofType(postSignUp),
            
    //     )
    // )

}