export default class Schema{
    constructor(infoList = []){
        this._map = this.toMap(infoList);
    }

    toMap(list){
        const map = Object.create(null);
        list.forEach(element => {
            const {key} = element
            map[key] = element;
        });
        return map;
    }


    get(val){
        const result = this._map[val]
        if(!result){
            throw new Error('没有定义对应的 key:','val')
        }

        return this._map[val]
    }


    set(info){
        this._map[info.key] = info;
    }

}