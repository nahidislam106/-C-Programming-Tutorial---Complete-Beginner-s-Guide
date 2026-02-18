// Program 42: Square Pattern - Boga akar pattern print kora
// Example for n=4:
// * * * *
// * * * *
// * * * *
// * * * *
#include <stdio.h>

int main()
{
    int n;

    // User input
    printf("Enter the size: ");
    scanf("%d", &n);

    printf("\nSquare Pattern:\n");

    // Outer loop for rows
    for (int i = 1; i <= n; i++)
    {
        // Inner loop for columns
        for (int j = 1; j <= n; j++)
        {
            printf("* ");
        }
        printf("\n"); // New line after each row
    }

    return 0;
}
