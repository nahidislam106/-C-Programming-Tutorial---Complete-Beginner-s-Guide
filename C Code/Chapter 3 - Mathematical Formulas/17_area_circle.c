// Program 11: Area of Circle - Britter area hesab kora
// Formula: Area = π × r²
#include <stdio.h>

int main()
{
    float radius, area;
    float pi = 3.14159; // Pi value

    // User theke radius input
    printf("Enter radius of circle: ");
    scanf("%f", &radius);

    // Area calculate: π × r × r
    area = pi * radius * radius;

    // Result display
    printf("Area of circle = %.2f\n", area);

    return 0;
}
