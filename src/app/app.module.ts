import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ObjectPipe } from './object.pipe';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';
import { SevenComponent } from './seven/seven.component';
import { EightComponent } from './eight/eight.component';
import { StringPipe } from './string.pipe';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { HeroReactiveFormComponent } from './hero-reactive-form/hero-reactive-form.component';
import { ForbiddenValidatorDirective } from './directives/forbidden-validator.directive';
import { IdentityRevealedDirective } from './directives/identity-revealed.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ObjectPipe,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
    SevenComponent,
    EightComponent,
    StringPipe,
    HighlightDirective,
    UnlessDirective,
    HeroFormComponent,
    ProfileFormComponent,
    HeroReactiveFormComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterceptor,
			multi: true,
		},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
