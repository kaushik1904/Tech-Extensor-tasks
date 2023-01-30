#include<bits/stdc++.h>

using namespace std;

int main(){

    int n,m;

    cout << "Enter number of rows : ";
    cin >> n;

    cout << "Enter number of columns : ";
    cin >> m;

    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            if(i % 2 == 0){
                if(j % 2 != 0)
                    cout << "*";
                else
                    cout << "  ";
            }else{
                if(j % 2 == 0){
                    cout << "*";
                }else
                    cout << "  ";
            }
        }cout << endl;
    }
    return 0;
}

