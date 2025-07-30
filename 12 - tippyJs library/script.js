let myBtn = document.querySelector('.tippyjs');

tippy(myBtn, {
  content: `<strong>Hello!</strong> <br> This is the most beautiful tooltip in the world 💫`,
  allowHTML: true,
  arrow: true,
  maxWidth: 200,
  trigger: 'click',
  placement: 'bottom',


  
  onShow(instance) {
    console.log('Tooltip is shown', instance);
  },
  onHide(instance) {
    console.log('Tooltip is hidden', instance);
  }
});
