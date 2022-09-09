// 'use strict';

// const {
//   db,
//   models: { User, JumpRecord, Load, Dropzone },
// } = require('../server/db');
// const JumpRecords = require('../server/db/models/JumpRecords');

// /* DUMMY JUMP RECORD DATA */
// const jumps = [
//    // User 1's jumps
//   {
//     jumpNumber: 1,
//     jumpDate: '2022-07-15',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description:
//       'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
//     jumpType: 'angle',
//   },
//   {
//     jumpNumber: 2,
//     jumpDate: '2022-07-15',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 3,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Back flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 4,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'great landing!',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 5,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 6,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 7,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 8,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 9,
//     jumpDate: '2022-07-23',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 10,
//     jumpDate: '2022-07-23',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 11,
//     jumpDate: '2022-07-15',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 2500,
//     freeFallTime: 66,
//     jumpers: 1,
//     description:
//       'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
//     jumpType: 'angle',
//   },
//   {
//     jumpNumber: 12,
//     jumpDate: '2022-07-15',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 13500,
//     pullAltitude: 5500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 13,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 5500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Back flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 14,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'great landing!',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 15,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 16,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 17,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 18,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'front float exit.',
//     jumpType: 'angle',
//   },
//   {
//     jumpNumber: 19,
//     jumpDate: '2022-07-23',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'rear float exit.',
//     jumpType: 'head down',
//   },
//   {
//     jumpNumber: 20,
//     jumpDate: '2022-07-23',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'back flip exit.',
//     jumpType: 'angle',
//   },
//   {
//     jumpNumber: 1,
//     jumpDate: '2022-07-15',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description:
//       'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
//     jumpType: 'angle',
//   },
//   {
//     jumpNumber: 2,
//     jumpDate: '2022-07-15',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 3,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Back flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 4,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'great landing!',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 5,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 6,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 7,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 8,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 9,
//     jumpDate: '2022-07-23',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 10,
//     jumpDate: '2022-07-23',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 11,
//     jumpDate: '2022-07-15',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 2500,
//     freeFallTime: 66,
//     jumpers: 1,
//     description:
//       'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
//     jumpType: 'angle',
//   },
//   {
//     jumpNumber: 12,
//     jumpDate: '2022-07-15',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 13500,
//     pullAltitude: 5500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 13,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 5500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Back flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 14,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'great landing!',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 15,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 16,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 17,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 18,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'front float exit.',
//     jumpType: 'angle',
//   },
//   {
//     jumpNumber: 19,
//     jumpDate: '2022-07-23',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'rear float exit.',
//     jumpType: 'head down',
//   },
//   {
//     jumpNumber: 20,
//     jumpDate: '2022-07-23',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'back flip exit.',
//     jumpType: 'angle',
//   },
//   {
//     jumpNumber: 1,
//     jumpDate: '2022-07-15',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description:
//       'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
//     jumpType: 'angle',
//   },
//   {
//     jumpNumber: 2,
//     jumpDate: '2022-07-15',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 3,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Back flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 4,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'great landing!',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 5,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 6,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 7,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 8,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 9,
//     jumpDate: '2022-07-23',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 10,
//     jumpDate: '2022-07-23',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 11,
//     jumpDate: '2022-07-15',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 2500,
//     freeFallTime: 66,
//     jumpers: 1,
//     description:
//       'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
//     jumpType: 'angle',
//   },
//   {
//     jumpNumber: 12,
//     jumpDate: '2022-07-15',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 13500,
//     pullAltitude: 5500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 13,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 5500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Back flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 14,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'great landing!',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 15,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 16,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 17,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 18,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'front float exit.',
//     jumpType: 'angle',
//   },
//   {
//     jumpNumber: 19,
//     jumpDate: '2022-07-23',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'rear float exit.',
//     jumpType: 'head down',
//   },
//   {
//     jumpNumber: 20,
//     jumpDate: '2022-07-23',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'back flip exit.',
//     jumpType: 'angle',
//   },
//   {
//     jumpNumber: 1,
//     jumpDate: '2022-07-15',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description:
//       'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
//     jumpType: 'angle',
//   },
//   {
//     jumpNumber: 2,
//     jumpDate: '2022-07-15',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 3,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Back flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 4,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'great landing!',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 5,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 6,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 7,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 8,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 9,
//     jumpDate: '2022-07-23',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 10,
//     jumpDate: '2022-07-23',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 11,
//     jumpDate: '2022-07-15',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 2500,
//     freeFallTime: 66,
//     jumpers: 1,
//     description:
//       'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
//     jumpType: 'angle',
//   },
//   {
//     jumpNumber: 12,
//     jumpDate: '2022-07-15',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 13500,
//     pullAltitude: 5500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 13,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 5500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Back flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 14,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'great landing!',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 15,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 16,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 17,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 18,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'front float exit.',
//     jumpType: 'angle',
//   },
//   {
//     jumpNumber: 19,
//     jumpDate: '2022-07-23',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'rear float exit.',
//     jumpType: 'head down',
//   },
//   {
//     jumpNumber: 20,
//     jumpDate: '2022-07-23',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'back flip exit.',
//     jumpType: 'angle',
//   },
//   {
//     jumpNumber: 1,
//     jumpDate: '2022-07-15',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description:
//       'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
//     jumpType: 'angle',
//   },
//   {
//     jumpNumber: 2,
//     jumpDate: '2022-07-15',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 3,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Back flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 4,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'great landing!',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 5,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 6,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 7,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 8,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 9,
//     jumpDate: '2022-07-23',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 10,
//     jumpDate: '2022-07-23',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 11,
//     jumpDate: '2022-07-15',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 2500,
//     freeFallTime: 66,
//     jumpers: 1,
//     description:
//       'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
//     jumpType: 'angle',
//   },
//   {
//     jumpNumber: 12,
//     jumpDate: '2022-07-15',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 13500,
//     pullAltitude: 5500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 13,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 5500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Back flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 14,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'great landing!',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 15,
//     jumpDate: '2022-07-20',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 13500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 16,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'Front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 17,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'front flip exit.',
//     jumpType: 'belly',
//   },
//   {
//     jumpNumber: 18,
//     jumpDate: '2022-07-21',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 15,
//     jumpers: 1,
//     description: 'front float exit.',
//     jumpType: 'angle',
//   },
//   {
//     jumpNumber: 19,
//     jumpDate: '2022-07-23',
//     aircraft: 'Kodiak',
//     equipment: 'Falcon 260',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'rear float exit.',
//     jumpType: 'head down',
//   },
//   {
//     jumpNumber: 20,
//     jumpDate: '2022-07-23',
//     aircraft: 'Kodiak',
//     equipment: 'PD 210',
//     exitAltitude: 5500,
//     pullAltitude: 3500,
//     freeFallTime: 60,
//     jumpers: 1,
//     description: 'back flip exit.',
//     jumpType: 'angle',
//   },
// ];

// // DUMMY DROP ZONE DATA
// const dropZones = [
//   {
//     name: 'Cleveland Skydiving Center',
//     address: '55 Grove St',
//     phoneNumber: '8004401234',
//   },
//   {
//     name: 'Skydive The Ranch',
//     address: '456 Manhattan rd',
//     phoneNumber: '8005551234',
//   },
//   {
//     name: 'Skydive San Diego',
//     address: '777 Sunset blvd',
//     phoneNumber: '8007771234',
//   },
//   {
//     name: 'Chicago Skydiving Center',
//     address: '789 Smollett rd',
//     phoneNumber: '8008881234',
//   },
//   {
//     name: 'Skydive Tecumseh',
//     address: '432 Dry Heat blvd',
//     phoneNumber: '8009991234',
//   },
// ];

// /**
//  * seed - this function clears the database, updates tables to
//  *      match the models, and populates the database.
//  */
// async function seed() {
//   await db.sync({ force: true }); // clears db and matches models to tables
//   console.log('db synced!');

//   // Creating Jump Records
//   await Promise.all(
//     jumps.map((jump) => {
//       return JumpRecords.create(jump);
//     }),
//     dropZones.map((dz) => {
//       return Dropzone.create(dz);
//     })
//   );

//   // CREATE DUMMY USER DATA
//   const admin = await User.create({
//     firstName: 'Admin',
//     lastName: 'Admin',
//     email: 'admin@gmail.com',
//     password: '123',
//     address: '1 Admin St',
//     phoneNumber: '8005451234',
//     licenseNumber: 105050,
//     isAdmin: true,
//     role: 'Admin',
//   });

//   const chris = await User.create({
//     firstName: 'Chris',
//     lastName: 'Tomshack',
//     email: 'chris@gmail.com',
//     password: '123',
//     address: '2 skydiving Blvd',
//     phoneNumber: '3307773562',
//     licenseNumber: 202020,
//     isAdmin: false,
//   });

//   const brian = await User.create({
//     firstName: 'Brian',
//     lastName: 'Lee',
//     email: 'brian@gmail.com',
//     password: '123',
//     address: '3 skydiving Blvd',
//     phoneNumber: '4405553562',
//     licenseNumber: 303030,
//     isAdmin: false,
//   });

//   const christopher = await User.create({
//     firstName: 'Christopher',
//     lastName: 'Ruiz',
//     email: 'christopher@gmail.com',
//     password: '123',
//     address: '4 skydiving Blvd',
//     phoneNumber: '5504443562',
//     licenseNumber: 404040,
//     isAdmin: false,
//   });

//   const cole = await User.create({
//     firstName: 'Cole',
//     lastName: 'Berman',
//     email: 'cole@gmail.com',
//     password: '123',
//     address: '4 skydiving Blvd',
//     phoneNumber: '7703333562',
//     licenseNumber: 505050,
//     isAdmin: false,
//   });

//   const sarah = await User.create({
//     firstName: 'Sarah',
//     lastName: 'Higgins',
//     email: 'sarah@gmail.com',
//     password: '123',
//     address: '5 skydiving Blvd',
//     phoneNumber: '7703333562',
//     licenseNumber: 505050,
//     isAdmin: false,
//   });

