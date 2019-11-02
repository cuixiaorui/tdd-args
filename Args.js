import Parse from './Parse.js';
import Schema from './Schema';
export default class Args {
  constructor(str,schema) {
      this.parse = new Parse(str);
      this.schema = new Schema(schema);
  }

  get(key) {
      const val = this.parse.get(key);
      const schema = this.schema.get(key)
      return val? schema.type(val):schema.default
  }
}
