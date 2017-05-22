{
    console.log(0o10);
}

{
    console.log('15 ', Number.isFinite(15));
    console.log('NaN ', Number.isFinite(NaN));
    console.log('1/0 ', Number.isFinite(1/0));
    console.log("===isNaN===");
    console.log('0 ', Number.isNaN(0))
    console.log('NaN ', Number.isNaN(NaN))
}

{
    console.log('===Number.isInteger');
    console.log('15', Number.isInteger(15));
    console.log('15.0', Number.isInteger(15.0));
    console.log('15.1', Number.isInteger(15.1));
    console.log('\'15.1\'', Number.isInteger('15.1'));
}

{
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.MIN_SAFE_INTEGER);
    console.log(Number.isSafeInteger(25));

}

{
    console.log('=== Math.trunc ===');
    console.log('4.1', Math.trunc(4.1));
    console.log('4.9', Math.trunc(4.9));
}

{
    console.log('=== Math.sign');
    console.log('-5', Math.sign(-5));
    console.log('0', Math.sign(0));
    console.log('5', Math.sign(5));
    console.log('\'5\'', Math.sign('5'));
    console.log('s', Math.sign('s'));
}

{
    console.log('=== Math.cbrt ===');
    console.log('-1', Math.cbrt(-1));
    console.log('8', Math.cbrt(8));
}