//   /////////////////// LOAD DUMMY DATA FOR ALL LOADS (DZ VIEW) ////////////////////

// /////////////////// CLEVELAND SKYDIVING CENTER DUMMY LOADS (DZ VIEW) ////////////////////

//   const load1 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Kodiak',
//     departureTime: '1:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load2 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Kodiak',
//     departureTime: '2:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load3 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Kodiak',
//     departureTime: '3:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const load4 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Kodiak',
//     departureTime: '4:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load5 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Kodiak',
//     departureTime: '5:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });

//   const load6 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Kodiak',
//     departureTime: '1:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load7 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Kodiak',
//     departureTime: '2:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load8 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Kodiak',
//     departureTime: '3:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const load9 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Kodiak',
//     departureTime: '4:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load10 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Kodiak',
//     departureTime: '5:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });

//   const load11 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Kodiak',
//     departureTime: '1:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load12 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Kodiak',
//     departureTime: '2:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load13 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Kodiak',
//     departureTime: '3:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const load14 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Kodiak',
//     departureTime: '4:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load15 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Kodiak',
//     departureTime: '5:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });

//   const load16 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Kodiak',
//     departureTime: '1:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load17 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Kodiak',
//     departureTime: '2:00pm',
//     slots: 11,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load18 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Kodiak',
//     departureTime: '3:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const load19 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Kodiak',
//     departureTime: '4:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load20 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Kodiak',
//     departureTime: '5:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });

//   const DZ1 = await Dropzone.findByPk(1);
//   await DZ1.addLoad(load1);
//   await DZ1.addLoad(load2);
//   await DZ1.addLoad(load3);
//   await DZ1.addLoad(load4);
//   await DZ1.addLoad(load5);
//   await DZ1.addLoad(load6);
//   await DZ1.addLoad(load7);
//   await DZ1.addLoad(load8);
//   await DZ1.addLoad(load9);
//   await DZ1.addLoad(load10);
//   await DZ1.addLoad(load11);
//   await DZ1.addLoad(load12);
//   await DZ1.addLoad(load13);
//   await DZ1.addLoad(load14);
//   await DZ1.addLoad(load15);
//   await DZ1.addLoad(load16);
//   await DZ1.addLoad(load17);
//   await DZ1.addLoad(load18);
//   await DZ1.addLoad(load19);
//   await DZ1.addLoad(load20);

//   /////////////////// SKYDIVE THE RANCH DUMMY LOADS (DZ VIEW) ////////////////////

//   const load21 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Caravan',
//     departureTime: '1:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load22 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Caravan',
//     departureTime: '2:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load23 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Caravan',
//     departureTime: '3:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const load24 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Caravan',
//     departureTime: '4:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load25 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Caravan',
//     departureTime: '5:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });

//   const load26 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Caravan',
//     departureTime: '1:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load27 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Caravan',
//     departureTime: '2:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load28 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Caravan',
//     departureTime: '3:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const load29 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Caravan',
//     departureTime: '4:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load30 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Caravan',
//     departureTime: '5:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });

//   const load31 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Caravan',
//     departureTime: '1:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load32 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Caravan',
//     departureTime: '2:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load33 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Caravan',
//     departureTime: '3:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const load34 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Caravan',
//     departureTime: '4:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load35 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Caravan',
//     departureTime: '5:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });

//   const load36 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Caravan',
//     departureTime: '1:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load37 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Caravan',
//     departureTime: '2:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load38 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Caravan',
//     departureTime: '3:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const load39 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Caravan',
//     departureTime: '4:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load40 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Caravan',
//     departureTime: '5:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });

//   const DZ2 = await Dropzone.findByPk(2);
//   await DZ2.addLoad(load21);
//   await DZ2.addLoad(load22);
//   await DZ2.addLoad(load23);
//   await DZ2.addLoad(load24);
//   await DZ2.addLoad(load25);
//   await DZ2.addLoad(load26);
//   await DZ2.addLoad(load27);
//   await DZ2.addLoad(load28);
//   await DZ2.addLoad(load29);
//   await DZ2.addLoad(load30);
//   await DZ2.addLoad(load31);
//   await DZ2.addLoad(load32);
//   await DZ2.addLoad(load33);
//   await DZ2.addLoad(load34);
//   await DZ2.addLoad(load35);
//   await DZ2.addLoad(load36);
//   await DZ2.addLoad(load37);
//   await DZ2.addLoad(load38);
//   await DZ2.addLoad(load39);
//   await DZ2.addLoad(load40);

//   /////////////////// SKYDIVE SAN DIEGO DUMMY LOADS (DZ VIEW) ////////////////////

//   const load41 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Kodiak',
//     departureTime: '1:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load42 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Kodiak',
//     departureTime: '2:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load43 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Kodiak',
//     departureTime: '3:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const load44 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Kodiak',
//     departureTime: '4:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load45 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Kodiak',
//     departureTime: '5:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });

//   const load46 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Kodiak',
//     departureTime: '1:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load47 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Kodiak',
//     departureTime: '2:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load48 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Kodiak',
//     departureTime: '3:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const load49 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Kodiak',
//     departureTime: '4:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load50 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Kodiak',
//     departureTime: '5:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });

//   const load51 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Kodiak',
//     departureTime: '1:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load52 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Kodiak',
//     departureTime: '2:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load53 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Kodiak',
//     departureTime: '3:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const load54 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Kodiak',
//     departureTime: '4:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load55 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Kodiak',
//     departureTime: '5:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });

//   const load56 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Kodiak',
//     departureTime: '1:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load57 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Kodiak',
//     departureTime: '2:00pm',
//     slots: 11,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load58 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Kodiak',
//     departureTime: '3:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const load59 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Kodiak',
//     departureTime: '4:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load60 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Kodiak',
//     departureTime: '5:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });

//   const DZ3 = await Dropzone.findByPk(3);
//   await DZ3.addLoad(load41);
//   await DZ3.addLoad(load42);
//   await DZ3.addLoad(load43);
//   await DZ3.addLoad(load44);
//   await DZ3.addLoad(load45);
//   await DZ3.addLoad(load46);
//   await DZ3.addLoad(load47);
//   await DZ3.addLoad(load48);
//   await DZ3.addLoad(load49);
//   await DZ3.addLoad(load50);
//   await DZ3.addLoad(load51);
//   await DZ3.addLoad(load52);
//   await DZ3.addLoad(load53);
//   await DZ3.addLoad(load54);
//   await DZ3.addLoad(load55);
//   await DZ3.addLoad(load56);
//   await DZ3.addLoad(load57);
//   await DZ3.addLoad(load58);
//   await DZ3.addLoad(load59);
//   await DZ3.addLoad(load60);

//   /////////////////// CHICAGO SKYDIVING CENTER DUMMY LOADS (DZ VIEW) ////////////////////

//   const load61 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Kodiak',
//     departureTime: '1:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load62 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Kodiak',
//     departureTime: '2:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load63 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Kodiak',
//     departureTime: '3:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const load64 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Kodiak',
//     departureTime: '4:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load65 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Kodiak',
//     departureTime: '5:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });

//   const load66 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Kodiak',
//     departureTime: '1:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load67 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Kodiak',
//     departureTime: '2:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load68 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Kodiak',
//     departureTime: '3:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const load69 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Kodiak',
//     departureTime: '4:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load70 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Kodiak',
//     departureTime: '5:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });

//   const load71 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Kodiak',
//     departureTime: '1:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load72 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Kodiak',
//     departureTime: '2:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load73 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Kodiak',
//     departureTime: '3:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const load74 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Kodiak',
//     departureTime: '4:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load75 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Kodiak',
//     departureTime: '5:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });

//   const load76 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Kodiak',
//     departureTime: '1:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load77 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Kodiak',
//     departureTime: '2:00pm',
//     slots: 11,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load78 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Kodiak',
//     departureTime: '3:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const load79 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Kodiak',
//     departureTime: '4:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load80 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Kodiak',
//     departureTime: '5:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });

//   const DZ4 = await Dropzone.findByPk(4);
//   await DZ4.addLoad(load61);
//   await DZ4.addLoad(load62);
//   await DZ4.addLoad(load63);
//   await DZ4.addLoad(load64);
//   await DZ4.addLoad(load65);
//   await DZ4.addLoad(load66);
//   await DZ4.addLoad(load67);
//   await DZ4.addLoad(load68);
//   await DZ4.addLoad(load69);
//   await DZ4.addLoad(load70);
//   await DZ4.addLoad(load71);
//   await DZ4.addLoad(load72);
//   await DZ4.addLoad(load73);
//   await DZ4.addLoad(load74);
//   await DZ4.addLoad(load75);
//   await DZ4.addLoad(load76);
//   await DZ4.addLoad(load77);
//   await DZ4.addLoad(load78);
//   await DZ4.addLoad(load79);
//   await DZ4.addLoad(load80);

//   /////////////////// SKYDIVE SAN DIEGO DUMMY LOADS (DZ VIEW) ////////////////////

//   const load81 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Kodiak',
//     departureTime: '1:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load82 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Kodiak',
//     departureTime: '2:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load83 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Kodiak',
//     departureTime: '3:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const load84 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Kodiak',
//     departureTime: '4:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load85 = await Load.create({
//     date: '2022-07-15',
//     aircraft: 'Kodiak',
//     departureTime: '5:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });

//   const load86 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Kodiak',
//     departureTime: '1:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load87 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Kodiak',
//     departureTime: '2:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load88 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Kodiak',
//     departureTime: '3:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const load89 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Kodiak',
//     departureTime: '4:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load90 = await Load.create({
//     date: '2022-07-20',
//     aircraft: 'Kodiak',
//     departureTime: '5:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });

//   const load91 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Kodiak',
//     departureTime: '1:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load92 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Kodiak',
//     departureTime: '2:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load93 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Kodiak',
//     departureTime: '3:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const load94 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Kodiak',
//     departureTime: '4:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load95 = await Load.create({
//     date: '2022-07-21',
//     aircraft: 'Kodiak',
//     departureTime: '5:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });

