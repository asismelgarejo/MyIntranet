import {courses} from '../data/data.js';

const table = document.getElementById('partial-evaluations');

const tbody = table.querySelector('tbody');

function createCells(note){
  const mean = ((note['EC']+note['EP']+note['ED'])/3).toFixed(1);
  const EC = note['EC'];
  const EP = note['EP'];
  const ED = note['ED'];
  const cell = `
    <td>${EC?EC:'-'}</td>
    <td>${EP?EP:'-'}</td>
    <td>${ED?ED:'-'}</td>
    <td class="note">${mean?mean:'-'}</td>
  `
  return cell;
}

function getFinalAverage(course){
  const module1 = (course.modules[0]['EC']+course.modules[0]['EP']+course.modules[0]['ED'])/3;
  const module2 = (course.modules[1]['EC']+course.modules[1]['EP']+course.modules[1]['ED'])/3;
  const module3 = (course.modules[2]['EC']+course.modules[2]['EP']+course.modules[2]['ED'])/3;
  const module4 = (course.modules[3]['EC']+course.modules[3]['EP']+course.modules[3]['ED'])/3;
  const finalAverage = Math.round((module1+module2+module3+module4)/4).toFixed(1);
  return finalAverage;
}

function createRow(){
  courses.forEach((course, index)=>{

    const row = document.createElement('tr');
    const templateRow = `
      <td class="course-name">${course.name}<span>-</span><span class="section">${course.section}</span> </td>
      <!-- end -->
      ${createCells(course.modules[0])}
      <!-- end -->
      ${createCells(course.modules[1])}
      <!-- end -->
      ${createCells(course.modules[2])}
      <!-- end -->
      ${createCells(course.modules[3])}
      <!-- end -->
      <td class="final-note">${getFinalAverage(course)?getFinalAverage(course):'-'}</td>
      `
      row.innerHTML = templateRow;
      tbody.appendChild(row);
    })
}

createRow();
