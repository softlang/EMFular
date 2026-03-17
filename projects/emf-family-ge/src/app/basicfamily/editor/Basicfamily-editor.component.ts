import {Component} from '@angular/core';
import {
  BasicModelDetailsService,
  EditButtonDef,
  TreeEditorComponent
} from "ngx-emfular-integration";
import { BasicfamilyService } from "../edit/Basicfamily.service";
import { Family } from "../core/family";

@Component({
  selector: 'Basicfamily-editor',
  imports: [
    TreeEditorComponent
  ],
  templateUrl: './Basicfamily-editor.component.html',
  styleUrl: './Basicfamily-editor.component.css'
})
export class BasicfamilyEditorComponent{

  customButtons: Array<EditButtonDef> | null = null;

  constructor(
    public basicDetailsService: BasicModelDetailsService<Family>,
    public modelService: BasicfamilyService,
  ) {
    this.customButtons = [
      {
        label: "Family",
        icon: "plus.png",
        action: () => {
          const res = this.modelService.createFamily()
          if(res){
            this.basicDetailsService.openDetails(res, this.modelService)
          }
        }
      },
{
        label: "Man",
        icon: "plus.png",
        action: () => {
          const res = this.modelService.createMan()
          if(res){
            this.basicDetailsService.openDetails(res, this.modelService)
          }
        }
      },
{
        label: "Woman",
        icon: "plus.png",
        action: () => {
          const res = this.modelService.createWoman()
          if(res){
            this.basicDetailsService.openDetails(res, this.modelService)
          }
        }
      }
    ]
  }

}
