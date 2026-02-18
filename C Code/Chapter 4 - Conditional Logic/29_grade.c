// Program 22: Grade Calculator - Marks onujayi grade ber kora
// 90-100: A+, 80-89: A, 70-79: B, 60-69: C, 50-59: D, Below 50: F
#include <stdio.h>

int main()
{
    int marks;

    // User input
    printf("Enter marks (0-100): ");
    scanf("%d", &marks);

    // Check valid marks
    if (marks < 0 || marks > 100)
    {
        printf("Invalid marks! Enter between 0-100\n");
    }
    // Grade calculation
    else if (marks >= 90)
    {
        printf("Grade: A+\n");
    }
    else if (marks >= 80)
    {
        printf("Grade: A\n");
    }
    else if (marks >= 70)
    {
        printf("Grade: B\n");
    }
    else if (marks >= 60)
    {
        printf("Grade: C\n");
    }
    else if (marks >= 50)
    {
        printf("Grade: D\n");
    }
    else
    {
        printf("Grade: F (Failed)\n");
    }

    return 0;
}
