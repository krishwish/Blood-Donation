#include <bits/stdc++.h>
using namespace std;
int main()
{
	int t;
	cin>>t;
	while(t--)
	{
		map<long long int,long long int> m;
		map<int, int>::iterator itr;
		long long int n,m,k,i,j,a,b;
		cin>>n>>m>>k;
		for(i=0;i<k;i++)
		{
			cin>>a>>b;
			m.insert(make_pair(a,b));
		}
		for (itr = m.begin(); itr != m.end(); ++itr) { 
        cout << '\t' << itr->first 
             << '\t' << itr->second << '\n'; 
    } 
	}
	
	
}