import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {FileDropDirective, FileSelectDirective} from 'ng2-file-upload';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

let sharedModules = [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, ToastrModule];
let commonPipes = [];
let commonDirectives = [FileDropDirective, FileSelectDirective];

@NgModule({
    declarations: [...commonPipes, ...commonDirectives],
    imports: sharedModules,
    exports: [...commonDirectives, ...commonPipes, ...sharedModules]
})
export class SharedModule {
}
