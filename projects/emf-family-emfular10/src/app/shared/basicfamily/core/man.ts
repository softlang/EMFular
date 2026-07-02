import {eClass} from "emfular-core";
import {FamilyMeta} from "./family-meta";
import {Person} from "./person";

@eClass(FamilyMeta, "Man")
export class Man extends Person {
    constructor(name?: string ) {
        super(name);
    }
}
