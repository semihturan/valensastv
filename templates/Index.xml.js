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
      .scrollTextOnHighlight {
        tv-text-highlight-style: marquee-on-highlight;
      }
      .radius {
        tv-img-treatment: corner-large;
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
          <lockup template="${this.BASEURL}templates/Tekfen.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
            <img class="radius" src="${this.BASEURL}resources/images/tekfen.lcr" width="308" height="308" />
            <title class="scrollTextOnHighlight">Tekfen IK</title>
          </lockup>
          <lockup template="${this.BASEURL}templates/Arter.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
            <img class="radius" src="${this.BASEURL}resources/images/arter.png" width="308" height="308" />
            <title class="scrollTextOnHighlight">Arter</title>
          </lockup>
          <lockup template="${this.BASEURL}templates/Symphony.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
            <img class="radius" src="${this.BASEURL}resources/images/roche.png" width="308" height="308" />
            <title class="scrollTextOnHighlight">Roche DIA Symphony</title>
          </lockup>
          <lockup>
            <img class="radius" src="${this.BASEURL}resources/images/akbank.png" width="308" height="308" />
            <title class="scrollTextOnHighlight">Akbank</title>
          </lockup>
          <lockup>
            <img class="radius" src="${this.BASEURL}resources/images/yemeksepeti.jpeg" width="308" height="308" />
            <title class="scrollTextOnHighlight">Yemeksepeti</title>
          </lockup>
          <lockup>
            <img class="radius" src="${this.BASEURL}resources/images/skylibrary.jpg" width="308" height="308" />
            <title class="scrollTextOnHighlight">Turkish Airlines - Sky Library</title>
          </lockup>
        </section>
      </shelf>
      <shelf>
        <header>
          <title>Internal Projects</title>
        </header>
        <section>
          <lockup>
            <img class="radius" src="${this.BASEURL}resources/images/hangikopru.png" width="308" height="308" />
            <title class="scrollTextOnHighlight">Hangi Köprü</title>
          </lockup>
          <lockup>
            <img class="radius" src="${this.BASEURL}resources/images/veacon.jpeg" width="308" height="308" />
            <title class="scrollTextOnHighlight">Veacon</title>
          </lockup>
          <lockup>
            <img class="radius" src="${this.BASEURL}resources/images/vdp.png" width="308" height="308" />
            <title class="scrollTextOnHighlight">VDP</title>
          </lockup>
          <lockup>
            <img class="radius" src="${this.BASEURL}resources/images/workbuk.png" width="308" height="308" />
            <title class="scrollTextOnHighlight">Workbuk</title>
          </lockup>
          <lockup>
            <img class="radius" src="${this.BASEURL}resources/images/namaz.jpg" width="308" height="308" />
            <title class="scrollTextOnHighlight">Namaz Vakitleri</title>
          </lockup>
          <lockup>
            <img class="radius" src="${this.BASEURL}resources/images/veacon.jpeg" width="308" height="308" />
            <title class="scrollTextOnHighlight">Telaki</title>
          </lockup>
          <lockup>
            <img class="radius" src="${this.BASEURL}resources/images/sozluk.jpg" width="308" height="308" />
            <title class="scrollTextOnHighlight">Sozluk</title>
          </lockup>
          <lockup>
            <img class="radius" src="${this.BASEURL}resources/images/pisti.jpg" width="308" height="308" />
            <title class="scrollTextOnHighlight">Pisti</title>
          </lockup>
        </section>
      </shelf>
    </collectionList>
  </stackTemplate>
</document>`
}
