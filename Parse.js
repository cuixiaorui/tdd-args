export default class Parse {
  constructor(str) {
    this._map = this.parse(str);
  }

  parse(str) {
      if(!str)return;
    const list = str.split(' ');

    const map = Object.create(null)
    for (let i = 0, len = list.length; i < len; i++) {
      const currentVal = list[i];
      const nextVal = list[i + 1] || "";

      if (this.isKey(currentVal)) {
          const realKey = currentVal.slice(1)
        if (this.isKey(nextVal)) {
          map[realKey] = '';
        } else {
          map[realKey] = nextVal;
          i++;
        }
      }
    }

    return map;
  }

  isKey(str = '') {
    return str.charAt(0) === '-';
  }

  get(key) {
    return this._map[key];
  }
}
