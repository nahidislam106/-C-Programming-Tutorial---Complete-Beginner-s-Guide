// Program 26: Print Odd Numbers - 1 theke n porjonto bijor sonkha print
// Odd numbers: 1, 3, 5, 7, 9...
#include <stdio.h>

int main()
{
    int n;

    // User input
    printf("Enter a number: ");
    scanf("%d", &n);

    printf("Odd numbers from 1 to %d: ", n);

    // Loop and check each number
    for (int i = 1; i <= n; i++)
    {
        if (i % 2 != 0)
        { // Check if odd
            printf("%d ", i);
        }
    }
    printf("\n");

    return 0;
}
