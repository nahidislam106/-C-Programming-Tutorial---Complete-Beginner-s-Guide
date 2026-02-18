// Program 03: Input Output - User theke input newa ebong output dekhanor basics
#include <stdio.h>

int main()
{
    // Variables declare kora
    int number;
    char letter;
    float decimal;

    // User theke input newa
    printf("Enter a number: ");
    scanf("%d", &number); // & diye variable er address dewa hoy

    printf("Enter a letter: ");
    scanf(" %c", &letter); // Space diye previous newline skip kora

    printf("Enter a decimal number: ");
    scanf("%f", &decimal);

    // Input gulo print kora
    printf("\nYou entered:\n");
    printf("Number: %d\n", number);
    printf("Letter: %c\n", letter);
    printf("Decimal: %.2f\n", decimal);

    return 0;
}
