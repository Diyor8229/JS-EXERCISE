// Задание 1 Prefix and Postfix  ======================

// let a = 1, b = 1;
    // let c = ++a // c = 2 
        // ( c ровняетсу к 2 потому что значение ++ cтоит в начале и с перва он прибавляет +1 после выводит на консоль.)
    // let d = b++ // d = 1 
        // ( d ровняется к 1 потому что значение ++ стоит в конце поэтому сначала консоль прочитает значеине b а после уже прибавит.)



// Задание 2 Assignment result ======================

// let a = 2;
// let x = 1 + (a *= 2); = 5
    // ( Значение а = 2 после умножается на 2 а после + к значению х = 1 вот и ответ 5)



// Задание 3 Type conversation ======================

"" + 1 + 0    -->   // ( Ответ 10 значение будет string из-за этих кавычек "" number перейдёт в string)

"" - 1 + 0    -->   // ( Ответ -1 значение будет number причина в начале string приходит в значение false и привратится в 0)

true + false  -->   // ( Ответ 1 значение будет number причина true = 1 а false = 0)

6 / '3'       -->   // ( Ответ 2 значение будет number причина (/) привратит string на number)

'2' * '3'     -->   // ( Ответ 6 значение будет number причина (*) оба string превратит в number)

4 + 5 + "px"  -->   // ( Ответ 9px значение будет string сначачала он прибавит после перейдёт в string)

"$" + 4 + 5   -->   // ( Ответ $45 значение будет string причина string приходит в начале и все number переводит в string)

"4px" - 2     -->   // ( Ответ будет NaN причина внутри string есть буквы и он не может привратить их в цифры поэтому выходит ответ Nan)

"  -9  " + 5  -->   // ( Ответ -9 5 причина в начале есть string по этой причины после него number привратить в string и будет стоять рядом)

"  -9  " - 5  -->   // ( Ответ -14 значение будет number причина (-) привратит string -9 в number после отнимет -5 number и ответ  -14)

null + 1      -->   // ( Ответ 1 значение будет number причина null = 0)

undefined + 1 -->   // ( Ответ NaN если undefined привратить в number получиться Nan)

" \t \n " - 2 -->   // ( Ответ -2 значение будет number причина когда string превращается в number его значение будет ровняться 0)



// Задание 4 Comparisons ======================

5 > 4                    --> // ( Ответ true причина 5 и вправду больше чем 4 вот и вывод true)

"apple" > "pineapple"    --> // ( Ответ false причина по таблице ASCII а=97 p=112  97 > 112 проверяться только начальные буквы)

"2" > "12"               --> // ( Ответ true причина по таблице ASCII 2=50  1=49  50 > 49 проверяться только начальные цифры буквы)

undefined == null        --> // ( Ответ true причина NaN == 0 равны)

undefined === null       --> // ( Ответ false причина === равно при проверки NaN == 0 говорит нет не равны)

null == "\n0\n"          --> // ( Ответ false причина null == 0 отвечает false так как null равен только underfined)

null === +"\n0\n"        //--> // ( Ответ false причина null == 0 отвечает false так как null равен только underfined)
