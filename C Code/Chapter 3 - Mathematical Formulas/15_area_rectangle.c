// Program 12: Area of Rectangle - Ayotokkhetre area hesab kora
// Formula: Area = length × width
#include <stdio.h>

int main()
{
    float length, width, area;

    // User input
    printf("Enter length of rectangle: ");
    scanf("%f", &length);

    printf("Enter width of rectangle: ");
    scanf("%f", &width);

    // Area calculate
    area = length * width;

    // Result display
    printf("Area of rectangle = %.2f\n", area);

    return 0;
}
