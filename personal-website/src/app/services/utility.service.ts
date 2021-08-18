import { Injectable } from '@angular/core';
import { PopupData } from '../components/home/popup/popup.component';
import { WorkPopupData } from '../components/home/work-pop-up/work-pop-up.component';

@Injectable({
  providedIn: 'root'
})

export class UtilityService {

  constructor() { }

  getCompanyImgURL(type: string) {
    if (type === 'sugon') {
      return 'assets/img/sugon.jpeg';
    } else if (type === 'scotiabank') {
      return 'assets/img/Scotiabank.jpeg';
    } else if (type === 'rbc') {
      return 'assets/img/rbc.jpeg';
    } else if (type === 'pkelmer') {
      return 'assets/img/PerkinElmer.jpeg';
    }
  }

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

  getAlgolist() {
    return [
      {
        title: '2 Sum & 3 Sum Problem',
        intro: 'You are given an array of n integers and a number k. Determine whether ' +
          'there is a pair of elements in the array that sums to exactly k.',
        url: 'assets/files/2sum.pdf'
      },
      {
        title: 'Bentley\' s Problem',
        intro: 'Given A[1..n] find the maximum sum for the subarray or return 0 if all elements of the array are negative.',
        url: 'assets/files/Bentley.pdf'
      },
      {
        title: 'Divide and Conquer',
        intro: 'A divide-and-conquer algorithm works by recursively breaking down a problem into two' +
          'or more sub-problems of the same or related type, until these become simple enough to be solved directly.',
        url: 'assets/files/divide-and-conque.pdf'
      },
      {
        title: 'Master Method',
        intro: 'A method to resolve efficiency computation.',
        url: 'assets/files/Master_Method.pdf'
      },
      {
        title: 'Greedy Algorithm',
        intro: 'A greedy algorithm is any algorithm that follows the problem-solving heuristic of making the locally optimal ' +
          'choice at each stage with the intent of finding a global optimum.',
        url: 'assets/files/greedy.pdf'
      },
      {
        title: 'Intractability and Undecidability',
        intro: 'Explain basic concepts about p, np, npc and np-hard problems.',
        url: 'assets/files/np.pdf'
      }
    ];
  }

  getPersonnelList() {
    return [
      {
        title: 'Job Performance',
        intro: 'Introduce the definition of job performance. It mainly emphasizes the job performance is not the result or ' +
          'outcome but the behaviour of employers ',
        url: 'assets/files/job_performance.pdf'
      },
      {
        title: 'Predictor',
        intro: 'Introduce the predictor of job performance. It mainly emphasizes the how predictors ' +
          'constructed for different types of positions.',
        url: 'assets/files/predictor.pdf'
      },
      {
        title: 'Prediction Methods',
        intro: 'Introduce different prediction methods. It mainly introduce the pros and cons for different prediction methods.',
        url: 'assets/files/predictor_methods.pdf'
      },
      {
        title: 'Validity',
        intro: 'Introduce the validity of each predictor. It mainly emphasizes the importance of validity in different predictors.',
        url: 'assets/files/validity.pdf'
      },
      {
        title: 'Performance Appraisal and Job Analysis',
        intro: 'Introduce the Performance Appraisal and Job Analysis. It mainly focus on analysis different types of job and creating ' +
        'a "marking scheme" for each individual job. It also introduces the measurements error during the job analysis ' +
          'and how to cope with those.' ,
        url: 'assets/files/performance_appraisal.pdf'
      },
      {
        title: 'Job Recruitment',
        intro: 'Introduce the Job Recruitment. It mainly focus on different methods of recruitment, structured interview, for example. ' +
          'It also compares the pros and cons for different methods. ',
        url: 'assets/files/job_performance.pdf'
      },
      {
        title: 'Decision Making for Recruitment',
        intro: 'Introduce the after recruitment, how the decision has been made for the different positions.',
        url: 'assets/files/selection_decision_making.pdf'
      },
      {
        title: 'Training after recruitment',
        intro: 'Introduce different training methods to help new comers to get on board easily.',
        url: 'assets/files/job_performance.pdf'
      },
    ];
  }

  getWorkData(company: string): WorkPopupData {
    if (company === 'perkin') {
      return {
        name: 'Machine Learning Engineer Intern',
        duration: 'September 2021 -- December 2021',
        location: 'Waterloo, Ontario, Canada',
        jobResponsibility: [
          'N/A'
        ],
        companyURL: 'https://www.perkinelmer.com/'
      };
    } else if (company === 'sugon') {
      return {
        name: 'Machine Learning Engineer Intern',
        duration: 'January 2021 -- April 2021',
        location: 'QingDao, ShanDong, China',
        jobResponsibility: [
          '- Led DNA storage project, coin detection project, and 2D image reconstruction project',
          '- Implemented and refined neural networks (written by Pytorch). Used CUDA and GPU for training acceleration',
          '- Applied GAN and Autoencoder for DNA encoder project. The well-trained model is able to generate DNA sequences with 98% ' +
          'accuracy and reconstructed images with loss of less than 5%',
          '- Applied OpenCV for coin detection project. Applied ODM for 2D image reconstruction',
          '- Used Docker and conda for different environment settings'
        ],
        companyURL: 'https://www.sugon.com/en'
      };
    } else if (company === 'scotia') {
      return {
        name: 'Software Developer Intern + Innovation Engineer Intern',
        duration: 'September 2020 -- December 2020 + September 2019 -- April 2020',
        location: 'Waterloo, Ontario, Canada',
        jobResponsibility: [
          'Software Developer:',
          '- Worked with senior production team to provide customer production level application',
          '- Applied JWE and AES encryption algorithm to encrypted incoming data; Implemented JWT for digital signature ' +
          'and verification by using Node.js/express.js',
          '- Led, designed and implemented frontend layout using ReactJS',
          '- Successfully resolved Cycle Dependency issues; Managed to finish address auto complete task by ' +
          'using Google Maps API in React side',
          '- Maintained test coverage by using Jest and Chai',
          ' ',
          ' ',
          'Innovation Developer:',
          '- Implemented and developed internal platforms for Scotiabank Capital Markets',
          '- Developed web application by using Angular and Django REST framework',
          '- Created Front-End components and Back-End endpoints. Reorganized and designed Data structure for projects',
          '- Applied service for data binding/transfer. Managed state changes by using Redux',
          '- Successfully connected to various endpoints by using Django model to overcome proxy issues'
        ],
        companyURL: 'https://www.scotiabank.com/ca/en/about.html'
      };
    } else if (company === 'rbc') {
      return {
        name: 'Technical Systems Analyst Intern',
        duration: 'September 2018 -- December 2019',
        location: 'Toronto, Ontario, Canada',
        jobResponsibility: [
          '- Worked as test automation engineer in Royal Bank of Canada',
          '- Developed and designed automation testing framework by using Selenium (Java based) and Cucumber',
          '- Increasing automation testing speed by 17%, improved automation testing framework accuracy'
        ],
        companyURL: 'https://www.rbcroyalbank.com/'
      };
    }
  }
}
