#include <bits/stdc++.h>
using namespace std;

#include <Bvr/Math/math.hpp>
using namespace Bvr::Math;

int main() {
  int a, b, c;

  cout << "Input int a: ";
  cin >> a;

  cout << "Input int b: ";
  cin >> b;

  c = sum(a, b);
  cout << "C = a + b: "
       << "\nC = " << c
       << "\n";

  return 0;

}
