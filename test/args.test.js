import Args from '../Args';
describe('Args', () => {
  describe('Boolean', () => {
    const schema = {
      key: 'l',
      type: Boolean,
      default: false
    };
    it('获取一个没有定义值得参数,值应该等于设置得默认值', () => {
      const args = new Args('-l', [schema]);
      expect(args.get('l')).toBe(false);
    });

    it('获取一个定义值得参数,值应该等于设置好得值', () => {
      const args = new Args('-l true', [schema]);
      expect(args.get('l')).toBe(true);
    });
  });

  describe('String', () => {
    const schema = {
      key: 'd',
      type: String,
      default: ''
    };
    it('获取一个没有定义值得参数,值应该等于设置得默认值', () => {
      const args = new Args('-d', [schema]);
      expect(args.get('d')).toBe('');
    });

    it('获取一个定义值得参数,值应该等于设置好得值', () => {
      const args = new Args('-d /usr/logs', [schema]);
      expect(args.get('d')).toBe('/usr/logs');
    });
  });

  describe('Number', () => {
    const schema = {
      key: 'p',
      type: Number,
      default: 0
    };
    it('获取一个没有定义值得参数,值应该等于设置得默认值', () => {
      const args = new Args('-p', [schema]);
      expect(args.get('p')).toBe(0);
    });

    it('获取一个定义值得参数,值应该等于设置好得值', () => {
      const args = new Args('-p 8080', [schema]);
      expect(args.get('p')).toBe(8080);
    });
  });
});
