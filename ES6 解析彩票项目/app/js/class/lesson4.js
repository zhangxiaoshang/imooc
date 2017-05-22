{
    console.log('a', `\u0061`);
    console.log('s', `\u20BB7`);
    console.log('s', `\u{20BB7}`);  // 𠮷
}

{
    let s = '𠮷';
    console.log('length', s.length);
    console.log('0', s.charAt(0));
    console.log('1', s.charAt(1));
    console.log('0', s.charCodeAt(0));
    console.log('1', s.charCodeAt(1));

    let s1 = '𠮷a';
    console.log('length', s1.length);
    console.log('code0', s1.codePointAt(0));
    console.log('length', s1.codePointAt(1));
}

{
    let str = '\u{20bb7}abc';
    for (let i = 0; i < str.length; i++) {
        console.log('es5', str[i]);
    }

    for (let code of str) {
        console.log('es6', code);
    }
}

{
    let s = 'include';
    console.log('includes', s.includes('u'));
    console.log('startsWith', s.startsWith('in'));
    console.log('endsWith', s.endsWith('es'));
    console.log(s.repeat(3));
}

{
    let name = 'list';
    let info = 'hello world';
    let m = `i am ${name}, ${info}`;
    console.log(m);
}

{
    console.log('1'.padStart(2, '0'));
}