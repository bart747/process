(function() {
const doc = document;
const hidden = []
               .slice
               .call(doc.getElementsByClassName('container-hidden'));

// console.log(hidden);

function action() {
  const hiddenLen = hidden.length;
  let i;

  function toggleVisibility(btn, content) {
    btn.addEventListener('click', _=> {
      content.classList.toggle('show');
      btn.classList.toggle('show');
    });
  }

  for (i=0; i<hiddenLen; i++) {
    let btn = hidden[i].getElementsByClassName('container-hidden-btn')[0];
    let content = hidden[i].getElementsByClassName('content-hidden')[0];
    toggleVisibility(btn, content);
  }
}
if (hidden[0]) {
  action();
}
})();