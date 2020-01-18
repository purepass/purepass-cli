# purepass-cli

## usage

for an interactive password generation experience:
```
npx purepass -i
```

for a one liner you can use:
```
npx purepass -s someSuperSecret123 -n fb
```

The above command will hash the secret `someSuperSecret123` and the namespace `fb` together, and generate a 64 character password. In this case that is:

```
Fb06#356efc68a3516973780bc826c59fcd4c7f22291708c29b0d557495177e
```

purepass is a pure function, the resulting password will always be the same if the same arguments are passed in.

## The fastest way

```
npx purepass someSuperSecret123 -n fb -q
```
This will generate the same password as the above, but copy it to the clipboard on any OS, without printing it to the console.

## Arguments

### secret
`--secret` is the secret that no one but you should ever know. It is a string of any length. If your first argument is your `secret` the flag can be omitted, see above.

### namespace
`--namespace` is a 2 character string. This is used to ensure an uppercase and lowercase letter are included in every generated password, and is also concatenated with the `secret`, and the result is passed to `SHA256`. 

This ensures all generated passwords can be unique if their `namespace` is unique, even though you only need to remember one secret. 

This is secure because it is not possible to work back from the generated password if it leaks, your other passwords are different because they are generated with a different `namespace`

### maxPasswordLength
`--maxPasswordLength` is a string that can be supplied for websites like paypal that have a character cap of 20. The short alias for this command is `-m`.

### specialCharacter
`--specialCharacter` is a string that can be a string supplied to substitute the special character at index 2 in the resulting string with a different character than `#`. The short alias for this command is `-c`.

### copyToClipboard
`--copyToClipboard` is a boolean option that uses [clipboardy](https://npmjs.com/clipboardy) to copy the resulting password to the clipboard. The short alias for this command is `-p`.

### quiet
`--quiet` is a boolean option that suppresses outputting your password to the console, and _only_ uses [clipboardy](https://npmjs.com/clipboardy) to copy the resulting password to the clipboard. The short alias for this command is `-q`. 

Note: It is redundant (but harmless) to  use `copyToClipboard` when in `quiet` mode

Contributions, and feature requests are welcome!
