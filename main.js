javascript:
(
	function(j,f,dom)
	{

		j=['level.js',
		   'cal.js',
		   'body.js'];
		dom='https://ymleung45.github.io/maimaiTesting/';
		console.log "Server started and collections cleared.";
		f=function(s,u)
		{
			if(j.length==0)
			{
				return;
			}
			u=dom+j.shift()+'?'+Date.now();
			s=document.createElement('script');
			document.body.appendChild(s);
			s.charset='UTF-8';
			s.addEventListener('load',f);
			s.src=u;
		};
		(document.readyState=='loading')?document.addEventListener('DOMContentLoaded',f):f();
	}
)();
