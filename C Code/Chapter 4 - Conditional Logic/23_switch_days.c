// Program 84: Switch Case - Days of Week
// Switch-case: Multiple conditions check korar easy way
#include <stdio.h>

int main()
{
    int day;

    printf("Enter day number (1-7): ");
    scanf("%d", &day);

    printf("Day %d is: ", day);

    // Switch case for days
    switch (day)
    {
    case 1:
        printf("Sunday (Robibar)\n");
        break;
    case 2:
        printf("Monday (Sombar)\n");
        break;
    case 3:
        printf("Tuesday (Mongolbar)\n");
        break;
    case 4:
        printf("Wednesday (Budhbar)\n");
        break;
    case 5:
        printf("Thursday (Brihospotibar)\n");
        break;
    case 6:
        printf("Friday (Shukrobar)\n");
        break;
    case 7:
        printf("Saturday (Shonibar)\n");
        break;
    default:
        printf("Invalid! Enter 1-7\n");
    }

    // Check weekend or weekday
    switch (day)
    {
    case 1:
    case 7:
        printf("It's WEEKEND! 🎉\n");
        break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        printf("It's a WEEKDAY 😊\n");
        break;
    default:
        printf("Invalid day!\n");
    }

    return 0;
}
