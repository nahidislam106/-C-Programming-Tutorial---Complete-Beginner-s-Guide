// Program 41: Multiplication Table - Kono number er multiplication table print
// Example: Table of 5 -> 5×1=5, 5×2=10, ... 5×10=50
#include <stdio.h>

int main()
{
    int num, range;

    // User input
    printf("Enter a number: ");
    scanf("%d", &num);

    printf("Enter range (how many terms): ");
    scanf("%d", &range);

    printf("\nMultiplication Table of %d:\n", num);
    printf("------------------------\n");

    // Print multiplication table
    for (int i = 1; i <= range; i++)
    {
        printf("%d × %d = %d\n", num, i, num * i);
    }

    return 0;
}
