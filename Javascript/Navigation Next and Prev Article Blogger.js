(function ($)
{
        var next = 'Next';
        var prev = 'Previous';
        var newerLink = $('a.blog-pager-newer-link');
        var olderLink = $('a.blog-pager-older-link');
        $.get(newerLink.attr('href'), function (data)
        {
                var thumb = $(data)
                        .find('.post-body')
                        .length == 1 ? "<div class='pagination-header'><div class='pagination-icon'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z'></path></svg></div><div class='pagination-title'>" + next + "</div></div><div class='pagination-content'>" : "";
                newerLink.html(thumb + '<span class="pagination-title">' + $(data)
                        .find('.post-title')
                        .text() + '</span></div>')
        }, "html");
        $.get(olderLink.attr('href'), function (data2)
        {
                var thumb2 = $(data2)
                        .find('.post-body')
                        .length == 1 ? "<div class='pagination-header'><div class='pagination-title'>" + prev + "</div><div class='pagination-icon'><svg viewBox='0 0 24 24'><path fill='currentColor' d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z'></path></svg></div></div><div class='pagination-content'>" : "";
                olderLink.html(thumb2 + '<span class="pagination-title">' + $(data2)
                        .find('.post-title')
                        .text() + '</span></div>')
        }, "html")
})(jQuery);
