function solve(...params) {
    let types = new Map;
    params.forEach(par => {
        const typ = typeof(par);
        console.log(`${typ}: ${par}`);

        if (!types.has(typ)) {
            types.set(typ, 0);
        }
        types.set(typ, types.get(typ) + 1);
    });

    [...types.entries()]
    .sort((a, b) => b[1] - a[1])
        .forEach(v => console.log(`${v[0]} = ${v[1]}`));
}

//solve('cat', 42, function() { console.log('Hello world!'); });
solve(42, 'cat', 15, 'kitten', 'tomcat');
//solve({ name: 'bob' }, 3.333, 9.999)