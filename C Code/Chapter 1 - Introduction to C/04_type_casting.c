// Program 88: Type Casting - Ek data type theke onno type e convert
// Implicit casting (automatic) and Explicit casting (manual)
#include <stdio.h>

int main()
{
    // Implicit casting (automatic)
    printf("=== Implicit Casting ===\n");
    int num1 = 10;
    float result1 = num1; // int automatically converts to float
    printf("int %d converted to float: %.2f\n\n", num1, result1);

    // Explicit casting (manual)
    printf("=== Explicit Casting ===\n");

    // Integer division problem
    int a = 7, b = 2;
    float division1 = a / b; // Integer division: 7/2 = 3
    printf("Without casting: %d / %d = %.2f (Wrong!)\n", a, b, division1);

    // With casting
    float division2 = (float)a / b; // Converts a to float
    printf("With casting: (float)%d / %d = %.2f (Correct!)\n\n", a, b, division2);

    // Float to int
    float pi = 3.14159;
    int intPi = (int)pi; // Decimal part cut hoye jabe
    printf("float %.5f to int: %d\n\n", pi, intPi);

    // Practical example: Average calculation
    int marks1 = 85, marks2 = 90, marks3 = 78;

    // Wrong way (integer division)
    int wrongAvg = (marks1 + marks2 + marks3) / 3;
    printf("Average (wrong): %d\n", wrongAvg);

    // Correct way (with casting)
    float correctAvg = (float)(marks1 + marks2 + marks3) / 3;
    printf("Average (correct): %.2f\n", correctAvg);

    return 0;
}
