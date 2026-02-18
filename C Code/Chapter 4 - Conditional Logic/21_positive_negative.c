// Program 17: Positive or Negative - Dhonattok ba rinattok check
#include <stdio.h>

int main()
{
    int number;

    // User input
    printf("Enter a number: ");
    scanf("%d", &number);

    // Check sign
    if (number > 0)
    {
        printf("%d is Positive (Dhonattok)\n", number);
    }
    else if (number < 0)
    {
        printf("%d is Negative (Rinattok)\n", number);
    }
    else
    {
        printf("The number is Zero (Shunno)\n");
    }

    return 0;
}
