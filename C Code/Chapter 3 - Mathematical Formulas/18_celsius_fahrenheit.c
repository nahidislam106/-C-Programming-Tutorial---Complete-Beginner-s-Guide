// Program 15: Temperature Conversion - Celsius theke Fahrenheit e convert
// Formula: F = (C × 9/5) + 32
#include <stdio.h>

int main()
{
    float celsius, fahrenheit;

    // User input
    printf("Enter temperature in Celsius: ");
    scanf("%f", &celsius);

    // Convert to Fahrenheit
    fahrenheit = (celsius * 9.0 / 5.0) + 32;

    // Result display
    printf("%.2f°C = %.2f°F\n", celsius, fahrenheit);

    return 0;
}
