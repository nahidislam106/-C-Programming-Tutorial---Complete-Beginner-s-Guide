// Program 44: Pyramid Pattern - Pyramid akar pattern
// Example for n=5:
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
#include <stdio.h>

int main()
{
    int n;

    // User input
    printf("Enter the height: ");
    scanf("%d", &n);

    printf("\nPyramid Pattern:\n");

    // Outer loop for rows
    for (int i = 1; i <= n; i++)
    {
        // Print spaces (decreasing)
        for (int j = 1; j <= n - i; j++)
        {
            printf(" ");
        }

        // Print stars (increasing)
        for (int k = 1; k <= i; k++)
        {
            printf("* ");
        }

        printf("\n");
    }

    return 0;
}