//   const load96 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Kodiak',
//     departureTime: '1:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load97 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Kodiak',
//     departureTime: '2:00pm',
//     slots: 11,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load98 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Kodiak',
//     departureTime: '3:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const load99 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Kodiak',
//     departureTime: '4:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//   });

//   const load100 = await Load.create({
//     date: '2022-07-22',
//     aircraft: 'Kodiak',
//     departureTime: '5:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });

//   const DZ5 = await Dropzone.findByPk(5);
//   await DZ5.addLoad(load81);
//   await DZ5.addLoad(load82);
//   await DZ5.addLoad(load83);
//   await DZ5.addLoad(load84);
//   await DZ5.addLoad(load85);
//   await DZ5.addLoad(load86);
//   await DZ5.addLoad(load87);
//   await DZ5.addLoad(load88);
//   await DZ5.addLoad(load89);
//   await DZ5.addLoad(load90);
//   await DZ5.addLoad(load91);
//   await DZ5.addLoad(load92);
//   await DZ5.addLoad(load93);
//   await DZ5.addLoad(load94);
//   await DZ5.addLoad(load95);
//   await DZ5.addLoad(load96);
//   await DZ5.addLoad(load97);
//   await DZ5.addLoad(load98);
//   await DZ5.addLoad(load99);
//   await DZ5.addLoad(load100);

//   const year = new Date();
//   const createYear = year.getFullYear();

//   const month = new Date();
//   const createMonth = month.getMonth() + 1;

//   const day = new Date();
//   const createDay = day.getDate();

//   function singleToDoubleDigit(input){
//     return input.length !== 2 ? `0${input}` : `${input}`
//   }

//   let currentDay = singleToDoubleDigit(createDay)
//   let currentMonth= singleToDoubleDigit(createMonth)

//   const todaysDate = `${createYear}-${createDay}-${createMonth}`;

//   const today1 = await Load.create({
//     date: todaysDate,
//     aircraft: 'Kodiak',
//     departureTime: '3:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 1,
//   });
//   const today11 = await Load.create({
//     date: todaysDate,
//     aircraft: 'Kodiak',
//     departureTime: '4:00pm',
//     slots: 14,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 1,
//   });
//   const today111 = await Load.create({
//     date: todaysDate,
//     aircraft: 'Kodiak',
//     departureTime: '5:00pm',
//     slots: 15,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 1,
//   });
//   const today2 = await Load.create({
//     date: todaysDate,
//     aircraft: 'Caravan',
//     departureTime: '4:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const today22 = await Load.create({
//     date: todaysDate,
//     aircraft: 'Caravan',
//     departureTime: '7:00pm',
//     slots: 16,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const today222 = await Load.create({
//     date: todaysDate,
//     aircraft: 'Caravan',
//     departureTime: '1:00pm',
//     slots: 18,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 2,
//   });
//   const today3  = await Load.create({
//     date: todaysDate,
//     aircraft: 'King Air',
//     departureTime: '3:00pm',
//     slots: 15,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 3,
//   });
//   const today33  = await Load.create({
//     date: todaysDate,
//     aircraft: 'King Air',
//     departureTime: '5:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 3,
//   });
//   const today333  = await Load.create({
//     date: todaysDate,
//     aircraft: 'King Air',
//     departureTime: '6:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 3,
//   });
//   const today4 = await Load.create({
//     date: todaysDate,
//     aircraft: 'Cessna',
//     departureTime: '6:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 4,
//   });
//   const today44 = await Load.create({
//     date: todaysDate,
//     aircraft: 'Cessna',
//     departureTime: '1:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 4,
//   });
//   const today444 = await Load.create({
//     date: todaysDate,
//     aircraft: 'Cessna',
//     departureTime: '10:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 4,
//   });
//   const today5 = await Load.create({
//     date: todaysDate,
//     aircraft: 'Twin Otter',
//     departureTime: '7:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 5,
//   });
//   const today55 = await Load.create({
//     date: todaysDate,
//     aircraft: 'Twin Otter',
//     departureTime: '2:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 5,
//   });
//   const today555 = await Load.create({
//     date: todaysDate,
//     aircraft: 'Twin Otter',
//     departureTime: '3:00pm',
//     slots: 12,
//     slotsFilled: 0,
//     isFull: false,
//     status: 'on time',
//     dropzoneId: 5,
//   });

//   await DZ1.addLoad(today1);
//   await DZ1.addLoad(today11);
//   await DZ1.addLoad(today111);
//   await DZ2.addLoad(today2);
//   await DZ2.addLoad(today22);
//   await DZ2.addLoad(today222);
//   await DZ3.addLoad(today3);
//   await DZ3.addLoad(today33);
//   await DZ3.addLoad(today333);
//   await DZ4.addLoad(today4);
//   await DZ4.addLoad(today44);
//   await DZ4.addLoad(today444);
//   await DZ5.addLoad(today5);
//   await DZ5.addLoad(today55);
//   await DZ5.addLoad(today555);

//   // DUMMY DROPZONE WITH USER.CREATE
//   const Nigel = await User.create({
//     firstName: 'Nigel',
//     lastName: 'Doe',
//     email: 'nigel@gmail.com',
//     password: '123',
//     address: '99 Dropzone ct',
//     phoneNumber: '8803205678',
//     licenseNumber: 898989,
//     isAdmin: false,
//     isDropzone: true,
//     role: 'Dropzone',
//   });

//   // DUMMY DATA TO ASSIGN A DROPZONE TO A USER
//   const nigelUser = await User.findByPk(7);
//   const sdsd = await Dropzone.findByPk(3);

//   await nigelUser.setDropzone(sdsd);

//   const BrianLee = await User.create({
//     firstName: 'Brian',
//     lastName: 'Lee',
//     email: 'BrianLee@gmail.com',
//     password: '123',
//     address: '99 Dropzone ct',
//     phoneNumber: '9905410981',
//     licenseNumber: 898989,
//     isAdmin: false,
//     isDropzone: true,
//     dropzoneId: 2,
//     role: 'Dropzone',
//   });

//   //////////////// USER 2 JUMPS (CHRIS) ////////////////
//   const jump1 = await JumpRecords.findByPk(1);
//   const jump2 = await JumpRecords.findByPk(2);
//   const jump3 = await JumpRecords.findByPk(3);
//   const jump4 = await JumpRecords.findByPk(4);
//   const jump5 = await JumpRecords.findByPk(5);
//   const jump6 = await JumpRecords.findByPk(6);
//   const jump7 = await JumpRecords.findByPk(7);
//   const jump8 = await JumpRecords.findByPk(8);
//   const jump9 = await JumpRecords.findByPk(9);
//   const jump10 = await JumpRecords.findByPk(10);
//   const jump11 = await JumpRecords.findByPk(11);
//   const jump12 = await JumpRecords.findByPk(12);
//   const jump13 = await JumpRecords.findByPk(13);
//   const jump14 = await JumpRecords.findByPk(14);
//   const jump15 = await JumpRecords.findByPk(15);
//   const jump16 = await JumpRecords.findByPk(16);
//   const jump17 = await JumpRecords.findByPk(17);
//   const jump18 = await JumpRecords.findByPk(18);
//   const jump19 = await JumpRecords.findByPk(19);
//   const jump20 = await JumpRecords.findByPk(20);

//   await jump1.setUser(chris);
//   await jump3.setUser(chris);
//   await jump2.setUser(chris);
//   await jump4.setUser(chris);
//   await jump5.setUser(chris);
//   await jump6.setUser(chris);
//   await jump7.setUser(chris);
//   await jump8.setUser(chris);
//   await jump9.setUser(chris);
//   await jump10.setUser(chris);
//   await jump11.setUser(chris);
//   await jump12.setUser(chris);
//   await jump13.setUser(chris);
//   await jump14.setUser(chris);
//   await jump15.setUser(chris);
//   await jump16.setUser(chris);
//   await jump17.setUser(chris);
//   await jump18.setUser(chris);
//   await jump19.setUser(chris);
//   await jump20.setUser(chris);

//   await jump1.setLoad(1);
//   await jump2.setLoad(2);
//   await jump3.setLoad(3);
//   await jump4.setLoad(4);
//   await jump5.setLoad(5);
//   await jump6.setLoad(6);
//   await jump7.setLoad(7);
//   await jump8.setLoad(8);
//   await jump9.setLoad(9);
//   await jump10.setLoad(10);
//   await jump11.setLoad(11);
//   await jump12.setLoad(12);
//   await jump13.setLoad(13);
//   await jump14.setLoad(14);
//   await jump15.setLoad(15);
//   await jump16.setLoad(16);
//   await jump17.setLoad(17);
//   await jump18.setLoad(18);
//   await jump19.setLoad(19);
//   await jump20.setLoad(20);

//   await jump1.setDropzone(1);
//   await jump2.setDropzone(1);
//   await jump3.setDropzone(1);
//   await jump4.setDropzone(1);
//   await jump5.setDropzone(1);
//   await jump6.setDropzone(1);
//   await jump7.setDropzone(1);
//   await jump8.setDropzone(1);
//   await jump9.setDropzone(1);
//   await jump10.setDropzone(1);
//   await jump11.setDropzone(1);
//   await jump12.setDropzone(1);
//   await jump13.setDropzone(1);
//   await jump14.setDropzone(1);
//   await jump15.setDropzone(1);
//   await jump16.setDropzone(1);
//   await jump17.setDropzone(1);
//   await jump18.setDropzone(1);
//   await jump19.setDropzone(1);
//   await jump20.setDropzone(1);

