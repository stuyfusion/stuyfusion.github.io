function Gallery(divID, curPos) {
  this.divID_ = divID;
  this.curPos_ = curPos;
  this.images_ = [];
}

Gallery.prototype.addImage = function(imageID, imageClass, src) {
  var imageEl_ = document.createElement('img');
  if (imageID != null)
    imageEl_.setAttribute('id', imageID);
  if (imageClass != null)
    imageEl_.setAttribute('class', imageClass);
  imageEl_.src = src;
  this.images_.push(imageEl_);
}

Gallery.prototype.generate = function() {
  var parentEl = document.getElementById(this.divID_);
  var prevBtn = document.createElement('input');
  var nextBtn = document.createElement('input');

  prevBtn.setAttribute('id', this.divID_ + '-prev');
  nextBtn.setAttribute('id', this.divID_ + '-next');
  prevBtn.type = 'button';
  nextBtn.type = 'button';
  prevBtn.value = '<';
  nextBtn.value = '>'
  prevBtn.onclick = function() {

  };
  nextBtn.onclick = function() {

  };

  parentEl.appendChild(this.images_[this.curPos_]);

  parentEl.appendChild(prevBtn);
  parentEl.appendChild(nextBtn);
}
