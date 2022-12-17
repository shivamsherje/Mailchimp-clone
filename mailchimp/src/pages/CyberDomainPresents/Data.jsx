const presentsData = [
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/2evVcu4qtDXaJmJ4E1bfJG/2eca2dc4786a2dae32622c6f90d17591/Series_Portrait_1380x2130.png?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/4hVELmGm4bkoM9oXaamw1E/1f35d9d9e6e99a1ca9417d1c523a712e/Bjork_Logo_Black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2882/2882867.png",
    alt: "podcast"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/2rbArBgEUZzZqijPFCCiDc/9faf442c3d6eef0565c79c7e2f56244b/episode_portrait_image__1_.png?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/3vx37j6ZJHHDl3dUIX54sc/a53ffbfe8f313e51e09b7178a5b5fbb6/main_logo_black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2882/2882867.png",
    alt: "podcast"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/6RH5fqjRUdeqHu4TwqiQHv/fdb6ac6a9b82a4a1f45e2f1119398047/Partners-platform-Portrait-2.jpg?fm=jpg&fit=fill&w=1000",
    logo: "https://eep.io/images/3eti6ketg4ch/6eXcyONVsA479bQWTCvIzk/91b0b93f0dbc8612bb31df92393fb9ae/Partners-logo-black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2882/2882867.png",
    alt: "podcast"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/6E9ZIAMB7gltc6S61ZsfvV/e012c265ccf8721ab0b061ecb9034224/MCP_Going-Through-It_Home_Series-Portrait.jpg?fm=jpg&fit=fill&w=1000",
    logo: "https://eep.io/images/3eti6ketg4ch/2MRwzHaV8OvE260ssGWn3z/ef2b4f38d8b51f33dd016ecc540443c3/Going_Through_It_-_Black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2882/2882867.png",
    alt: "podcast"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/0n1EzgQzcx10vad7bCnHm/a9d2a9549b6500ec331e8f0d54186fb8/The_Jump_S3_-_Series_Portrait_Key_Art.png?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/5I7zv2pTj96zFqY1ZxMsYi/4105fbea830d4ecd5a0f08efa6b1ceb8/TheJumpLogo-Black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2882/2882867.png",
    alt: "podcast"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/5MUuAu83I37gzuqdKds4FW/20d02001c6ae6cca1d912bb29fbfc3b5/MCP_Call-Paul_Homepage_Episode-Portrait.jpg?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/44UZNQePPjQWCifZSLBUH3/0b6a81ec8c892a0b51a455ba98208618/MCP_Call-Paul_Final-Logo-Black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2882/2882867.png",
    alt: "podcast"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/q0uUlzR3DOwaVn0pfhcta/92dabb5dfe70d2866382d7cbb62e6f03/MCP_You_Are_What_You_Wear_TSO_Portrait.png?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/IVKwwkZN1jwNdZz643XeS/7096c5fbac329648425e9e6e1c29e560/MCP_You_Are_What_You_Wear_TSO_Logo.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/5wtDQSXhWhXrZlQjZdlJP6/d01e791309039defb11b17587d782a27/Indie_Game_-_Platform_Vertical.png?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/7hHQOIsrg9mGmGHeFBmtXK/1a07094e85f78e811dd9c4cc3aea6763/IGTM_Title.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/I3K6OVuoOFHdywKfFytAk/d18de9138acdcc1e789187252fd553aa/BJ-s_Mobile_Gift_Shop_Platform_Vertical_V2.png?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/eTq7PiGxbXaAnqqjdJONX/e76b526a354393445da2097790fb9c74/BMGS_Logo-Lockup-Black-01.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/6zL1GCX1Zus8OAsc6BAKmJ/c0a0f54fea29b5bed4835558ff4f218a/Memory_Video_-_Platform_Vertical_2.png?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/2LpOdBvNSQIMsiPJ1Jpdpu/a9045b3505e022c6df7c771daa15e028/MV_Logo.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/3tBJ4fWO3f2LErpztdVZDO/d63a599b040b6507d0c29173738ebe69/Quilt_Fever_-_Platform_Vertical.png?fm=jpg&fit=fill&w=1000",
    logo: "https://eep.io/images/3eti6ketg4ch/1eswVp0DeJILfDbvRUut5J/9b71ffe258c70950bb14452561589eda/TItle_QUILT_FEVER.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/1goOp968jIwpWZtDHQQEIU/2c4f4f96c28b15f57f685641442396aa/Stories_in_Place_Portrait_1380x2130_A.jpg?fm=jpg&fit=fill&w=1000",
    logo: "https://eep.io/images/3eti6ketg4ch/2xK7jzFgsyT29rrcqCf6mQ/0a08cce32baf74c7e62efeda5f337f3a/stories_in_place_1280x443_black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/15muh3JYiTgakwyPjLWlcX/74f7b45e98af5ce3501dbb9e6ff217a6/Series_Portrait.jpg?fm=jpg&fit=fill&w=1000",
    logo: "https://eep.io/images/3eti6ketg4ch/tJXVfVs6PlKEXIaFTV2pf/a15a337f0cf6299c12c30ec9d4cb504a/Deep-Futures_Logo_Black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2882/2882867.png",
    alt: "podcast"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/3IZOXouC1tw2VP4atRV9NN/a8cbbe268bfd4807edd4e3851e24a05c/MCH04_Kitchen_Table_Entrepreneur_Edit_v042.mp4.00_01_46_09.Still001__1_.jpg?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/3EOCEd3WJTtD3LUHJCdtfg/fac1c8bff9d67da5eaa239efed3b98d0/All-In-A-Days-Work_Vertical_Black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/58Hmy4f9b5ibPNCdRlFeQ4/2162601837794ef86f5acc3ebfd0b2dd/NoodleSchool_Portrait.jpg?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/4cp08ieZgAO4euxOBUvunI/6c9ebc27af12e2b736326fed501053fe/MCP-NoodleSchoolLogo-Black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/3L3JnTTnf7Tl7l4Lj9jbxM/c17bc37c143249bd4b88477707ba7006/SOAW_portrait.jpg?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/2IpcxJpBZEhGPimplN15F3/7cdaebc600e232a4b604be9e04aed959/SoundofaWokLogo-Black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/6OwUDJ1jB5Xc9rTu38Bo4t/3ea5c4db8713f1406f8db9c5fe4b4d7c/Second_Act-Vert.jpg?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/6DL5SNDlRss00jKVOwkIyP/5b68201ffe1a5b9b45dacd536b90b86f/Second_Act_Logo-_black__1_.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/2YPqVSC9RvrY5TTdWanRXW/c64440eeead4474b4c76ba3d9b37b6f1/VICE_PLUS_MES_EP1_FINAL_PRORES_v2.00_03_37_13.Still001.jpg?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/APr6brpHSUqPUNjBOj8Cr/a66ec255589be5ded73df4155e4e3f0d/Mailchimp-Essentials-Title-02.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/5dZuyYxSNbh6wZ15i5YXGT/441f5e3eccbf198229fd3c0581c60148/Werrrk-Portrait.jpg?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/6nHLo8d7UQPbr1Q9dcnezx/065232d5d0773791ab1e7ec0f1a4b32c/Werrrk_Logo_Black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/3usBRMwL5FDCCEcvDQ9dpq/829f0543b6af67e848caef5d09bce8cc/OuterMonologue-Portrait.jpg?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/40mVHNoOOUpD1Ukot9o0uh/5fb88c8477340b0ef4a60c36657d1642/OM_ReversedLogo-Black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/3rOOcU6WAq3mVjbKywk4kj/732e4272205d763ce8dedf23e6b79bd9/wf-portrait.jpg?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/4QAJ9eeJOAWKzDCo2j2UEP/b65756b3a8e49cf878506abe786e3f4e/WiFinders-Thickened.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/4fS4Wbxf1AUDDaCqRIhq0U/18638243456d029ff685c0fcfca6962d/99-Portrait.jpg?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/2w1rAJ3EVYbMWSIcIVP6my/a1fb9766ddb8c8862b051b8266912004/99_Problems_Logo-Black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/4OnrY3Elb4nOHlMrbqF616/cb080b9eae0177a9e7acdd8fe41bf783/hoahb-Portrait.jpg?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/3CsDpsxh85LXljf7XM26Fh/f5ae5231d93b7f85b208b76ad0f4559b/hoahb-Logo-Black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/4pqMlpG4NCeNUuWenQlQZR/6350325d45c666d01266cd255c40fe31/Emporium-Portrait.jpg?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/1CDYoRtQOIaHwxiB5U5fWd/19535a2e7a2da67422f10dd29401399c/Emporium_Logo_black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/Ds9DtOcNa1HYhNXv41CrT/b5b4ebb1b416b54e0cf4e78fa80454c4/Snare-Portrait.jpg?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/LwMwAhWsQkrvMYRjpna94/5fed3d1bdd0d2732ed8f1eecdde251eb/snare-Logo-Black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/1Z8R1Rbpls8avosazR6CUV/12fbd159c9f4f1607285f6cfe3b41acb/loab-Portrait-2.jpg?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/4pWInwHW9rYB0lpUhQYcfr/a07f361cf8fe3733a6d11fdb5fc7337a/loab-Logo-Black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2882/2882867.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/2bILylaYWJOlwNAVfc0bGG/f433f08a78267bf0c1d55542bf4bf086/aowip-Portrait.jpg?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/5qbFcBehmXHjsx9YFtKtLy/e4dfb630488a3c6e7c16d2265f084aed/aowip-logo-black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/3ppaFiElg8SGCzPLMR3m33/ec639eb40126fc0be6984b1fef2ec180/CC-Portrait.jpg?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/3dZ4ayoRXuEcuC9VAiRKZw/16a4e3a3bd38406a6a501490bfebb7a0/CC-Logo-Black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/6OotAeCCzx58O2amR3cAte/4e0c082cf9e59495f065294a4631a38e/mdk-show-portrait-new.jpg?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/6WUfyDyGF1UAmsqGNxTwFD/fb8e81dd14326a0a9680c947fea26497/mdk-logo-black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/40hGUw7ZGL8RvB0aRF0Wr4/531c5ea5396f374864708d7f7cb102d1/ts-portrait.jpg?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/ca5H9JWnQH2R9qBXb9zAT/1335d4e48afec960b97113b0cb438e83/ts-logo.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/3eXOqWGO2C6T56QOU4xBOV/0ae341ec6d7df95f620f741e54f1c3bb/73Cows-Portrait.jpg?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/6OolsQFuhhQC1mI4VaRbvD/a161a9bcacfd32168816116062e27cf6/73Cows-Logo-Black.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/6lTIClVUewOydBz5VhBngJ/3a68677397fb3859ff2362e9d89a04f3/ubl-portrait.jpg?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/8qRkAfX1IOagCfdAmQGoI/caac4f03e1ce204345bfa17a787b4ff4/UBL-Stack.png",
    tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
  {
    poster:
      "https://eep.io/images/3eti6ketg4ch/F5KVe9F1DrgZn309oDCQ0/26b9b44ef28493ce6a292ca4d9a25562/he-portrait.jpg?fm=jpg",
    logo: "https://eep.io/images/3eti6ketg4ch/7tgu7Ne8OlRNfvaLqQDKPV/9bd8846470dc7a79dbad590402b44bd2/HamburgerEyes-Stack.png",
      tag: "https://cdn-icons-png.flaticon.com/512/2162/2162905.png",
    alt: "movie"
  },
];

export default presentsData