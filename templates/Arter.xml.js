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
        <description allowsZooming="true" template="templates/AlertWithDescription.xml" presentation="modalDialogPresenter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</description>
      </stack>
    </banner>
    <shelf>
      <header>
        <title>Screenshots</title>
      </header>
      <section>
        <lockup>
          <img src="${this.BASEURL}resources/images/arter/6_1.png" width="375" height="667" />
          <title class="showTextOnHighlight">Exhibitions</title>
          <overlay>
            <progressBar value="0.1" />
          </overlay>
          <relatedContent>
            <infoTable>
              <header>
                <title>Info Header 1</title>
              </header>
              <info>
                <header>
                  <title>Title 1</title>
                </header>
                <description allowsZooming="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/arter/6_2.png" width="375" height="667" />
          <title class="showTextOnHighlight">Explore</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Info Header 2</title>
              </header>
              <info>
                <header>
                  <title>Title 2</title>
                </header>
                <text>A line of text</text>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/arter/6_3.png" width="375" height="667" />
          <title class="showTextOnHighlight">Works</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Info Header 3</title>
              </header>
              <info>
                <header>
                  <title>Title 3</title>
                </header>
                <description allowsZooming="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/arter/6_4.png" width="375" height="667" />
          <title class="showTextOnHighlight">Publications</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Info Header 4</title>
              </header>
              <info>
                <header>
                  <title>Title 4</title>
                </header>
                <row>
                  <text>A line of text</text>
                </row>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/arter/6_1.png" width="375" height="667" />
          <title class="showTextOnHighlight">Events</title>
          <relatedContent>
            <infoTable>
              <header>
                <title>Info Header 5</title>
              </header>
              <info>
                <header>
                  <title>Title 5</title>
                </header>
                <description allowsZooming="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</description>
              </info>
            </infoTable>
          </relatedContent>
        </lockup>
      </section>
    </shelf>
  </productBundleTemplate>
</document>`
}