//   //////////////// USER 3 JUMPS (BRIAN) ////////////////
//   const jump21 = await JumpRecords.findByPk(21);
//   const jump22 = await JumpRecords.findByPk(22);
//   const jump23 = await JumpRecords.findByPk(23);
//   const jump24 = await JumpRecords.findByPk(24);
//   const jump25 = await JumpRecords.findByPk(25);
//   const jump26 = await JumpRecords.findByPk(26);
//   const jump27 = await JumpRecords.findByPk(27);
//   const jump28 = await JumpRecords.findByPk(28);
//   const jump29 = await JumpRecords.findByPk(29);
//   const jump30 = await JumpRecords.findByPk(30);
//   const jump31 = await JumpRecords.findByPk(31);
//   const jump32 = await JumpRecords.findByPk(32);
//   const jump33 = await JumpRecords.findByPk(33);
//   const jump34 = await JumpRecords.findByPk(34);
//   const jump35 = await JumpRecords.findByPk(35);
//   const jump36 = await JumpRecords.findByPk(36);
//   const jump37 = await JumpRecords.findByPk(37);
//   const jump38 = await JumpRecords.findByPk(38);
//   const jump39 = await JumpRecords.findByPk(39);
//   const jump40 = await JumpRecords.findByPk(40);

//   await jump21.setUser(brian);
//   await jump22.setUser(brian);
//   await jump23.setUser(brian);
//   await jump24.setUser(brian);
//   await jump25.setUser(brian);
//   await jump26.setUser(brian);
//   await jump27.setUser(brian);
//   await jump28.setUser(brian);
//   await jump29.setUser(brian);
//   await jump30.setUser(brian);
//   await jump31.setUser(brian);
//   await jump32.setUser(brian);
//   await jump33.setUser(brian);
//   await jump34.setUser(brian);
//   await jump35.setUser(brian);
//   await jump36.setUser(brian);
//   await jump37.setUser(brian);
//   await jump38.setUser(brian);
//   await jump39.setUser(brian);
//   await jump40.setUser(brian);

//   await jump21.setLoad(21);
//   await jump22.setLoad(22);
//   await jump23.setLoad(23);
//   await jump24.setLoad(24);
//   await jump25.setLoad(25);
//   await jump26.setLoad(26);
//   await jump27.setLoad(27);
//   await jump28.setLoad(28);
//   await jump29.setLoad(29);
//   await jump30.setLoad(30);
//   await jump31.setLoad(31);
//   await jump32.setLoad(32);
//   await jump33.setLoad(33);
//   await jump34.setLoad(34);
//   await jump35.setLoad(35);
//   await jump36.setLoad(36);
//   await jump37.setLoad(37);
//   await jump38.setLoad(38);
//   await jump39.setLoad(39);
//   await jump40.setLoad(40);

//   await jump21.setDropzone(2);
//   await jump22.setDropzone(2);
//   await jump23.setDropzone(2);
//   await jump24.setDropzone(2);
//   await jump25.setDropzone(2);
//   await jump26.setDropzone(2);
//   await jump27.setDropzone(2);
//   await jump28.setDropzone(2);
//   await jump29.setDropzone(2);
//   await jump30.setDropzone(2);
//   await jump31.setDropzone(2);
//   await jump32.setDropzone(2);
//   await jump33.setDropzone(2);
//   await jump34.setDropzone(2);
//   await jump35.setDropzone(2);
//   await jump36.setDropzone(2);
//   await jump37.setDropzone(2);
//   await jump38.setDropzone(2);
//   await jump39.setDropzone(2);
//   await jump40.setDropzone(2);

//   //////////////// USER 4 JUMPS (CHRISTOPHER) ////////////////
//   const jump41 = await JumpRecords.findByPk(41);
//   const jump42 = await JumpRecords.findByPk(42);
//   const jump43 = await JumpRecords.findByPk(43);
//   const jump44 = await JumpRecords.findByPk(44);
//   const jump45 = await JumpRecords.findByPk(45);
//   const jump46 = await JumpRecords.findByPk(46);
//   const jump47 = await JumpRecords.findByPk(47);
//   const jump48 = await JumpRecords.findByPk(48);
//   const jump49 = await JumpRecords.findByPk(49);
//   const jump50 = await JumpRecords.findByPk(50);
//   const jump51 = await JumpRecords.findByPk(51);
//   const jump52 = await JumpRecords.findByPk(52);
//   const jump53 = await JumpRecords.findByPk(53);
//   const jump54 = await JumpRecords.findByPk(54);
//   const jump55 = await JumpRecords.findByPk(55);
//   const jump56 = await JumpRecords.findByPk(56);
//   const jump57 = await JumpRecords.findByPk(57);
//   const jump58 = await JumpRecords.findByPk(58);
//   const jump59 = await JumpRecords.findByPk(59);
//   const jump60 = await JumpRecords.findByPk(60);

//   await jump41.setUser(christopher);
//   await jump42.setUser(christopher);
//   await jump43.setUser(christopher);
//   await jump44.setUser(christopher);
//   await jump45.setUser(christopher);
//   await jump46.setUser(christopher);
//   await jump47.setUser(christopher);
//   await jump48.setUser(christopher);
//   await jump49.setUser(christopher);
//   await jump50.setUser(christopher);
//   await jump51.setUser(christopher);
//   await jump52.setUser(christopher);
//   await jump53.setUser(christopher);
//   await jump54.setUser(christopher);
//   await jump55.setUser(christopher);
//   await jump56.setUser(christopher);
//   await jump57.setUser(christopher);
//   await jump58.setUser(christopher);
//   await jump59.setUser(christopher);
//   await jump60.setUser(christopher);

//   await jump41.setLoad(41);
//   await jump42.setLoad(42);
//   await jump43.setLoad(43);
//   await jump44.setLoad(44);
//   await jump45.setLoad(45);
//   await jump46.setLoad(46);
//   await jump47.setLoad(47);
//   await jump48.setLoad(48);
//   await jump49.setLoad(49);
//   await jump50.setLoad(50);
//   await jump51.setLoad(51);
//   await jump52.setLoad(52);
//   await jump53.setLoad(53);
//   await jump54.setLoad(54);
//   await jump55.setLoad(55);
//   await jump56.setLoad(56);
//   await jump57.setLoad(57);
//   await jump58.setLoad(58);
//   await jump59.setLoad(59);
//   await jump60.setLoad(60);

//   await jump41.setDropzone(3);
//   await jump42.setDropzone(3);
//   await jump43.setDropzone(3);
//   await jump44.setDropzone(3);
//   await jump45.setDropzone(3);
//   await jump46.setDropzone(3);
//   await jump47.setDropzone(3);
//   await jump48.setDropzone(3);
//   await jump49.setDropzone(3);
//   await jump50.setDropzone(3);
//   await jump51.setDropzone(3);
//   await jump52.setDropzone(3);
//   await jump53.setDropzone(3);
//   await jump54.setDropzone(3);
//   await jump55.setDropzone(3);
//   await jump56.setDropzone(3);
//   await jump57.setDropzone(3);
//   await jump58.setDropzone(3);
//   await jump59.setDropzone(3);
//   await jump60.setDropzone(3);

//   //////////////// USER 5 JUMPS (COLE) ////////////////
//   const jump61 = await JumpRecords.findByPk(61);
//   const jump62 = await JumpRecords.findByPk(62);
//   const jump63 = await JumpRecords.findByPk(63);
//   const jump64 = await JumpRecords.findByPk(64);
//   const jump65 = await JumpRecords.findByPk(65);
//   const jump66 = await JumpRecords.findByPk(66);
//   const jump67 = await JumpRecords.findByPk(67);
//   const jump68 = await JumpRecords.findByPk(68);
//   const jump69 = await JumpRecords.findByPk(69);
//   const jump70 = await JumpRecords.findByPk(70);
//   const jump71 = await JumpRecords.findByPk(71);
//   const jump72 = await JumpRecords.findByPk(72);
//   const jump73 = await JumpRecords.findByPk(73);
//   const jump74 = await JumpRecords.findByPk(74);
//   const jump75 = await JumpRecords.findByPk(75);
//   const jump76 = await JumpRecords.findByPk(76);
//   const jump77 = await JumpRecords.findByPk(77);
//   const jump78 = await JumpRecords.findByPk(78);
//   const jump79 = await JumpRecords.findByPk(79);
//   const jump80 = await JumpRecords.findByPk(80);

//   await jump61.setUser(cole);
//   await jump62.setUser(cole);
//   await jump63.setUser(cole);
//   await jump64.setUser(cole);
//   await jump65.setUser(cole);
//   await jump66.setUser(cole);
//   await jump67.setUser(cole);
//   await jump68.setUser(cole);
//   await jump69.setUser(cole);
//   await jump70.setUser(cole);
//   await jump71.setUser(cole);
//   await jump72.setUser(cole);
//   await jump73.setUser(cole);
//   await jump74.setUser(cole);
//   await jump75.setUser(cole);
//   await jump76.setUser(cole);
//   await jump77.setUser(cole);
//   await jump78.setUser(cole);
//   await jump79.setUser(cole);
//   await jump80.setUser(cole);

//   await jump61.setLoad(61);
//   await jump62.setLoad(62);
//   await jump63.setLoad(63);
//   await jump64.setLoad(64);
//   await jump65.setLoad(65);
//   await jump66.setLoad(66);
//   await jump67.setLoad(67);
//   await jump68.setLoad(68);
//   await jump69.setLoad(69);
//   await jump70.setLoad(70);
//   await jump71.setLoad(71);
//   await jump72.setLoad(72);
//   await jump73.setLoad(73);
//   await jump74.setLoad(74);
//   await jump75.setLoad(75);
//   await jump76.setLoad(76);
//   await jump77.setLoad(77);
//   await jump78.setLoad(78);
//   await jump79.setLoad(79);
//   await jump80.setLoad(80);

//   await jump61.setDropzone(4);
//   await jump62.setDropzone(4);
//   await jump63.setDropzone(4);
//   await jump64.setDropzone(4);
//   await jump65.setDropzone(4);
//   await jump66.setDropzone(4);
//   await jump67.setDropzone(4);
//   await jump68.setDropzone(4);
//   await jump69.setDropzone(4);
//   await jump70.setDropzone(4);
//   await jump71.setDropzone(4);
//   await jump72.setDropzone(4);
//   await jump73.setDropzone(4);
//   await jump74.setDropzone(4);
//   await jump75.setDropzone(4);
//   await jump76.setDropzone(4);
//   await jump77.setDropzone(4);
//   await jump78.setDropzone(4);
//   await jump79.setDropzone(4);
//   await jump80.setDropzone(4);

