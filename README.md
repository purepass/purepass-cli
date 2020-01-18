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

## Additional arguments 
`--maxPasswordLength` can be supplied for websites like paypal that have a character cap of 20. The short alias for this command is `-m`.

`--specialCharacter` can be a string supplied to substitute the special character at index 2 in the resulting string with a different character than `#`. The short alias for this command is `-c`.

`--copyToClipboard` is a boolean option that uses [clipboardy](https://npmjs.com/clipboardy) to copy the resulting password to the clipboard. The short alias for this command is `-p`.

I will write a reference document about the algorythm, but it is very simple, and for those interested you can probably find all you need in the source code for this org.

Contributions are welcome!
