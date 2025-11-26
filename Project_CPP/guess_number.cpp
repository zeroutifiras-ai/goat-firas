#include <iostream>
#include <cstdlib>
#include <ctime>

int main() {
    srand(time(0));
    int number = rand() % 100 + 1;
    int guess;
    std::cout << "Guess the number (1-100): ";
    while (std::cin >> guess) {
        if (guess == number) { std::cout << "Correct!\n"; break; }
        else if (guess < number) std::cout << "Higher: ";
        else std::cout << "Lower: ";
    }
    return 0;
}
