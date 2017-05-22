{
    let arr = Array.of(3, 4, 7, 9, 11);
    console.log('Array.of: ', arr);
    console.log('Array.of()：', Array.of())
}

{
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.push('a')
    console.log(pArr)

    console.log(Array.from([1, 2, 3], function(item) {
        return item * 2;
    }))
}

{
    console.log('fill:', [1, '2', undefined].fill(7));
    console.log('copyWithin', [1, 2, 3, 4, 5].copyWithin(0, 1, 3));
}

{
    console.log('find:', [1, 2, 3, 4, 5, 6].find(function(item) {
        return item > 3;
    }))

    console.log('findIndex:', [1, 2, 3, 4, 5, 6].findIndex(function(item) {
        return item > 3;
    }))
}

{
    console.log('includes', [1, 2, NaN].includes(NaN));
}