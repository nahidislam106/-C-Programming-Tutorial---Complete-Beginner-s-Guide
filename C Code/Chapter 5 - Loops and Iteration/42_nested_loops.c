// Program 61: NESTED LOOPS - Loop er moddhe loop
// Nested loops use kore multiplication table print
#include <stdio.h>

int main()
{
    int n;

    printf("Enter how many tables to print: ");
    scanf("%d", &n);

    printf("\nMultiplication Tables from 1 to %d:\n", n);
    printf("=====================================\n");

    // Outer loop - Table number select kore (1, 2, 3...)
    for (int i = 1; i <= n; i++)
    {
        printf("\nTable of %d:\n", i);

        // Inner loop - Protioti table er 1 theke 10
        for (int j = 1; j <= 10; j++)
        {
            printf("%d × %d = %d\n", i, j, i * j);
        }
        printf("----------\n");
    }

    return 0;
}
