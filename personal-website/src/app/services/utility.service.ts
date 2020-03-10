import { Injectable } from '@angular/core';
import {PopupData} from '../components/home/popup/popup.component';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  getSportsData(type: string): PopupData {
    if (type === 'bike') {
      return {
        name: 'Cycling',
        duration: '1-3 hours depends on weather condition',
        dangerousLevel: 'I would to say 8 (range from 0 to 10) depends on the road condition. ' +
          'I have experienced 2 car accidents and 4 flat tires so far.',
        preparation: 'helmet, sunglasses, front + back bicycle light, cycling gloves and cycling pants',
        speed: '20km/h ~ 50km/h',
        model: 'The model I have is Cervelo S2 (road bike). Depends on your need: comfort, safety or speed.'
      };
    } else if (type === 'swim') {
      return {
        name: 'Swimming',
        duration: '2 hours usually',
        dangerousLevel: 'I would to say 2 (range from 0 to 10). Indoor exercise and no physically collision.',
        preparation: 'swimming pants',
        speed: '2m/s',
        model: 'Love all four styles. Like Free Style best'
      };
    } else if (type === 'run') {
      return {
        name: 'Jogging',
        duration: '0.5 ~ 1 hour depends on weather and body condition. At least 5km for each time. ' +
          'So far for me the longest distance for one run has reached to 10km.',
        dangerousLevel: 'I would to say 2 (range from 0 to 10) depends on the weather condition. ' +
          'If running when it is raining, it is bad for your body. Long distance running might hurt your knees.',
        preparation: 'Nike Running shoes',
        speed: '5km/h ~ 10km/h',
        model: 'N/A'
      };
    } else if (type === 'snowboard') {
      return {
        name: 'Snowboard',
        duration: '1-2 hours depends on body condition',
        dangerousLevel: 'I would to say 8 (range from 0 to 10) depends on the fortune. ' +
          'Sometimes the snow is powder enough so that when I fail I do not get hurt, but sometimes it hurts really bad.',
        preparation: 'helmet, gloves, goggles, scarf and bravery',
        speed: '0km/h ~ 20km/h',
        model: 'Do not have any equipment yet. Not consider to get one in the future.'
      };
    } else if (type === 'ski') {
      return {
        name: 'Skiing',
        duration: '4-8 hours depends on weather condition',
        dangerousLevel: 'I would to say 8 (range from 0 to 10) depends on the snow condition. ' +
          'If I cannot control my ski, then it would be extremely dangerous. ' +
          'Practicing S turning currently, be able to reach to Blue lines',
        preparation: 'helmet, gloves, goggles, scarf and bravery',
        speed: '20km/h ~ 35km/h',
        model: 'Do not have any equipment yet. Considering to get some in the future'
      };
    } else {
      return {
        name: 'Badminton',
        duration: '1-3 hours depends on body condition',
        dangerousLevel: 'I would to say 5 (range from 0 to 10) depends on the body condition. ' +
          'Without proper warm-up, it is easy to hurt your knee',
        preparation: 'Badminton Racket, Badminton shoes',
        speed: 'N/A',
        model: 'N/A'
      };
    }
  }

}
