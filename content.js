(function (){
    // TODO: add page functions 
    
    // gets the thumbnail, title, and channel name of the video
    function getVideosFromPlaylist(
        // fetch the element called: ytd-two-column-browse-results-renderer
        // drill into the element to find #contents or .ytd-section-list-renderer
        // drill into the element to find .ytd-item-section-renderer
        // drill into the element to find .ytd-playlist-video-list-renderer
        let playlistContainer = document.querySelector("#contents.ytd-playlist-video-list-renderer");
        // create an object to hold the playlist videos
        let playlistVideos = {};
        // iterate over the .ytd-playlist-video-list-renderer
            /* THUMBNAIL*/

            // get the length of .ytd-playlist-video-list-renderer (contains total playlist videos)
            // drill into the element to find #container.ytd-playlist-video-list-renderer
            // drill into the element to find #thumbnail.ytd-thumbnail
            // drill into the element to find image tag

            /* METADATA */

                // TITLE

                    // drill into the element to find #meta.h3

                // CHANNEL NAME

                    // drill into the element to find #meta.#metadata#channel-name
            

    );

    function displayVideosInExtensionModal(); 
})();
