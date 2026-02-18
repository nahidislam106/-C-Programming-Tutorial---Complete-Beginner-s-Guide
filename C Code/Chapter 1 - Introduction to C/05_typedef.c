// Program 83: TYPEDEF - Custom data type name define kora
// typedef: Existing data type er alias/nickname dewa
#include <stdio.h>

// typedef examples
typedef int Integer;
typedef float Decimal;
typedef char Character;
typedef unsigned long ulong;

// typedef with struct (preview)
typedef struct
{
    int day;
    int month;
    int year;
} Date;

int main()
{
    // Using typedef names
    Integer age = 25;
    Decimal price = 99.99;
    Character grade = 'A';
    ulong distance = 1000000;

    printf("Using typedef aliases:\n");
    printf("Age (Integer): %d\n", age);
    printf("Price (Decimal): %.2f\n", price);
    printf("Grade (Character): %c\n", grade);
    printf("Distance (ulong): %lu\n\n", distance);

    // Using typedef struct
    Date today;
    today.day = 18;
    today.month = 2;
    today.year = 2026;

    printf("Today's date: %02d/%02d/%d\n", today.day, today.month, today.year);

    printf("\nTypedef makes code more readable!\n");

    return 0;
}
