#include<bits/stdc++.h>

using namespace std;

int main(){

    int n,m;

    cout << "Enter number of rows : ";
    cin >> n;

    cout << "Enter number of columns : ";
    cin >> m;

    for(int i=0;i<n;i++){
        for(int j=0;j<i;j++){
            cout << " ";
        }
        cout << "*" << endl;
    }
    return 0;
}

