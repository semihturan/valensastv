/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A stack template shows stacked rows of items beneath a banner, such as movies, TV shows, or products. The user can navigate through the rows and products to focus on one.

This version of the stack template uses the dark theme to automatically adjust text color to display properly on a dark background. It also uses an alternate version of the banner element to display a large background image at the top of the page with actionable buttons.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
      .darkBackgroundColor {
        background-color: #153795;
      }
    </style>
  </head>
  <stackTemplate theme="dark" class="darkBackgroundColor">
    <identityBanner>
      <background>
        <img src="${this.BASEURL}resources/images/banner.png" width="1920" height="360" />
      </background>
    </identityBanner>
    <collectionList>
      <shelf>
        <header>
          <title>Client Projects</title>
        </header>
        <section>
          <lockup>
            <img src="${this.BASEURL}resources/images/tekfen.lcr" width="308" height="308" />
            <title>Tekfen IK</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/arter.png" width="308" height="308" />
            <title>Arter</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/roche.lcr" width="308" height="308" />
            <title>Roche Symphony</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/akbank.png" width="308" height="308" />
            <title>Akbank</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/yemeksepeti.jpeg" width="308" height="308" />
            <title>Yemeksepeti</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/skylibrary.jpg" width="308" height="308" />
            <title>Sky Library</title>
          </lockup>
        </section>
      </shelf>
      <shelf>
        <header>
          <title>Internal Projects</title>
        </header>
        <section>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_1_square.jpg" width="308" height="308" />
            <title>Title 1</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_2_square.jpg" width="308" height="308" />
            <title>Title 2</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_3_square.jpg" width="308" height="308" />
            <title>Title 3</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_4_square.jpg" width="308" height="308" />
            <title>Title 4</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_5_square.jpg" width="308" height="308" />
            <title>Title 5</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_6_square.jpg" width="308" height="308" />
            <title>Title 6</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_7_square.jpg" width="308" height="308" />
            <title>Title 7</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_8_square.jpg" width="308" height="308" />
            <title>Title 8</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_9_square.jpg" width="308" height="308" />
            <title>Title 9</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_10_square.jpg" width="308" height="308" />
            <title>Title 10</title>
          </lockup>
        </section>
      </shelf>
    </collectionList>
  </stackTemplate>
</document>`
}
