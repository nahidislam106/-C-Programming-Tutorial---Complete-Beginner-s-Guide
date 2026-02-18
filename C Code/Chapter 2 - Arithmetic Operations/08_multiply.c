// Program 06: Multiplication - Dui ta number er gunfol ber kora
#include <stdio.h>

int main()
{
    // Variables declare
    int num1, num2, product;

    // User input
    printf("Enter first number: ");
    scanf("%d", &num1);

    printf("Enter second number: ");
    scanf("%d", &num2);

    // Multiplication calculate
    product = num1 * num2;

    // Result display
    printf("Product = %d × %d = %d\n", num1, num2, product);

    return 0;
}
