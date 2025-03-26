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
     std::cout<< "Sum:"<< (a + b) << "\n";
}
else if (choice == 3) {
     std::cout<< "Goodbye!\n";
     break;
}
else {
     std::cout <<"Invalid choice, try again\n";
}

return 0;
}