import { NgModule } from "@angular/core";
import { ListComponent } from "./components/list/list.component";
import { HeroComponent } from "./components/hero/hero.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    ListComponent,
    HeroComponent
  ],
  exports: [
    ListComponent,
    HeroComponent
  ],
  imports: [
    CommonModule
  ]
})

export class HeroesModule { }
