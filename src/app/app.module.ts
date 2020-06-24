import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ExpandContentDirective } from './expand-content.directive';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

import { StepsModule } from 'primeng/steps';

import { AppComponent } from './app.component';
import { VisualComponent } from './visual.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, VisualComponent, ExpandContentDirective],
  imports: [
    BrowserModule,
    AutoCompleteModule,
    ToolbarModule,
    FormsModule,
    BrowserAnimationsModule,
    SplitButtonModule,
    AccordionModule,
    ReactiveFormsModule,
    DropdownModule,
    TooltipModule,
    InputTextModule,
    InputSwitchModule,
    TabViewModule,
    FileUploadModule,
    HttpClientModule,
    CheckboxModule,
    RadioButtonModule,
    StepsModule,
  ],
  providers: [],
  bootstrap: [VisualComponent],
})
export class AppModule {}
