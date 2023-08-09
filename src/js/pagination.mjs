import variables from "./variable.mjs";

const pagination = () => {
  const paginationElement = document.querySelector('.pagination');
  
  if (!paginationElement) return;
  
  variables.pagination = paginationElement;
  variables.image = variables.slider.children.length;

  const indexImage = () => variables.slider.style.transform = 'translateX(' + (-100 * variables.index) + '%)';

  for (let i = 0; i < variables.image; i++) {
    const span = document.createElement('span');
    variables.pagination.append(span);

    span.addEventListener('click', (e) => {
      variables.index = i;
      indexImage();
      updatePagination();
    });
  }

  getIndexSpan();
}

const getIndexSpan = () => {
  const paginationSpans = variables.pagination.querySelectorAll('span');

  paginationSpans.forEach((span, i) => {
    if(i === variables.index) span.style.backgroundColor ='#6e6e6e';
  });
}

const updatePagination = () => {
  const paginationSpans = variables.pagination.querySelectorAll('span');
  
  paginationSpans.forEach((span, i) => {
    i === variables.index ? 
    span.style.backgroundColor = '#6e6e6e':
    span.style.backgroundColor = '#cecece';
  });
}

pagination();

export { updatePagination };