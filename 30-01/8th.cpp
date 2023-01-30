#include<bits/stdc++.h>

using namespace std;

int main(){

    int n,m;

    cout << "Enter number of rows : ";
    cin >> n;

    cout << "Enter number of columns : ";
    cin >> m;

    for(int i=0;i<n-1;i++){
        for(int j=0;j<m;j++){
            if(j == m-1){
                cout << "*" << endl;
            }else{
                cout << " ";
            }
        }
    }
    for(int i=0;i<n;i++){
        cout << "*";
    }



    return 0;
}

