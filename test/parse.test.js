import Parse from '../Parse';
describe('Parse', () => {
  it('parse', () => {
    const parse = new Parse();
    expect(parse.parse('-l')).toEqual({ l: '' });
    expect(parse.parse('-l true')).toEqual({ l: 'true' });
    expect(parse.parse('-l -p 8080')).toEqual({ l: '', p: '8080' });
    expect(parse.parse('-l -p 8080 -d /usr/logs')).toEqual({
      l: '',
      p: '8080',
      d: '/usr/logs'
    });
    expect(parse.parse('-l -p 8080 -d /usr/logs -c')).toEqual({
      l: '',
      c: '',
      p: '8080',
      d: '/usr/logs'
    });
  });

  it('get ', () => {
    const parse = new Parse('-l -p 8080 -d /usr/logs');

    expect(parse.get('l')).toBe('');
    expect(parse.get('p')).toBe('8080');
    expect(parse.get('d')).toBe('/usr/logs');
  });
});
