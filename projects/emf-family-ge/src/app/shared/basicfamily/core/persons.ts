import {attribute, eClass, Referencable, ReLinkListContainer, ReLinkSingleContainer} from 'emfular';
import {Family} from './family';
import {EClasses} from '../eclasses';

export abstract class Person extends Referencable<Family> {
  @attribute()
  name?: string;

  public static readonly $childrenName = "children";
  _children: ReLinkListContainer<Person, this>;
  get children(): Person[] {
    return this._children.get()
  }
  addChildren(...children: Person[]) {
    children.map((child: Person) =>
      this._children.add(child)
    )
  }
  removeChildren(...children: Person[]) {
    children.map((child: Person) =>
      this._children.remove(child)
    )
  }

  public static readonly $parentsName: string = "parents";
  _parents: ReLinkListContainer<Person, this>;
  get parents(): Person[] {
    return this._parents.get()
  }
  addParents(...parents: Person[]) {
    parents.map(
      (parent: Person) => {
        this._parents.add(parent);
      }
    )
  }
  removeParents(...parents: Person[]) {
    parents.map(
      (parent: Person) => {
        this._parents.remove(parent);
      }
    )
  }

  public static readonly $motherName: string = "mother";
  _mother: ReLinkSingleContainer<Person, this>
  get mother(): Person|undefined {
    return this._mother.get()
  }
  set mother(mother: Person|undefined) { //todo
    if (mother === undefined && this.mother) {
      this._mother.remove(this.mother);
    } else {
      if(mother !== undefined) {
        this._mother.add(mother);
      }
    }
  }

  public static readonly $fatherName: string = "father";
  _father: ReLinkSingleContainer<Person, this>
  get father(): Person|undefined {
    return this._father.get()
  }
  set father(father: Person|undefined) { //todo
    if (father === undefined && this.father) {
      this._father.remove(this.father);
    } else {
      if(father !== undefined) {
        this._father.add(father);
      }
    }
  }
  protected constructor( name?: string) {
    super();
    this.name = name;
    this._children = new ReLinkListContainer(this, Person.$childrenName, Person.$parentsName)
    this._parents = new ReLinkListContainer(this, Person.$parentsName, Person.$childrenName)
    this._mother = new ReLinkSingleContainer(this, Person.$motherName)
    this._father = new ReLinkSingleContainer(this, Person.$fatherName)
  }
}

@eClass(EClasses.Woman)
export class Woman extends Person {
  constructor( ) {
    super( "Woman");
  }
}

@eClass(EClasses.Man)
export class Man extends Person {
  constructor( ) {
    super( "Man");
  }
}
