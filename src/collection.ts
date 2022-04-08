export type TokenKind = undefined | "image" | "video";

export type Token = {
  src: string;
  title: string;
  description?: string;
  collection?: string;
  artist?: string;
  kind?: TokenKind;
};

export type Section = {
  title: string;
  description?: string;
  more?: string;
  tokens: Token[];
};

export const sections: Section[] = [
  {
    title: "SlimHoods",
    tokens: [],
  },
  {
    title: "The Florist's by unickate",
    description: `As unickate describes:\n\n> Welcome to my ⁕ Florist’s ⁕ where plants transcend time. Flowers on the blockchain are like diamonds — everlasting.`,
    more: `Owning the whole collection of 10 pieces unlocks a specially made 1/1:`,
    tokens: [
      {
        title: "Gerbera",
        src: "https://lh3.googleusercontent.com/SizaUlD6QkBwhFUXqS7BXoUiJ9VGtHFSzCZLHr9wQLn1p-1n_r8fidv5xNmGjvt4txgK7UPw4HzJZtHZdmultFaENgz5z9oYnXY-Lg=s0",
      },
      {
        title: "Carnation",
        src: "https://lh3.googleusercontent.com/CznFP4zrDH4zTVFy7vvAuizYlDJiHHCCITDYhTzdwGhPQxcSr5o7wW7YMZYYbAKARxbva0SAZnxdb5tJpTW0s79IZIrwZsx3LsYwjA=s0",
      },
      {
        title: "Chamomile",
        src: "https://lh3.googleusercontent.com/huZJSElo92_dkHRpTqIGE-SqC1f_7xqUVmns2Vsa92c1dlHg0zvXHzolQ9i5ncPU86ejI4Cuv194ryVJ9CfdVGqUi1TNIN1pTcGWGkI=s0",
      },
      {
        title: "Poppies",
        src: "https://lh3.googleusercontent.com/3uf-3Ip9NeKT9AP1Xv5ar_LBBndIq1jAiRXsLcVZssme7DL15jqOwsOPfvGikUSHbhD3XJWGAiFoM_7OVbnA_Vuf8ztViLw14IowbQ0=s0",
      },
      {
        title: "Viburnum",
        src: "https://lh3.googleusercontent.com/ddPQU1k6bMPSiZ1bEABqBTbcBBpr2C9Zi5IZ9yrEZEp2LyZpeYSjtjbTdSocYJ3i25UWqMakPB9tLIi3ze3P4n7W_anXYaI9aIdeew=s0",
      },
      {
        title: "Rose",
        src: "https://lh3.googleusercontent.com/qJWBNFfsOqG9fGcMBTuiXM6p6CiFESbSla562PDsjM-Ol063lK4-ICzFykNgnE4dr0RAzh1D7TSgGipN4dS6LwZ58qWTsYlO7sov=s0",
      },
      {
        title: "Tulips",
        src: "https://lh3.googleusercontent.com/fNGtWpwNWwkFYnkp1b8FaRNilFaUkUoiYZ1f3Xv2j0mJdsqpc9Vq_Xxw9ZkbFdIHjcYhHFr1VWCYxiM_L3qGHvNmiZXSHbJA2MxDCw=s0",
      },
      {
        title: "Cornflower",
        src: "https://lh3.googleusercontent.com/rsVVnqp3ms_iqv_TtIAy1OrjY8Cm9a6iq2rxc2_vXShaekcIWONhdQdXVY_z--9X_8FSdDgroXTKDAb142f-WfKXaE5eYh7Dj0y-ZR4=s0",
      },
      {
        title: "Periwinkle",
        src: "https://lh3.googleusercontent.com/Tf_ZR6A5mKtV6EfH5BTfrhJ9xAqtE1bOf6sxlvPzKvu7EMsPnEHlJ-gwf-k2s1htiBTzKF9hckofYXRArBJPb0uYdd96pge4MGvUhA=s0",
      },
      {
        title: "Sunflower",
        src: "https://lh3.googleusercontent.com/g02TpqUXrHSuxMGcDXn6y51tNjyr_9y6nwmMfoX1QmC8X7XUiXwmgAM1ksBMKDlgcnLC7U-S2_9OblcO53b0Gv9VAL1-NIknx--qDA=s0",
      },
      {
        title: "Special",
        src: "https://lh3.googleusercontent.com/g02TpqUXrHSuxMGcDXn6y51tNjyr_9y6nwmMfoX1QmC8X7XUiXwmgAM1ksBMKDlgcnLC7U-S2_9OblcO53b0Gv9VAL1-NIknx--qDA=s0",
      },
    ],
  },
  {
    title: "Cranes (for special wallets)",
    description:
      "My own genesis collection and my first foray into the Ethereum blockchain.",
    tokens: [
      {
        src: "https://openseauserdata.com/files/e0fac45a361fd66e1fd6db423341a105.svg",
        title: "Crane #2021/877",
      },
      {
        src: "https://openseauserdata.com/files/4d576cb704c0f32a6787d58a191ea19e.svg",
        title: "Crane #2021/1",
      },
      {
        src: "https://openseauserdata.com/files/f8ff8860511f8724d513561d4ffaa2df.svg",
        title: "Crane #2021/3",
      },
      {
        src: "https://openseauserdata.com/files/8ee48fa840edd0bbefbcdb70d37d637a.svg",
        title: "Crane #2021/5",
      },
      {
        src: "https://openseauserdata.com/files/71364690e31812b8d2e4b72b2953c0dc.svg",
        title: "Crane #2021/115",
      },
      {
        src: "https://openseauserdata.com/files/2ca793ace21b09ab4edcd5e60aee64c5.svg",
        title: "Crane #2021/192",
      },
      {
        src: "https://openseauserdata.com/files/4a84dec7c6943f30bec335576e1f080a.svg",
        title: "Crane #2021/822",
      },
      {
        src: "https://openseauserdata.com/files/cdd3ade54042ada392efecd3aea14172.svg",
        title: "Cranes #2021/Special 1",
      },
      {
        src: "https://s3.brnbw.com/5492efea327988b1dec20f5117c9e692-1QyCjXtBVx9AGZPcLvqy4cH7HMtK6rW7jntD82yThfh8LtfgdXBrmKOMlulTBlxFuiKPfmKOdjd7Iqg3NRX6YdO9osfyBAK5j9CV.mp4",
        title: "Cranes #2021/Special 2",
        kind: "video",
      },
      {
        src: "https://lh3.googleusercontent.com/sczQe__ROL9wb6B2WS1Tf-ghFDVd-6j4o1uozNvWQlcfneASv8_0QioDu9cDCYi6rYbsuRRlsHJj3whqJ5KZnZZM_8QHBTF3tNFQrA=s0",
        title: "Cranes #2021/Special 3",
      },
    ],
  },
  {
    title: "Animated 1/1s",
    description: `Animation feels like it's truly native to the digital art world.`,
    tokens: [
      {
        title: "Uppers and Downers",
        collection: "Meds",
        artist: "Cemhah",
        src: "https://lh3.googleusercontent.com/SinF0l4mwdlAiuhTyrk4d4okAcK6HMOi5h7xhmK8RwnUwiGRtAO78FEd6T-38HM9Wwsq64vpuEtWcpvOYlRnsIwBQXxUxdmKMOxZUg=s0",
      },
      {
        title: "Sylvia #01",
        collection: "Portraits of Mysteries",
        artist: "Naime",
        src: "https://openseauserdata.com/files/2d20211027d38088e0eb774ac36c556a.mp4",
      },
      {
        title: "Warm Bath",
        collection: "The Ladies",
        artist: "Lisaodt",
        src: "https://lh3.googleusercontent.com/gattxLs7oNd0GvUh_4Yt9SmD44kL3--MRN9Yq8_U5cCH_Xxxj781r9cYdDy5HT-a4LtW6U8M8rpUANz2aJZBMM7N4K8xcQbHYQeTMg=s0",
      },
      {
        title: "Projected reality",
        collection: "The Prisms",
        artist: "Ty Dale",
        src: "https://openseauserdata.com/files/5d2b6e23403bf2aec36281b92ce39c62.mp4",
        kind: "video",
      },
    ],
  },
  {
    title: "Jake Farmer",
    description:
      "Jake does incredible work with neon like aesthetics, using shapes from letters and text",
    tokens: [
      {
        title: "< LOADING_02 >",
        collection: "LOADING",
        artist: "Jake Farmer",
        src: "https://assets.objkt.media/file/assets-003/QmYiNnRnW1WoEow9JNAoYoUW8AfyTgxFfJtyC5AMwuT4vs/artifact",
        kind: "video",
      },
      {
        title: "< LOADING_03 >",
        collection: "LOADING",
        artist: "Jake Farmer",
        src: "https://assets.objkt.media/file/assets-003/QmV8yP5ZAgDqtrcoF9wzVtQsFXGxZ1eMVTHwyNGwpqF8eh/artifact",
        kind: "video",
      },
      {
        title: "Sonic Waves",
        description: "A hypnotic state of mind",
        artist: "Jake Farmer",
        src: "https://openseauserdata.com/files/3bcb9e561a10f047cd59332de23aec55.mp4#t=0.001",
        kind: "video",
      },
      {
        title: 'EGO #44 "DISRUPTER"',
        collection: "EGOs NFT",
        artist: "Jake Farmer",
        src: "https://openseauserdata.com/files/5769ee2bed8756c5a4a1b85008154271.mp4#t=0.001",
        kind: "video",
      },
    ],
  },
];

