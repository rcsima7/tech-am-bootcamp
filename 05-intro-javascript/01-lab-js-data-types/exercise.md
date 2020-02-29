# Javascript Data Types Exercises

## Data Types

For each expression, predict what you think the output will be in a comment (`//`) ***without first running the command***. Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

#### typeof(...)

`typeof` is a built-in function in the JavaScript language. For now, focus on the data types and just take it at face value that `typeof` will output the type of the value given to it within the parentheses `()`.

#### Example

```js
typeof('potato')
// Prediction: Vegetable
// Actual: String
```

What is the output of each of the expressions below?

```js
typeof(15)
// Prediction: number
// Actual: nunmber

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: NaN
// Actual: number? For real??

typeof('hello')
// Prediction: string
// Actual:

typeof(true)
// Prediction: string
// Actual: boolean

typeof(1 != 2)
// Prediction: equality or function? After seeing the prev, I think it’s boolean)
// Actual: boolean

3 <= 3
// Prediction: Think these will be true or false
// Actual:true

3 === '3'
// Prediction: false
// Actual:false

3 !== '3'
// Prediction: true
// Actual:true

3 === parseInt('3') 
// Prediction: true
// Actual:true

3 = 3
// Prediction: true
// Actual:uncaught reference error: invalid left-hand side in assignment

'foo' === 'foo'
// Prediction: true
// Actual: true

6 % 4
// Prediction:2
// Actual:2


true && true
// Prediction:true
// Actual:true

true && false
// Prediction:false
// Actual:false

false && false
// Prediction:false
// Actual:false

true || false
// Prediction:true
// Actual:true

false || true
// Prediction:true
// Actual:true

!false && !true
// Prediction: false
// Actual:false


'hamburger' + 's'
// Prediction:hamburgers
// Actual:hamburgers

'hamburgers' - 's'
// Prediction:hamburger
// Actual:NaN

'1' + '3'
// Prediction:13
// Actual:13

'1' - '3'
// Prediction:NaN
// Actual:-2

'johnny' + 5
// Prediction:NaN
// Actual:johnny5

'johnny' - 5
// Prediction:NaN
// Actual:NaN

99 * 'luftbaloons'
// Prediction:luftbaloons spelled out 99 times?
// Actual:NaN
```

What's going on in the last part of the question? Are there any "rules" we can pull from those examples?
typeof(15)
// Prediction:
// Actual:

typeof(5.5)
// Prediction:
// Actual:

typeof(NaN)
// Prediction:
// Actual:

typeof('hello')
// Prediction:
// Actual:

typeof(true)
// Prediction:
// Actual:

typeof(1 != 2)
// Prediction:
// Actual:


3 <= 3
// Prediction:
// Actual:

3 === '3'
// Prediction:
// Actual:

3 !== '3'
// Prediction:
// Actual:

3 === parseInt('3')
// Prediction:
// Actual:

3 = 3
// Prediction:
// Actual:

'foo' === 'foo'
// Prediction:
// Actual:


6 % 4
// Prediction:
// Actual:


true && true
// Prediction:
// Actual:

true && false
// Prediction:
// Actual:

false && false
// Prediction:
// Actual:

true || false
// Prediction:
// Actual:

false || true
// Prediction:
// Actual:

!false && !true
// Prediction:
// Actual:


'hamburger' + 's'
// Prediction:
// Actual:

'hamburgers' - 's'
// Prediction:
// Actual:

'1' + '3'
// Prediction:
// Actual:

'1' - '3'
// Prediction:
// Actual:

'johnny' + 5
// Prediction:
// Actual:

'johnny' - 5
// Prediction:
// Actual:

99 * 'luftbaloons'
// Prediction:
// Actual:
```

What's going on in the last part of the question? Are there any "rules" we can pull from those examples?
typeof(15)
// Prediction:
// Actual:

typeof(5.5)
// Prediction:
// Actual:

typeof(NaN)
// Prediction:
// Actual:

typeof('hello')
// Prediction:
// Actual:

typeof(true)
// Prediction:
// Actual:

typeof(1 != 2)
// Prediction:
// Actual:


3 <= 3
// Prediction:
// Actual:

3 === '3'
// Prediction:
// Actual:

3 !== '3'
// Prediction:
// Actual:

3 === parseInt('3')
// Prediction:
// Actual:

3 = 3
// Prediction:
// Actual:

'foo' === 'foo'
// Prediction:
// Actual:


6 % 4
// Prediction:
// Actual:


true && true
// Prediction:
// Actual:

true && false
// Prediction:
// Actual:

false && false
// Prediction:
// Actual:

true || false
// Prediction:
// Actual:

false || true
// Prediction:
// Actual:

!false && !true
// Prediction:
// Actual:


'hamburger' + 's'
// Prediction:
// Actual:

'hamburgers' - 's'
// Prediction:
// Actual:

'1' + '3'
// Prediction:
// Actual:

'1' - '3'
// Prediction:
// Actual:

'johnny' + 5
// Prediction:
// Actual:

'johnny' - 5
// Prediction:
// Actual:

99 * 'luftbaloons'
// Prediction:
// Actual:
```

