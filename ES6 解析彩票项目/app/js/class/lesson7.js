{
    function test(x, y = 'world') {
        console.log('default:', x, y);
    }

    test('hello');
}

{
    let x = 'test';
    function test (c, y = x) {
        console.log('作用域', x, y);
    }
    test();
}

{
    function test3(...arg) {
        for (let v of arg) {
            console.log('rest', v)
        }
    }

    test3(1, 2, 3, 'a');
}

{
    console.log('a', ...[1, 2, 3])
}

{
    let arrow = v => v * 2;
    let arrow2 = () => 5;
    console.log('arrow', arrow(3));
    console.log('arrow2', arrow2());
}

{
    function tail(x) {
        console.log('tail', x);
    }

    function fx(x) {
        return tail(x);
    }

    fx(123);
}