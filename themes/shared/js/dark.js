/*jshint esversion: 6 */
const btn = document.querySelector('.btn-toggle');
const header1 = document.querySelector('.site-header');
const footer1 = document.querySelector('.site-footer');
const body1 = document.querySelector('body');
const list = [header1, footer1, body1];

// Add EventListener to toggle dark-mode
btn.addEventListener('click', e => list.forEach(elm => e.type == 'click' ?
elm.classList.toggle('dark-mode') : ''));
