// Program 43: Right Triangle Pattern - Dik trikoj pattern
// Example for n=5:
// *
// * *
// * * *
// * * * *
// * * * * *
#include <stdio.h>

int main()
{
    int n;

    // User input
    printf("Enter the height: ");
    scanf("%d", &n);

    printf("\nRight Triangle Pattern:\n");

    // Outer loop for rows (1 to n)
    for (int i = 1; i <= n; i++)
    {
        // Inner loop for columns (1 to i)
        // First row: 1 star, Second row: 2 stars, etc.
        for (int j = 1; j <= i; j++)
        {
            printf("* ");
        }
        printf("\n");
    }

    return 0;
}
