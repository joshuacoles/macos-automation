#!/usr/bin/env osascript -l JavaScript

function linear(value1, value2, amount) {
    amount = amount < 0 ? 0 : amount;
    amount = amount > 1 ? 1 : amount;
    return value1 + (value2 - value1) * amount;
}

function run(argv) {
    let haze = Application('HazeOver');
    let initial = haze.intensity();

    let newIntensity = argv[0];

    for (let i = 0; i < 20; i++) {
        let v = linear(initial, newIntensity, i/20);
        haze.intensity = v;
    }
}
