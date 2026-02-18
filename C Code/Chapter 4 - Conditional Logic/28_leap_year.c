// Program 20: Leap Year Check - Adhik bochor kina check kora
// Rules: 1) 4 diye vag jay kintu 100 diye na, OTHOBA 2) 400 diye vag jay
#include <stdio.h>

int main()
{
    int year;

    // User input
    printf("Enter a year: ");
    scanf("%d", &year);

    // Check leap year condition
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
    {
        printf("%d is a Leap Year (Adhik Bochor)\n", year);
    }
    else
    {
        printf("%d is not a Leap Year\n", year);
    }

    return 0;
}