//   //////////////// USER 6 JUMPS (SARAH) ////////////////
//   const jump81 = await JumpRecords.findByPk(81);
//   const jump82 = await JumpRecords.findByPk(82);
//   const jump83 = await JumpRecords.findByPk(83);
//   const jump84 = await JumpRecords.findByPk(84);
//   const jump85 = await JumpRecords.findByPk(85);
//   const jump86 = await JumpRecords.findByPk(86);
//   const jump87 = await JumpRecords.findByPk(87);
//   const jump88 = await JumpRecords.findByPk(88);
//   const jump89 = await JumpRecords.findByPk(89);
//   const jump90 = await JumpRecords.findByPk(90);
//   const jump91 = await JumpRecords.findByPk(91);
//   const jump92 = await JumpRecords.findByPk(92);
//   const jump93 = await JumpRecords.findByPk(93);
//   const jump94 = await JumpRecords.findByPk(94);
//   const jump95 = await JumpRecords.findByPk(95);
//   const jump96 = await JumpRecords.findByPk(96);
//   const jump97 = await JumpRecords.findByPk(97);
//   const jump98 = await JumpRecords.findByPk(98);
//   const jump99 = await JumpRecords.findByPk(99);
//   const jump100 = await JumpRecords.findByPk(100);

//   await jump81.setUser(sarah);
//   await jump82.setUser(sarah);
//   await jump83.setUser(sarah);
//   await jump84.setUser(sarah);
//   await jump85.setUser(sarah);
//   await jump86.setUser(sarah);
//   await jump87.setUser(sarah);
//   await jump88.setUser(sarah);
//   await jump89.setUser(sarah);
//   await jump90.setUser(sarah);
//   await jump91.setUser(sarah);
//   await jump92.setUser(sarah);
//   await jump93.setUser(sarah);
//   await jump94.setUser(sarah);
//   await jump95.setUser(sarah);
//   await jump96.setUser(sarah);
//   await jump97.setUser(sarah);
//   await jump98.setUser(sarah);
//   await jump99.setUser(sarah);
//   await jump100.setUser(sarah);

//   await jump81.setLoad(81);
//   await jump82.setLoad(82);
//   await jump83.setLoad(83);
//   await jump84.setLoad(84);
//   await jump85.setLoad(85);
//   await jump86.setLoad(86);
//   await jump87.setLoad(87);
//   await jump88.setLoad(88);
//   await jump89.setLoad(89);
//   await jump90.setLoad(90);
//   await jump91.setLoad(91);
//   await jump92.setLoad(92);
//   await jump93.setLoad(93);
//   await jump94.setLoad(94);
//   await jump95.setLoad(95);
//   await jump96.setLoad(96);
//   await jump97.setLoad(97);
//   await jump98.setLoad(98);
//   await jump99.setLoad(99);
//   await jump100.setLoad(100);

//   await jump81.setDropzone(5);
//   await jump82.setDropzone(5);
//   await jump83.setDropzone(5);
//   await jump84.setDropzone(5);
//   await jump85.setDropzone(5);
//   await jump86.setDropzone(5);
//   await jump87.setDropzone(5);
//   await jump88.setDropzone(5);
//   await jump89.setDropzone(5);
//   await jump90.setDropzone(5);
//   await jump91.setDropzone(5);
//   await jump92.setDropzone(5);
//   await jump93.setDropzone(5);
//   await jump94.setDropzone(5);
//   await jump95.setDropzone(5);
//   await jump96.setDropzone(5);
//   await jump97.setDropzone(5);
//   await jump98.setDropzone(5);
//   await jump99.setDropzone(5);
//   await jump100.setDropzone(5);
// }

// /*
//  We've separated the `seed` function from the `runSeed` function.
//  This way we can isolate the error handling and exit trapping.
//  The `seed` function is concerned only with modifying the database.
// */
// async function runSeed() {
//   console.log('seeding...');
//   try {
//     await seed();
//   } catch (err) {
//     console.error(err);
//     process.exitCode = 1;
//   } finally {
//     console.log('closing db connection');
//     await db.close();
//     console.log('db connection closed');
//   }
// }

// /*
//   Execute the `seed` function, IF we ran this module directly (`node seed`).
//   `Async` functions always return a promise, so we can use `catch` to handle
//   any errors that might occur inside of `seed`.
// */
// if (module === require.main) {
//   runSeed();
// }

// // we export the seed function for testing purposes (see `./seed.spec.js`)
// module.exports = seed;

'use strict';

const {
  db,
  models: { User, JumpRecord, Load, Dropzone },
} = require('../server/db');
const JumpRecords = require('../server/db/models/JumpRecords');

/* DUMMY JUMP RECORD DATA */
const jumps = [
  // User 1's jumps
  {
    jumpNumber: 1,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description:
      'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 2,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 3,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Back flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 4,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'great landing!',
    jumpType: 'belly',
  },
  {
    jumpNumber: 5,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 6,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 7,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 8,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 9,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 10,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 11,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 2500,
    freeFallTime: 66,
    jumpers: 1,
    description:
      'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 12,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 13500,
    pullAltitude: 5500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 13,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 5500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Back flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 14,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'great landing!',
    jumpType: 'belly',
  },
  {
    jumpNumber: 15,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 16,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 17,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 18,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'front float exit.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 19,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'rear float exit.',
    jumpType: 'head down',
  },
  {
    jumpNumber: 20,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'back flip exit.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 1,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description:
      'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 2,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 3,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Back flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 4,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'great landing!',
    jumpType: 'belly',
  },
  {
    jumpNumber: 5,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 6,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 7,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 8,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 9,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 10,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 11,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 2500,
    freeFallTime: 66,
    jumpers: 1,
    description:
      'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 12,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 13500,
    pullAltitude: 5500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 13,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 5500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Back flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 14,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'great landing!',
    jumpType: 'belly',
  },
  {
    jumpNumber: 15,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 16,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 17,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 18,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'front float exit.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 19,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'rear float exit.',
    jumpType: 'head down',
  },
  {
    jumpNumber: 20,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'back flip exit.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 1,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description:
      'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 2,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 3,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Back flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 4,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'great landing!',
    jumpType: 'belly',
  },
  {
    jumpNumber: 5,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 6,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 7,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 8,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 9,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 10,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 11,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 2500,
    freeFallTime: 66,
    jumpers: 1,
    description:
      'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 12,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 13500,
    pullAltitude: 5500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 13,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 5500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Back flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 14,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'great landing!',
    jumpType: 'belly',
  },
  {
    jumpNumber: 15,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 16,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 17,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 18,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'front float exit.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 19,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'rear float exit.',
    jumpType: 'head down',
  },
  {
    jumpNumber: 20,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'back flip exit.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 1,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description:
      'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 2,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 3,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Back flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 4,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'great landing!',
    jumpType: 'belly',
  },
  {
    jumpNumber: 5,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 6,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 7,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 8,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 9,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 10,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 11,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 2500,
    freeFallTime: 66,
    jumpers: 1,
    description:
      'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 12,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 13500,
    pullAltitude: 5500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 13,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 5500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Back flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 14,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'great landing!',
    jumpType: 'belly',
  },
  {
    jumpNumber: 15,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 16,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 17,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 18,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'front float exit.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 19,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'rear float exit.',
    jumpType: 'head down',
  },
  {
    jumpNumber: 20,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'back flip exit.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 1,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description:
      'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 2,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 3,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Back flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 4,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'great landing!',
    jumpType: 'belly',
  },
  {
    jumpNumber: 5,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 6,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 7,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 8,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 9,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 10,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 11,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 2500,
    freeFallTime: 66,
    jumpers: 1,
    description:
      'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 12,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 13500,
    pullAltitude: 5500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 13,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 5500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Back flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 14,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'great landing!',
    jumpType: 'belly',
  },
  {
    jumpNumber: 15,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 16,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 17,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 18,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 15,
    jumpers: 1,
    description: 'front float exit.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 19,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'rear float exit.',
    jumpType: 'head down',
  },
  {
    jumpNumber: 20,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'back flip exit.',
    jumpType: 'angle',
  },
];

