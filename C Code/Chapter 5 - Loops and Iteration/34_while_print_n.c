// Program 51: Print 1 to N using WHILE loop
// While loop: Condition age check hoy, tarpor execute hoy
// Syntax: while(condition) { statements }
#include <stdio.h>

int main()
{
    int n, i = 1; // i initialize kora dorkar

    // User input
    printf("Enter a number: ");
    scanf("%d", &n);

    printf("Numbers from 1 to %d using while: ", n);

    // While loop - condition age check hoy
    while (i <= n)
    {
        printf("%d ", i);
        i++; // i barate hobe, nahole infinite loop!
    }
    printf("\n");

    return 0;
}
