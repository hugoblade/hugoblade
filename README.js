#include <iostream>
#include <string>
  void showMenu(){
std::cout <<"=== My ClI Program ===\n";
    std::cout << "1.Say Hello\n";
    std::cout << "2.Add two numbers\n";
    std::cout << "3.Exit\n";
    std::cout << "Enter your choice:";
  }
int main(){
  int choice;

  while(true){
    showMenu();
    std::cin >> choice;

    if(choice == 1){
      std::cout << "Hello User!\n";
    }
    else if(choice == 2){
      int a, b;
    
