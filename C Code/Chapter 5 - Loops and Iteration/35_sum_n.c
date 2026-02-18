// Program 27: Sum of N Numbers - 1 theke n porjonto jogfol ber kora
// Example: n=5 hole 1+2+3+4+5 = 15
#include <stdio.h>

int main()
{
    int n, sum = 0;

    // User input
    printf("Enter a number: ");
    scanf("%d", &n);

    // Calculate sum using loop
    for (int i = 1; i <= n; i++)
    {
        sum += i; // sum = sum + i
    }

    printf("Sum of numbers from 1 to %d = %d\n", n, sum);

    return 0;
}
