import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule} from '@angular/common/http';
import { GitSearchParentComponent } from './git-search-parent/git-search-parent.component';
import { SearcComponent } from './search-user/searc/searc.component';
import { UserDirective } from './user.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    GitSearchParentComponent,
    SearcComponent,
    UserDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
