import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from "@agm/core";
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { LugaresService } from './services/lugares.service';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { CrearComponent } from './crear/crear.component';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClientModule } from "@angular/common/http";
import { LinkifystrPipe } from './pipes/linkifystr.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutorizacionService } from './services/autorizacion.service';
import { MyGuardService } from './services/my-guard.service';

const appRoutes: Routes =
[
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'crear/:id', component: CrearComponent, canActivate: [MyGuardService]},
  {path: 'detalle/:id', component: DetalleComponent}
];

export const firebaseConfig = {
  apiKey: "AIzaSyAhEuQeZw-859qVuua5d1n8xa1T11TN9Z8",
  authDomain: "platzisquare-248502.firebaseapp.com",
  databaseURL: "https://platzisquare-248502.firebaseio.com",
  projectId: "platzisquare-248502",
  storageBucket: "",
  messagingSenderId: "1089390303941",
  appId: "1:1089390303941:web:b5a90af8f43c9c21"
};

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LoginComponent,
    RegistroComponent,
    LinkifystrPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyAwSSgZJ4t8wwfS5U980B0WWhOMlCe40fE' }),
    RouterModule.forRoot(appRoutes),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule
  ],
  providers: [
    LugaresService,
    AngularFirestore,
    AutorizacionService,
    MyGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
