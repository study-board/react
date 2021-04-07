
const config = {

    defaultBgVideoURL: "https://www.youtube.com/watch?v=7KXGZAEWzn0?t=105",
    toastOptions: {
        position: "top-right",
        autoClose: 1000,
        newestOnTop: true
    },
    defaultCards: [

        // {
        //     title: "Default card example - code only", # This is the title of the card
        //     url: "assets/cards/doesnotexist.html", # URL relative to domain root
        //     permanent: false, # If the card is permanent (cannot be closed)
        //     width: "500px", # Width, CSS compatible
        //     height: "500px", # Height, CSS compatible
        //     showOnce: "default-card-code-example-showonce-123123" # This must be a unique value to the card. If it is changed, the card will be shown again.
        // },

        {
            title: "Guide card",
            url: "assets/cards/guide.html",
            permanent: false,
            width: "550px",
            height: "550px",
            showOnce: "guide-card-once-only-2427-04-21"
        }
    ],

    exampleCards: [

        {
            displayName: "YouTube video",
            src: "https://www.youtube.com/embed/2LqzF5WauAw",
            width: 560,
            height: 315
        },

        {
            displayName: "Spotify playlist",
            src: "https://open.spotify.com/embed/playlist/37i9dQZEVXbMDoHDwVN2tF",
            width: 300,
            height: 380
        },

        {
            displayName: "YouTube Music playlist",
            src: "https://youtube.com/embed/videoseries?list=PL4fGSI1pDJn6O1LS0XSdF3RyO0Rq_LDeI",
            width: 300,
            height: 300
        }

    ],

    cardTemplates: [
        {
            displayName: "YouTube video",
            parameters: [
                {
                    displayName: "Video ID",
                    slug: "id"
                }
            ],
            src: "https://youtube.com/embed/{{id}}"
        },

        {
            displayName: "Spotify playlist",
            parameters: [
                {
                    displayName: "Playlist ID",
                    slug: "id"
                }
            ],
            src: "https://open.spotify.com/embed/playlist/{{id}}"
        },

        {
            displayName: "YouTube playlist",
            parameters: [
                {
                    displayName: "Playlist ID",
                    slug: "id"
                }
            ],
            src: "https://youtube.com/embed/videoseries?list={{id}}"
        },

        {
            displayName: "YouTube music playlist - better player design",
            parameters: [
                {
                    displayName: "Playlist ID",
                    slug: "id"
                }
            ],
            src: "https://youtube.com/embed/videoseries?list={{id}}",
            width: 300,
            height: 300
        }

    ],

    newVideoSupportedSites: [

        {
            displayName: "YouTube",
            url: "https://youtube.com"
        },
        
        {
            displayName: "Vimeo",
            url: "https://vimeo.com/"
        },

        {
            displayName: "Twitch",
            url: "https://twitch.tv"
        },

        {
            displayName: "Wistia",
            url: "https://wistia.com/"
        },

        {
            displayName: "Raw video URLs",
            url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }

    ]

}

export default config