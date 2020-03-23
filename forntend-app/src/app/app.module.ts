import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';

import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { PlayerComponent } from './player/player.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    UserComponent,
    ProductComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
