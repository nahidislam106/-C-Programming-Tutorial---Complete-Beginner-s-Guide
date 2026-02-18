// Program 54: Menu driven program using DO-WHILE loop
// Do-while: Ek bar execute hoy, tarpor condition check hoy
// Syntax: do { statements } while(condition);
#include <stdio.h>

int main()
{
    int choice;

    // Do-while loop - At least ekbar execute hobe
    do
    {
        // Display menu
        printf("\n===== MENU =====\n");
        printf("1. Hello World\n");
        printf("2. Print Numbers 1-10\n");
        printf("3. Print Stars\n");
        printf("4. Exit\n");
        printf("================\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        // Switch case for menu
        switch (choice)
        {
        case 1:
            printf("\nHello World!\n");
            break;
        case 2:
            printf("\nNumbers: ");
            for (int i = 1; i <= 10; i++)
            {
                printf("%d ", i);
            }
            printf("\n");
            break;
        case 3:
            printf("\n**********\n");
            break;
        case 4:
            printf("\nExiting... Goodbye!\n");
            break;
        default:
            printf("\nInvalid choice! Try again.\n");
        }

    } while (choice != 4); // choice 4 na hole loop cholte thakbe

    return 0;
}
