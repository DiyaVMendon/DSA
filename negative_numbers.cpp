#include<stdio.h>
#include<iostream>
using namespace std;
int main(){
    int a[] = {10, -5,4,-2,5,-6,8};
    int i;
    int j;
    int n= sizeof(a)/sizeof(a[0]);
    int temp;

    for(i=0;i<n;i++){
        if(a[i]<0){
            for(j=i;j<n-1;j++){
                temp = a[j+1];
                a[j+1]=a[j];
                a[j]=temp;
            }
        }
    }

    for(i=0;i<n;i++){
        cout<<a[i]<<" ";
    }
}