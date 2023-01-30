#include<bits/stdc++.h>

using namespace std;

int main(){

    int n,m;

    cout << "Enter number of rows : ";
    cin >> n;

    cout << "Enter number of columns : ";
    cin >> m;

    for(int i=0;i<n;i++){
        if(i==n-1){
            for(int j=0;j<m;j++){
                cout << "*";
            }
        }else{
            cout << "*" << endl;
        }
    }
    return 0;
}
