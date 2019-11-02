import Schema from '../Schema.js';
describe('Schema', () => {
  const Info = {
    key: 'l',
    type: Boolean,
    default: false
  };
  it('可以获取到一个定义好的值', () => {
    const schema = new Schema([Info]);
    expect(schema.get('l')).toEqual(Info);
  });

  it('可以通过 set 定义值', () => {
    const schema = new Schema();
    schema.set(Info);
    expect(schema.get('l')).toEqual(Info);
  });

  it('如果获取的值没有定义的话，给出报错', () => {
    const schema = new Schema();
    expect(() => {
      schema.get('l');
    }).toThrow();
  });
});
