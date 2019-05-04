$("#get").click(function () {
   var ytl = $( "#youtubeLink" ).val();
   var yti = ytl.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
   $( "#msg" ).html( "<h1>YouTube Thumbnail</h1><div><div class='judul'>Low quality thumbnail</div><img src=\"http://i3.ytimg.com/vi/" + yti[1] + "/sddefault.jpg\" class=\"image\" /></div><div><div class='judul'>Medium quality thumbnail</div><img src=\"http://i3.ytimg.com/vi/" + yti[1] + "/mqdefault.jpg\" class=\"image\" /></div><div><div class='judul'>High quality thumbnail</div><img src=\"http://i3.ytimg.com/vi/" + yti[1] + "/hqdefault.jpg\" class=\"image\" /></div><div><div class='judul'>Maximum quality thumbnail</div><img src=\"http://i3.ytimg.com/vi/" + yti[1] + "/maxresdefault.jpg\" class=\"image\" /></div><div class='linkdownload'><h2>Image URL:</h2><div>Low quality thumbnail</div><input name=\"imageURL\" id=\"copyimageURL\" class=\"text\" size=\"70\" type=\"text\" value=\"http://i3.ytimg.com/vi/"+ yti[1] + "/sddefault.jpg\" onclick=\"this.select()\" readonly /><br /><div>Medium quality thumbnail</div><input name=\"imageURL\" id=\"copyimageURL\" class=\"text\" size=\"70\" type=\"text\" value=\"http://i3.ytimg.com/vi/"+ yti[1] + "/mqdefault.jpg\" onclick=\"this.select()\" readonly /><br /><div>High quality thumbnail</div><input name=\"imageURL\" id=\"copyimageURL\" class=\"text\" size=\"70\" type=\"text\" value=\"http://i3.ytimg.com/vi/"+ yti[1] + "/hqdefault.jpg\" onclick=\"this.select()\" readonly /><br /><div>Maximum quality thumbnail</div><input name=\"imageURL\" id=\"copyimageURL\" class=\"text\" size=\"70\" type=\"text\" value=\"http://i3.ytimg.com/vi/"+ yti[1] + "/maxresdefault.jpg\" onclick=\"this.select()\" readonly /><p class='caution-last'>Right/Ctrl Click the image to download.  Highlight the URL above and copy to your clipboard.</p></div>" );
   
});


$("#copyimageURL").click(function () {
   $(this).select();
});
