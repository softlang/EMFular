import {Person} from './persons';
import {Referencable, ReTreeListContainer, attribute, eClass, JsonOf, Deserializer} from 'emfular-core';
import {EClasses} from '../eclasses';

@eClass(EClasses.Family)
export class Family extends Referencable<any> {
  @attribute()
  name?: string;
  public static readonly $membersName = "members";
  _members: ReTreeListContainer<Person>;
  get members(): Person[] {
    return this._members.get()
  }
  addMembers(...members: Person[]) {
    members.map(m => this._members.add(m));
  }
  removeMembers(...members: Person[]) {
    members.map(m => this._members.remove(m));
  }

  constructor( name?: string) {
    super();
    this._members = new ReTreeListContainer<Person>(this, Family.$membersName);
    this.name = name;
  }

  static fromJSON (convJson: JsonOf<Family>): Family {
    return Deserializer.fromJSON<Family>(
      convJson,
      EClasses.Family
    )}

}
