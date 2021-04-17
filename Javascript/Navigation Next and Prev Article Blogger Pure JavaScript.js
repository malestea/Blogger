var next = 'Next';
var prev = 'Previous';
if (/.+\.html(\?m=1)?$/.test(location.href))
{
        var olderLink = document.getElementById('Blog1_blog-pager-older-link');
        if (olderLink)
        {
                getPageTitle(olderLink, setOlderPageTitle);
                
                function setOlderPageTitle(data)
                {
                        setPageTitle(data, olderLink, '')
                };
        }
        var newerLink = document.getElementById('Blog1_blog-pager-newer-link');
        if (newerLink)
        {
                getPageTitle(newerLink, setNewerPageTitle);
                
                function setNewerPageTitle(data)
                {
                        setPageTitle2(data, newerLink, '')
                };
        }
        
        function setPageTitle(data, pageLink, prefix, suffix)
        {
                if (data.feed.entry)
                {
                        if (data.feed.entry.length > 0)
                        {
                                var title = data.feed.entry[0].title.$t;
                        }
                }
                if (title)
                {
                        pageLink.innerHTML = "<div class='pagination-header'><div class='pagination-title'>" + next + "</div><div class='pagination-icon'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z'></path></svg></div></div><div class='pagination-content'><span class='pagination-title'>" + data.feed.entry[0].title.$t + "</span></div>";
                }
        }
        
        function setPageTitle2(data, pageLink, prefix, suffix)
        {
                if (data.feed.entry)
                {
                        if (data.feed.entry.length > 0)
                        {
                                var title = data.feed.entry[0].title.$t;
                        }
                }
                if (title)
                {
                        pageLink.innerHTML = "<div class='pagination-header'><div class='pagination-icon'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z'></path></svg></div><div class='pagination-title'>" + prev + "</div></div><div class='pagination-content'><span class='pagination-title'>" + data.feed.entry[0].title.$t + "</span></div>";
                }
        }
        
        function getPageTitle(pageLink, callback)
        {
                var pathname = pageLink.getAttribute('href')
                        .replace(location.protocol + '//' + location.hostname, '');
                var script = document.createElement('script');
                script.src = '/feeds/posts/summary?alt=json-in-script&max-results=1&redirect=false&path=' + pathname + '&callback=' + callback.name + '';
                document.body.appendChild(script);
        }
}
