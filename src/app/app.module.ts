import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { BodyComponent } from './components/body/body.component';
import { GridComponent } from './components/grid/grid.component';
import { RowComponent } from './components/row/row.component';
import { BoxComponent } from './components/box/box.component';
import { TabbarComponent } from './components/tabbar/tabbar.component';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    BodyComponent,
    GridComponent,
    RowComponent,
    BoxComponent,
    TabbarComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
