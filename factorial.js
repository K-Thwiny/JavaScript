/*
 * Programming Quiz: Factorials (4-7)
 */

var solution = 12;
for (var fact = 1; fact < 12; fact++) {
    solution *= fact;
}
console.log(solution);

/* Factorial of 12, solution starts at 12. solution* factwill first set 12*1. 
1. solution* fact : 12*1 = 12
2. solution*fact : 12*2 = 24 
3. soluti *fact :24*3 = 72
4. soluti *fact : 72*4 = 288
5. soluti *fact : 288 *5 = 1,440
6. soluti *fact : 1440 * 6 = 8,640
7. soluti *fact : 8640 * 7 = 60,480
8. soluti *fact : 60,480 * 8 = 483,840
9. soluti *fact : 483,840 * 9 = 4,354,560
10. soluti *fact : 4,354,560 * 10 = 43,545,600
11. soluti *fact : 43,545,600 * 11 = 479,001,600

*/