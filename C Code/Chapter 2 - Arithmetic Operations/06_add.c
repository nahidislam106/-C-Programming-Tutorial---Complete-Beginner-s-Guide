// Program 04: Addition - Dui ta number er jogfol ber kora
#include <stdio.h>

int main()
{
    // Variables declare
    int num1, num2, sum;

    // User theke input
    printf("Enter first number: ");
    scanf("%d", &num1);

    printf("Enter second number: ");
    scanf("%d", &num2);

    // Addition calculate kora
    sum = num1 + num2;

    // Result display
    printf("Sum = %d + %d = %d\n", num1, num2, sum);

    return 0;
}
