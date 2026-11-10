#include <stdio.h>
#include <iostream>

using namespace std;

int main(){
    int a[] = {20,80,60,40,20};
int i;
int j;
int k;
int n = sizeof(a)/sizeof(a[0]);
    for(i=0;i<n;i++){
for( j=i+1;j<n;j++){
    for(k=j;k<n-1;k++){
  if(a[i]==a[j]){
        a[k]=a[k+1];
    }
    }

}

    }
      n--;
j--;
    for(i=0;i<n;i++){
cout<<a[i]<<" ";
    }
    
}