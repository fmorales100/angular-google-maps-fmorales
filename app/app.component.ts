import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // google maps zoom level
  zoom: number = 16;
  
  // initial center position for the map
  lat: number = 4.8084898;
  lng: number = -75.6851401;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 4.807979, 
		  lng: -75.681013,
		  label: 'A',
		  draggable: true,
      content: 'Your snazzy content.'
	  },
	  {
		  lat: 4.8088283,
		  lng: -75.682749,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 4.808064,
		  lng:  -75.686953,
		  label: 'C',
		  draggable: true
	  },
	  {
		  lat: 4.808375, 
		  lng: -75.689746,
		  label: 'D',
		  draggable: true
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