What's going on in the last part of the question? Are there any "rules" we can pull from those examples?
typeof(15)
// Prediction:
// Actual:

typeof(5.5)
// Prediction:
// Actual:

typeof(NaN)
// Prediction:
// Actual:

typeof('hello')
// Prediction:
// Actual:

typeof(true)
// Prediction:
// Actual:

typeof(1 != 2)
// Prediction:
// Actual:


3 <= 3
// Prediction:
// Actual:

3 === '3'
// Prediction:
// Actual:

3 !== '3'
// Prediction:
// Actual:

3 === parseInt('3')
// Prediction:
// Actual:

3 = 3
// Prediction:
// Actual:

'foo' === 'foo'
// Prediction:
// Actual:


6 % 4
// Prediction:
// Actual:


true && true
// Prediction:
// Actual:

true && false
// Prediction:
// Actual:

false && false
// Prediction:
// Actual:

true || false
// Prediction:
// Actual:

false || true
// Prediction:
// Actual:

!false && !true
// Prediction:
// Actual:


'hamburger' + 's'
// Prediction:
// Actual:

'hamburgers' - 's'
// Prediction:
// Actual:

'1' + '3'
// Prediction:
// Actual:

'1' - '3'
// Prediction:
// Actual:

'johnny' + 5
// Prediction:
// Actual:

'johnny' - 5
// Prediction:
// Actual:

99 * 'luftbaloons'
// Prediction:
// Actual:
```

What's going on in the last part of the question? Are there any "rules" we can pull from those examples?
typeof(15)
// Prediction:
// Actual:

typeof(5.5)
// Prediction:
// Actual:

typeof(NaN)
// Prediction:
// Actual:

typeof('hello')
// Prediction:
// Actual:

typeof(true)
// Prediction:
// Actual:

typeof(1 != 2)
// Prediction:
// Actual:


3 <= 3
// Prediction:
// Actual:

3 === '3'
// Prediction:
// Actual:

3 !== '3'
// Prediction:
// Actual:

3 === parseInt('3')
// Prediction:
// Actual:

3 = 3
// Prediction:
// Actual:

'foo' === 'foo'
// Prediction:
// Actual:


6 % 4
// Prediction:
// Actual:


true && true
// Prediction:
// Actual:

true && false
// Prediction:
// Actual:

false && false
// Prediction:
// Actual:

true || false
// Prediction:
// Actual:

false || true
// Prediction:
// Actual:

!false && !true
// Prediction:
// Actual:


'hamburger' + 's'
// Prediction:
// Actual:

'hamburgers' - 's'
// Prediction:
// Actual:

'1' + '3'
// Prediction:
// Actual:

'1' - '3'
// Prediction:
// Actual:

'johnny' + 5
// Prediction:
// Actual:

'johnny' - 5
// Prediction:
// Actual:

99 * 'luftbaloons'
// Prediction:
// Actual:
```

What's going on in the last part of the question? Are there any "rules" we can pull from those examples?
typeof(15)
// Prediction:
// Actual:

typeof(5.5)
// Prediction:
// Actual:

typeof(NaN)
// Prediction:
// Actual:

typeof('hello')
// Prediction:
// Actual:

typeof(true)
// Prediction:
// Actual:

typeof(1 != 2)
// Prediction:
// Actual:


3 <= 3
// Prediction:
// Actual:

3 === '3'
// Prediction:
// Actual:

3 !== '3'
// Prediction:
// Actual:

3 === parseInt('3')
// Prediction:
// Actual:

3 = 3
// Prediction:
// Actual:

'foo' === 'foo'
// Prediction:
// Actual:


6 % 4
// Prediction:
// Actual:


true && true
// Prediction:
// Actual:

true && false
// Prediction:
// Actual:

false && false
// Prediction:
// Actual:

true || false
// Prediction:
// Actual:

false || true
// Prediction:
// Actual:

!false && !true
// Prediction:
// Actual:


'hamburger' + 's'
// Prediction:
// Actual:

'hamburgers' - 's'
// Prediction:
// Actual:

'1' + '3'
// Prediction:
// Actual:

'1' - '3'
// Prediction:
// Actual:

'johnny' + 5
// Prediction:
// Actual:

'johnny' - 5
// Prediction:
// Actual:

99 * 'luftbaloons'
// Prediction:
// Actual:
```

What's going on in the last part of the question? Are there any "rules" we can pull from those examples?
typeof(15)
// Prediction:
// Actual:

typeof(5.5)
// Prediction:
// Actual:

typeof(NaN)
// Prediction:
// Actual:

typeof('hello')
// Prediction:
// Actual:

typeof(true)
// Prediction:
// Actual:

typeof(1 != 2)
// Prediction:
// Actual:


3 <= 3
// Prediction:
// Actual:

3 === '3'
// Prediction:
// Actual:

3 !== '3'
// Prediction:
// Actual:

3 === parseInt('3')
// Prediction:
// Actual:

3 = 3
// Prediction:
// Actual:

'foo' === 'foo'
// Prediction:
// Actual:


6 % 4
// Prediction:
// Actual:


true && true
// Prediction:
// Actual:

true && false
// Prediction:
// Actual:

false && false
// Prediction:
// Actual:

true || false
// Prediction:
// Actual:

false || true
// Prediction:
// Actual:

!false && !true
// Prediction:
// Actual:


'hamburger' + 's'
// Prediction:
// Actual:

'hamburgers' - 's'
// Prediction:
// Actual:

'1' + '3'
// Prediction:
// Actual:

'1' - '3'
// Prediction:
// Actual:

'johnny' + 5
// Prediction:
// Actual:

'johnny' - 5
// Prediction:
// Actual:

99 * 'luftbaloons'
// Prediction:
// Actual:
```

