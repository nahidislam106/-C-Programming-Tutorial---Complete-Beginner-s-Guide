// Program 55: Password validation using DO-WHILE
// Do-while: Password correct na hole abar input nibe
#include <stdio.h>

int main()
{
    int password, correctPassword = 1234;
    int attempts = 0;

    printf("Welcome! Please enter password to continue.\n");

    // Do-while loop - Correct password না হওয়া পর্যন্ত চলবে
    do
    {
        printf("Enter password: ");
        scanf("%d", &password);
        attempts++;

        if (password != correctPassword)
        {
            printf("Wrong password! Try again.\n\n");
        }

        // 3 attempt er por exit
        if (attempts >= 3 && password != correctPassword)
        {
            printf("Too many wrong attempts! Exiting...\n");
            return 0;
        }

    } while (password != correctPassword);

    // Password correct hole
    printf("\nPassword correct! Access granted.\n");
    printf("You took %d attempt(s).\n", attempts);

    return 0;
}
