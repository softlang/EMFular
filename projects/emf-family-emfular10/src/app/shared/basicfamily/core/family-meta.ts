import {ModelDefinition, ReferenceMeta} from "emfular-core";

export const FamilyRefs = {
    members: {
        target: "Person",
        containment: true,
        max: -1,
    } satisfies ReferenceMeta,
}


export const PersonRefs = {
    children: {
        target: "Person",
        max: -1
    },
    parents: {
        target: "Person",
        max: 2,
    },
    mother: { //derived
        target: "Woman",
        derivingMethod: Symbol("Person.mother.compute"),
        max: 1
    },
    father: { //derived
        target: "Man",
        derivingMethod: Symbol("Person.father.compute"),
        max: 1
    }
}

export const WomanRefs = {}

export const ManRefs = {}

export const FamilyMeta: ModelDefinition = {
    name: "basicfamily", prefix: "basicfamily",
    uri: "http://www.example.org/basicfamily#//", //todo
    classes: {
        Family: {references: FamilyRefs},
        Person: {references: PersonRefs},
        Woman: {references: WomanRefs},
        Man: {references: ManRefs},
    },
}