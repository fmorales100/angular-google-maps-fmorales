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
      draggable: true,
      titulo:'',
      content:''
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 4.807979, 
		  lng: -75.681013,
		  label: '',
		  draggable: true,
      titulo: 'PARQUE LA REBECA',
      content:'http://primerolagente.com.co/parques/REBECA-min.jpg'
	  },
	  {
		  lat: 4.8088283,
		  lng: -75.682749,
		  label: '',
		  draggable: false,
      titulo: 'PARQUE POPULAR MODELO',
      content:'http://primerolagente.com.co/parques/MODELO-min.jpg'
	  },
	  {
		  lat: 4.808064,
		  lng:  -75.686953,
		  label: '',
		  draggable: true,
      titulo: 'PARQUE LA JULIA',
      content:'http://primerolagente.com.co/parques/LA-JULIA-min.jpg'
	  },
	  {
		  lat: 4.808375, 
		  lng: -75.689746,
		  label: '',
		  draggable: true,
      titulo: 'PARQUE PROMETEO',
      content:'http://primerolagente.com.co/parques/PROMETEO-min.jpg'
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
  titulo?: string;
  content?: string;
}
