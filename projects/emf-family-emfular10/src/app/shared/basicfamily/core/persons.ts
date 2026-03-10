import {
  attribute,
  eClass,
  ModelList,
  Referencable,
  reference,
} from 'emfular';
import {Family} from './family';
import {FamilyMeta, PersonRefs} from "./family-meta";

@eClass(FamilyMeta, "Person")
export abstract class Person extends Referencable<Family> {
  @attribute()
  name?: string;

  @reference(PersonRefs.children)
  declare children: ModelList<Person>;

  @reference(PersonRefs.parents)
  declare parents: ModelList<Person>;

  @reference(PersonRefs.mother)
  declare mother: Woman

  @reference(PersonRefs.father)
  declare father: Man


  protected constructor( name?: string) {
    super();
    this.name = name;
  }
}

@eClass(FamilyMeta, "Woman")
export class Woman extends Person {
  constructor(name?: string ) {
    super( name);
  }
}

@eClass(FamilyMeta, "Man")
export class Man extends Person {
  constructor(name?: string ) {
    super(name);
  }
}
