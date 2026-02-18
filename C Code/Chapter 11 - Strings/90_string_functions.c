// Program 78: String Library Functions - string.h er functions
// Important string functions: strlen, strcpy, strcat, strcmp, etc.
#include <stdio.h>
#include <string.h>

int main()
{
    char str1[100] = "Hello";
    char str2[100] = "World";
    char str3[100];

    printf("Initial strings:\n");
    printf("str1 = %s\n", str1);
    printf("str2 = %s\n\n", str2);

    // 1. strlen() - String length
    printf("1. strlen() - Length of string\n");
    printf("   Length of str1 = %lu\n", strlen(str1));
    printf("   Length of str2 = %lu\n\n", strlen(str2));

    // 2. strcpy() - String copy
    printf("2. strcpy() - Copy string\n");
    strcpy(str3, str1);
    printf("   Copied str1 to str3: %s\n\n", str3);

    // 3. strcat() - String concatenation
    printf("3. strcat() - Concatenate strings\n");
    strcat(str1, " ");
    strcat(str1, str2);
    printf("   str1 after concatenation: %s\n\n", str1);

    // 4. strcmp() - String comparison
    printf("4. strcmp() - Compare strings\n");
    if (strcmp(str2, str3) == 0)
    {
        printf("   str2 and str3 are equal\n");
    }
    else
    {
        printf("   str2 and str3 are not equal\n");
    }
    printf("\n");

    // 5. strupr() and strlwr() - Uppercase and lowercase (not standard)
    // 6. strrev() - Reverse string (not standard)

    // 7. strchr() - Find character in string
    printf("5. strchr() - Find character\n");
    char *ptr = strchr(str2, 'o');
    if (ptr != NULL)
    {
        printf("   Character 'o' found at position %ld\n\n", ptr - str2);
    }

    // 8. strstr() - Find substring
    printf("6. strstr() - Find substring\n");
    char *ptr2 = strstr(str1, "World");
    if (ptr2 != NULL)
    {
        printf("   Substring 'World' found\n");
    }

    return 0;
}
