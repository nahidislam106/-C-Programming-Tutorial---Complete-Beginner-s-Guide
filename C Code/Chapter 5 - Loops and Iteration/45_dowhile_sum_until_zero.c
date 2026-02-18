// Program 56: Sum numbers until user enters 0 - DO-WHILE loop
// User jotokhon 0 na dibe, totokhon number input nite thakbe ebong sum korbe
#include <stdio.h>

int main()
{
    int number, sum = 0, count = 0;

    printf("Enter numbers to sum (enter 0 to stop):\n");

    // Do-while loop - At least ekbar input nibe
    do
    {
        printf("Enter number: ");
        scanf("%d", &number);

        if (number != 0)
        {
            sum += number;
            count++;
        }

    } while (number != 0); // 0 parlei stop

    // Result display
    printf("\nYou entered %d numbers\n", count);
    printf("Sum = %d\n", sum);

    if (count > 0)
    {
        printf("Average = %.2f\n", (float)sum / count);
    }

    return 0;
}
