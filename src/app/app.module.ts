import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './home/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InfoComponent } from './home/info/info.component';
import { LadingStoryComponent } from './home/lading-story/lading-story.component';
import { SloganComponent } from './home/slogan/slogan.component';
import { FooterComponent } from './home/footer/footer.component';
import { TittlePageComponent } from './home/tittle-page/tittle-page.component';
import { HistoryComponent } from './home/history/history.component';
import { MenuComponent } from './home/menu/menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    InfoComponent,
    LadingStoryComponent,
    SloganComponent,
    FooterComponent,
    TittlePageComponent,
    HistoryComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    MatListModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD8hmaz7I1GvNwKnxUPmTK0qxtJ9xUfwtw',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
