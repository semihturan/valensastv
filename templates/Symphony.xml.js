/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A product bundle template promotes a series of related TV shows, movies, or other products. It typically includes an image, background, and descriptive information. A shelf below the content displays the products contained by the bundle, such as the episodes of a TV season. The user can scroll down to bring up more information, such as cast and crew listings, ratings, or reviews.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
    .showTextOnHighlight {
      tv-text-highlight-style: show-on-highlight;
    }
    .whiteButton {
      tv-tint-color: rgb(255, 255, 255);
    }
    .shelfLayout {
      padding: 40 90;
    }
    .justified {
      text-align: justified;
    }
    </style>
  </head>
  <productBundleTemplate>
    <background>
      <img class="imageWithGradient" src="${this.BASEURL}resources/images/roche/roche-background.jpg" />
    </background>
    <banner>
      <stack>
        <title>Roche DIA Symphony</title>
        <subtitle>iOS Client App</subtitle>
        <description class="justified" allowsZooming="true">In 2015, Valensas Technology has developed Roche DIA Symphony application for Roche DIA. The application gives information about RACI categories of DIA division. Moreover, the app pro- vides a Learning Map, Frequently Asked Questions, a Glossary, documents of Divisional Stan- dards. Application is optimized for iOS 8, and iPhone 6 and 6 Plus. iOS 7 and older devices (iPhone 4 and higher, and iPad 2 and higher) are also supported. Since DIA Symphony application is similar to the previously built Pharma Symphony app, it was developed for testing in just under two weeks.</description>
        <row>
          <buttonLockup>
            <badge src="resource://button-rate" class="whiteButton" />
            <title>Rate</title>
          </buttonLockup>
        </row>
      </stack>
    </banner>
    <shelf class="shelfLayout">
      <header>
        <title>Screenshots</title>
      </header>
      <section>
        <lockup>
          <img src="${this.BASEURL}resources/images/roche/6_1.png" width="375" height="667" />
          <title class="showTextOnHighlight">Welcome</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/roche/6_2.png" width="375" height="667" />
          <title class="showTextOnHighlight">Menu</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/roche/6_3.png" width="375" height="667" />
          <title class="showTextOnHighlight">RACI</title>
        </lockup>
      </section>
    </shelf>
  </productBundleTemplate>
</document>`
}
