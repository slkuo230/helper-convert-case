# DustJS String case conversion helper
##### This helper converts string to commmon cases, lowercased, uppercased, or capitalized.
Use:
```
{@convert str="Helloworld" case="lower"} // Helloworld
{@convert str="Helloworld" case="upper"} // HELLOWORLD
{@convert str="Helloworld" case="cap"} // Helloworld
var data = {mystring:'helloworld'}
{@convert str="{data.mystring}" case="cap"} // Helloworld
```
