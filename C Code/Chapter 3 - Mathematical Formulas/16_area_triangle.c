// Program 13: Area of Triangle - Trivojujer area hesab kora
// Formula: Area = (base × height) / 2
#include <stdio.h>

int main()
{
    float base, height, area;

    // User input
    printf("Enter base of triangle: ");
    scanf("%f", &base);

    printf("Enter height of triangle: ");
    scanf("%f", &height);

    // Area calculate
    area = (base * height) / 2;

    // Result display
    printf("Area of triangle = %.2f\n", area);

    return 0;
}
