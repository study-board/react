
const config = {

    defaultBgVideoURL: "https://www.youtube.com/watch?v=0k23DVv_xsA",
    defaultCards: [
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
            src: "https://youtube.com/embed/videoseries?list=PL4fGSI1pDJn6puJdseH2Rt9sMvt9E2M4i",
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

    ]

}

export default config