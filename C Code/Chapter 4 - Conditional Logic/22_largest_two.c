// Program 18: Largest of Two - Dui tar moddhe boro number khuje ber kora
#include <stdio.h>

int main()
{
    int num1, num2;

    // User input
    printf("Enter first number: ");
    scanf("%d", &num1);

    printf("Enter second number: ");
    scanf("%d", &num2);

    // Compare and find largest
    if (num1 > num2)
    {
        printf("%d is largest\n", num1);
    }
    else if (num2 > num1)
    {
        printf("%d is largest\n", num2);
    }
    else
    {
        printf("Both numbers are equal\n");
    }

    return 0;
}
