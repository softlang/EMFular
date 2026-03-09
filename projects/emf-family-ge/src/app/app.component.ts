import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TreeEditorComponent } from "ngx-emfular-integration"
import { FamilyService } from './shared/basicfamily/edit/family.service';


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
  ){}

}
