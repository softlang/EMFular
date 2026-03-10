import {Person} from './persons';
import {Referencable, attribute, eClass, JsonOf, Deserializer, ModelList, reference} from 'emfular';
import {FamilyMeta, FamilyRefs} from "./family-meta";

@eClass(FamilyMeta, "Family")
export class Family extends Referencable<any> {
  @attribute()
  name?: string;

  @reference(FamilyRefs.members)
  declare members: ModelList<Person>

  constructor( name?: string) {
    super();
    this.name = name;
  }

  static fromJSON (convJson: JsonOf<Family>): Family {
    const dummy = new Family();
    return Deserializer.fromJSON<Family>(
      convJson,
      dummy.getEClass()
    )}

}
