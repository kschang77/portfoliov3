# Welcome to KChang_Porfolio_V3 👋
![Version](https://img.shields.io/badge/version-0.9.0-blue.svg?cacheSeconds=2592000)

> A react.js portfoli demo and sort of a resume fior Kasey Chang. This one is designed from scratch as a React.js demo. 



### 🏠 [Homepage](https://github.com/kschang77/portfoliov3)

### ✨ [Demo](https://kschang77.github.io/portfoliov3)

## Features

Picture panning based on external links (click on any of the five links available with green background. )

Clicking on any of the five custom markers on the picture(map) also pans the picture(map) to center on that marker. 

All five links brings up a modal dialog box showing the same details, either way you open them.

The details are verbiage contained in a json file and can be easily edited without affecting code. 

The details are HTML fragments and rendered properly in the modal dialog boxes. 

Some CSS effects (to be optimized)


### Interesting code bits

Learning to use the React-Leaflet module as well as React-Bootstrap and much more, and all at the same time, was a TOTAL PITA. Eventually the state problem sorted itself out, with Kerwin's help. Rewriting the sample app which uses a functional component into a class component was definitely a learning process, as is using React-leaflet, which is NOT a direct analog to the regular Leaflet.js library. Fortunately, the original design did keep the states in the right places, and when the ref's are sorted, the program started working. Clicking the link resulted in panned map AND modal dialog bx. Then it's a matter of passing the right handler so the reverse, click on the marker, which already pans the map, to also bring up the modal dialog box, by making the same state calls. 

The map (i.e. the brain) itself and the markers are surprisingly simple. It's the coordinating with the rest of the app that was difficult. 

There are centerMapView and centerMapView2 as they serve different purposes:

```
centerMapView(e) {
    let { leafletElement } = this.mapRef.current;
    if (e) {
      leafletElement.setView(e.latlng, 4);
      this.props.handleClick2(e.latlng.alt)
    }
  }

  centerMapView2(id) {
    let { leafletElement } = this.mapRef.current;
    var curPos = brainLocations[id]
    leafletElement.setView(curPos, 4);
  }
```

centerMapView came first, as it was sample code I copied from an app that centers on a marker, by passing the marker's coordinates. Originally it has a zoom-in / zoom-out effect, but it became too distracting, so it was changed to a simple panTo effect. 

centerMapView2 is the one called from App.js. It gets the "id" from the call, retrieves the coordinates from the array I used to initialize the five markers' coordinates, and pans the map to that as the center. 

Its counterparts are the click-handlers in the App.js. Difference here is actually minimal. handleClick has two jobs: change to state to trigger SweetAlert (the modal dialog box), and too call the centerMapView2 with the right index so it can panTo that location.  handleClick2 does even less: its ONLY job was to change to state to trigger the modal SweetAlert. 

```
  handleClick = id => {
    let sk = skilltexts.find(skilltext => skilltext.id === id)
    this.setState({
      alert: this.getSkillNotes(sk.skill, sk.notes),
    })
    this.map2Element.current.centerMapView2(id - 1)
  };

  handleClick2 = id => {
    let sk = skilltexts.find(skilltext => skilltext.id === id)
    this.setState({
      alert: this.getSkillNotes(sk.skill, sk.notes),
    })
  };
```
I did consider making a single function do both, but in the end, I decided to write two functions as their usage is quite different. handleClick2 was only ever called as a prop passed to Testmap3 (yes, there were a Testmap and Testmap2 also), and handleClick was only ever called by App.js itself. In this case, I see no need to even attempt to combine the two. 

## Author

👤 **Kasey Chang**

* Website: https://www.linkedin.com/in/kasey-chang-0932b332/
* Github: [@kschang77](https://github.com/kschang77)

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_