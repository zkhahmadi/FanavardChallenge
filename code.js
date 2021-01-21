function printj(n,m,k,a) {
  var j=-1;
  var step=j;
  for(var i=0;i<n;i++){
    var sum=0;
    for(var p=i;p<n;p++){
        sum=sum+a[p];
    }
    if(sum<=(m*k)){
       step=i;
       break;
    }
  }  
  var finish=false;
  while(!finish && step<n) {
    var end =step;
    var NumberOfPackages=m;
    while(NumberOfPackages!=0 && end<n){
      var sum=0;
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
	    step++;
		break;
	  }else if(end == n  && m>=0){
	     finish=true;
		 break;
	  }
    }
  }
  if(step<n){
  j=step;
  }
  return j;
}
document.write(printj(5,2,6,[4,6,7,2,5]));
