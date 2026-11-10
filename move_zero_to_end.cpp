#include<stdio.h>
#include<iostream>
using namespace std;
 int main(){
    int a[] = {1,0,2,8,0,4};
    int i;
    int j;
    int temp;
    int n = sizeof(a)/sizeof(a[0]);
    cout<<n<<"size"<<"\n";
    for (i=0;i<n;i++){
        cout<<a[i]<<" array["<<i<<"]"<<"\n";
        if(a[i]==0){
            for(j=i;j<n-1;j++){
                temp = a[j+1];
                a[j+1] = a[j];
                a[j] = temp;
            }
        }
    }

    for(i=0;i<n;i++){
        cout<<a[i]<<" ";
    }
 }