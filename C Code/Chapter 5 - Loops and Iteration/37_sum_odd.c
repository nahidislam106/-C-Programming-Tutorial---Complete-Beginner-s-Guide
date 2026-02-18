// Program 29: Sum of Odd Numbers - 1 theke n porjonto bijor sonkhar jogfol
// Example: n=10 hole 1+3+5+7+9 = 25
#include <stdio.h>

int main()
{
    int n, sum = 0;

    // User input
    printf("Enter a number: ");
    scanf("%d", &n);

    // Calculate sum of odd numbers
    for (int i = 1; i <= n; i++)
    {
        if (i % 2 != 0)
        { // If odd
            sum += i;
        }
    }

    printf("Sum of odd numbers from 1 to %d = %d\n", n, sum);

    return 0;
}
