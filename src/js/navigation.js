import variables from "./variable.js";
import {updatePagination} from "./pagination.js";

variables.image = variables.slider.children.length;

const indexImage = () => variables.slider.style.transform = 'translateX(' + (-100 * variables.index) + '%)';

if(variables.btnPrev && variables.btNext) {
  variables.btNext.addEventListener('click', () => {
    variables.index = (variables.index + 1) % variables.image;
    indexImage();
  
    if(variables.pagination) updatePagination();
  });
  
  variables.btnPrev.addEventListener('click', () => {
    variables.index = (variables.index - 1 + variables.image) % variables.image;
    indexImage();

    if(variables.pagination) updatePagination();
  });
}