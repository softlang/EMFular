import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TreeEditorComponent, BasicModelDetailsService } from "ngx-emfular-integration"
import { FamilyService } from './shared/basicfamily/edit/family.service';
import {Referencable} from 'emfular';
import {Family} from './shared/basicfamily/core/family';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TreeEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Basic Family';
  constructor(
    protected modelService: FamilyService,
    protected detailsService: BasicModelDetailsService<Family>
  ){}

  chooseElement(referencable: Referencable<any>) {
    this.detailsService.openDetails(referencable, this.modelService);
  }
}
