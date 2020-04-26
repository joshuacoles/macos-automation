#! /bin/zsh

/usr/local/bin/SwitchAudioSource -t input -s 'UMC204HD 192k' > log-file 2>&1
/usr/local/bin/SwitchAudioSource -t output -s 'UMC204HD 192k' > log-file 2>&1

say 'Studio Mode'
