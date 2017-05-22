{
    let list = new Set();
    list.add(5);
    list.add(7);

    console.log('size', list.size);
}

{
    let arr = [1, 2, 3, 4, 5];
    let list = new Set(arr);

    console.log('size', list.size);
}

{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);

    console.log(list);  // {1, 2}
}

{
    let arr = [1, 2, 3, 4, 1, 2, 5];
    let list2 = new Set(arr);

    console.log(list2);
}

{
    let arr = [1, 2, 1, 2, 3, 4, 5];
    let result = [];
    arr.forEach(function(item) {
        if (!result.includes(item)) {
            result.push(item);
        }
    });

    console.log(result);
}

{
    let arr = ['add', 'delete', 'has', 'clear'];
    let list = new Set(arr);

    for (let key of list.keys()) {
        console.log('keys', key);
    }

    for (let value of list.values()) {
        console.log('value', value);
    }

    for (let [key, value] of list.entries()) {
        console.log('entries', key, value);
    }

    list.forEach(function(item) {
        console.log(item);
    })
}

{
    let weakList = new WeakSet();
    let  arg = {};
    weakList.add(arg);

    console.log('weakList', weakList);
}

{
    let map = new Map();
    let arr = ['123'];

    map.set(arr, 456);

    console.log('map', map, map.get(arr))
}

{
    let map = new Map([['a', 123], ['b', 456]]);
    console.log('map args', map);
    console.log('size', map.size);
}