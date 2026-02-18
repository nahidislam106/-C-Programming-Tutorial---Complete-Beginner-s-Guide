// Program 87: Increment and Decrement Operators
// ++ (increment) and -- (decrement)
// Prefix: ++x (age value change, tarpor use)
// Postfix: x++ (age value use, tarpor change)
#include <stdio.h>

int main()
{
    int a = 5, b = 5;

    printf("Initial values: a = %d, b = %d\n\n", a, b);

    // Post-increment (a++)
    printf("Post-increment (a++):\n");
    printf("Value before: a = %d\n", a);
    printf("a++ returns: %d\n", a++); // Age 5, then a becomes 6
    printf("Value after: a = %d\n\n", a);

    // Pre-increment (++b)
    printf("Pre-increment (++b):\n");
    printf("Value before: b = %d\n", b);
    printf("++b returns: %d\n", ++b); // Age 6 hoy, then 6 return
    printf("Value after: b = %d\n\n", b);

    // Practical example
    int x = 10;
    printf("Practical examples:\n");
    printf("x = %d\n", x);
    printf("x++ = %d, x is now %d\n", x++, x);
    printf("++x = %d, x is now %d\n", ++x, x);
    printf("x-- = %d, x is now %d\n", x--, x);
    printf("--x = %d, x is now %d\n", --x, x);

    // In expressions
    int i = 5, j = 5;
    int result1 = i++ + 10; // 5 + 10 = 15, then i = 6
    int result2 = ++j + 10; // j = 6 first, then 6 + 10 = 16
    printf("\nIn expressions:\n");
    printf("i++ + 10 = %d, i = %d\n", result1, i);
    printf("++j + 10 = %d, j = %d\n", result2, j);

    return 0;
}
