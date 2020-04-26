#!/usr/bin/env osascript -l JavaScript

function run(argv) {
    let haze = Application('HazeOver');
    haze.intensity = argv[0];
}
