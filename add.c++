#include <iostream>
using namespace std;

int main()
{
    int a, b, c, n;
    cout << "enter the number" << endl;
    cin >> n;
    a = n % 10;
    n = n / 10;
    b = n % 10;
    n = n / 10;
    c = n % 10;
    n = n / 10;
    int sum = a + b + c + n;
    cout << "the sum of digit is " << sum;

    return 0;
}