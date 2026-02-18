// Program 57: Number Guessing Game using DO-WHILE
// Computer ekta number think korbe, user guess korbe
#include <stdio.h>

int main()
{
    int secretNumber = 42; // Computer er secret number
    int guess, attempts = 0;

    printf("=== NUMBER GUESSING GAME ===\n");
    printf("I'm thinking of a number between 1 and 100.\n");
    printf("Can you guess it?\n\n");

    // Do-while loop - Correct guess না হওয়া পর্যন্ত
    do
    {
        printf("Enter your guess: ");
        scanf("%d", &guess);
        attempts++;

        if (guess < secretNumber)
        {
            printf("Too low! Try a higher number.\n\n");
        }
        else if (guess > secretNumber)
        {
            printf("Too high! Try a lower number.\n\n");
        }
        else
        {
            printf("\n🎉 Congratulations! You guessed it!\n");
            printf("The number was %d\n", secretNumber);
            printf("You took %d attempts.\n", attempts);
        }

    } while (guess != secretNumber);

    return 0;
}