What's going on in the last part of the question? Are there any "rules" we can pull from those examples?
typeof(15)
// Prediction:
// Actual:

typeof(5.5)
// Prediction:
// Actual:

typeof(NaN)
// Prediction:
// Actual:

typeof('hello')
// Prediction:
// Actual:

typeof(true)
// Prediction:
// Actual:

typeof(1 != 2)
// Prediction:
// Actual:


3 <= 3
// Prediction:
// Actual:

3 === '3'
// Prediction:
// Actual:

3 !== '3'
// Prediction:
// Actual:

3 === parseInt('3')
// Prediction:
// Actual:

3 = 3
// Prediction:
// Actual:

'foo' === 'foo'
// Prediction:
// Actual:


6 % 4
// Prediction:
// Actual:


true && true
// Prediction:
// Actual:

true && false
// Prediction:
// Actual:

false && false
// Prediction:
// Actual:

true || false
// Prediction:
// Actual:

false || true
// Prediction:
// Actual:

!false && !true
// Prediction:
// Actual:


'hamburger' + 's'
// Prediction:
// Actual:

'hamburgers' - 's'
// Prediction:
// Actual:

'1' + '3'
// Prediction:
// Actual:

'1' - '3'
// Prediction:
// Actual:

'johnny' + 5
// Prediction:
// Actual:

'johnny' - 5
// Prediction:
// Actual:

99 * 'luftbaloons'
// Prediction:
// Actual:
```

What's going on in the last part of the question? Are there any "rules" we can pull from those examples?
typeof(15)
// Prediction:
// Actual:

typeof(5.5)
// Prediction:
// Actual:

typeof(NaN)
// Prediction:
// Actual:

typeof('hello')
// Prediction:
// Actual:

typeof(true)
// Prediction:
// Actual:

typeof(1 != 2)
// Prediction:
// Actual:


3 <= 3
// Prediction:
// Actual:

3 === '3'
// Prediction:
// Actual:

3 !== '3'
// Prediction:
// Actual:

3 === parseInt('3')
// Prediction:
// Actual:

3 = 3
// Prediction:
// Actual:

'foo' === 'foo'
// Prediction:
// Actual:


6 % 4
// Prediction:
// Actual:


true && true
// Prediction:
// Actual:

true && false
// Prediction:
// Actual:

false && false
// Prediction:
// Actual:

true || false
// Prediction:
// Actual:

false || true
// Prediction:
// Actual:

!false && !true
// Prediction:
// Actual:


'hamburger' + 's'
// Prediction:
// Actual:

'hamburgers' - 's'
// Prediction:
// Actual:

'1' + '3'
// Prediction:
// Actual:

'1' - '3'
// Prediction:
// Actual:

'johnny' + 5
// Prediction:
// Actual:

'johnny' - 5
// Prediction:
// Actual:

99 * 'luftbaloons'
// Prediction:
// Actual:
```

What's going on in the last part of the question? Are there any "rules" we can pull from those examples?
typeof(15)
// Prediction:
// Actual:

typeof(5.5)
// Prediction:
// Actual:

typeof(NaN)
// Prediction:
// Actual:

typeof('hello')
// Prediction:
// Actual:

typeof(true)
// Prediction:
// Actual:

typeof(1 != 2)
// Prediction:
// Actual:


3 <= 3
// Prediction:
// Actual:

3 === '3'
// Prediction:
// Actual:

3 !== '3'
// Prediction:
// Actual:

3 === parseInt('3')
// Prediction:
// Actual:

3 = 3
// Prediction:
// Actual:

'foo' === 'foo'
// Prediction:
// Actual:


6 % 4
// Prediction:
// Actual:


true && true
// Prediction:
// Actual:

true && false
// Prediction:
// Actual:

false && false
// Prediction:
// Actual:

true || false
// Prediction:
// Actual:

false || true
// Prediction:
// Actual:

!false && !true
// Prediction:
// Actual:


'hamburger' + 's'
// Prediction:
// Actual:

'hamburgers' - 's'
// Prediction:
// Actual:

'1' + '3'
// Prediction:
// Actual:

'1' - '3'
// Prediction:
// Actual:

'johnny' + 5
// Prediction:
// Actual:

'johnny' - 5
// Prediction:
// Actual:

99 * 'luftbaloons'
// Prediction:
// Actual:
```

What's going on in the last part of the question? Are there any "rules" we can pull from those examples?