#include <iostream>
#include <stdio.h>
using namespace std;

int main(){
int a[] = {1,2,3,4,5};
int i; int temp; int n = sizeof(a)/sizeof(a[0]);
for(i=n-1;i>0;i--){
   
    temp = a[i-1];
    a[i-1] = a[i];
    a[i] =  temp;
}

for(i=0;i<n;i++){
    cout<<a[i]<<" ";
}
}