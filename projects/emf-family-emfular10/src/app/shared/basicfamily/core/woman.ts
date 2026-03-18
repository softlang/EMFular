import {eClass} from "emfular";
import {FamilyMeta} from "./family-meta";
import {Person} from "./person";

@eClass(FamilyMeta, "Woman")
export class Woman extends Person {
    constructor(name?: string ) {
        super( name);
    }
}
