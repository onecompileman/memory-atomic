import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TextComponent } from './atoms/text/text.component';
import { ButtonComponent } from './atoms/button/button.component';
import { StatsComponent } from './molecules/stats/stats.component';
import { MemoryItemComponent } from './molecules/memory-item/memory-item.component';
import { MemoryBoardComponent } from './organisms/memory-board/memory-board.component';
import { MemoryGameComponent } from './pages/memory-game/memory-game.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    ButtonComponent,
    StatsComponent,
    MemoryItemComponent,
    MemoryBoardComponent,
    MemoryGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
