import { MilperMessage } from '../types/milper';

export const milperMessages: MilperMessage[] = [
  {
    id: '24-037',
    title: 'FY24 U.S. Army Sergeant First Class Selection Board',
    category: 'PROMOTIONS',
    publishDate: new Date('2024-01-15'),
    expirationDate: new Date('2025-01-15'),
    content: `SUBJECT: FY24 U.S. ARMY SERGEANT FIRST CLASS SELECTION BOARD

1. This message will expire 15 January 2025.

2. The FY24 Sergeant First Class (SFC) Selection Board will convene on 6 February 2024.

3. Basic eligibility requirements:
   a. Primary zone: 48 months TIS and 8 months TIG
   b. Secondary zone: 36 months TIS and 8 months TIG
   
4. Soldiers must meet height/weight standards and pass ACFT.

5. Complete eligibility requirements are listed in AR 600-8-19.`,
    keywords: ['promotion', 'sfc', 'e7', 'board', 'eligibility', 'primary zone', 'secondary zone'],
    summary: 'Announces the FY24 SFC Selection Board date and eligibility requirements.'
  },
  {
    id: '24-015',
    title: 'New Evaluation Report Forms Implementation',
    category: 'EVALUATIONS',
    publishDate: new Date('2024-01-05'),
    expirationDate: new Date('2025-01-05'),
    content: `SUBJECT: IMPLEMENTATION OF REVISED DA FORM 67-10 SERIES EVALUATION REPORTS

1. This message will expire 5 January 2025.

2. Effective 1 March 2024, all evaluations with thru dates of 1 March 2024 or later must use the new DA Form 67-10 series.

3. Access new forms through EES only. Legacy PDF forms will not be accepted.

4. Key changes include:
   a. Updated character attributes
   b. Revised rater responsibilities
   c. Modified senior rater profile requirements`,
    keywords: ['evaluation', 'ncoer', 'oer', 'da form 67-10', 'ees'],
    summary: 'Implements new evaluation report forms and procedures effective 1 March 2024.'
  },
  {
    id: '24-042',
    title: 'Assignment Opportunities for Cyber Branch Personnel',
    category: 'ASSIGNMENTS',
    publishDate: new Date('2024-02-01'),
    expirationDate: new Date('2024-03-15'),
    content: `SUBJECT: WORLDWIDE ASSIGNMENT OPPORTUNITIES FOR CYBER BRANCH (17 SERIES)

1. This message will expire 15 March 2024.

2. Critical assignment opportunities available for 17C/17E personnel.

3. Locations include:
   a. Fort Gordon, GA
   b. Fort Meade, MD
   c. Fort Carson, CO
   d. OCONUS locations available

4. Requirements:
   a. TS/SCI clearance
   b. Current certification requirements
   c. 24 months TOS minimum`,
    keywords: ['assignment', 'cyber', '17 series', 'worldwide', 'pcs'],
    summary: 'Announces worldwide assignment opportunities for Cyber Branch personnel.'
  },
  {
    id: '24-028',
    title: 'Advanced Civil Schooling Program Updates',
    category: 'SCHOOLS',
    publishDate: new Date('2024-01-20'),
    expirationDate: new Date('2024-04-20'),
    content: `SUBJECT: FY25 ADVANCED CIVIL SCHOOLING PROGRAM UPDATES

1. This message will expire 20 April 2024.

2. Application window: 1 March 2024 - 1 May 2024

3. Program updates:
   a. New academic disciplines added
   b. Revised selection criteria
   c. Updated service obligations

4. Eligible ranks: O-3 and O-4`,
    keywords: ['education', 'civilian education', 'advanced civil schooling', 'acs'],
    summary: 'Updates to the Advanced Civil Schooling Program for FY25.'
  },
  {
    id: '24-039',
    title: 'Selective Retention Bonus Program Changes',
    category: 'RETENTION',
    publishDate: new Date('2024-01-25'),
    expirationDate: new Date('2024-07-25'),
    content: `SUBJECT: FY24 SELECTIVE RETENTION BONUS PROGRAM CHANGES

1. This message will expire 25 July 2024.

2. Updated multipliers for the following MOSs:
   a. 25B: Tier 8
   b. 35N: Tier 9
   c. 68W: Tier 7

3. Minimum commitment: 36 months

4. Effective date: 1 March 2024`,
    keywords: ['bonus', 'srb', 'retention', 'reenlistment'],
    summary: 'Announces changes to the Selective Retention Bonus Program.'
  },
  {
    id: '24-022',
    title: 'Voluntary Early Separation Program',
    category: 'SEPARATIONS',
    publishDate: new Date('2024-01-10'),
    expirationDate: new Date('2024-07-10'),
    content: `SUBJECT: FY24 VOLUNTARY EARLY SEPARATION PROGRAM

1. This message will expire 10 July 2024.

2. Program open to soldiers with 15-19 years of service.

3. Application window: 1 March - 1 May 2024

4. Early retirement benefits apply.`,
    keywords: ['separation', 'early separation', 'retirement', 'voluntary'],
    summary: 'Details the FY24 Voluntary Early Separation Program requirements.'
  },
  {
    id: '24-033',
    title: 'Meritorious Service Medal Criteria Update',
    category: 'AWARDS',
    publishDate: new Date('2024-01-30'),
    expirationDate: new Date('2025-01-30'),
    content: `SUBJECT: UPDATED CRITERIA FOR MERITORIOUS SERVICE MEDAL

1. This message will expire 30 January 2025.

2. New criteria effective 1 April 2024.

3. Changes include:
   a. Revised time in position requirements
   b. Updated achievement standards
   c. Modified processing procedures`,
    keywords: ['awards', 'msm', 'meritorious service', 'decoration'],
    summary: 'Updates to the Meritorious Service Medal award criteria.'
  },
  {
    id: '24-019',
    title: 'Army Combat Fitness Test Updates',
    category: 'OTHER',
    publishDate: new Date('2024-01-08'),
    expirationDate: new Date('2024-04-08'),
    content: `SUBJECT: ARMY COMBAT FITNESS TEST IMPLEMENTATION UPDATES

1. This message will expire 8 April 2024.

2. New scoring tables effective 1 April 2024.

3. Changes to test administration procedures.

4. Updated alternate event criteria.`,
    keywords: ['acft', 'pt test', 'physical fitness', 'standards'],
    summary: 'Announces updates to ACFT implementation and scoring.'
  }
];

export const getRecentMessages = (): MilperMessage[] => {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
  return milperMessages
    .filter(msg => msg.publishDate >= thirtyDaysAgo)
    .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
};