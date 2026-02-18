// Program 19: Largest of Three - Tin tar moddhe boro number khuje ber kora
#include <stdio.h>

int main()
{
    int num1, num2, num3;

    // User input
    printf("Enter three numbers: ");
    scanf("%d %d %d", &num1, &num2, &num3);

    // Find largest using nested if-else
    if (num1 >= num2 && num1 >= num3)
    {
        printf("%d is largest\n", num1);
    }
    else if (num2 >= num1 && num2 >= num3)
    {
        printf("%d is largest\n", num2);
    }
    else
    {
        printf("%d is largest\n", num3);
    }

    return 0;
}
