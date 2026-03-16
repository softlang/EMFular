import { Family } from './family';
import {JsonComparer, JsonOf} from 'emfular';

describe('Family', () => {
  it('should create an instance', () => {
    let family = new Family("family");
    expect(family).toBeTruthy();
    expect(family.name).toBe("family");
    expect(family.members).toEqual([])
  });

  it('should deserialize a real world example', () => {
    let json = require('@assets/example1.json');
    let convJson: JsonOf<Family> = json as JsonOf<Family>
    let conv = Family.fromJSON(convJson)
    let convJson2 = conv.toJson()

    let compRes = JsonComparer.compare(convJson, convJson2)
    expect(compRes.getErrors()).toEqual([])
    let comp2 = JsonComparer.compare(convJson2, convJson)
    expect(comp2.isLessEquals()).toEqual(true)
  })
});
