import {
  attribute,
  eClass,
  ModelList,
  Referencable,
  reference,
} from 'emfular-core';
import {Family} from './family';
import {FamilyMeta, PersonRefs} from "./family-meta";
import type {Man} from "./man";
import type {Woman} from "./woman";

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
