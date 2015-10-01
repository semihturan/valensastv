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
      .bluecolor {
        color: #135795;
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
            <title class="bluecolor">Tekfen IK</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/arter.png" width="308" height="308" />
            <title class="bluecolor">Arter</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/roche.lcr" width="308" height="308" />
            <title class="bluecolor">Roche Symphony</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/akbank.png" width="308" height="308" />
            <title class="bluecolor">Akbank</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/yemeksepeti.jpeg" width="308" height="308" />
            <title class="bluecolor">Yemeksepeti</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/skylibrary.jpg" width="308" height="308" />
            <title class="bluecolor">Sky Library</title>
          </lockup>
        </section>
      </shelf>
      <shelf>
        <header>
          <title>Internal Projects</title>
        </header>
        <section>
          <lockup>
            <img src="${this.BASEURL}resources/images/hangikopru.png" width="308" height="308" />
            <title>Hangi Köprü</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/veacon.jpeg" width="308" height="308" />
            <title>Veacon</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/vdp.png" width="308" height="308" />
            <title>VDP</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/workbuk.png" width="308" height="308" />
            <title>Workbuk</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/namaz.jpg" width="308" height="308" />
            <title>Namaz Vakitleri</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_6_square.jpg" width="308" height="308" />
            <title>Telaki</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/sozluk.jpg" width="308" height="308" />
            <title>Sozluk</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/pisti.jpg" width="308" height="308" />
            <title>Pisti</title>
          </lockup>
        </section>
      </shelf>
    </collectionList>
  </stackTemplate>
</document>`
}
