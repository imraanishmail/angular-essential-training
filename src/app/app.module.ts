// decorator import
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';


// do not put semi-colon; not a statement but piece of code to be applied to class, field or method
// is a Decorator
// takes in object with known properties(metadata) to configure class you decorate as an angular module
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
}) 
// export allows import into another file
export class AppModule {} 

