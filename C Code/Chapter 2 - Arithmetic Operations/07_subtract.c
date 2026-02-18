// Program 05: Subtraction - Dui ta number er biyogfol ber kora
#include <stdio.h>

int main()
{
    // Variables declare
    int num1, num2, difference;

    // User input
    printf("Enter first number: ");
    scanf("%d", &num1);

    printf("Enter second number: ");
    scanf("%d", &num2);

    // Subtraction calculate
    difference = num1 - num2;

    // Result display
    printf("Difference = %d - %d = %d\n", num1, num2, difference);

    return 0;
}
