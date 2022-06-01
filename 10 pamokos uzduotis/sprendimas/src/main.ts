import WorkPerson from './entities/work-person.js';
import SelfEmployedPerson from './entities/self-employed-person.js';
import BuisnessLicencePerson from './entities/business-license-person.js';
import Employee from './entities/employee.js';
import Job from './entities/job.js';

const backendDeveloper = new WorkPerson({
  id: '38645370569',
  name: 'Stasys',
  surname: 'Povilaitis',
  hourPay: 33,
  fullTimeEquivalent: 1,
});
const frontendDeveloper = new WorkPerson({
  id: '38245371370',
  name: 'Vytautas',
  surname: 'Kernagis',
  hourPay: 22,
  fullTimeEquivalent: 0.5,
});

const selfEmployed1 = new SelfEmployedPerson({
  id: '3884534119',
  name: 'Vitalija',
  surname: 'Dambrauskaitė',
  hourPay: 29,
  hoursWorked: 11,
});
const selfEmployed2 = new SelfEmployedPerson({
  id: '2593145878',
  name: 'Edmundas',
  surname: 'Kučinskas',
  hourPay: 11,
});

const designer = new BuisnessLicencePerson({
  id: '39545370569',
  name: 'Nelė',
  surname: 'Paltinienė',
});

const jobs = [
  new Job('Facebook adds', 300),
  new Job('Google adds', 600),
  new Job('Twitter adds', 440),
];

jobs[0].completeJob();
jobs[2].completeJob();

const marketingSpecialist = new BuisnessLicencePerson({
  id: '38145370569',
  name: 'Suopis',
  surname: 'Rambynas',
  jobs,
});

const employees: Employee[] = [
  backendDeveloper,
  frontendDeveloper,
  selfEmployed1,
  selfEmployed2,
  designer,
  marketingSpecialist,
];

console.group('1. Atspausdinkite visus darbuotojus');
employees.forEach((emp) => console.log(emp.toString()));
console.groupEnd();

console.group('2. Atspausdinkite visų darbuotojų atlyginimus');
employees.forEach((emp) => {
  console.log(emp.getPersonInfo());
  console.log(emp.calcPay());
});
console.groupEnd();