// DUMMY DROP ZONE DATA
const dropZones = [
  {
    name: 'Cleveland Skydiving Center',
    address: '55 Grove St',
    phoneNumber: '8004401234',
  },
  {
    name: 'Skydive The Ranch',
    address: '456 Manhattan rd',
    phoneNumber: '8005551234',
  },
  {
    name: 'Skydive San Diego',
    address: '777 Sunset blvd',
    phoneNumber: '8007771234',
  },
  {
    name: 'Chicago Skydiving Center',
    address: '789 Smollett rd',
    phoneNumber: '8008881234',
  },
  {
    name: 'Skydive Tecumseh',
    address: '432 Dry Heat blvd',
    phoneNumber: '8009991234',
  },
];

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Jump Records
  await Promise.all(
    jumps.map((jump) => {
      return JumpRecords.create(jump);
    }),
    dropZones.map((dz) => {
      return Dropzone.create(dz);
    })
  );

  // CREATE DUMMY USER DATA
  const admin = await User.create({
    firstName: 'Admin',
    lastName: 'Admin',
    email: 'admin@gmail.com',
    password: '123',
    address: '1 Admin St',
    phoneNumber: '8005451234',
    licenseNumber: 105050,
    isAdmin: true,
    role: 'Admin',
  });

  const chris = await User.create({
    firstName: 'Chris',
    lastName: 'Tomshack',
    email: 'chris@gmail.com',
    password: '123',
    address: '2 skydiving Blvd',
    phoneNumber: '3307773562',
    licenseNumber: 202020,
    isAdmin: false,
  });

  const brian = await User.create({
    firstName: 'Brian',
    lastName: 'Lee',
    email: 'brian@gmail.com',
    password: '123',
    address: '3 skydiving Blvd',
    phoneNumber: '4405553562',
    licenseNumber: 303030,
    isAdmin: false,
  });

  const christopher = await User.create({
    firstName: 'Christopher',
    lastName: 'Ruiz',
    email: 'christopher@gmail.com',
    password: '123',
    address: '4 skydiving Blvd',
    phoneNumber: '5504443562',
    licenseNumber: 404040,
    isAdmin: false,
  });

  const cole = await User.create({
    firstName: 'Cole',
    lastName: 'Berman',
    email: 'cole@gmail.com',
    password: '123',
    address: '4 skydiving Blvd',
    phoneNumber: '7703333562',
    licenseNumber: 505050,
    isAdmin: false,
  });

  const sarah = await User.create({
    firstName: 'Sarah',
    lastName: 'Higgins',
    email: 'sarah@gmail.com',
    password: '123',
    address: '5 skydiving Blvd',
    phoneNumber: '7703333562',
    licenseNumber: 505050,
    isAdmin: false,
  });

  /////////////////// LOAD DUMMY DATA FOR ALL LOADS (DZ VIEW) ////////////////////

  /////////////////// CLEVELAND SKYDIVING CENTER DUMMY LOADS (DZ VIEW) ////////////////////

  const load1 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Kodiak',
    departureTime: '1:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load2 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Kodiak',
    departureTime: '2:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load3 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Kodiak',
    departureTime: '3:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });
  const load4 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Kodiak',
    departureTime: '4:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load5 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Kodiak',
    departureTime: '5:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });

  const load6 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Kodiak',
    departureTime: '1:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load7 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Kodiak',
    departureTime: '2:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load8 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Kodiak',
    departureTime: '3:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });
  const load9 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Kodiak',
    departureTime: '4:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load10 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Kodiak',
    departureTime: '5:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });

  const load11 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Kodiak',
    departureTime: '1:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load12 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Kodiak',
    departureTime: '2:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load13 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Kodiak',
    departureTime: '3:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });
  const load14 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Kodiak',
    departureTime: '4:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load15 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Kodiak',
    departureTime: '5:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });

  const load16 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Kodiak',
    departureTime: '1:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load17 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Kodiak',
    departureTime: '2:00pm',
    slots: 11,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load18 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Kodiak',
    departureTime: '3:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });
  const load19 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Kodiak',
    departureTime: '4:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load20 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Kodiak',
    departureTime: '5:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });

  const DZ1 = await Dropzone.findByPk(1);
  await DZ1.addLoad(load1);
  await DZ1.addLoad(load2);
  await DZ1.addLoad(load3);
  await DZ1.addLoad(load4);
  await DZ1.addLoad(load5);
  await DZ1.addLoad(load6);
  await DZ1.addLoad(load7);
  await DZ1.addLoad(load8);
  await DZ1.addLoad(load9);
  await DZ1.addLoad(load10);
  await DZ1.addLoad(load11);
  await DZ1.addLoad(load12);
  await DZ1.addLoad(load13);
  await DZ1.addLoad(load14);
  await DZ1.addLoad(load15);
  await DZ1.addLoad(load16);
  await DZ1.addLoad(load17);
  await DZ1.addLoad(load18);
  await DZ1.addLoad(load19);
  await DZ1.addLoad(load20);

  /////////////////// SKYDIVE THE RANCH DUMMY LOADS (DZ VIEW) ////////////////////

  const load21 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Caravan',
    departureTime: '1:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load22 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Caravan',
    departureTime: '2:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load23 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Caravan',
    departureTime: '3:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });
  const load24 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Caravan',
    departureTime: '4:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load25 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Caravan',
    departureTime: '5:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });

  const load26 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Caravan',
    departureTime: '1:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load27 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Caravan',
    departureTime: '2:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load28 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Caravan',
    departureTime: '3:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });
  const load29 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Caravan',
    departureTime: '4:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load30 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Caravan',
    departureTime: '5:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });

  const load31 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Caravan',
    departureTime: '1:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load32 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Caravan',
    departureTime: '2:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load33 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Caravan',
    departureTime: '3:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });
  const load34 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Caravan',
    departureTime: '4:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load35 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Caravan',
    departureTime: '5:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });

  const load36 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Caravan',
    departureTime: '1:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load37 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Caravan',
    departureTime: '2:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load38 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Caravan',
    departureTime: '3:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });
  const load39 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Caravan',
    departureTime: '4:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load40 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Caravan',
    departureTime: '5:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });

  const DZ2 = await Dropzone.findByPk(2);
  await DZ2.addLoad(load21);
  await DZ2.addLoad(load22);
  await DZ2.addLoad(load23);
  await DZ2.addLoad(load24);
  await DZ2.addLoad(load25);
  await DZ2.addLoad(load26);
  await DZ2.addLoad(load27);
  await DZ2.addLoad(load28);
  await DZ2.addLoad(load29);
  await DZ2.addLoad(load30);
  await DZ2.addLoad(load31);
  await DZ2.addLoad(load32);
  await DZ2.addLoad(load33);
  await DZ2.addLoad(load34);
  await DZ2.addLoad(load35);
  await DZ2.addLoad(load36);
  await DZ2.addLoad(load37);
  await DZ2.addLoad(load38);
  await DZ2.addLoad(load39);
  await DZ2.addLoad(load40);

  /////////////////// SKYDIVE SAN DIEGO DUMMY LOADS (DZ VIEW) ////////////////////

  const load41 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Kodiak',
    departureTime: '1:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load42 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Kodiak',
    departureTime: '2:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load43 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Kodiak',
    departureTime: '3:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });
  const load44 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Kodiak',
    departureTime: '4:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load45 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Kodiak',
    departureTime: '5:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });

  const load46 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Kodiak',
    departureTime: '1:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load47 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Kodiak',
    departureTime: '2:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load48 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Kodiak',
    departureTime: '3:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });
  const load49 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Kodiak',
    departureTime: '4:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load50 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Kodiak',
    departureTime: '5:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });

  const load51 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Kodiak',
    departureTime: '1:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load52 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Kodiak',
    departureTime: '2:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load53 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Kodiak',
    departureTime: '3:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });
  const load54 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Kodiak',
    departureTime: '4:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load55 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Kodiak',
    departureTime: '5:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });

  const load56 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Kodiak',
    departureTime: '1:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load57 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Kodiak',
    departureTime: '2:00pm',
    slots: 11,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load58 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Kodiak',
    departureTime: '3:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });
  const load59 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Kodiak',
    departureTime: '4:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load60 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Kodiak',
    departureTime: '5:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });

  const DZ3 = await Dropzone.findByPk(3);
  await DZ3.addLoad(load41);
  await DZ3.addLoad(load42);
  await DZ3.addLoad(load43);
  await DZ3.addLoad(load44);
  await DZ3.addLoad(load45);
  await DZ3.addLoad(load46);
  await DZ3.addLoad(load47);
  await DZ3.addLoad(load48);
  await DZ3.addLoad(load49);
  await DZ3.addLoad(load50);
  await DZ3.addLoad(load51);
  await DZ3.addLoad(load52);
  await DZ3.addLoad(load53);
  await DZ3.addLoad(load54);
  await DZ3.addLoad(load55);
  await DZ3.addLoad(load56);
  await DZ3.addLoad(load57);
  await DZ3.addLoad(load58);
  await DZ3.addLoad(load59);
  await DZ3.addLoad(load60);

  /////////////////// CHICAGO SKYDIVING CENTER DUMMY LOADS (DZ VIEW) ////////////////////

  const load61 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Kodiak',
    departureTime: '1:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load62 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Kodiak',
    departureTime: '2:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load63 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Kodiak',
    departureTime: '3:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });
  const load64 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Kodiak',
    departureTime: '4:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load65 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Kodiak',
    departureTime: '5:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });

  const load66 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Kodiak',
    departureTime: '1:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load67 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Kodiak',
    departureTime: '2:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load68 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Kodiak',
    departureTime: '3:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });
  const load69 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Kodiak',
    departureTime: '4:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load70 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Kodiak',
    departureTime: '5:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });

  const load71 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Kodiak',
    departureTime: '1:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load72 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Kodiak',
    departureTime: '2:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load73 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Kodiak',
    departureTime: '3:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });
  const load74 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Kodiak',
    departureTime: '4:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load75 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Kodiak',
    departureTime: '5:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });

  const load76 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Kodiak',
    departureTime: '1:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load77 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Kodiak',
    departureTime: '2:00pm',
    slots: 11,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load78 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Kodiak',
    departureTime: '3:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });
  const load79 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Kodiak',
    departureTime: '4:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load80 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Kodiak',
    departureTime: '5:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });

  const DZ4 = await Dropzone.findByPk(4);
  await DZ4.addLoad(load61);
  await DZ4.addLoad(load62);
  await DZ4.addLoad(load63);
  await DZ4.addLoad(load64);
  await DZ4.addLoad(load65);
  await DZ4.addLoad(load66);
  await DZ4.addLoad(load67);
  await DZ4.addLoad(load68);
  await DZ4.addLoad(load69);
  await DZ4.addLoad(load70);
  await DZ4.addLoad(load71);
  await DZ4.addLoad(load72);
  await DZ4.addLoad(load73);
  await DZ4.addLoad(load74);
  await DZ4.addLoad(load75);
  await DZ4.addLoad(load76);
  await DZ4.addLoad(load77);
  await DZ4.addLoad(load78);
  await DZ4.addLoad(load79);
  await DZ4.addLoad(load80);

  /////////////////// SKYDIVE SAN DIEGO DUMMY LOADS (DZ VIEW) ////////////////////

  const load81 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Kodiak',
    departureTime: '1:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load82 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Kodiak',
    departureTime: '2:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load83 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Kodiak',
    departureTime: '3:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });
  const load84 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Kodiak',
    departureTime: '4:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load85 = await Load.create({
    date: '2022-07-15',
    aircraft: 'Kodiak',
    departureTime: '5:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });

  const load86 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Kodiak',
    departureTime: '1:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load87 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Kodiak',
    departureTime: '2:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load88 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Kodiak',
    departureTime: '3:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });
  const load89 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Kodiak',
    departureTime: '4:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load90 = await Load.create({
    date: '2022-07-20',
    aircraft: 'Kodiak',
    departureTime: '5:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });

  const load91 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Kodiak',
    departureTime: '1:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load92 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Kodiak',
    departureTime: '2:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load93 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Kodiak',
    departureTime: '3:00pm',
    slots: 16,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });
  const load94 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Kodiak',
    departureTime: '4:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load95 = await Load.create({
    date: '2022-07-21',
    aircraft: 'Kodiak',
    departureTime: '5:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });

  const load96 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Kodiak',
    departureTime: '1:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load97 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Kodiak',
    departureTime: '2:00pm',
    slots: 11,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load98 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Kodiak',
    departureTime: '3:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });
  const load99 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Kodiak',
    departureTime: '4:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
  });

  const load100 = await Load.create({
    date: '2022-07-22',
    aircraft: 'Kodiak',
    departureTime: '5:00pm',
    slots: 12,
    slotsFilled: 0,
    isFull: false,
    status: 'on time',
    dropzoneId: 2,
  });

  const DZ5 = await Dropzone.findByPk(5);
  await DZ5.addLoad(load81);
  await DZ5.addLoad(load82);
  await DZ5.addLoad(load83);
  await DZ5.addLoad(load84);
  await DZ5.addLoad(load85);
  await DZ5.addLoad(load86);
  await DZ5.addLoad(load87);
  await DZ5.addLoad(load88);
  await DZ5.addLoad(load89);
  await DZ5.addLoad(load90);
  await DZ5.addLoad(load91);
  await DZ5.addLoad(load92);
  await DZ5.addLoad(load93);
  await DZ5.addLoad(load94);
  await DZ5.addLoad(load95);
  await DZ5.addLoad(load96);
  await DZ5.addLoad(load97);
  await DZ5.addLoad(load98);
  await DZ5.addLoad(load99);
  await DZ5.addLoad(load100);

  // DUMMY DROPZONE WITH USER.CREATE
  const Nigel = await User.create({
    firstName: 'Nigel',
    lastName: 'Doe',
    email: 'nigel@gmail.com',
    password: '123',
    address: '99 Dropzone ct',
    phoneNumber: '8803205678',
    licenseNumber: 898989,
    isAdmin: false,
    isDropzone: true,
    role: 'Dropzone',
  });

  // DUMMY DATA TO ASSIGN A DROPZONE TO A USER
  const nigelUser = await User.findByPk(7);
  const sdsd = await Dropzone.findByPk(3);

  await nigelUser.setDropzone(sdsd);

  const BrianLee = await User.create({
    firstName: 'Brian',
    lastName: 'Lee',
    email: 'BrianLee@gmail.com',
    password: '123',
    address: '99 Dropzone ct',
    phoneNumber: '9905410981',
    licenseNumber: 898989,
    isAdmin: false,
    isDropzone: true,
    dropzoneId: 2,
    role: 'Dropzone',
  });

  //////////////// USER 2 JUMPS (CHRIS) ////////////////
  const jump1 = await JumpRecords.findByPk(1);
  const jump2 = await JumpRecords.findByPk(2);
  const jump3 = await JumpRecords.findByPk(3);
  const jump4 = await JumpRecords.findByPk(4);
  const jump5 = await JumpRecords.findByPk(5);
  const jump6 = await JumpRecords.findByPk(6);
  const jump7 = await JumpRecords.findByPk(7);
  const jump8 = await JumpRecords.findByPk(8);
  const jump9 = await JumpRecords.findByPk(9);
  const jump10 = await JumpRecords.findByPk(10);
  const jump11 = await JumpRecords.findByPk(11);
  const jump12 = await JumpRecords.findByPk(12);
  const jump13 = await JumpRecords.findByPk(13);
  const jump14 = await JumpRecords.findByPk(14);
  const jump15 = await JumpRecords.findByPk(15);
  const jump16 = await JumpRecords.findByPk(16);
  const jump17 = await JumpRecords.findByPk(17);
  const jump18 = await JumpRecords.findByPk(18);
  const jump19 = await JumpRecords.findByPk(19);
  const jump20 = await JumpRecords.findByPk(20);

  await jump1.setUser(chris);
  await jump3.setUser(chris);
  await jump2.setUser(chris);
  await jump4.setUser(chris);
  await jump5.setUser(chris);
  await jump6.setUser(chris);
  await jump7.setUser(chris);
  await jump8.setUser(chris);
  await jump9.setUser(chris);
  await jump10.setUser(chris);
  await jump11.setUser(chris);
  await jump12.setUser(chris);
  await jump13.setUser(chris);
  await jump14.setUser(chris);
  await jump15.setUser(chris);
  await jump16.setUser(chris);
  await jump17.setUser(chris);
  await jump18.setUser(chris);
  await jump19.setUser(chris);
  await jump20.setUser(chris);

  await jump1.setLoad(1);
  await jump2.setLoad(2);
  await jump3.setLoad(3);
  await jump4.setLoad(4);
  await jump5.setLoad(5);
  await jump6.setLoad(6);
  await jump7.setLoad(7);
  await jump8.setLoad(8);
  await jump9.setLoad(9);
  await jump10.setLoad(10);
  await jump11.setLoad(11);
  await jump12.setLoad(12);
  await jump13.setLoad(13);
  await jump14.setLoad(14);
  await jump15.setLoad(15);
  await jump16.setLoad(16);
  await jump17.setLoad(17);
  await jump18.setLoad(18);
  await jump19.setLoad(19);
  await jump20.setLoad(20);

  await jump1.setDropzone(1);
  await jump2.setDropzone(1);
  await jump3.setDropzone(1);
  await jump4.setDropzone(1);
  await jump5.setDropzone(1);
  await jump6.setDropzone(1);
  await jump7.setDropzone(1);
  await jump8.setDropzone(1);
  await jump9.setDropzone(1);
  await jump10.setDropzone(1);
  await jump11.setDropzone(1);
  await jump12.setDropzone(1);
  await jump13.setDropzone(1);
  await jump14.setDropzone(1);
  await jump15.setDropzone(1);
  await jump16.setDropzone(1);
  await jump17.setDropzone(1);
  await jump18.setDropzone(1);
  await jump19.setDropzone(1);
  await jump20.setDropzone(1);

  //////////////// USER 3 JUMPS (BRIAN) ////////////////
  const jump21 = await JumpRecords.findByPk(21);
  const jump22 = await JumpRecords.findByPk(22);
  const jump23 = await JumpRecords.findByPk(23);
  const jump24 = await JumpRecords.findByPk(24);
  const jump25 = await JumpRecords.findByPk(25);
  const jump26 = await JumpRecords.findByPk(26);
  const jump27 = await JumpRecords.findByPk(27);
  const jump28 = await JumpRecords.findByPk(28);
  const jump29 = await JumpRecords.findByPk(29);
  const jump30 = await JumpRecords.findByPk(30);
  const jump31 = await JumpRecords.findByPk(31);
  const jump32 = await JumpRecords.findByPk(32);
  const jump33 = await JumpRecords.findByPk(33);
  const jump34 = await JumpRecords.findByPk(34);
  const jump35 = await JumpRecords.findByPk(35);
  const jump36 = await JumpRecords.findByPk(36);
  const jump37 = await JumpRecords.findByPk(37);
  const jump38 = await JumpRecords.findByPk(38);
  const jump39 = await JumpRecords.findByPk(39);
  const jump40 = await JumpRecords.findByPk(40);

  await jump21.setUser(brian);
  await jump22.setUser(brian);
  await jump23.setUser(brian);
  await jump24.setUser(brian);
  await jump25.setUser(brian);
  await jump26.setUser(brian);
  await jump27.setUser(brian);
  await jump28.setUser(brian);
  await jump29.setUser(brian);
  await jump30.setUser(brian);
  await jump31.setUser(brian);
  await jump32.setUser(brian);
  await jump33.setUser(brian);
  await jump34.setUser(brian);
  await jump35.setUser(brian);
  await jump36.setUser(brian);
  await jump37.setUser(brian);
  await jump38.setUser(brian);
  await jump39.setUser(brian);
  await jump40.setUser(brian);

  await jump21.setLoad(21);
  await jump22.setLoad(22);
  await jump23.setLoad(23);
  await jump24.setLoad(24);
  await jump25.setLoad(25);
  await jump26.setLoad(26);
  await jump27.setLoad(27);
  await jump28.setLoad(28);
  await jump29.setLoad(29);
  await jump30.setLoad(30);
  await jump31.setLoad(31);
  await jump32.setLoad(32);
  await jump33.setLoad(33);
  await jump34.setLoad(34);
  await jump35.setLoad(35);
  await jump36.setLoad(36);
  await jump37.setLoad(37);
  await jump38.setLoad(38);
  await jump39.setLoad(39);
  await jump40.setLoad(40);

  await jump21.setDropzone(2);
  await jump22.setDropzone(2);
  await jump23.setDropzone(2);
  await jump24.setDropzone(2);
  await jump25.setDropzone(2);
  await jump26.setDropzone(2);
  await jump27.setDropzone(2);
  await jump28.setDropzone(2);
  await jump29.setDropzone(2);
  await jump30.setDropzone(2);
  await jump31.setDropzone(2);
  await jump32.setDropzone(2);
  await jump33.setDropzone(2);
  await jump34.setDropzone(2);
  await jump35.setDropzone(2);
  await jump36.setDropzone(2);
  await jump37.setDropzone(2);
  await jump38.setDropzone(2);
  await jump39.setDropzone(2);
  await jump40.setDropzone(2);

  //////////////// USER 4 JUMPS (CHRISTOPHER) ////////////////
  const jump41 = await JumpRecords.findByPk(41);
  const jump42 = await JumpRecords.findByPk(42);
  const jump43 = await JumpRecords.findByPk(43);
  const jump44 = await JumpRecords.findByPk(44);
  const jump45 = await JumpRecords.findByPk(45);
  const jump46 = await JumpRecords.findByPk(46);
  const jump47 = await JumpRecords.findByPk(47);
  const jump48 = await JumpRecords.findByPk(48);
  const jump49 = await JumpRecords.findByPk(49);
  const jump50 = await JumpRecords.findByPk(50);
  const jump51 = await JumpRecords.findByPk(51);
  const jump52 = await JumpRecords.findByPk(52);
  const jump53 = await JumpRecords.findByPk(53);
  const jump54 = await JumpRecords.findByPk(54);
  const jump55 = await JumpRecords.findByPk(55);
  const jump56 = await JumpRecords.findByPk(56);
  const jump57 = await JumpRecords.findByPk(57);
  const jump58 = await JumpRecords.findByPk(58);
  const jump59 = await JumpRecords.findByPk(59);
  const jump60 = await JumpRecords.findByPk(60);

  await jump41.setUser(christopher);
  await jump42.setUser(christopher);
  await jump43.setUser(christopher);
  await jump44.setUser(christopher);
  await jump45.setUser(christopher);
  await jump46.setUser(christopher);
  await jump47.setUser(christopher);
  await jump48.setUser(christopher);
  await jump49.setUser(christopher);
  await jump50.setUser(christopher);
  await jump51.setUser(christopher);
  await jump52.setUser(christopher);
  await jump53.setUser(christopher);
  await jump54.setUser(christopher);
  await jump55.setUser(christopher);
  await jump56.setUser(christopher);
  await jump57.setUser(christopher);
  await jump58.setUser(christopher);
  await jump59.setUser(christopher);
  await jump60.setUser(christopher);

  await jump41.setLoad(41);
  await jump42.setLoad(42);
  await jump43.setLoad(43);
  await jump44.setLoad(44);
  await jump45.setLoad(45);
  await jump46.setLoad(46);
  await jump47.setLoad(47);
  await jump48.setLoad(48);
  await jump49.setLoad(49);
  await jump50.setLoad(50);
  await jump51.setLoad(51);
  await jump52.setLoad(52);
  await jump53.setLoad(53);
  await jump54.setLoad(54);
  await jump55.setLoad(55);
  await jump56.setLoad(56);
  await jump57.setLoad(57);
  await jump58.setLoad(58);
  await jump59.setLoad(59);
  await jump60.setLoad(60);

  await jump41.setDropzone(3);
  await jump42.setDropzone(3);
  await jump43.setDropzone(3);
  await jump44.setDropzone(3);
  await jump45.setDropzone(3);
  await jump46.setDropzone(3);
  await jump47.setDropzone(3);
  await jump48.setDropzone(3);
  await jump49.setDropzone(3);
  await jump50.setDropzone(3);
  await jump51.setDropzone(3);
  await jump52.setDropzone(3);
  await jump53.setDropzone(3);
  await jump54.setDropzone(3);
  await jump55.setDropzone(3);
  await jump56.setDropzone(3);
  await jump57.setDropzone(3);
  await jump58.setDropzone(3);
  await jump59.setDropzone(3);
  await jump60.setDropzone(3);

  //////////////// USER 5 JUMPS (COLE) ////////////////
  const jump61 = await JumpRecords.findByPk(61);
  const jump62 = await JumpRecords.findByPk(62);
  const jump63 = await JumpRecords.findByPk(63);
  const jump64 = await JumpRecords.findByPk(64);
  const jump65 = await JumpRecords.findByPk(65);
  const jump66 = await JumpRecords.findByPk(66);
  const jump67 = await JumpRecords.findByPk(67);
  const jump68 = await JumpRecords.findByPk(68);
  const jump69 = await JumpRecords.findByPk(69);
  const jump70 = await JumpRecords.findByPk(70);
  const jump71 = await JumpRecords.findByPk(71);
  const jump72 = await JumpRecords.findByPk(72);
  const jump73 = await JumpRecords.findByPk(73);
  const jump74 = await JumpRecords.findByPk(74);
  const jump75 = await JumpRecords.findByPk(75);
  const jump76 = await JumpRecords.findByPk(76);
  const jump77 = await JumpRecords.findByPk(77);
  const jump78 = await JumpRecords.findByPk(78);
  const jump79 = await JumpRecords.findByPk(79);
  const jump80 = await JumpRecords.findByPk(80);

  await jump61.setUser(cole);
  await jump62.setUser(cole);
  await jump63.setUser(cole);
  await jump64.setUser(cole);
  await jump65.setUser(cole);
  await jump66.setUser(cole);
  await jump67.setUser(cole);
  await jump68.setUser(cole);
  await jump69.setUser(cole);
  await jump70.setUser(cole);
  await jump71.setUser(cole);
  await jump72.setUser(cole);
  await jump73.setUser(cole);
  await jump74.setUser(cole);
  await jump75.setUser(cole);
  await jump76.setUser(cole);
  await jump77.setUser(cole);
  await jump78.setUser(cole);
  await jump79.setUser(cole);
  await jump80.setUser(cole);

  await jump61.setLoad(61);
  await jump62.setLoad(62);
  await jump63.setLoad(63);
  await jump64.setLoad(64);
  await jump65.setLoad(65);
  await jump66.setLoad(66);
  await jump67.setLoad(67);
  await jump68.setLoad(68);
  await jump69.setLoad(69);
  await jump70.setLoad(70);
  await jump71.setLoad(71);
  await jump72.setLoad(72);
  await jump73.setLoad(73);
  await jump74.setLoad(74);
  await jump75.setLoad(75);
  await jump76.setLoad(76);
  await jump77.setLoad(77);
  await jump78.setLoad(78);
  await jump79.setLoad(79);
  await jump80.setLoad(80);

  await jump61.setDropzone(4);
  await jump62.setDropzone(4);
  await jump63.setDropzone(4);
  await jump64.setDropzone(4);
  await jump65.setDropzone(4);
  await jump66.setDropzone(4);
  await jump67.setDropzone(4);
  await jump68.setDropzone(4);
  await jump69.setDropzone(4);
  await jump70.setDropzone(4);
  await jump71.setDropzone(4);
  await jump72.setDropzone(4);
  await jump73.setDropzone(4);
  await jump74.setDropzone(4);
  await jump75.setDropzone(4);
  await jump76.setDropzone(4);
  await jump77.setDropzone(4);
  await jump78.setDropzone(4);
  await jump79.setDropzone(4);
  await jump80.setDropzone(4);

  //////////////// USER 6 JUMPS (SARAH) ////////////////
  const jump81 = await JumpRecords.findByPk(81);
  const jump82 = await JumpRecords.findByPk(82);
  const jump83 = await JumpRecords.findByPk(83);
  const jump84 = await JumpRecords.findByPk(84);
  const jump85 = await JumpRecords.findByPk(85);
  const jump86 = await JumpRecords.findByPk(86);
  const jump87 = await JumpRecords.findByPk(87);
  const jump88 = await JumpRecords.findByPk(88);
  const jump89 = await JumpRecords.findByPk(89);
  const jump90 = await JumpRecords.findByPk(90);
  const jump91 = await JumpRecords.findByPk(91);
  const jump92 = await JumpRecords.findByPk(92);
  const jump93 = await JumpRecords.findByPk(93);
  const jump94 = await JumpRecords.findByPk(94);
  const jump95 = await JumpRecords.findByPk(95);
  const jump96 = await JumpRecords.findByPk(96);
  const jump97 = await JumpRecords.findByPk(97);
  const jump98 = await JumpRecords.findByPk(98);
  const jump99 = await JumpRecords.findByPk(99);
  const jump100 = await JumpRecords.findByPk(100);

  await jump81.setUser(sarah);
  await jump82.setUser(sarah);
  await jump83.setUser(sarah);
  await jump84.setUser(sarah);
  await jump85.setUser(sarah);
  await jump86.setUser(sarah);
  await jump87.setUser(sarah);
  await jump88.setUser(sarah);
  await jump89.setUser(sarah);
  await jump90.setUser(sarah);
  await jump91.setUser(sarah);
  await jump92.setUser(sarah);
  await jump93.setUser(sarah);
  await jump94.setUser(sarah);
  await jump95.setUser(sarah);
  await jump96.setUser(sarah);
  await jump97.setUser(sarah);
  await jump98.setUser(sarah);
  await jump99.setUser(sarah);
  await jump100.setUser(sarah);

  await jump81.setLoad(81);
  await jump82.setLoad(82);
  await jump83.setLoad(83);
  await jump84.setLoad(84);
  await jump85.setLoad(85);
  await jump86.setLoad(86);
  await jump87.setLoad(87);
  await jump88.setLoad(88);
  await jump89.setLoad(89);
  await jump90.setLoad(90);
  await jump91.setLoad(91);
  await jump92.setLoad(92);
  await jump93.setLoad(93);
  await jump94.setLoad(94);
  await jump95.setLoad(95);
  await jump96.setLoad(96);
  await jump97.setLoad(97);
  await jump98.setLoad(98);
  await jump99.setLoad(99);
  await jump100.setLoad(100);

  await jump81.setDropzone(5);
  await jump82.setDropzone(5);
  await jump83.setDropzone(5);
  await jump84.setDropzone(5);
  await jump85.setDropzone(5);
  await jump86.setDropzone(5);
  await jump87.setDropzone(5);
  await jump88.setDropzone(5);
  await jump89.setDropzone(5);
  await jump90.setDropzone(5);
  await jump91.setDropzone(5);
  await jump92.setDropzone(5);
  await jump93.setDropzone(5);
  await jump94.setDropzone(5);
  await jump95.setDropzone(5);
  await jump96.setDropzone(5);
  await jump97.setDropzone(5);
  await jump98.setDropzone(5);
  await jump99.setDropzone(5);
  await jump100.setDropzone(5);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
