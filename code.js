function printMinNumber(n,m,k,a) {
  var j=-1;
  var sum=0;
  for(var p=n-1;p>=0;p--){
       sum=sum+a[p];
	if(sum>(m*k)){
       j=p+1;
       break;
    }
	if(a[p]>k){
	 j=p+1;
	 break;
	}
  }
  if(j>=n){
  return 0;
  }
  var finish=false;
  while(!finish && j<n) {
    var end =j;
    var NumberOfPackages=m;
    while(NumberOfPackages!=0 && end<n){
       sum=0;
      for(var i=end;i<n;i++){
        sum=sum+a[i];
        end=i;
        if (sum>k) {
          NumberOfPackages--;
          break;
        } else if((sum<=k && i==(n-1)))
		{
		 NumberOfPackages--;
		 end=n;
		 break;
		}
      }
	  if((NumberOfPackages==0 && end<n) || NumberOfPackages<0){
	    j++;
		break;
	  }else if(end == n  && m>=0){
	     finish=true;
		 break;
	  }
    }
  }
  if(j<0){
   return 0;
  }
  return n-j;
}
document.write(printMinNumber(5,1,4,[4,2,3,4,1]));
