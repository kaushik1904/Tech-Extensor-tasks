#include<bits/stdc++.h>

using namespace std;

int main(){

    int n;

    cout << "Enter Value : ";
    cin >> n;

    int x=n,y=n;

    for(int i=1;i<=n;i++){
        for(int j=1;j<=n*2;j++){
            if(j==x || j==y){
                cout << "*";
            }else{
                cout << " ";
            }
        }cout << endl;
        y--,x++;
    }
    
    return 0;
}

