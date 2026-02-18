// Program 09: Swap Using Temp - Temporary variable use kore dui ta variable er value swap kora
// Example: a=5, b=10 er por a=10, b=5 hobe
#include <stdio.h>

int main()
{
    int a, b, temp;

    // User input
    printf("Enter first number: ");
    scanf("%d", &a);

    printf("Enter second number: ");
    scanf("%d", &b);

    printf("\nBefore swapping: a = %d, b = %d\n", a, b);

    // Swapping using temporary variable
    temp = a; // temp e a er value rakha
    a = b;    // a te b er value dewa
    b = temp; // b te temp (original a) er value dewa

    printf("After swapping: a = %d, b = %d\n", a, b);

    return 0;
}
