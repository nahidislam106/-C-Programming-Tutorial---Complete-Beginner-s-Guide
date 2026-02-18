// Program 08: Modulo - Vagshesh ber kora (remainder after division)
// Example: 10 % 3 = 1 (karon 10 ÷ 3 = 3 ebong baki 1)
#include <stdio.h>

int main()
{
    // Variables declare
    int num1, num2, remainder;

    // User input
    printf("Enter first number: ");
    scanf("%d", &num1);

    printf("Enter second number: ");
    scanf("%d", &num2);

    // Check division by zero
    if (num2 == 0)
    {
        printf("Error! Modulo by zero is not allowed.\n");
    }
    else
    {
        // Modulo calculate - % is modulo operator
        remainder = num1 % num2;
        printf("Remainder = %d %% %d = %d\n", num1, num2, remainder);
    }

    return 0;
}
