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
      <img src="${this.BASEURL}resources/images/tekfen-background.jpg" />
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
          <img src="${this.BASEURL}resources/images/music/music_1.lcr" width="250" height="250" />
          <title class="showTextOnHighlight">Title 1</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/music/music_2.lcr" width="250" height="250" />
          <title class="showTextOnHighlight">Title 2</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/music/music_3.lcr" width="250" height="250" />
          <title class="showTextOnHighlight">Title 3</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/music/music_4.lcr" width="250" height="250" />
          <title class="showTextOnHighlight">Title 4</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/music/music_5.lcr" width="250" height="250" />
          <title class="showTextOnHighlight">Title 5</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/music/music_6.lcr" width="250" height="250" />
          <title class="showTextOnHighlight">Title 6</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/music/music_7.lcr" width="250" height="250" />
          <title class="showTextOnHighlight">Title 7</title>
        </lockup>
      </section>
    </shelf>
  </productBundleTemplate>
</document>`
}
