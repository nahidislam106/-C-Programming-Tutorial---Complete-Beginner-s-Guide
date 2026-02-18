// Program 85: Switch Case - Months and Days
// Display month name and number of days
#include <stdio.h>

int main()
{
    int month;

    printf("Enter month number (1-12): ");
    scanf("%d", &month);

    printf("Month %d is: ", month);

    // Display month name
    switch (month)
    {
    case 1:
        printf("January\n");
        break;
    case 2:
        printf("February\n");
        break;
    case 3:
        printf("March\n");
        break;
    case 4:
        printf("April\n");
        break;
    case 5:
        printf("May\n");
        break;
    case 6:
        printf("June\n");
        break;
    case 7:
        printf("July\n");
        break;
    case 8:
        printf("August\n");
        break;
    case 9:
        printf("September\n");
        break;
    case 10:
        printf("October\n");
        break;
    case 11:
        printf("November\n");
        break;
    case 12:
        printf("December\n");
        break;
    default:
        printf("Invalid!\n");
        return 0;
    }

    // Display number of days
    printf("Number of days: ");
    switch (month)
    {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        printf("31 days\n");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        printf("30 days\n");
        break;
    case 2:
        printf("28 or 29 days (leap year dependent)\n");
        break;
    }

    return 0;
}
