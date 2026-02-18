// Program 16: Even or Odd - Jor ba bijor check kora
// Jor number gulo 2 diye vag jay (remainder 0)
#include <stdio.h>

int main()
{
    int number;

    // User input
    printf("Enter a number: ");
    scanf("%d", &number);

    // Check using if-else
    if (number % 2 == 0)
    {
        printf("%d is Even (Jor)\n", number);
    }
    else
    {
        printf("%d is Odd (Bijor)\n", number);
    }

    return 0;
}
