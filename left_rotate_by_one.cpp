#include<iostream>
#include<stdio.h>
using namespace std;
int main(){
    int a[]={1,2,3,4,5};
    int i; int j; int n = sizeof(a)/sizeof(a[0]); int temp;
    for(i=0;i<n;i++){
        temp = a[i+1];
        a[i+1]= a[i];
        a[i] =temp;
    }

    for(i=0;i<n;i++){
        cout<<a[i]<<" ";
    }
}