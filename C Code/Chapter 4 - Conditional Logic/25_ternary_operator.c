// Program 86: Ternary Operator - Shorthand if-else
// Syntax: condition ? value_if_true : value_if_false
#include <stdio.h>

int main()
{
    int a, b, max;

    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    // Using ternary operator to find maximum
    max = (a > b) ? a : b;
    printf("Maximum = %d\n\n", max);

    // Check even or odd using ternary
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    printf("%d is %s\n\n", num, (num % 2 == 0) ? "Even" : "Odd");

    // Nested ternary - Find largest of 3
    int x, y, z, largest;
    printf("Enter three numbers: ");
    scanf("%d %d %d", &x, &y, &z);

    largest = (x > y) ? ((x > z) ? x : z) : ((y > z) ? y : z);
    printf("Largest = %d\n", largest);

    return 0;
}
