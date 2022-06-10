/* Користувач вводить дві межі діапазону, вивести на екран усі числа з цього діапазону. Передбачити, щоб користувач міг вводити межі діапазону 
в довільному порядку.
    ■ вивести всі парні числа з діапазону.
    ■ вивести всі непарні числа з діапазону.
    ■ вивести всі числа, кратні семи. */

    let start = parseInt(prompt("Please enter the beginning of the range: "));
    let end = parseInt(prompt("Please enter the end of the range: "));
    let yourAction = prompt("Acrion:\n1.Display all numbers in this range \n2. Deduce all even numbers from the range\n3. Deduce all odd numbers from the range\n4. Print all numbers multiples of seven");
    
    if(yourAction == "1")
    {
        for (let i = start; i <= end; i++) 
        {
            console.log(`${i}`);
        }
    }
    
    
    if (yourAction == "2")
    {
        for (let i = start; i <= end; i++) {
            if (i % 2 == 0) {
                console.log(`${i}`);
            }
        }
    }
    if (yourAction == "3")
    {
        for (let i = start; i <= end; i++) {
            if (i % 2 != 0) {
                console.log(`${i}`);
            }
        }
    }
    if (yourAction == "4")
    {
        for (let i = start; i <= end; i++) {
            if (i % 7 == 0) {
                console.log(`${i}`);
            }
        }
    }
    