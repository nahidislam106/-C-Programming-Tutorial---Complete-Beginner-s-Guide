// Program 07: Division - Dui ta number er vagfol ber kora
#include <stdio.h>

int main()
{
    // Float use kora jate decimal result pawa jay
    float num1, num2, quotient;

    // User input
    printf("Enter first number: ");
    scanf("%f", &num1);

    printf("Enter second number: ");
    scanf("%f", &num2);

    // Check division by zero
    if (num2 == 0)
    {
        printf("Error! Division by zero is not allowed.\n");
    }
    else
    {
        // Division calculate
        quotient = num1 / num2;
        printf("Quotient = %.2f ÷ %.2f = %.2f\n", num1, num2, quotient);
    }

    return 0;
}
