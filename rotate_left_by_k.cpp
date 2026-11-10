#include<stdio.h>
#include<iostream>
using namespace std;

int main (){
    int a[] = {1,2,3,4,5};
    int i; int j; int n = sizeof(a)/sizeof(a[0]); int k=2; int temp;
    for(i=0;i<k;i++){
        for(j=0;j<n-1;j++){
            temp = a[j+1];
            a[j+1] = a[j];
            a[j] =  temp;

        }

    }
    for(i=0;i<n;i++){
        cout<<a[i]<<" ";
    }
}