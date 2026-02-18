// Program 28: Sum of Even Numbers - 1 theke n porjonto jor sonkhar jogfol
// Example: n=10 hole 2+4+6+8+10 = 30
#include <stdio.h>

int main()
{
    int n, sum = 0;

    // User input
    printf("Enter a number: ");
    scanf("%d", &n);

    // Calculate sum of even numbers
    for (int i = 1; i <= n; i++)
    {
        if (i % 2 == 0)
        { // If even
            sum += i;
        }
    }

    printf("Sum of even numbers from 1 to %d = %d\n", n, sum);

    return 0;
}
