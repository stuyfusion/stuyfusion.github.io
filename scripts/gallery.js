function Gallery(parentId, galleryIdPrefix, curPos) {
  this.galleryIdPrefix_ = galleryIdPrefix;
  this.galleryEl_ = document.createElement('div');
  this.galleryEl_.setAttribute('id', this.galleryIdPrefix_ + '-container');
  this.parentId_ = parentId;
  this.parentEl_ = document.getElementById(this.parentId_);
  this.curPos_ = curPos;
  this.images_ = [];
}

Gallery.prototype.addImage = function(imageId, imageClass, src) {
  var imageEl_ = document.createElement('img');
  if (imageId != null)
    imageEl_.setAttribute('id', imageId);
  if (imageClass != null)
    imageEl_.setAttribute('class', imageClass);
  imageEl_.src = src;
  this.images_.push(imageEl_);
}

Gallery.prototype.createButtons = function() {
  var gallery = this;
  var prevBtn = document.createElement('input');
  var nextBtn = document.createElement('input');

  prevBtn.setAttribute('id', this.galleryIdPrefix_ + '-prev');
  nextBtn.setAttribute('id', this.galleryIdPrefix_ + '-next');
  prevBtn.type = 'button';
  nextBtn.type = 'button';
  prevBtn.value = '<';
  nextBtn.value = '>'
  prevBtn.onclick = function() {
    gallery.curPos_ = (gallery.curPos_ - 1) % gallery.images_.length;
    gallery.update();
  };
  nextBtn.onclick = function() {
    gallery.curPos_ = (gallery.curPos_ + 1) % gallery.images_.length;
    gallery.update();
  };

  this.galleryEl_.appendChild(prevBtn);
  this.galleryEl_.appendChild(nextBtn);
}

Gallery.prototype.generate = function() {
  this.createButtons();
  this.galleryEl_.appendChild(this.images_[this.curPos_]);
  this.parentEl_.appendChild(this.galleryEl_);
}

Gallery.prototype.update = function() {
  this.galleryEl_.removeChild(this.parentEl_.getElementsByTagName('img')[0]);
  this.galleryEl_.appendChild(this.images_[this.curPos_]);
}
