// Program 10: Swap Without Temp - Temporary variable chara swap kora
// Arithmetic operation use kore swap kora hoy
#include <stdio.h>

int main()
{
    int a, b;

    // User input
    printf("Enter first number: ");
    scanf("%d", &a);

    printf("Enter second number: ");
    scanf("%d", &b);

    printf("\nBefore swapping: a = %d, b = %d\n", a, b);

    // Swapping without temp variable
    a = a + b; // a = sum of both
    b = a - b; // b = original a (sum - original b)
    a = a - b; // a = original b (sum - new b)

    printf("After swapping: a = %d, b = %d\n", a, b);

    return 0;
}
