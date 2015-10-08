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
    </style>
  </head>
  <productBundleTemplate>
    <background>
      <img src="${this.BASEURL}resources/images/arter-background.jpg" />
    </background>
    <banner>
      <stack>
        <title>Arter - Space For Art</title>
        <subtitle>iOS Client App and Admin Portal</subtitle>
        <description allowsZooming="true">With Arter app you can discover past exhibitions or explore the current ones, keep track of events such as artist talks, performances and exhibition tours or get acquainted with Arter publications. Designed to provide you with detailed information on exhibitions and activities at Arter, this app is currently available on your iPhone and iPad.</description>
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
          <img src="${this.BASEURL}resources/images/arter/6_1.png" width="375" height="667" />
          <title class="showTextOnHighlight">Exhibitions</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/arter/6_2.png" width="375" height="667" />
          <title class="showTextOnHighlight">Explore</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/arter/6_3.png" width="375" height="667" />
          <title class="showTextOnHighlight">Works</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/arter/6_4.png" width="375" height="667" />
          <title class="showTextOnHighlight">Publications</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/arter/6_1.png" width="375" height="667" />
          <title class="showTextOnHighlight">Events</title>
        </lockup>
      </section>
    </shelf>
  </productBundleTemplate>
</document>`
}
