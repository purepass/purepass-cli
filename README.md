# purepass-cli

## usage

for an interactive password generation experience:
```
npx purepass -i
```

for a one liner you can use 
```
npx purepass -s someSuperSecret123 -n fb
```


The above command will hash the secret `someSuperSecret123` and the namespace `fb` together, and generate a 64 character password. In this case that is:

```
Fb06#356efc68a3516973780bc826c59fcd4c7f22291708c29b0d557495177e
```

purepass is a pure function, the resulting password will always be the same if the same arguments are passed in.

Additional arguments can also be passed in, including ```--maxPasswordLength``` for websites like paypal that have a character cap of 20. Finally `--specialCharacter` that can substitute the special character at index 2 in the resulting string with a different character than `#`.

I will write a reference document about the algorthym, but it is very simple, and for those interested you can probably find all you need in the source code for this org.

Contributions are welcome!