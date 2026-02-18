// Program 14: Simple Interest - Sadharone shudh hesab kora
// Formula: SI = (Principal × Rate × Time) / 100
#include <stdio.h>

int main()
{
    float principal, rate, time, simple_interest;

    // User input
    printf("Enter principal amount: ");
    scanf("%f", &principal);

    printf("Enter rate of interest: ");
    scanf("%f", &rate);

    printf("Enter time period (years): ");
    scanf("%f", &time);

    // Simple Interest calculate
    simple_interest = (principal * rate * time) / 100;

    // Result display
    printf("Simple Interest = %.2f\n", simple_interest);
    printf("Total Amount = %.2f\n", principal + simple_interest);

    return 0;
}
