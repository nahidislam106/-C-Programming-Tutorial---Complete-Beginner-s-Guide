// Program 53: Factorial using WHILE loop
// While loop diye factorial calculate kora
#include <stdio.h>

int main()
{
    int n, i = 1;
    long long factorial = 1;

    // User input
    printf("Enter a number: ");
    scanf("%d", &n);

    // Check negative
    if (n < 0)
    {
        printf("Factorial of negative number doesn't exist\n");
        return 0;
    }

    // Calculate factorial using while
    while (i <= n)
    {
        factorial *= i;
        i++;
    }

    printf("Factorial of %d = %lld\n", n, factorial);

    return 0;
}
