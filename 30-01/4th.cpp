#include<bits/stdc++.h>

using namespace std;

int main(){

    int n;

    cout << "Enter value : ";
    cin >> n;

    int mid = n/2+1;

    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            if(i+j == mid+1 || j-i == n/2 || i-j == n/2 || i+j == n+mid){
                cout << "*";
            }else{
                cout << " ";
            }
        }cout << endl;
    }

    return 0;
}
