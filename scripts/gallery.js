function Gallery(divID, curPos) {
  this.divID_ = divID;
  this.parentEl_ = document.getElementById(this.divID_);
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

Gallery.prototype.createButtons = function() {
  var gallery = this;
  var prevBtn = document.createElement('input');
  var nextBtn = document.createElement('input');

  prevBtn.setAttribute('id', this.divID_ + '-prev');
  nextBtn.setAttribute('id', this.divID_ + '-next');
  prevBtn.type = 'button';
  nextBtn.type = 'button';
  prevBtn.value = '<';
  nextBtn.value = '>'
  prevBtn.onclick = function() {
    gallery.curPos_ = (gallery.curPos_ - 1) % gallery.images_.length;
    console.log(gallery.curPos_);
    gallery.update();
  };
  nextBtn.onclick = function() {
    gallery.curPos_ = (gallery.curPos_ + 1) % gallery.images_.length;
    console.log(gallery.curPos_);
    gallery.update();
  };

  this.parentEl_.appendChild(prevBtn);
  this.parentEl_.appendChild(nextBtn);
}

Gallery.prototype.generate = function() {
  this.createButtons();
  this.parentEl_.appendChild(this.images_[this.curPos_]);
}

Gallery.prototype.update = function() {
  this.parentEl_.removeChild(this.parentEl_.getElementsByTagName('img')[0]);
  this.parentEl_.appendChild(this.images_[this.curPos_]);
}
