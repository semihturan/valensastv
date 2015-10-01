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
        <title>Tekfen Construction - Human Resources Department</title>
        <subtitle>iOS & Android Client App and Admin Portal</subtitle>
        <description allowsZooming="true" template="templates/AlertWithDescription.xml" presentation="modalDialogPresenter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</description>
      </stack>
    </banner>
    <shelf>
      <header>
        <title>Shelf Header</title>
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
          <title class="showTextOnHighlight">Events</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/arter/6_4.png" width="375" height="667" />
          <title class="showTextOnHighlight">Works/title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/arter/6_5.png" width="375" height="667" />
          <title class="showTextOnHighlight">Publications</title>
        </lockup>
      </section>
    </shelf>
  </productBundleTemplate>
</document>`
}
