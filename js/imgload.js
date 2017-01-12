(function() {

  const doc = document;
  const imgTop = doc.getElementsByClassName('imgload-top')[0];

  const imgsBtm = []
                  .slice
                  .call(doc.getElementsByClassName('imgload-bottom'));

  if (imgTop) {
    let data = imgTop.getAttribute('data-imgload');
    imgTop.setAttribute('srcset', data);
  }
  
  function loadImgs(imgs) {
    imgs.forEach( el => {
      let data = el.getAttribute('data-imgload');
      el.setAttribute('srcset', data);
    });
  }

  function loadCounter(count) {
    if (count > 0) {
      setTimeout( _=> {
        if (imgTop.complete) {
          loadImgs(imgsBtm);
        } else {
          loadCounter(count - 1);
        } 
      }, 200);
    } else {        
      loadImgs(imgsBtm);
    }
  }

  if (imgsBtm[0]) {
    loadCounter(10);
  }

})();