// Program 68: Calculator using Functions
// Modular programming - Protioti operation alag function
#include <stdio.h>

// Function prototypes
void displayMenu();
float add(float a, float b);
float subtract(float a, float b);
float multiply(float a, float b);
float divide(float a, float b);
int modulo(int a, int b);
float power(float base, int exp);

int main()
{
    int choice;
    float num1, num2, result;

    do
    {
        displayMenu();
        printf("Enter choice: ");
        scanf("%d", &choice);

        if (choice >= 1 && choice <= 6)
        {
            printf("Enter two numbers: ");
            scanf("%f %f", &num1, &num2);
        }

        switch (choice)
        {
        case 1:
            result = add(num1, num2);
            printf("%.2f + %.2f = %.2f\n\n", num1, num2, result);
            break;
        case 2:
            result = subtract(num1, num2);
            printf("%.2f - %.2f = %.2f\n\n", num1, num2, result);
            break;
        case 3:
            result = multiply(num1, num2);
            printf("%.2f × %.2f = %.2f\n\n", num1, num2, result);
            break;
        case 4:
            result = divide(num1, num2);
            if (num2 != 0)
                printf("%.2f ÷ %.2f = %.2f\n\n", num1, num2, result);
            break;
        case 5:
            printf("%d %% %d = %d\n\n", (int)num1, (int)num2, modulo((int)num1, (int)num2));
            break;
        case 6:
            result = power(num1, (int)num2);
            printf("%.2f ^ %d = %.2f\n\n", num1, (int)num2, result);
            break;
        case 7:
            printf("Exiting calculator. Goodbye!\n");
            break;
        default:
            printf("Invalid choice!\n\n");
        }
    } while (choice != 7);

    return 0;
}

void displayMenu()
{
    printf("===== CALCULATOR =====\n");
    printf("1. Add\n");
    printf("2. Subtract\n");
    printf("3. Multiply\n");
    printf("4. Divide\n");
    printf("5. Modulo\n");
    printf("6. Power\n");
    printf("7. Exit\n");
    printf("=====================\n");
}

float add(float a, float b) { return a + b; }
float subtract(float a, float b) { return a - b; }
float multiply(float a, float b) { return a * b; }

float divide(float a, float b)
{
    if (b != 0)
        return a / b;
    printf("Error: Division by zero!\n");
    return 0;
}

int modulo(int a, int b)
{
    if (b != 0)
        return a % b;
    printf("Error: Modulo by zero!\n");
    return 0;
}

float power(float base, int exp)
{
    float result = 1;
    for (int i = 0; i < exp; i++)
    {
        result *= base;
    }
    return result;
}
